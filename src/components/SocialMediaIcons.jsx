import React from 'react'

import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";


export const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-10'>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.linkedin.com/in/harsh-sachdeva-676b24211/"
            target="_blank"
            rel='noreferrer'
        >
            <img src={linkedin} alt="linkedin-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://twitter.com/Harsh_15may"
            target="_blank"
            rel='noreferrer'
        >
            <img src={twitter} alt="twitter-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.facebook.com/harshsachdeva15/"
            target="_blank"
            rel='noreferrer'
        >
            <img src={facebook} alt="facebook-link" />
        </a>
        <a className="hover:opacity-50 transition duration-500"
            href="https://www.instagram.com/harshsachdeva9711/?next=%2F"
            target="_blank"
            rel='noreferrer'
        >
            <img src={instagram} alt="instagram-link" />
        </a>
    </div>
  )
}
