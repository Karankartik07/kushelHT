import Headlessnew from '../../components/Headlessnew'

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  title: "Headless Commerce Development Services | Kushel Digi Solutions",
  description:
    "Build future-ready online stores with Kushel Digi’s headless commerce. Get custom APIs, multi-channel integration, secure payments, and a seamless user experience.",
  alternates: {
    canonical: "/service/headless-commerce",
  },
  openGraph: {
    title: "Headless Commerce Development Services | Kushel Digi Solutions",
    description:
      "Build future-ready online stores with Kushel Digi’s headless commerce. Get custom APIs, multi-channel integration, secure payments, and a seamless user experience. ",
    url: "https://www.kusheldigi.com/service/headless-commerce",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1724843511/mobilieji.777f4a1da1940ac55315_qfiv4l.png",
        width: 1200,
        height: 630,
        alt: "kushel"
      },
    ],
  },
};

const Headless = ({ notify }) => {
  return (
    <>
      <Headlessnew notify={notify} />
    </>
  );
};

export default Headless;
