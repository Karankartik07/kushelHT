import PhpComponent from "./PhpComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/hire/php-developer",
  },
  title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
    description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency",
  openGraph: {
    title: 'KushelDigi : Job Search Marketplace. Tech Job Hunting Simplified',
    description:"web agency, web design agency , best web design agency in the world, web design agency, web design services, web design and development agency",
    url: "https://www.kusheldigi.com/hire/php-developer",
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
  return <PhpComponent />;
};

export default Page;
