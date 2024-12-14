"use client"

import axios from "axios";



export default function Home() {
  const url = `
  https://api.open-meteo.com/v1/forecast?
  latitude=55.751244&
  logitude=37.618423&
  current=temperature_2m,is_day,wind_speed_10m
  `;
  
  fetch(url).then((data) => {
    if(data.status == 200){
      return data
    }
  })


  return (
  <div>
    <h1>{data}</h1>
  </div>
  );
}
