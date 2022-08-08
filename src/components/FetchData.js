import React, { useEffect, useState } from 'react'
import Card from './Card'

const FetchData = (props) => {

    const [seriesName, setSeriesName] = useState([]);
    const [count, setCount] = useState(1);

    const fetchApi = async () => {
        const response = await fetch('http://api.tvmaze.com/shows');
        if (!response.ok) {
            throw new Error('Data coud not be fetched!')
          } else {
            return response.json()
          }
    }

    useEffect(() => {
        fetchApi()
        
          .then((res) => {
            setCount(1);
            setSeriesName(res)
            
          })
          .catch((e) => {
            console.log(e.message)
          })
      }, [])

      let sliceName = []
      const clicked = () => {
        alert("Hello")
      }

  return (
    <>

    <div className="container">
        <div className="row">
        { 
          sliceName.map((currElement) => {
        return <Card name={currElement.name} image={currElement.image.medium}/>

    })}
        </div>
        <a onClick={clicked} class="waves-effect waves-light btn" style={{marginBottom: "30px", float: "right"}}>Next</a>
    </div>
    
    </>
  )
}

export default FetchData