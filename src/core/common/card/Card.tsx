import React from "react";

const CardComponent = () => {
  return (
    <div className="card mb-3" style={{ width: "18rem" }}>
      {/* {imageURL && <img src={imageURL} className="card-img-top" alt={title} />} */}
      <div className="card-body">
        <h5 className="card-title">"title"</h5>
        {/* <p className="card-text">{text}</p>
        <a href={buttonLink} className="btn btn-primary">
          {buttonLabel}
        </a> */}
      </div>
    </div>
  );
};

export default CardComponent;