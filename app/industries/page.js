import Industries from '../components/Industry2';

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/industries",
  },
  title: "Scalable eCommerce Services for All Industries | Kushel Digi",
  description:
    "Explore industry-specific eCommerce services from Kushel Digi—healthcare, retail, finance, education, fashion, entertainment, and more. Boost your business today!",
  openGraph: {
    title: "Kushel Digi | Expert eCommerce Development Services",
    description:
      "We offer professional website development, eCommerce solutions, and SEO services, bigcommerce development.",
    url: "https://www.kusheldigi.com/headless-bigcommerce",
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


function page() {
  return (
    <div>
      <Industries/>
    </div>
  )
}

export default page