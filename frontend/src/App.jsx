import { useEffect, useState } from "react";
import { get, API } from "./api";
import { SimNote } from "./components/ui";
import Story from "./tabs/Story";
import Watch from "./tabs/Watch";
import Imagine from "./tabs/Imagine";
import Robot from "./tabs/Robot";
import Evidence from "./tabs/Evidence";

const TABS = [
  ["story", "How it works"],
  ["watch", "Watch"],
  ["imagine", "Imagine"],
  ["robot", "Train the robot"],
  ["evidence", "Evidence"],
];

export default function App() {
  const [tab, setTab] = useState(() => {
    try {
      return localStorage.getItem("tab") || "story";
    } catch {
      return "story";
    }
  });
  const [patients, setPatients] = useState([]);
  const [health, setHealth] = useState(null);
  const [branchStart, setBranchStart] = useState(null);

  useEffect(() => {
    get("/health").then(setHealth).catch(() => setHealth({ ok: false }));
    get("/patients").then(setPatients).catch(() => {});
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem("tab", tab);
    } catch {
      /* storage unavailable */
    }
  }, [tab]);

  return (
    <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col gap-5 px-4 py-5 sm:px-6">
      <header className="flex flex-wrap items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Second Look</h1>
          <p className="text-ink-2">Eyes that see the patient now, a world model that imagines what happens next.</p>
        </div>
        <nav className="grid w-full grid-cols-3 gap-1 rounded-xl border border-line bg-surface-1 p-1 sm:ml-auto sm:flex sm:w-auto">
          {TABS.map(([k, label]) => (
            <button
              key={k}
              onClick={() => setTab(k)}
              className={`whitespace-nowrap rounded-lg px-4 py-2 font-medium transition ${tab === k ? "bg-accent text-surface-0" : "text-ink-2 hover:bg-surface-2"}`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        <SimNote />
        {health && !health.ok && <span className="text-status-serious">Backend not reachable at {API}</span>}
        {health?.demo_mode === "precomputed" && <span className="text-ink-3">offline demo mode (recorded runs)</span>}
      </div>

      <main className="flex-1">
        {tab === "story" && <Story onOpen={setTab} />}
        {tab === "watch" && (
          <Watch
            patients={patients}
            onBranch={(s) => {
              setBranchStart(s);
              setTab("imagine");
            }}
          />
        )}
        {tab === "imagine" && <Imagine patients={patients} start={branchStart} setStart={setBranchStart} />}
        {tab === "robot" && <Robot patients={patients} />}
        {tab === "evidence" && <Evidence />}
      </main>

      <footer className="text-center text-xs text-ink-3">
        Research simulation on public data: CholecT50 and Endoscapes2023 (CAMMA, CC BY-NC-SA 4.0); Endoscapes CVS runs by Igor Lima. Synthetic patients. Not a medical device; not clinical advice.
      </footer>
    </div>
  );
}
