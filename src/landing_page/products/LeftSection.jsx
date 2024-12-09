function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-5">
          <img src={imageURL} alt="" style={{width:"100%", marginLeft:"10px"}}/>
        </div>

        <div className="col-1"></div>

        <div className="col-5 p-5 mt-5">
          <h2>{productName}</h2 >
          <p style={{ fontSize: "1.1rem", opacity: "0.8", lineHeight: "2rem" }}>
            {productDescription}
          </p>
          <div>
            <a
              href={tryDemo}
              style={{
                color: "blue",
                marginRight: "80px",
                textDecoration: "none",
              }}
            >
              Try demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a
              href={learnMore}
              style={{ color: "blue", textDecoration: "none" }}
            >
              Learn more <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="mt-3">
            <img
              src="media\images\googlePlayBadge.svg"
              alt={googlePlay}
              style={{ marginRight: "40px", width: "45%" }}
            />
            <img
              src="media\images\appstoreBadge.svg"
              alt={appStore}
              style={{ width: "40%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
