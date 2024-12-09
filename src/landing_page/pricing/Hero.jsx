function Hero() {
  return (
    <div className="container">
      <div className="text-center p-5 mt-5">
        <h1 className="">Charges</h1>
        <p className="fs-5 text-muted">List of all charges and taxes</p>
      </div>

      <div className="row p-5 text-center">
        <div className="col-4 p-3">
          <img
            src="media\images\pricingEquity.svg"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <h2 className="mb-4">Free equity delivery</h2>
          <p
            className="text-muted"
            style={{ fontSize: "1rem", lineHeight: "30px" }}
          >
            All equity delivery investments (NSE, BSE),
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media\images\intradayTrades.svg"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p
            className="text-muted"
            style={{ fontSize: "1rem", lineHeight: "30px" }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>

        <div className="col-4 p-3">
          <img
            src="media\images\pricing0.svg"
            style={{ width: "80%", marginBottom: "20px" }}
          />
          <h2 className="mb-4 px-5">Free direct MF</h2>
          <p
            className="text-muted px-5"
            style={{ fontSize: "1rem", lineHeight: "30px" }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
