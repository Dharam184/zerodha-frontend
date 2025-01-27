function Brokerage() {
  return (
    <div className="container mt-5 border-top">
      <div className="row">
        <div className="col-8 p-5">
          <a href="" style={{color:"#387ED1", opacity:"1"}}><h4 className="text-center">Brokerage calculator</h4></a>
          <ul className="text-muted mt-4" style={{fontSize:"0.95rem", lineHeight:"37px"}}>
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 py-5">
        <a href="" style={{color:"#387ED1", opacity:"1"}}><h4 className="text-center">List of charges</h4></a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
