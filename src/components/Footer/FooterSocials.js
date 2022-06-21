import React from 'react'
import './footerSocials.css'
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const FooterSocials = () => {
  return (
    <div className='footerSocials'>
        <FaFacebookF size={'30px'}/>
        <FaInstagram size={'30px'}/>
        <FaTwitter size={'30px'}/>
        <FaYoutube size={'30px'}/>
    </div>
  )
}

export default FooterSocials