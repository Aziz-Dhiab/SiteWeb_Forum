import React from 'react'
import "../Assets/css/footer.css"
import logoFooter from "../Assets/images/logoFooter.png"
import {Link} from "react-router-dom";

import Fb from '../Assets/images/footer/Facebook.png'
import Insta from '../Assets/images/footer/Instagram.png'
import LinkedIn from '../Assets/images/footer/Linkedin.png'
import Youtube from '../Assets/images/footer/Youtube.png'
import phone from '../Assets/images/footer/phone.png'
import mail from '../Assets/images/footer/mail.png'
import location from '../Assets/images/footer/location.png'


export default function Footer() {
    return (
       
        <div className="footer-container">
            <div className="footer-logo-container">
                <img src={logoFooter} alt=""/>
            </div>
            <div className="footer-col">
                <h3>EXPLORE</h3>
                <Link to='/' className='link'> <p>Accueil</p> </Link>
                <Link to='/about' className='link'><p>Programme</p></Link>
                <Link to='/technologies' className='link'> <p>Articles</p> </Link>
                <Link to='/register' className='link'> <p>Inscription</p> </Link>
            </div>
            <div className="footer-col">
              
                <h3>Nous contacter</h3>
                <div className="logo-info">
                <img src={phone} alt="phone" className="contact-logo" />
                <p className="text-footer">+216 53 530 891 </p>
                </div>
                <div className="logo-info">
                <img src={mail} alt="mail" className="contact-logo" />
                <p className="text-footer">junior@gmail.com</p>
                </div>
                <h3>Vistez nous</h3>
                <div className="logo-info" >
                <img src={location} alt='location' className="contact-logo" />
                <p>Campus Universitaire de La Manouba, 2010, Tunis, Tunisie
                </p>
            </div>
            </div>
            <div className="footer-col">
                <h3>Nos réseaux</h3>
                <div className="social-media">
                <a href='https://www.instagram.com/ensijunior/' target='_blank' className='link'> <img src={Insta} alt='Instagram'  className='socialmedia-logo'/> </a>
                <a href='https://www.facebook.com/ENSI.Junior.Entreprise' target='_blank' className='link'> <img src={Fb} alt='facebook' className='socialmedia-logo'/> </a>
                <a href='https://www.linkedin.com/company/ensi-junior-entreprise/?originalSubdomain=tn' target='_blank' className='link'> <img src={LinkedIn} alt='Linkedin' className='socialmedia-logo'/> </a>
                <a href='https://www.youtube.com/user/ENSIJuniorEntreprise' target='_blank' className='link'> <img src={Youtube} alt='Youtube' className='socialmedia-logo'/> </a>
                </div>
            </div>
            <div className="footer-col">

            </div>
            <div className="footer-col">

            </div>
        </div>
        
    )
}
