import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUsers,
  faClipboardCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import GoldStat from "./GoldStat";
import Activity from "./Activity";

export default function SimulationResults({ onBack }) {
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
          className="relative w-[964px] h-[501px] rounded-[30px] px-12 py-10 text-white"
          style={{
            background: "linear-gradient(135deg, #003266 0%, #005EB8 100%)",
            boxShadow: "0px 10px 18px rgba(0,0,0,0.25)",
          }}
        >

          {/* HEADER */}
          <h2
            className="absolute top-6 left-10 tracking-[0.15em] mb-10"
            style={{ fontFamily: "Axiforma", fontSize: "18px" }}
          >
            YOUR SIMULATION RESULTS
          </h2>

          {/* PERIOD SELECTOR */}
          <div className="flex justify-center mt-8">
            <div className="flex gap-10 text-sm tracking-widest">
              {["Annual", "Semi-Annual", "Quarterly"].map((item) => (
                <button
                  key={item}
                  type="button"
                  className="group relative text-white transition-colors duration-200 hover:text-[#F4B43C]"
                >
                  {item}

                  {/* HOVER LINE */}
                  <span
                    className="
                      absolute left-1/2 -bottom-2
                      w-0 h-[2px]
                      bg-[#F4B43C]
                      transition-all duration-300
                      group-hover:w-full
                      group-hover:left-0
                    "
                  />
                </button>
              ))}
            </div>
          </div>

          {/* TOP METRICS */}
          <div className="flex justify-center gap-8 mt-7">
            <GoldStat title="DESIRED INCOME" value="₱13,000" />
            <GoldStat title="AVERAGE FYC" value="₱8,000" sub="Per closed client" />
            <GoldStat title="REQUIRED CASES" value="2" />
          </div>

          {/* ACTIVITY BREAKDOWN */}
          <h3 className="text-center tracking-widest mt-6 text-sm text-white">
            ACTIVITY BREAKDOWN
          </h3>

          <div className="flex justify-center gap-16 mt-7">
            <Activity
              icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              label="PROSPECTS"
              value="12"
            />
            <Activity
              icon={<FontAwesomeIcon icon={faClipboardCheck} />}
              label="SET APPOINTMENTS"
              value="8"
            />
            <Activity
              icon={<FontAwesomeIcon icon={faUsers} />}
              label="FACE-TO-FACE MEETINGS"
              value="2"
            />
            <Activity
              icon={<FontAwesomeIcon icon={faHeart} />}
              label="TARGET SAVES LIVES"
              value="15"
            />
          </div>

          {/* BUTTONS */}
          <button
            onClick={onBack}
            className="
              absolute bottom-6 left-6
              px-5 h-[38px]
              rounded-full
              flex-items-center justify-center
              font-semibold tracking-widest text-sm
              text-[#003266]
              bg-gradient-to-b from-[#F4B43C] to-[#8E6923]
              shadow-[0_3px_6px_rgba(0,0,0,0.35)]
              hover:text-[#003266]
              hover:from-[#7E8791]
              hover:to-[#FFFFFF]
              transition-all duration-300
            "
          >
            ADJUST GOAL
          </button>

          <button
            className="
              absolute bottom-6 right-6
              px-5 h-[38px]
              rounded-full
              font-semibold tracking-widest text-sm
              text-[#003266]
              bg-gradient-to-b from-[#F4B43C] to-[#8E6923]
              shadow-[0_3px_6px_rgba(0,0,0,0.35)]
              hover:text-[#003266]
              hover:from-[#7E8791]
              hover:to-[#FFFFFF]
              transition-all duration-300
            "
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </main>
  );
}
