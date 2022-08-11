import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";

const FetchData = () => {
  const [data, setData] = useState([]);
  const [filter, setfilter] = useState(data);
  const [loading, setloading] = useState(false);
  let componentMount = true;

  useEffect(() => {
    const getSeries = async () => {
      setloading(true);
      //fetching data 
      
      const response = await fetch("http://api.tvmaze.com/shows");
      if (componentMount) {
        setData(await response.clone().json());
        setfilter(await response.json());
        setloading(false);
      }

      return () => {
        componentMount(false);
      };
    };
    getSeries();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterSeries = (cat) => {
    const updatedList = data.filter((x) => x.genres.includes(cat));
    setfilter(updatedList);
  };

  const ShowSeries = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => setfilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSeries("Comedy")}
          >
            Comedy
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSeries("Science-Fiction")}
          >
            Science-Fiction
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSeries("Crime")}
          >
            Crime
          </button>
          <button
            className="btn btn-outline-dark me-2"
            onClick={() => filterSeries("Romance")}
          >
            Romance
          </button>
        </div>

        {filter.map((sereis) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div
                  class="card h-100 text-center p-4"
                  key={sereis.id}
                  style={{ width: "18rem" }}
                >
                  <img
                    class="card-img-top"
                    height="250px"
                    src={sereis.image.original}
                    alt={sereis.title}
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">{sereis.name}</h5>
                    {/* <p class="card-text fw-bolder fs-5 my-3">
                      ${sereis.price}
                    </p> */}
                    <Link
                      to={`/webseries/${sereis.id}`}
                      class="btn btn-outline-dark my-3"
                    >
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">
              Latest Webseries
            </h1>
            <hr />
          </div>
        </div>

        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowSeries />}
        </div>
      </div>
    </>
  );
};

export default FetchData;
