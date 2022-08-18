import React from 'react'
import {BallTriangle} from "react-loader-spinner"
const Loader = () => {
  return (
    <div
    className='flex justify-center text-center align-middle'>
    <BallTriangle color="#00BFFF" height={80} width={80} />
    </div>
  )
}

export default Loader