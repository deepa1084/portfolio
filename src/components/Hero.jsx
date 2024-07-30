import React from 'react'
import Aboutme from '../assets/about.jpg'
import { AiOutlineTwitter,AiOutlineFacebook , AiOutlineLinkedin ,AiOutlineInstagram} from "react-icons/ai";

export default function Hero() {
  const config  = {
    subtitle: 'Im a Full-stack developer and Designer',
    social: {
        twitter: 'https://twitter.com',
        facebook: 'https://twitter.com',
        linkedin: 'https://twitter.com',
        instagram: 'https://instagram.com',
    }
}


  return <section className='flex flex-col md:flex-row px-5 py-32  justify-center'>
    <div className='md:w-1/2 flex-col'>
    <h1 className='text-6xl font-hero-font'>Hii, <br/>I'm <span className='text-violet-700'>D</span>ee<span className='text-blue-800'>p</span>a
    <p className='text-2xl'>{config.subtitle}</p>
    </h1>
    <div className='flex py-10'>
        <a href={config.social.twitter} className='pr-5 hover:text-violet-900'><AiOutlineTwitter size={40} /></a>
        <a href={config.social.twitter} className='pr-5 hover:text-violet-900'><AiOutlineFacebook size={40} /></a>
        <a href={config.social.twitter} className='pr-5 hover:text-violet-900'><AiOutlineLinkedin size={40}  /></a>
        <a href={config.social.twitter} className='hover:text-violet-900'><AiOutlineInstagram size={40}  /></a>
    </div>
    </div>
    <img  className='md:w-1/1' src={Aboutme} alt='about'></img>
  </section>
    
  
}
