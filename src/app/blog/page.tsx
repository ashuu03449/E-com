import AnotherHeroSection from '@/components/AnotherHeroSection'
import BlogPage from '@/components/BlogPage'
import FeatureSection from '@/components/Frameonesix'
import React from 'react'

export default function Blog() {
  return (

    <>
    <AnotherHeroSection mainhead={"Blog"} homename={"Home"} currentPage={"Blog"} />
    <BlogPage />
    <FeatureSection />
    </>
  )
}
