import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";


const Series = () => {

    const {id} = useParams();
    const [series, setseries] = useState([]);
    const [loading, setloading] = useState(true)

  

    useEffect(() => {
      
        const getSeries = async () => {
            setloading(true);
            const response = await fetch(`http://api.tvmaze.com/shows/${id}`);
            setseries(await response.json())
            setloading(false)
        }
    
      getSeries();
    }, [])

    const Loading = () => {
        return(
            <>
                <div className="col-md-6">
                    <Skeleton height={500} width={500}/>
                </div>

                <div className="col-md-6" style={{lineHeight: 2}}>
                    <Skeleton height={50} width={300}/>
                    <Skeleton height={75}/>
                    <Skeleton height={25} width={150}/>
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100}/>

                </div>
            </>
        )
    }

    const ShowSeries = () => {
        return(
            <>
                <div className="col-md-6">
                    <img src={series.image.original } height={500} width={500} alt={series.name} />
                </div>

                <div className="col-md-6">
                    {/* <h4 className='text-uppercase tetx-black-50'>{series.genres}</h4> */}
                    <h1 className='display-6'>{series.name}</h1>
                    <p className='lead fw-bolder'>
                        Rating { series.rating.average }
                         <i className='fa fa-star ms-2'></i>
                    </p>
                    <h3 className='display-6 fw-bold my-4'>
                        Language: {series.language}
                    </h3>
                    <p className="lead">
                        {series.summary}
                    </p>
                    <a href={series.officialSite} target="_blank" rel='noopener' className="btn btn-outline-dark" >
                        Visit Website
                    </a>
                    
                </div>
            </>
        )
    }
    
  return (
    <>
    <div className="container py-5">

        <div className="row py-5">
            {loading ? <Loading /> : <ShowSeries />}
        </div>
    </div>
    </>
  )
}

export default Series
