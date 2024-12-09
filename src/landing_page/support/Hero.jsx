import "./hero.css";

function Hero() {
  return (
    <section id="supportHero">
      <div className="container p-5">
        <div id="supportPortal">
          <h4>Support Portal</h4>
          <p className="border-bottom mx-5" style={{ fontSize: "1.2rem" }}>
            Track tickets
          </p>
        </div>

        <div className="row mt-5">
          <div className="col-7">
            <h3>
              Search for an answer or browse help topics to create a ticket
            </h3>
            <input placeholder="Eg: How do i activate F&O, why is my order getting rejected..." />
            <div className="supportPortalCont">
              <p className="border-bottom">Track account opening</p>
              <p className="border-bottom">Track segment activation</p>
              <p className="border-bottom">Intraday margins</p>
              <p
                className="border-bottom "
                style={{
                  display: "block",
                  marginRight: "20px",
                  fontSize: "1.1rem",
                  width: "20%",
                }}
              >
                Kite user manual
              </p>
            </div>
          </div>

          <div className="col-5 mt-5 px-5">
            <h4>Featured</h4>
            <ol>
              <li>
                <a
                  href=""
                  style={{
                    textDecoration: "underline",
                    color: "white",
                    opacity: "1",
                  }}
                >
                  Current Takeovers and Delisting - November 2024
                </a>
              </li>
              <li>
                <a
                  href=""
                  style={{
                    textDecoration: "underline",
                    color: "white",
                    opacity: "1",
                  }}
                >
                  Rights Entitlements listing in November 2024
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
