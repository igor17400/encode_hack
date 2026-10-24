import { useEffect, useRef } from "react";
import AnatomyMap from "./AnatomyMap";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { CSS2DObject, CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { niceName } from "../api";

// A rotatable 3D patient model that assembles itself from the world-model state stream.
// Every attribute is a function of the State: structures appear when seen, a fatty sheath dissolves as
// dissection exposes them, clips pop on, a cut opens a gap, the bile duct pulses when at risk, bleeding drips.

const COL = { liver: 0x8f3440, gb: 0x93b25d, duct: 0xe3b23e, artery: 0xe05a50, plate: 0xcaa37b, cbd: 0x5cc8d8, fat: 0xe9d39c, clip: 0xd9e2ec, risk: 0xd03b3b };
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const CURVES = {
  duct: new THREE.CatmullRomCurve3([V(0.62, -0.62, 0.25), V(-0.1, -0.95, 0.45), V(-0.95, -1.22, 0.55), V(-1.7, -1.15, 0.5)]),
  artery: new THREE.CatmullRomCurve3([V(-1.3, 1.55, 0.05), V(-0.45, 0.85, 0.35), V(0.35, 0.35, 0.45), V(0.95, 0.15, 0.32)]),
  cbd: new THREE.CatmullRomCurve3([V(-1.55, 2.3, 0.2), V(-1.68, 0.6, 0.42), V(-1.78, -1.3, 0.5), V(-1.9, -3.3, 0.62)]),
};
// Proximal clips sit on the bile-duct side, one distal clip on the specimen side, the cut between them.
const CLIP_U = { duct: [0.78, 0.88, 0.3, 0.68], artery: [0.25, 0.35, 0.8, 0.15] };
const CUT_U = { duct: 0.55, artery: 0.58 };
const RANK = ["unseen", "visible", "dissecting", "skeletonised", "clipped", "cut"];
const OPACITY = { unseen: 0.1, visible: 0.55, dissecting: 0.75, skeletonised: 1, clipped: 1, cut: 1 };

function tube(curve, radius, color, opts = {}) {
  const mat = new THREE.MeshStandardMaterial({ color, roughness: 0.45, metalness: 0.05, transparent: true, opacity: 0.1, ...opts });
  return new THREE.Mesh(new THREE.TubeGeometry(curve, 96, radius, 20, false), mat);
}
function subCurve(curve, u0, u1) {
  const pts = [];
  for (let i = 0; i <= 24; i++) pts.push(curve.getPointAt(u0 + ((u1 - u0) * i) / 24));
  return new THREE.CatmullRomCurve3(pts);
}
function label(text) {
  const el = document.createElement("div");
  el.style.cssText = "font:500 11px 'IBM Plex Mono',monospace;color:#e9eef4;background:rgba(10,16,23,.78);padding:2px 6px;border-radius:5px;white-space:nowrap;pointer-events:none;border:1px solid #24344a";
  el.textContent = text;
  return new CSS2DObject(el);
}

function World3DScene({ state, playing = false, height = 380 }) {
  const host = useRef(null);
  const world = useRef(null);

  // Build the scene once.
  useEffect(() => {
    const el = host.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1017);
    scene.fog = new THREE.Fog(0x0a1017, 9, 18);
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0.9, 0.5, 10.5);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    el.appendChild(renderer.domElement);
    const labels = new CSS2DRenderer();
    labels.domElement.style.cssText = "position:absolute;inset:0;pointer-events:none";
    el.appendChild(labels.domElement);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(0, -0.1, 0.2);
    controls.minDistance = 6;
    controls.maxDistance = 15;
    // Keep the camera in front of the liver bed: orbit sideways and tilt, never underneath or behind.
    controls.minPolarAngle = 0.95;
    controls.maxPolarAngle = 1.95;
    controls.minAzimuthAngle = -1.1;
    controls.maxAzimuthAngle = 1.1;
    controls.enablePan = false;
    controls.autoRotateSpeed = 0.8;

    scene.add(new THREE.HemisphereLight(0xcfe3ff, 0x1a0d10, 0.9));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(3, 5, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x8f9cff, 18, 14);
    rim.position.set(-4, -1, -3);
    scene.add(rim);

    const liver = new THREE.Mesh(new THREE.SphereGeometry(2.6, 64, 40), new THREE.MeshStandardMaterial({ color: COL.liver, roughness: 0.55 }));
    liver.scale.set(1.15, 0.34, 0.7);
    liver.position.set(0.35, 2.55, -1.3);
    scene.add(liver);

    const gbGroup = new THREE.Group();
    const profile = [[0, -1.55], [0.33, -1.38], [0.52, -1.0], [0.66, -0.45], [0.76, 0.2], [0.72, 0.85], [0.5, 1.28], [0.18, 1.45], [0, 1.48]].map(([r, y]) => new THREE.Vector2(r, y));
    const gb = new THREE.Mesh(new THREE.LatheGeometry(profile, 48), new THREE.MeshStandardMaterial({ color: COL.gb, roughness: 0.35, transparent: true, opacity: 0.1 }));
    gb.rotation.z = -0.95;
    gb.position.set(1.65, 0.62, 0.05);
    gbGroup.add(gb);
    scene.add(gbGroup);

    const plate = new THREE.Mesh(new THREE.SphereGeometry(1.6, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2.4),
      new THREE.MeshStandardMaterial({ color: COL.plate, roughness: 0.8, transparent: true, opacity: 0.1, side: THREE.DoubleSide }));
    plate.scale.set(1.15, 0.28, 0.7);
    plate.rotation.x = Math.PI;
    plate.position.set(1.55, 1.55, -0.35);
    scene.add(plate);

    const cbd = tube(CURVES.cbd, 0.16, COL.cbd, { opacity: 0.35 });
    scene.add(cbd);
    const parts = {};
    for (const [name, r, c] of [["duct", 0.13, COL.duct], ["artery", 0.08, COL.artery]]) {
      const whole = tube(CURVES[name], r, c);
      const a = tube(subCurve(CURVES[name], 0, CUT_U[name] - 0.05), r, c);
      const b = tube(subCurve(CURVES[name], CUT_U[name] + 0.05, 1), r, c);
      a.visible = b.visible = false;
      const fat = tube(CURVES[name], r * 2.8, COL.fat, { opacity: 0.7, roughness: 0.9, depthWrite: false });
      const clips = CLIP_U[name].map((u) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(0.07, r * 5.2, 0.14), new THREE.MeshStandardMaterial({ color: COL.clip, metalness: 0.9, roughness: 0.2 }));
        const p = CURVES[name].getPointAt(u), t = CURVES[name].getTangentAt(u);
        m.position.copy(p);
        m.quaternion.setFromUnitVectors(V(0, 1, 0), new THREE.Vector3().crossVectors(t, V(0, 0, 1)).normalize());
        m.scale.setScalar(0.001);
        scene.add(m);
        return m;
      });
      scene.add(whole, a, b, fat);
      parts[name] = { whole, a, b, fat, clips };
    }
    // Fat and connective tissue filling the hepatocystic triangle: gone when the triangle is cleared.
    const triFat = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 20), new THREE.MeshStandardMaterial({ color: COL.fat, roughness: 0.95, transparent: true, opacity: 0.55, depthWrite: false }));
    triFat.scale.set(1.15, 0.85, 0.5);
    triFat.position.set(-0.55, -0.15, 0.45);
    scene.add(triFat);
    const adhesions = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints([
      V(-1.2, -0.6, 0.9), V(0.4, 0.2, 0.9), V(-1.0, 0.4, 0.95), V(0.3, -0.7, 0.9), V(-0.6, 0.7, 0.9), V(-0.2, -1.0, 0.95)]),
      new THREE.LineBasicMaterial({ color: 0xe9eef4, transparent: true, opacity: 0 }));
    scene.add(adhesions);
    const drops = [0, 1, 2].map((i) => {
      const d = new THREE.Mesh(new THREE.SphereGeometry(0.07, 12, 8), new THREE.MeshStandardMaterial({ color: COL.risk, emissive: COL.risk, emissiveIntensity: 0.6 }));
      d.userData.phase = i / 3;
      d.visible = false;
      scene.add(d);
      return d;
    });

    const tags = {
      gb: label("gallbladder"), duct: label("cystic duct"), artery: label("cystic artery"), plate: label("cystic plate"), cbd: label("common bile duct"),
      fat: label("fat & connective tissue"), liver: label("liver"),
    };
    tags.fat.position.set(-0.6, 0.35, 1.1); scene.add(tags.fat);
    tags.liver.position.set(-1.8, 2.75, -0.2); scene.add(tags.liver);
    tags.fat.element.style.color = "#e9d39c";
    tags.gb.position.set(2.5, 1.2, 0.3); scene.add(tags.gb);
    tags.duct.position.copy(CURVES.duct.getPointAt(0.45)).add(V(0, -0.45, 0)); scene.add(tags.duct);
    tags.artery.position.copy(CURVES.artery.getPointAt(0.45)).add(V(0, 0.4, 0)); scene.add(tags.artery);
    tags.plate.position.set(1.5, 1.9, 0.2); scene.add(tags.plate);
    tags.cbd.position.copy(CURVES.cbd.getPointAt(0.85)).add(V(-0.7, 0, 0)); scene.add(tags.cbd);

    const target = { opacity: {}, fat: {}, clipScale: {}, triFat: 0.55, adh: 0, plate: 0.1, detach: 0, risk: 0, injury: false, bleeding: false };
    world.current = { scene, camera, renderer, labels, controls, gb, gbGroup, plate, cbd, parts, triFat, adhesions, drops, tags, target, lastUser: 0 };
    controls.addEventListener("start", () => { world.current.lastUser = performance.now(); });

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      renderer.setSize(w, h);
      labels.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    const ro = new ResizeObserver(resize);
    ro.observe(el);
    resize();

    let raf;
    const lerp = (a, b, k = 0.08) => a + (b - a) * k;
    const tick = (now) => {
      const W = world.current, T = W.target;
      W.controls.autoRotate = W.playing && now - W.lastUser > 5000;
      W.gb.material.opacity = lerp(W.gb.material.opacity, T.opacity.gb ?? 0.1);
      W.plate.material.opacity = lerp(W.plate.material.opacity, T.plate);
      W.triFat.material.opacity = lerp(W.triFat.material.opacity, T.triFat);
      W.triFat.visible = W.triFat.material.opacity > 0.02;
      W.tags.fat.visible = W.triFat.material.opacity > 0.12;
      W.tags.fat.element.style.display = W.tags.fat.visible ? "" : "none";
      W.adhesions.material.opacity = lerp(W.adhesions.material.opacity, T.adh);
      W.gbGroup.position.x = lerp(W.gbGroup.position.x, T.detach * 0.5);
      W.gbGroup.position.y = lerp(W.gbGroup.position.y, -T.detach * 0.45);
      for (const name of ["duct", "artery"]) {
        const P = W.parts[name];
        for (const m of [P.whole, P.a, P.b]) {
          m.material.opacity = lerp(m.material.opacity, T.opacity[name] ?? 0.1);
          m.material.emissive?.setHex(name === "duct" ? COL.duct : COL.artery);
          m.material.emissiveIntensity = lerp(m.material.emissiveIntensity, T.glow?.[name] ?? 0);
        }
        P.fat.material.opacity = lerp(P.fat.material.opacity, T.fat[name] ?? 0.7);
        P.fat.visible = P.fat.material.opacity > 0.02;
        P.clips.forEach((c, i) => c.scale.setScalar(lerp(c.scale.x, (T.clipScale[name] ?? 0) > i ? 1 : 0.001, 0.15)));
      }
      const pulse = 0.5 + 0.5 * Math.sin(now / 220);
      W.cbd.material.color.setHex(T.risk || T.injury ? COL.risk : COL.cbd);
      W.cbd.material.emissive.setHex(T.risk || T.injury ? COL.risk : 0x000000);
      W.cbd.material.emissiveIntensity = T.injury ? 0.9 : T.risk ? 0.25 + 0.6 * pulse : 0;
      W.cbd.material.opacity = T.risk || T.injury ? 0.75 : 0.35;
      W.drops.forEach((d) => {
        d.visible = T.bleeding;
        const k = ((now / 1200 + d.userData.phase) % 1);
        d.position.copy(CURVES.artery.getPointAt(0.55)).add(V(0.15 * d.userData.phase, -k * 1.1, 0.25));
      });
      W.controls.update();
      W.renderer.render(W.scene, W.camera);
      W.labels.render(W.scene, W.camera);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      controls.dispose();
      renderer.dispose();
      el.innerHTML = "";
    };
  }, []);

  useEffect(() => {
    if (world.current) world.current.playing = playing;
  }, [playing]);

  // Map the world-model state onto the scene's targets.
  useEffect(() => {
    const W = world.current;
    if (!W || !state) return;
    const s = state.structures, T = W.target;
    const op = (x) => OPACITY[x.status] ?? 0.1;
    T.opacity = { gb: op(s.gallbladder) * 0.9, duct: op(s.cystic_duct), artery: op(s.cystic_artery) };
    T.glow = { duct: RANK.indexOf(s.cystic_duct.status) >= 3 ? 0.35 : 0, artery: RANK.indexOf(s.cystic_artery.status) >= 3 ? 0.35 : 0 };
    T.fat = {
      duct: s.cystic_duct.status === "unseen" ? 0.75 : 0.7 * (1 - Math.min(1, s.cystic_duct.exposure)),
      artery: s.cystic_artery.status === "unseen" ? 0.75 : 0.7 * (1 - Math.min(1, s.cystic_artery.exposure)),
    };
    T.triFat = state.cvs.c1_triangle_cleared ? 0 : 0.55 * (1 - (Math.min(1, s.cystic_duct.exposure) + Math.min(1, s.cystic_artery.exposure)) / 2.4);
    T.plate = 0.12 + 0.75 * Math.min(1, s.cystic_plate.exposure);
    T.adh = Math.min(1, state.adhesion_load || 0) * 0.8;
    T.detach = Math.min(1, state.gb_detach || 0);
    T.risk = !!s.common_bile_duct?.at_risk;
    T.injury = !!state.injury;
    T.bleeding = !!state.bleeding;
    T.clipScale = { duct: s.cystic_duct.clips, artery: s.cystic_artery.clips };
    for (const name of ["duct", "artery"]) {
      const cut = s[name === "duct" ? "cystic_duct" : "cystic_artery"].status === "cut";
      W.parts[name].whole.visible = !cut;
      W.parts[name].a.visible = W.parts[name].b.visible = cut;
    }
    const st = (x) => `${x.status}${x.clips ? ` · ${x.clips} clip${x.clips > 1 ? "s" : ""}` : ""}${x.status === "dissecting" ? ` ${Math.round(x.exposure * 100)}%` : ""}`;
    W.tags.gb.element.textContent = `gallbladder · ${state.gb_detach > 0 ? `detached ${Math.round(state.gb_detach * 100)}%` : s.gallbladder.status}`;
    W.tags.duct.element.textContent = `cystic duct · ${st(s.cystic_duct)}`;
    W.tags.artery.element.textContent = `cystic artery · ${st(s.cystic_artery)}`;
    W.tags.plate.element.textContent = `cystic plate · ${Math.round(s.cystic_plate.exposure * 100)}% exposed`;
    W.tags.cbd.element.textContent = state.injury ? "common bile duct · INJURED" : s.common_bile_duct?.at_risk ? "common bile duct · AT RISK" : "common bile duct · hidden";
    W.tags.cbd.element.style.color = state.injury || s.common_bile_duct?.at_risk ? "#ff8a80" : "#5cc8d8";
  }, [state]);

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-line" style={{ height }}>
      <div ref={host} className="absolute inset-0" />
      <div className="pointer-events-none absolute bottom-2 left-3 font-mono text-[10px] text-ink-3">
        drag to rotate · scroll to zoom · built live from the world-model state
      </div>
      {!state && (
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-sm text-ink-3">
          The patient model builds here as the video plays.
        </div>
      )}
    </div>
  );
}

let webgl = null;
function hasWebGL() {
  if (webgl === null) {
    try {
      const c = document.createElement("canvas");
      webgl = !!(c.getContext("webgl2") || c.getContext("webgl"));
    } catch {
      webgl = false;
    }
  }
  return webgl;
}

// No WebGL (old or locked-down browsers): show the 2D anatomy map instead of crashing the page.
export default function World3D(props) {
  if (hasWebGL()) return <World3DScene {...props} />;
  return (
    <div className="flex flex-col gap-1">
      <AnatomyMap state={props.state} />
      <span className="text-xs text-ink-3">3D view needs WebGL, which this browser does not provide; showing the anatomy map.</span>
    </div>
  );
}

export { niceName };
