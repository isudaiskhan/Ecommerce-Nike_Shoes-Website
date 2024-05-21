import React from 'react'
import AvailableProducts from "../../AvailableProducts/AvailableProducts";
import BrandsLogo from "../../BrandsLogo/BrandsLogo";
import Category from "../../Category/Category";
import ComingProducts from "../../ComingProducts/ComingProducts";
import CountDown from "../../ExclusiveDeals/Countdown";
import Features from "../../Features/Features";
import Footer from "../../Footer/Footer";
import Hero from "../../Hero/Hero";
import ScrollButton from "../../ScrollButton/ScrollButton";
import WeeklyDeals from "../../WeeklyDeals/WeeklyDeals";
import Layout from '../../Layout/Layout';


const Home = () => {
  return (
    <>

      <Layout>
      <Hero />
      <Features />
      <Category />
      <ComingProducts />
      <AvailableProducts />
      <CountDown />
      <BrandsLogo />
      <WeeklyDeals />
      <Footer />
      <ScrollButton />
      </Layout>
      
    </>
  )
}

export default Home
