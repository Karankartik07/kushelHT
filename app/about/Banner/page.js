"use client"
import { useRouter } from 'next/navigation';
import { FaArrowRightLong } from 'react-icons/fa6';
import '../../components/Home/HomeNewBanner.css';
import './Banner.css';

const Banner = () => {
    const router = useRouter();
    const scrollToForm = () => {
        const formSection = document.getElementById('contacthtmlForm');
        if (formSection) {
            const yOffset = -210;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    return (

        <>
            <section className='aboutBannerSeC'>
                <div className='aboutBannerMain'>
                    <div className='Kushaboutban'>
                        <h2 className='KushaboutH2'>
                            Who <span> We Are</span>
                        </h2>
                        <div className='Kushaboupara'>
                            <p>Whether you want to fortify your brand’s identity or amplify your digital footprint, Kushel Digi Solutions
                                is your go-to partner. Our deep domain expertise and technical prowess help us to deliver tailored digital
                                transformation solutions to our partners. We will pave the road to innovation for your brand with custom
                                eCommerce development and data-driven marketing strategies. With us, you can rest assured that you
                                will gain a superior competitive edge in this fast-paced world.</p>
                        </div>
                       
                        <div className='flex-new-banner-btns'>

                            <button onClick={scrollToForm} className='new-banner-btn colored'>Talk to a Consultant</button>
                            <button onClick={() => router.push('/contact-us')} className='new-banner-btn transparent'>Book a Call  <FaArrowRightLong /></button>
                        </div>
                        <div className='ourAboutpra'>
                            <p>Our recognition</p>

                            <div className='aboutImagKush'>
                                <img loading='lazy' width={100} height={100} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743148178/Certified-Bigcommerce-Partner__of0fqt.png" alt="certified" />
                                <img loading='lazy' width={100} height={100} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993082/designrush_jkyjny.webp" alt="best" />
                                <img loading='lazy' width={100} height={108} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1742993106/ecommerce-developers-india_zfydfo.png" alt="ecoomerce" />
                                <img loading='lazy' width={180} height={57} src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1743340304/Partner-Certified-Wordmark_j6b9ar.png" className='aboutimgkush' alt="bigcommerce" />
                            </div>
                        </div>
                    </div>
                    <div className='KushaboupaImage'>
                        <img loading='lazy' width={600} height={517} src="https://res.cloudinary.com/dal5dlztv/image/upload/v1748021711/file_1747984679-1747984681_-_Copy_raoppu.webp" alt="banner" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner