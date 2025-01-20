
"use client"
import Image from "next/image"

const Footer = () => {
  return (
    <div>
      <footer className='bg-gray-100 text-sm py-10 text-center items-center justify-center '>
<div className='container'>
    <div className='inline-flex relative before:content-[""] before:h-full before:w-full before:bg-[linear-gradient(to-right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1)]'>
        <Image src='/logo.png' alt='saas logo' height={40} width={40}/>
    </div>

<nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
    <a href='#'>About</a>
    <a href='#'>Features</a>
    <a href='#'>Customers</a>
    <a href='#'>Pricing</a>
    <a href='#'>Help</a>
    <a href='#'>Careers</a>
</nav>
<div className='flex justify-center gap-6 mt-6 '>
<Image src='/social-insta.svg' alt='' height={30} width={30}/>
<Image src='/social-x.svg' alt='' height={30} width={30}/>
<Image src='/social-linkedin.svg' alt='' height={30} width={30}/>
<Image src='/facebook.png' alt='' height={30} width={30}/>
<Image src='/youtube.png' alt='' height={30} width={30}/>
</div>
<p className='mt-6'>&copy: 2024 Head$Toe , inc. All rights researved</p>
</div>
    </footer>
    </div>
  )
}

export default Footer