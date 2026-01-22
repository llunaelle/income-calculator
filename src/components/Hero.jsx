export default function Hero({ onSimulate }) {
  return (
    <main
      className="h-screen w-screen flex items-center"
      style={{
        background:
          "linear-gradient(90deg, rgba(126,135,145,0.35) 0%, #FAFAFA 15%, #FAFAFA 79%, rgba(126,135,145,0.35) 94%)",
      }}
    >
      <div className="max-w-[1440px] w-full mx-auto px-[120px] grid grid-cols-2 items-center relative -top-[20px]">

        {/* LEFT CONTENT */}
        <div className="flex flex-col">

          <h1
            style={{
              fontFamily: "Axiforma",
              fontWeight: 800,
              fontSize: "50px",
              color: "#003266",
              width: "550px",
              lineHeight: "1.15",
              marginBottom: "12px",
              maxWidth: "580px",
            }}
          >
            INCOME SIMULATOR <br />
            TRACKER
          </h1>

          <p
            style={{
              fontFamily: "Axiforma",
              fontWeight: 400,
              fontSize: "16px",
              color: "#000000",
              maxWidth: "540px",
              marginBottom: "40px",
            }}
          >
            An income simulation tracker by Calum Financial Advisors that
            estimates income outcomes by converting desired income into required
            advisor activities.
          </p>

          <p
            style={{
              fontFamily: "Axiforma",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "15px",
              color: "#000000",
              width: "540px",
            }}
          >
            See what it takes to reach your desired income as an advisor.
          </p>

          <button
            onClick={onSimulate}
            style={{
              marginTop: "20px",
              width: "160px",
              height: "45px",
              fontFamily: "Axiforma",
              fontSize: "18px",
              letterSpacing: "0.15em",
              borderRadius: "13px",
            }}
            className="
              flex items-center justify-center
              bg-[#003266] text-white
              hover:bg-[#FFFFFF] hover:text-[#003266]
              border border-[#003266]
              transition-colors duration-300
            "
          >
            SIMULATE
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <div
            style={{
              width: "530px",
              height: "524px",
              borderRadius: "30px",
              overflow: "hidden",
              boxShadow: "0px 10px 25px rgba(0,0,0,0.25)",
            }}
          >
            <img
              src="/images/1.jpg"
              alt="Income Simulator"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
