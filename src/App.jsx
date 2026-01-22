import { useState } from "react";

import Hero from "./components/Hero";
import IncomeGoal from "./components/IncomeGoal";
import SimulationResults from "./components/SimulationResults";

export default function App() {
  const [step, setStep] = useState("hero");

  return (
    <>
      {step === "hero" && <Hero onSimulate={() => setStep("income")} />}
      {step === "income" && (
        <IncomeGoal
          onBack={() => setStep("hero")}
          onNext={() => setStep("results")}
        />
      )}
      {step === "results" && (
        <SimulationResults onBack={() => setStep("income")} />
      )}
    </>
  );
}
