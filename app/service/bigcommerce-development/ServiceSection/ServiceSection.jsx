'use client';

import './ServiceSection.css';

const services = [
    { icon: 'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/customer-service_1_ve4gd6.png',title: "24/7 Technical Support", description: "Your business can be hit by unexpected problems, but our team of dedicated support agents is there for you 24/7 to fix any technical issues promptly. From website crashes, non-functioning pages, to integration problems, we offer instant solutions to reduce downtime" },
    { icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/store-setup_nxjrkk.png',title: "Store Setup & Customization", description: "Creating a BigCommerce store that supports your brand vision is key to success. We help you get your store set up, properly configure important settings and personalize the design to reflect your brand identity while keeping the user experience smooth." },
    { icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/performance-_1_d8gdwi.png',title: "Performance Optimization ", description: "A slow-loading website can push away customers. Our experts scan and improve the speed of your BigCommerce store’s site navigation and provide a smooth shopping experience. This ultimately leads to higher customer satisfaction and conversion rates." },
    { icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/security_fa3qm7.png', title: "Security & Compliance Support", description: "Cybersecurity is indispensable in eCommerce. We enforce top-tier security measures, routine updates, and PCI compliance to keep your store secure from threats and ensure secure transactions and protection of customer data." },
    { icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/store_j3kn6z.png',title: "Store Functionality", description: "Increase the functionality of your store with third-party apps and plugins. We help integrate critical tools like payment gateways, CRM systems, analytics tools, and marketing automation apps to enhance store performance and customer interaction." },
    { icon:'https://res.cloudinary.com/dd9tagtiw/image/upload/v1744092988/regular_ctplhe.png',title: "Regular Maintenance & Updates", description: "Technology keeps changing, and it is vital to be updated for competitiveness. We offer regular updates, bug fixes, and maintenance so that your BigCommerce store remains secure, operational, and in line with the current trends in the industry." },
];

const ServiceSection = ({services,contents}) => {
    return (
        <div className='big-outer-services-container'>
            <h4 className='big-services-heading primary-heading'>{contents?.title}</h4>
            <p className='big-services-sm-heading secondary-heading'>{contents?.desc}
            </p>
        <div className="big-services-container">
            {services?.map((service, index) => (
                <div
                    key={index}
                    className={`big-services-card ${service.highlighted ? 'highlighted' : ''}`}
                >
                    <img loading="lazy" src={service.icon} alt={service.title}/>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
        </div>
    );
};

export default ServiceSection;
