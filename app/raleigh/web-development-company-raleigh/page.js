import RaleighWebComponent from "./RaleighWebComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/raleigh/web-development-company-raleigh",
  },
  title: "Kushel Digi Best Web Development Company in Raleigh ",
  description: "Searching a web development company Raleigh that really understands? You have hit the right place. In the digital age, your site is not just a business card; it is your handshake.",
  openGraph: {
      title: "Kushel Digi Best Web Development Company in Raleigh ",
  description: "Searching a web development company Raleigh that really understands? You have hit the right place. In the digital age, your site is not just a business card; it is your handshake.",
    url: "https://www.kusheldigi.com/raleigh/web-development-company-raleigh",
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
const Page = () => {
  return <RaleighWebComponent />;
};

export default Page;