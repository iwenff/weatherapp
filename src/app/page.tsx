import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <h1 className="text-3xl font-bold mb-6">Выберите город</h1>
      <nav className="flex gap-6">
        <Link href="/msc">Москва</Link>
        <Link href="/spb">Санкт-Петербург</Link>
      </nav>
    </div>
    </>
  )
}

export default page