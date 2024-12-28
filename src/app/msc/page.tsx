'use client'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const msc = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchingData = async () => {
            try{
                const response = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=55.7558&longitude=37.6173&current_weather=true')
                setData(response.data.current_weather)
            }catch(error){
                console.error('error type',error)
            }
        }
        fetchingData()
    },[])

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
    <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">
        Домой
      </Link>
  <div className="flex items-center justify-center h-screen ">
    {data ? (
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-96">
        <h1 className="text-2xl font-bold mb-4">Погода в Москве</h1>
        <div className="mb-4">
          <h2 className="text-lg font-medium">Температура:</h2>
          <p className="text-xl font-semibold text-blue-600">
            {Math.round(data.temperature)}°C
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-medium">Скорость ветра:</h2>
          <p className="text-xl font-semibold text-blue-600">
            {Math.round(data.windspeed)} м/с
          </p>
        </div>
        <div>
          <h2 className="text-lg font-medium">Влажность:</h2>
          <p className="text-xl font-semibold text-blue-600">
            {data.humidity ? Math.round(data.humidity) : 'Нет данных'}%
          </p>
        </div>
      </div>
    ) : (
      <p className="text-xl font-medium text-gray-700">Загрузка...</p>
    )}
  </div>
  </div>
  )
}

export default msc