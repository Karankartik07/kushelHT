
import Webdevelopment  from "../../components/Webdevelopment"

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/web-development",
  },
  title: "Build Your Dream Website Today | Web Development by Kushel Digi",
  description:
    "Start your project with Kushel Digi Solutions—experts in custom web development, responsive design, and innovative digital solutions for every industry.",
  openGraph: {
    title: "Build Your Dream Website Today | Web Development by Kushel Digi",
    description:
      "Start your project with Kushel Digi Solutions—experts in custom web development, responsive design, and innovative digital solutions for every industry.",
    url: "https://www.kusheldigi.com/service/web-development",
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

const magento = ({ notify }) => {
  
  return (
    <>
    <Webdevelopment notify={notify} />
    </>
  );
};

export default magento;

