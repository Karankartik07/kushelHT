'use client';
import { useRouter } from 'next/navigation';
import './ecomserv.css';


const features = [
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_d9v6rx.png",
    title: "Custom E-Commerce Store",
    description:
      "Pre-made templates are not our style, as we prefer to create new ones based on our clients' needs. Your organization and business goals, audience and objectives will determine how flexible and unique your ecommerce site will be. We do not constrain ourselves to industry standards and are able to provide tailored solutions for every client."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_6_mcojgf.png",
    title: "A Powerful Mix of WordPress and WooCommerce",
    description:
      "Our team is capable of building efficient systems with proper functioning and plugin handling due to the versatility of WordPress and WooCommerce. It is also possible to construct powerful integrated systems."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_2_xc7cz1.png",
    title: "Conversion-Focused Shopify Store Development",
    description:
      "We do a great job of generating attention remarkably while your prospective customers find it remarkably easy to browse, shopping, and come back for more."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_3_hwmlft.png",
    title: "Mobile-responsive Online Stores",
    description:
      "Since almost everything is purchased by clients on smartphone devices, we make sure that these as well as your website, perform correctly and look appealing on all gadgets."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_4_ow3m5y.png",
    title: "E-Commerce Integrated with SEO",
    description:
      "In your store’s creation phase, we use top-quality SEO methods to ensure a positive ranking on search engines so you can reap free traffic almost instantly."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_5_qblh6b.png",
    title: "Integration of Safe Payment Methods",
    description:
      "Your customers’ safety is taken care of for Revilon checkout as we combine highly known payment processors like PayPal and Stripe to the checkout process, making it seamless and safe."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160425/Mask_group_1_x8kuay.png",
    title: "Integrated Analytics: Learn About E-Commerce",
    description:
      "This is the top-of-the-line information. We installed everything and tracking systems that work within each other, which make basic customer behavior, sales trends, and potential analysis possible."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_7_clil5i.png",
    title: "AI Customization",
    description:
      "Improved design and customer ecommerce interaction are possible. We provide AI customization proposals. These changes and customization are suggested to improve sales, meeting customers' needs, and retention."
  },
  {
    icon: "https://res.cloudinary.com/dxlykgx6w/image/upload/v1753160424/Mask_group_8_ccisek.png",
    title: "Move, Upgrade, and Continued Assistance",
    description:
      "Expect something impossible? We didn’t just send the rocket. Your ecommerce is functional, protected, and industry-leading thanks to our ongoing support, monitoring, and proactive adjustments."
  }
];



 const scrollToFormHome = () => {
        const formSection = document.getElementById('form-section');
        if (formSection) {
            const yOffset = -120;
            const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

const EcommerceServices = () => {
  const navigate = useRouter();
  
  return (
    <section className="ecom-london-section">
      <h3 className="ecom-london-title">What Makes Our E-Commerce Services Stand Out</h3>

      <div className="ecom-london-grid-wrapper">
        <div className="ecom-london-grid">
          {features.map((feature, index) => (
            <div key={index} className="ecom-london-card">
              <div className="ecom-london-icon">
                <img src={feature.icon} alt={feature.title} className="ecom-london-icon-img" />
                <h3 className="ecom-london-card-title">{feature.title}</h3>
              </div>
              <p className="ecom-london-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="ecom-london-buttons">
        <button onClick={() => navigate.push('/contact-us')} className="ecom-btn primary">Book a Call
          {/* Book a Call <HiArrowSmallRight /> */}
        </button>
        {/* <button className="ecom-btn secondary">Request an Audit</button> */}
        <button onClick={scrollToFormHome} className="ecom-btn secondary">
          Request an Audit
        </button>
      </div>
    </section>
  );
};

export default EcommerceServices;
