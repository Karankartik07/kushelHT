"use client"
import React from 'react'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import './ContactMap.css'
import Link from 'next/link'
const ContactMap = () => {
  return (
    <section className='globalMainContact'>
<div className='globalmaincontent'>
    <p>Ready to Serve You</p>
</div>
<div className='mainGlobalcontactMap'>
  
    <div className='globalDivMap'>
    <h2 className='globalparaMap'>Our office</h2>
    <div className='globalstartMap'>
        <p className='globalMapContry'>India</p>
       <Link href="https://www.google.com/maps/place/Kushel+Digi+Solutions+%7C+E-commerce+Web+Development+%7C+Web+Design+%26+App+Development+Company/@28.6290218,77.3841087,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce49f5d8cdc4b:0xedb207949cd07d2b!8m2!3d28.6290218!4d77.3841087!16s%2Fg%2F11hbvx7ls2?entry=ttu&g_ep=EgoyMDI1MDIwOS4wIKXMDSoASAFQAw%3D%3D" target="blank"> <div className='globalLocation'><span><IoLocation/> </span> First Floor, D242, F-32B, Sector 63 Rd, Noida, Uttar Pradesh
       201301 </div> </Link>
       <Link href="mailto:info@kusheldigi.com"> <p className='globalContryMail'><span><IoMail/></span> info@kusheldigi.com</p></Link>
       <Link href="tel:+91-9045-301-702"> <p className='globalContryMail'><span><IoCall/></span> +91-9045-301-702

</p></Link>
       <Link href="tel:+15855662070"> <p className='globalContryMail'><span><IoCall/></span>+1-585-566-2070

</p></Link>
    </div>
    {/* <div className='globalstartMap'>
        <p className='globalMapContry'>Germany</p>
        <p className='globalLocation'><span><IoLocation/> </span> Friedrichstr. 171, 10117, Berlin, Germany</p>
        <div className='globalContryMail'><span> <IoMail/></span> de.info@edvantis.com</div>
    </div> */}
    </div>
    <div className='iframeMapContact'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3954123429044!2d77.3860107742401!3d28.617908984746908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49f5d8cdc4b%3A0xedb207949cd07d2b!2sKushel%20Digi%20Solutions%20-%20Web%20Design%20Company%20Noida%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1681368789327!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Company Location"
      ></iframe>
    </div>
</div>
    </section>
  )
}

export default ContactMap