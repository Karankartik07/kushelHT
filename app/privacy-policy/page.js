import PrivacyPolicyComponent from "./PrivacyPolicyComponent";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
    alternates: {
        canonical: "/privacy-policy",
    },
    title: "Case Studies of kushelDigi Solution",
      description:"Web Development Company | Kushel Digi Solutions",
    openGraph: {
        title: "Case Studies of kushelDigi Solution",
      description:"Web Development Company | Kushel Digi Solutions",
        url: "https://www.kusheldigi.com/privacy-policy",
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
    return <PrivacyPolicyComponent />;
};

export default Page;
