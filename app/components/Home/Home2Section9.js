import  './askques.css'; // Use CSS modules for styling
import Image from 'next/image'; // Use Next.js Image component for optimized images

const data = [
  {
    title: "DISCOVERY & PLANNING",
    para: "We dive deep into your vision and study the market thoroughly in order to understand your target audience and competitors.",
    result: "A fully featured project plan and a validated product idea, aligned with business objectives.",
  },
  {
    title: "DESIGN & PROTOTYPING",
    para: "The stage where we give life to your vision by designing intuitive UI/UX that enriches user experience.",
    result: "A functional prototype, ready for user feedback and leading to seamless development.",
  },
  {
    title: "PRODUCT DEVELOPMENT & TESTING",
    para: "Our proficient development team will then turn the prototype into a functional product with top-of-the-line coding standards and then testing is done",
    result: "MVP go-live with a robust and reliable product ready to face the market.",
  },
  {
    title: "LAUNCH & CONTINUOUS IMPROVEMENT",
    para: "We stand with you at launch, ensuring a smooth rollout and working through any challenges that may arise.",
    result: "A product that will evolve with your business needs and drive sustained growth.",
  },
];

function Home2Section9() {
  return (
    <div className="hom2s9rap">
      <div className="s9cont">
        <h3>Product Delivery Roadmap</h3>

        <div className="proddetails">
          {/* Use Next.js Image component for optimized image loading */}
          <Image 
            src="https://res.cloudinary.com/dbpqjxox7/image/upload/v1738225246/porjecdettails_poa755.webp" 
            alt="Project details" 
            className="projectdetails" 
            width={400} // Set width and height for Image component
            height={200} 
            // maxwidth={180}
          />

          <div className="projerights">
            {data.map((d, i) => (
              <div key={i} className="singlepros">
                {/* Left side */}
                <p className="sinprleft">{d.title}</p>

                {/* Right side */}
                <div className="signprorigh">
                  <p>{d.para}</p>
                  <p>
                    <span>Result:</span> {d.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Section9;
