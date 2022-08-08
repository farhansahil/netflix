import React from "react";

const Card = (props) => {

    const {name,image} = props;
  return (
    <>
        <div className="col s6 m4">
          <div className="card">
            <div className="card-image">
              <img src={image} />
              <span className="card-title">{name}</span>
              <a className="btn-floating halfway-fab waves-effect waves-light red">
                <i className="material-icons">add</i>
              </a>
            </div>
            <div className="card-content">
              <p>
                I am a very simple card. I am good at containing small bits of
                information. I am convenient because I require little markup to
                use effectively.
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default Card;
