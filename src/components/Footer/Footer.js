import React from 'react'
import './footer.css'
import FooterLinks from './FooterLinks'
import FooterSocials from './FooterSocials'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <FooterSocials />
            <FooterLinks />
            <div className='serviceCode'>
                <p style={{color:'#4B4B4B', fontSize: '12px'}}>Service code</p>
            </div>
            <p style={{color:'#4B4B4B', fontSize: '12px'}}>© 1997-2022 Netflix, Inc.</p>
        </div>
    </div>
  )
}

export default Footer