import react from 'react'
import Navbar from '../Components/Navbar'
import Speakers from '../Components/Speakers'
import '../Assets/css/homepage.css'
import Partenaires from '../Components/partenaires/Partenaires'
import Footer from '../Components/Footer'
export default function Home() {
    return(

     <div className='homepage'>
       <Navbar/>
       <Partenaires />
       <Footer />

    
  
       </div>
    )
}