import React from 'react'

const Footer = () => {
  return (
    <div className='relative z-30 w-full h-[2vh] bg-[#f1f1f1] text-white py-6 px-8'>
      <p style={{ fontSize: '12px', color: '#888' }}>
        Disclaimer: This website is a non-commercial, personal portfolio project inspired by the visual design of 
        <a href="https://cyberfiction.io" target="_blank" rel="noopener noreferrer"> Cyberfiction</a> by Jeongyoeb Han.
         Images, and fonts are the property of their respective owners. No copyright infringement is intended.
      </p>
    </div>
  )
}

export default Footer