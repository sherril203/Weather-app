import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import cloud from "../../images/cloud.png"
import clear from "../../images/clear.png"
import mist from "../../images/mist.png"
import haze from "../../images/haze.png"
import Error from "../../images/error.png"
import rain from "../../images/rain.png"
const Weather = () => {
  const [search,setSearch]=useState("")
  const [data,setData]=useState()
  const [error,setError]=useState()
  const[allweather,setAllWeather]=useState([])
  const API="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"
  const API_key="194f6b37d630e3f3747f6669342909d8"

  const handleChange=(e)=>{
        setSearch(e.target.value)
  }
  const Search=async()=>{
    const getdata=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    const jsondata=await getdata.json()
    setData(jsondata)
    if(search==""){
      alert("enter location")
    }
    else if(jsondata.cod=='404')
    {
      setError("please Enter valid name")
    }
    else{
      setError("")
    }
    setSearch("")
  }
  const locations=["Chennai","Madurai","Salem","Delhi","Mumbai","Indore"]
  const getall=async()=>{
    const weather=await Promise.all(
      locations.map(async(location)=>{
 const getalldata=await fetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_key}&units=metric`)
  return getalldata.json()
    }) 
  )
   setAllWeather(weather);
}
const getWeatherImage=(weather)=>{
 if (weather === "Clouds") return cloud; 
 if (weather === "Rain") return rain; 
 if (weather === "Clear") return clear; 
 if (weather === "Mist") return mist; 
 if (weather === "Haze") return haze;
 return Error
}

 useEffect(()=>
    {
      getall()
    },[])
 
  return (
    <div className='container'>
        <Navbar/>
         <Sidebar/>
      <div className='flex gap-3 p-7 justify-center'>
        <input type="text" placeholder='search locations'  className='p-3 rounded-3xl border-2'
        onChange={handleChange} value={search}/>
        <button className='text-white bg-blue-500 p-3 rounded-3xl' onClick={Search}>Search</button>
      </div>
      <div>
        {
          error?
          <div>
            <p>{error}</p>
            <img src={Error} alt="" />
          </div>:""
        }
      {
        data && data.weather?
        <div className='flex justify-center'>
          <div className='bg-white p-5 shadow rounded-2xl  w-40 text-black'>
          <h2 className='font-bold'>{data.name}</h2>
          <img src={getWeatherImage(data.weather[0].main)} alt="" className='w-20 mx-auto' />
          
          <h2 className='font-bold'>{Math.trunc(data.main.temp)}°C</h2>
          <h2>{data.weather[0].description}</h2>
        </div> 
        </div>
        :""
      }
      </div>
       
      <div>
        <h2 className='flex justify-center text-2xl font-bold'>Weather and its locations</h2>
          <div className='flex justify-center gap-5 p-5 flex-wrap' >
        {
          allweather.map((weather)=>(
           <div div className="bg-white p-5 shadow rounded-2xl w-40 text-black text-center" 
           key={weather.id}>
            <h2 className='font-bold'>{weather.name}</h2>
          <img src={getWeatherImage(weather.weather[0].main)} alt="" />
        
          <h2 className='font-bold'>{Math.trunc(weather.main.temp)}°C</h2>
          <h2>{weather.weather[0].description}</h2>
           </div>
          ))
        }
        </div>
        </div>
      </div>  
  )}
export default Weather
