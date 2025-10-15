import { BannerServer } from "./components/page/banner-related/Banner.server"
import BeIGNITED from "./components/page/sections/BeIGNITED"
import BeTheSpark from "./components/page/sections/BeTheSpark"
import JoinOurNetwork from "./components/page/sections/JoinOurNetwork"
import TestimonialCarousel from "./components/page/sections/TestimonialCarousel"
import WhoWeAre from "./components/page/sections/WhoWeAre"
import WhyDoWeNeed from "./components/page/sections/WhyDoWeNeed"
import DiscoverBanner from "./components/status-banner/DiscoverBanner"

function page() {

  return (
    <div
      className='bg-[#F5F7FA] flex items-center justify-center flex-col gap-0 md:gap-[120px]'>
      <BannerServer />
      <BeTheSpark />
      <WhoWeAre />
      <WhyDoWeNeed />
      <div className="flex flex-col gap-12">
        <BeIGNITED />
        <JoinOurNetwork />
      </div>
      <TestimonialCarousel />
      <DiscoverBanner
        className="my-12 md:my-28"
        title="Fuel the Future of Youth Athletes"
        description="Your donation helps break barriers — giving every child the chance to access elite coaching, join competitive clubs, and chase their sports dreams."
        listbutton={true}
        buttonText="Donate Now"
        route="/donate"
      />
    </div>
  )
}

export default page