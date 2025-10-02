import React from 'react'

const Navbar = () => {
    <style>{
        `@import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@300;400;500;600;700&display=swap');
    `}</style>
  return (
    <nav className='fixed top-0 w-full h-16 z-50 flex items-center '>
      <div className="text-2xl ml-10" style={{fontFamily: 'Urbanist, sans-serif'}}>SAI NIKHIL*</div>
      <a className='ml-auto mr-4' href="https://drive.google.com/file/d/154KEVhuS7_0p-7KKSG_3ohQf3GplGT4C/view?usp=drivesdk" target="_blank" rel="noopener noreferrer"><button className=' h-8 w-32 bg-black text-white font-semibold rounded-[50px]'>Resume</button></a>
    </nav>
  )
}

export default Navbar