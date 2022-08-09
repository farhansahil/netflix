import React from "react";
import "./css/style.css";
const Card = (props) => {
  const { id, name, image, link, summary, rating } = props;
  return (
    <>
      <div className="card" style={{ width: "18rem", margin: "10px" }}>
        <span className="badge rounded-pill bg-danger">{rating}</span>
        <img src={image} className="card-img-top" alt="..." />

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{summary.slice(0, 200)}</p>
          <a href={link} key={id} target="_blank" rel="noreferrer" className="btn btn-primary">
            Go Website
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
