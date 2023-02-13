import React from 'react'
import '../../App.css'

export default function Danielle() {
    return (
      <div className='danielle'>
        <img className='danielle_profile' alt="Danielle's profile" src="./images/KW-Danielle-photo.png" />
        <div className='danielle_about_container'>
          <section className='danielle_introduction'>
            <h1 className='danielle_about_title'>Danielle Hinson Moore</h1>
            <h2 className='danielle_about_subtitle'>REALTOR® - GA & AL, SRES®, MRP</h2>
          </section>
          <section className='danielle_about_body'>
            <h2 className='danielle_about_body_title'>About REALTOR® Danielle</h2>
            <p className='danielle_about_body_text'>Being born and raised in the Columbus area, 
            I understand what makes our community and the people who call it home so special. 
            The Chattahoochee Valley is a wonderful place where I feel privileged to be a native 
            daughter and look forward to showing you the difference it can make to be truly connected 
            within our community. </p>
          </section>
        </div>
      </div>
    )
}