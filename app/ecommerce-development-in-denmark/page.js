const { default: EcommerceDenmark } = require("../components/EcommerceDenmark")

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/ecommerce-development-in-denmark",
  },
  title: "Ecommerce Development Company in Denmark | Kushel Digi",
  description: "Kushel Digi delivers ecommerce website development in Denmark, helping businesses build robust, SEO-friendly online stores tailored to their goals.",
  openGraph: {
      title: "Ecommerce Development Company in Denmark | Kushel Digi",
  description: "Kushel Digi delivers ecommerce website development in Denmark, helping businesses build robust, SEO-friendly online stores tailored to their goals.",
    url: "https://www.kusheldigi.com/ecommerce-development-in-denmark",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1739012691/logo_zckmvw.png",
        width: 800,
        height: 600,
        alt: "Kushel Digi Logo",
      },
    ],
  },
};

const DenmarkEcommerce = ({notify}) => {
    return(
        <>
            <EcommerceDenmark notify={notify}/>
        </>
    )
}

export default DenmarkEcommerce;