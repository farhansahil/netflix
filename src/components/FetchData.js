import React, { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import "./css/style.css";
import Spinner from "./Spinner";
const FetchData = () => {
  const [series, setSeries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(false);

//function to fetch the data form the api
  const fetchApi = async () => {
    const response = await fetch(`http://api.tvmaze.com/shows`);

    if (!response.ok) {
      throw new Error("Data coud not be fetched!");
    } else {
      return response.json();
    }
  };

  //Change page 
  const paginate = (pageNumber) => {
    window.scrollTo(0, 0);
    setIsLoading(true);
    setCurrentPage(pageNumber);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchApi()
      .then((res) => {
        setSeries(res);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);


//logic to change the content of the page
  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContent = series.slice(indexOfFirstContent, indexOfLastContent);

  return (
    <>
      <div className="container" style={{ marginTop: "20px" }}>
        {isLoading == true && <Spinner />}
        <div className="row">
          {!isLoading &&
            currentContent.map((currElement) => {
              return (
                <Card
                  id={currElement.id}
                  name={currElement.name}
                  image={currElement.image.medium}
                  link={currElement.officialSite}
                  summary={currElement.summary}
                  rating={currElement.rating.average}
                />
              );
            })}
          <Pagination
            contentPerPage={contentPerPage}
            totalContents={series.length}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
};

export default FetchData;
