import React from "react";
import FetchData from "./FetchData";

const Home = () => {
  return (
    <>
      <div className="hero">
        <div class="card bg-dark text-white border-0">
          <img
            class="card-img"
            src="/assest/bg2.jpeg"
            alt="Card image"
            height="650px"
          />
          <div className="container"></div>
        </div>
        <FetchData />
      </div>
    </>
  );
};

export default Home;
