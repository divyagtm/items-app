import React from 'react'
import '../App.css'
import Loader from '../assets/spinner.gif'

const Spinner = () => {
  return (
    <div className='spinner'>
        <img src={Loader} alt='loading' className='spinner-img'/>
    </div>
  )
}

export default Spinner