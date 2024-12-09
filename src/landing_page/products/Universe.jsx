
function Universe() {
    return ( 
        <div className="container" style={{marginTop:"120px"}}>
            <div className="text-center mb-5">
                <h1>The Zerodha Universe</h1>
                <h5 className="text-muted mt-4">Extend your trading and investment experience even further with our partner platforms</h5>
            </div>

            <div className="row p-5 text-center">
                <div className="col-4 p-3">
                    <img src="media\images\smallcaseLogo.png" style={{width:"60%"}}/>
                    <p className="text-muted p-3">Thematic investing platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media\images\streakLogo.png" style={{width:"50%"}}/>
                    <p className="text-muted p-3">Systematic trading platform</p>
                </div>
                <div className="col-4 p-3">
                    <img src="media\images\sensibullLogo.svg" style={{width:"60%"}}/>
                    <p className="text-muted p-4">Options trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\zerodhaFundhouse.png" style={{width:"60%"}}/>
                    <p className="text-muted p-3">Asset management</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\goldenpiLogo.png" style={{width:"50%"}}/>
                    <p className="text-muted p-3">Bonds trading platform</p>
                </div>
                <div className="col-4 p-3 mt-5">
                    <img src="media\images\dittoLogo.png" style={{width:"30%"}}/>
                    <p className="text-muted p-4">Insurance</p>
                </div>

                <button className="btn btn-primary p-2 mt-5 fs-4" style={{width:"20%", margin:"auto"}}>Sign up for free</button>
            </div>
        </div>
     );
}

export default Universe;