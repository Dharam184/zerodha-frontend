function Hero() {
  return (
    <div className="container p-5">
      <h2 className="fs-2 text-center" style={{padding: "50px 0px 100px 0" }}>
        We pioneered the discount broking model in India. <br />
        Now, we are breaking ground with our technology.
      </h2>

      <div className="border-top mb-5"></div>

      <div className="row p-5" style={{lineHeight:"35px", fontSize:"1.2rem", opacity:"0.9"}}>
        <div className="col mx-5">
          <p className="py-3">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="py-1">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="py-1">
            Over 1+ Crore clients place millions of orders every day through our
            powerful ecosystem of investment platforms, contributing over 15% of
            all Indian retail trading volumes.
          </p>
        </div>  

        <div className="col">
          <p className="py-3">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="py-1">
            <a href="" style={{textDecoration:"none", color:"blue",}}>Rainmatter</a>, our fintech fund and incubator, has invested in several
            fintech startups with the goal of growing the Indian capital
            markets.
          </p>
          <p className="py-1">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
