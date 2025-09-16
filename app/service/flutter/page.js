import FlutterComponent from "./FlutterComponent";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
    alternates: {
        canonical: "/service/flutter",
    },
    title: "Best stop for flutter app development services by kusheldigi",
    description:
        "Kushel Digi is skilled in Flutter app development service to create Android and iOS apps in record time by keeping a single codebase.",
    openGraph: {
        title: "Best stop for flutter app development services by kusheldigi",
        description:
            "Kushel Digi is skilled in Flutter app development service to create Android and iOS apps in record time by keeping a single codebase.",
        url: "https://www.kusheldigi.com/service/flutter",
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
    return <FlutterComponent />;
};

export default Page;
