import React from "react";

const CardUi = (props) => {
  return (
    <div className="Card text-center shadow">
      <div className="overflow">
        <img src={props.img} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          possimus perspiciatis quae vel saepe doloremque, earum dicta quam,
          nemo officiis tempora. Aliquam itaque nostrum cumque quam culpa
          commodi ratione deserunt.
        </p>
        <a href="/#" className="btn btn-secondary">
          Detail
        </a>
      </div>
    </div>
  );
};

export default CardUi;
