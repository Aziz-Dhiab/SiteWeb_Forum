import react from 'react'
import Navbar from '../Components/Navbar'
import Speakers from '../Components/Speakers'
import '../Assets/css/homepage.css'
export default function Home() {
    return(
       <div className='homepage'>
       <Speakers/>
       </div>
    )
}