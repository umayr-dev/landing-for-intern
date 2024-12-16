import React from 'react'
import Banner from '../companents/Banner'
import BannerBottom from '../companents/BannerBottom'
import FastBanner from '../companents/FastBanner'
import PriceBanner from '../companents/PriceBanner'

function Home() {
  return (
    <>
    <div className="container">
    <Banner/>
    <BannerBottom/>
    <FastBanner/>
    <PriceBanner/>
    </div>
    </>
  )
}

export default Home