function RighSection({
  imageURL,
  productTitle,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 p-5" style={{ marginTop: "90px" }}>
          <h2>{productTitle}</h2>
          <p style={{ fontSize: "1.1rem", opacity: "0.8", lineHeight: "2rem" }}>
            {productDescription}
          </p>
          <a href={learnMore} style={{ color: "blue", textDecoration: "none" }}>
            Learn more <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div className="col-6 px-5 mx-5">
          <img src={imageURL} alt="" style={{ width: "110%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RighSection;
