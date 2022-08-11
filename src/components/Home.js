import React from 'react'
import FetchData from './FetchData'

const Home = () => {
  return (
    <>
    <div className='hero'>
      <div class="card bg-dark text-white border-0">
  <img class="card-img" src="/assest/bg.jpg" alt="Card image" height="650px" />
  <div className="container">
  <div class="card-img-overlay d-flex flex-column justify-content-center">
    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
    <p class="card-text lead fs-2">CHECK OUT THE NEW TRENDS</p>
  </div>
  </div>
</div>
    <FetchData />

    </div>
    </>
  )
}

export default Home
