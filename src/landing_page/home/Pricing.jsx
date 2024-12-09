
function Pricing() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-6 p-5">
                    <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price <br /> 
                        transparency in India. Flat fees and no hidden charges.
                    </p>
                    <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                {/* <div className="col-1"></div> */}
                <div className="col-6 p-5">
                    <div className="row text-center">
                        <div className="col-6 border p-4">
                            <h2>₹0</h2>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col-6 border p-4">
                            <h2>₹20</h2>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;