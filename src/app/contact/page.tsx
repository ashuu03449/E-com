import AnotherHeroSection from '@/components/AnotherHeroSection'
import ContactSection from '@/components/ContactSection'
import FeatureSection from '@/components/Frameonesix'
import React from 'react'

export default function page() {
  return (
  <>
  <AnotherHeroSection mainhead={"Contact"} homename={"Home"} currentPage={"Contact"} />
  <GetInTouch />
  <div className="min-h-screen  flex items-center justify-center py-12">
      <ContactSection />
    </div>
  <FeatureSection />
  </>

  )
}

function GetInTouch() {
  return(
    <>
    <div className='w-full flex flex-col gap-3 py-16 px-5 items-center justify-center'>
      <h1 className='text-2xl font-bold text-black'>Get in Touch With Us
      </h1> 
<p className='text-center text-gray-500'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email.
  <br />  Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
    </div>
    </>
  )
}