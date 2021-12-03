import React from 'react'

const Currentdate = () => {
  return (
    <div>
      <h1 className="text-center">{new Date().toLocaleString()}</h1>
    </div>
  )
}

export default Currentdate
