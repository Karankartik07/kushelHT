import WordPressComponent from "./WordPressComponent";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
    alternates: {
        canonical: "/service/wordpress",
    },
    title: "Your Premier WordPress Development Company for Innovative Solutions",
    description:
        "KushelDigi Solutions Provides the Best WordPress Development Services our expert developers specialize in creating and customizing unique websites.",
    openGraph: {
        title: "Your Premier WordPress Development Company for Innovative Solutions",
        description:
            "KushelDigi Solutions Provides the Best WordPress Development Services our expert developers specialize in creating and customizing unique websites.",
        url: "https://www.kusheldigi.com/service/wordpress",
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
    return <WordPressComponent />;
};

export default Page;
