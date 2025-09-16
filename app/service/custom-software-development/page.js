import Customsoftware from "../../components/Customsoftware";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
    alternates: {
        canonical: "/service/custom-software-development",
    },
    title: "Custom Software Development & Automation Solutions | Kushel Digi",
    description:
        "Transform your business with Kushel Digi’s custom software, automation, and maintenance services. Future-proof, scalable, and designed for your industry’s demands.",
    openGraph: {
        title: "Custom Software Development & Automation Solutions | Kushel Digi",
        description:
            "Transform your business with Kushel Digi’s custom software, automation, and maintenance services. Future-proof, scalable, and designed for your industry’s demands.",
        url: "https://www.kusheldigi.com/service/custom-software-development",
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

const custom = ({ notify }) => {
  
  return (
    <>
    <Customsoftware notify={notify} />
    </>
  );
};

export default custom;

