import React, { useState, useEffect } from 'react'

const App = () => {

const[city,setCity] = useState(null);
const[search,setSearch] = useState("kalyan");

useEffect(() => {
 
 const useapi = async ()=>{
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b267eeed2b1f591ff0d6e7f00926bc0d`
  
    const res = await fetch(api);  
    const data = await res.json();
    setCity(data.main)
  }

  useapi();
}, [search])

  return (
    <>
    <div className="box">
    <div className="inputdata">
      <input type="search"
      value={search}
      className="inputfield"
      onChange={(event) => { setSearch(event.target.value)}}
      />
    </div>
    {!city ?(
      <p className="error-msg">Data not found</p>
    ):(
    <div>
     <div className="info">
      <h2 className="location">
      <i className="fas fa-street-view" ></i>
      {search}
      </h2>
      <h1 className="temp">
        {city.temp}&deg;C
      </h1>
      <h3 className="tempmin_max">
      Min :{city.temp_min}&deg;C | Max :{city.temp_max}&deg;C
      </h3>
      <h3 className="tempmin_max">Humidity : {city.humidity}</h3>
     </div>

     <div className="wave -one"></div>
     <div className="wave -two"></div>
     <div className="wave -three"></div>
     </div>
     )}
    </div>
    </>
  )
}

export default App