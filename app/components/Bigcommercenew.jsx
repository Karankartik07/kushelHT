"use client"
import Image from 'next/image'
import BlogSection from "../COMMON/BlogSection/BlogSection.jsx"
import Footer from '../COMMON/Footer'
import Navbar from '../COMMON/Navbar'
import BannerMain from '../service/bigcommerce-development/BannerMain/page'
import BigAskQuestion from '../service/bigcommerce-development/BigAskQuestion/page'
import BigBanner3 from '../service/bigcommerce-development/BigBanner3/page'
import BigBanner4 from '../service/bigcommerce-development/BigBanner4/page'
import BigBanner6 from "../service/bigcommerce-development/BigBanner6/page"
import BigBanner7 from '../service/bigcommerce-development/BigBanner7/page'
import BigBanner8 from '../service/bigcommerce-development/BigBanner8/page'
import BigBanner9 from '../service/bigcommerce-development/BigBanner9/page'
import BigCommercePortfolio from '../service/bigcommerce-development/BigCommercePortfolio/BigCommercePortfolio'
import FeatureSection from '../service/bigcommerce-development/FeaturesSection/FeatureSection'
import Process from '../service/bigcommerce-development/Process/page'
import ServicesSection from '../service/bigcommerce-development/ServiceSection/ServiceSection'
import HomeForm from '../components/Home/HomeForm'
import { BigCommerceFeatures, BigCommerceFeaturesContent, BigCommerceServices, BigCommerceServicesHeading, weExpertInBigCommerce, whyBigCommereByKDS, whyBigCommereByKDSHeading } from "../data/data"
import Banner9 from '../service/ecommerce-development/Banner8/page'

const BigCommerceComponent = ({ notify }) => {
  const phoneNumber = "9045301702";

  const whatAppHandler = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const callHandler = () => {
    const callUrl = `tel:${phoneNumber}`;
    window.open(callUrl, "_blank");
  };

  return (
    <main role="main">
      <Navbar />
      <BannerMain />
      <BigBanner8 weExpert={weExpertInBigCommerce} />
      <BigBanner7 />
      <BigBanner3 />
      <BigCommercePortfolio page={'BigCommerce'} />
      <Banner9 page='Delivering powerful, high performance BigCommerce solutions for our clients.' />
      <Process page='BigCommerce' />
      <BigBanner6 services={whyBigCommereByKDS} contents={whyBigCommereByKDSHeading} />
      <BigBanner4
        page='Our BigCommerce Experts are Ready to Launch your Dream Store today!'
        img='https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743157130/bigcommerce-logo-icon_um7a4x.png'
      />
      <BigBanner9 />
      <ServicesSection services={BigCommerceServices} contents={BigCommerceServicesHeading} />
      <FeatureSection services={BigCommerceFeatures} contents={BigCommerceFeaturesContent} />
      <BlogSection page="bigcommerce" />
      <BigAskQuestion />
      <HomeForm />
      <Footer />

      <div className="whtsApBtns" role="region" aria-label="Contact buttons">
        <button
          onClick={whatAppHandler}
          aria-label="Chat with us on WhatsApp"
          title="Contact BigCommerce experts on WhatsApp"
          type="button"
        >
          <Image
            className="what-image-universal"
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1738990311/whatsapp_eohddq.png"
            alt="WhatsApp contact icon for BigCommerce development inquiries"
            title="Contact BigCommerce developers on WhatsApp"
            width={50}
            height={50}
            loading="lazy"
          />
        </button>
        <button
          onClick={callHandler}
          aria-label="Call us now"
          title="Call our BigCommerce experts"
          type="button"
        >
          <Image
            src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1740480725/telephone_h8clxy.png"
            alt="Phone call icon for BigCommerce development consultation"
            title="Call BigCommerce development experts"
            width={50}
            height={50}
            loading="lazy"
          />
        </button>
      </div>
    </main>
  )
}

export default BigCommerceComponent