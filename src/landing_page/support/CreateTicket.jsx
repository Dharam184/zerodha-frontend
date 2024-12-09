function CreateTicket() {
    return ( 
        <div className="container p-5">
            <div>
                <h4 className="text-muted">To create a ticket, select a relevant topic</h4>
            </div>

            <div className="row">
            <div className="col-4">
                <h5 className="mt-5"><i class="fa-solid fa-circle-plus"></i> Account Opening</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Getting started</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Online</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Offline</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Charges</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Company, Partnership and HUF</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Non Resident Indian (NRI)</a><br />
                    </div>
                </div>

                <div className="col-4">
                    <h5 className="mt-5"><i class="fa-regular fa-user"></i> Your Zerodha Account</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Login credentials</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Your profile</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Account modification and segment addition</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>CMR & DP ID</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Nomination</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Transfer and conversion of shares</a><br />
                    </div>
                </div>

                <div className="col-4">
                <h5 className="mt-5"><i class="fas fa-chart-line"></i> Trading and Markets</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Trading FAQs</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Kite</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Margins</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Product and order types</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Corporate actions</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Kite features</a><br />
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-4">
                    <h5 className="mt-5"><i class="fas fa-wallet"></i> Funds</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Fund withdrawal</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Adding funds</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Adding bank accounts</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>eMandates</a><br />
                    </div>
                </div>
                <div className="col-4">
                <h5 className="mt-5"><i class="fas fa-desktop"></i> Console</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>IPO</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Portfolio</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Funds statement</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Profile</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Reports</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Referral program</a><br />
                    </div>
                </div>
                <div className="col-4">
                <h5 className="mt-5"><i class="fas fa-coins"></i> Coin</h5>
                    <div className="px-4 mt-3">
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Understanding mutual funds and Coin</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Coin app</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Coin web</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>Transactions and reports</a><br />
                        <a href="" style={{color:"#387ED1", opacity:"1"}}>National Pension Scheme (NPS)</a><br />
                    </div>
                </div>
            </div>
        </div>
     );
}

export default CreateTicket;