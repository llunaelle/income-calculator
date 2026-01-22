import { useState } from "react";

export default function IncomeGoal({ onBack, onNext }) {
  const [income, setIncome] = useState("");

  return (
    <main
      className="h-screen w-screen flex items-center justify-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(126,135,145,0.35) 0%, #FAFAFA 15%, #FAFAFA 79%, rgba(126,135,145,0.35) 94%)",
      }}
    >
      {/* PANEL + GOLD BORDER */}
      <div className="relative w-[1040px] h-[580px] flex items-center justify-center">

        {/* GOLD BORDER */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1000 540"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="goldStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F4B43C" />
              <stop offset="100%" stopColor="#8E6923" />
            </linearGradient>
          </defs>

          <path
            d="
              M40 0
              H965
              L1000 40
              V500
              L960 540
              H40
              L0 500
              V40
              Z
            "
            fill="none"
            stroke="url(#goldStroke)"
            strokeWidth="7"
            strokeLinejoin="miter"
            strokeLinecap="butt"
            strokeMiterlimit="10"
          />
        </svg>

        {/* BLUE PANEL */}
        <div
          className="relative w-[964px] h-[501px] rounded-[30px]"
          style={{
            background: "linear-gradient(135deg, #003266 0%, #005EB8 100%)",
            boxShadow: "0px 10px 18px rgba(0,0,0,0.25)",
          }}
        >
          {/* CONTENT */}
          <div className="h-full flex flex-col items-center justify-center text-white">
            <h2
              style={{
                fontFamily: "Axiforma",
                fontSize: "18px",
                letterSpacing: "0.15em",
                marginBottom: "20px",
              }}
            >
              What is your income goal?
            </h2>

            <input
              type="text"
              placeholder="Please indicate your desired income"
              className="income-input outline-none text-center"
              inputMode="numeric"
              value={income}
              onChange={(e) => {
                const rawValue = e.target.value
                  .replace(/,/g, "")
                  .replace(/\D/g, "");

                const formattedValue = rawValue
                  ? Number(rawValue).toLocaleString("en-US")
                  : "";

                setIncome(formattedValue);
              }}
              style={{
                width: "411px",
                height: "40px",
                borderRadius: "40px",
                background: "#FAFAFA",
                fontFamily: "Axiforma",
                fontSize: "16px",
                color: "#000000",
                boxShadow: "inset 0px 3px 6px rgba(0,0,0,0.25)",
              }}
            />
          </div>

          {/* BACK BUTTON */}
          <button
            onClick={onBack}
            className="
              absolute bottom-6 left-6
              w-[138px] h-[38px]
              rounded-full
              flex items-center justify-center
              font-axiforma font-semibold tracking-widest text-sm
              leading-none
              text-[#003699]
              bg-gradient-to-b from-[#F4B43C] to-[#8E6923]
              shadow-[0_3px_6px_rgba(0,0,0,0.35)]
              hover:text-[#003266]
              hover:from-[#7E8791]
              hover:to-[#FFFFFF]
              transition-all duration-300
            "
          >
            BACK
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={onNext}
            className="
              absolute bottom-6 right-6
              w-[138px] h-[38px]
              rounded-full
              flex-items-center justify-center
              font-axiforma font-semibold tracking-widest text-sm
              text-[#003266]
              bg-gradient-to-b from-[#F4B43C] to-[#8E6923]
              shadow-[0_3px_6px_rgba(0,0,0,0.35)]
              hover:text-[#003266]
              hover:from-[#7E8791]
              hover:to-[#FFFFFF]
              transition-all duration-300
            "
          >
            NEXT
          </button>
        </div>
      </div>
    </main>
  );
}
