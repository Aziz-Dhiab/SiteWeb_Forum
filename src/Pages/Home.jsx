import React from 'react'
import Navbar from '../Components/Navbar'
import '../Assets/css/homepage.css'
import Header from "../Components/HomeHeader"
export default function Home() {
    return(
       <div className='homepage'>
       <Navbar/>
       <Header/>
       </div>
    )
}