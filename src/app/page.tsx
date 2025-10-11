import React from 'react'
import PageTopBanner from './components/status-banner/PageTopBanner'
import { BannerServer } from './components/page/banner-related/Banner.server'

function page() {
  return (
    <div>
      <BannerServer />
      
    </div>
  )
}

export default page