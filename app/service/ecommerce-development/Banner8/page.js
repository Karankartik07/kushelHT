"use client"
import React from "react";
import "./Banner8.css";

const clients = [
  { name: "Sites and Scopes icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083491/sp20_xvpwrq_cvsgl0.png" },
  { name: "Black Rhino Concealment icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp1_tlo2jq_hjk2gy.png" },
  { name: "The survival mode icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083491/sp18_iscwvs_a1jf5a.png" },
  { name: "Deloitee icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp7_ludrbx_xjnbvo.png" },
  { name: "2ndamendmentguns icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp19_lg8ebe_bweivw.png" },
  { name: "LBF Land Big Fish icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp17_awm1ho_vcjvl4.png" },
  { name: "Havells icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp4_mjfpjw_psfafe.png" },
  { name: "KICK-EEZ icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp3_kriscj_gwntuv.png" },
  { name: "Madfish Solutions icon", src: "https://res.cloudinary.com/dbcmdtr3r/image/upload/v1743083492/sp6_oqjqdl_cvfvew.png" }
];

const Banner9 = ({page}) => {
  return (
    <section className="clientsSection">
      <div className="textContainer">
        <h3 className="primary-heading">Your Vision, Our Commitment</h3>
        <p className="secondary-heading">{page}</p>
      </div>
      <div className="logoGrid">
        {clients.map((client, index) => (
          <div key={index} className="logoItem">
            <img src={client.src} alt={client.name} />
           
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner9;
