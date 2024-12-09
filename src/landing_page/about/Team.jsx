function Team() {
  return (
    <div className="container">
      <h2
        className="fs-2 text-center"
        style={{ padding: "10px 0px 20px 0", fontWeight: "500" }}
      >
        People
      </h2>

      <div
        className="row p-5"
        style={{ lineHeight: "27px", fontSize: "1.1rem", opacity: "0.9" }}
      >
        <div className="col mx-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "50%", width: "65%" }}
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <p className="text-muted">Founder, CEO</p>
        </div>

        <div className="col mt-3" style={{ marginRight: "50px" }}>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </p>
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ textDecoration: "none", color: "blue" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none", color: "blue" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ textDecoration: "none", color: "blue" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
