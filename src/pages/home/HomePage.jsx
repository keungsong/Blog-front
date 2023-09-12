import React from 'react'
import MainLayout from '../../components/MainLayout'
import Hero from './container/Hero'
import Articles from './container/Articles'
import CTA from '../../components/CTA'


const HomePage = () => {
  return (
    <MainLayout>
         <Hero/>
         <Articles/> 
         <CTA/>
    </MainLayout>
  )
}

export default HomePage