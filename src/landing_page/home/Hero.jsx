
function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero Image" className="mb-3"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-2 btn btn-primary mt-4 fs-5" style={{width: "20%", margin: "auto"}}>Signup now</button>
            </div>
        </div>
     );
}

export default Hero;