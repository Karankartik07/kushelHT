import KotlinComponent from "./KotlinComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/kotlin",
  },
  title: "KushelDigi Solutions- Best kotlin app development company",
    description: 'Transform your Ideas into Reality and Boost Your Android App Excellence. Start Your Kotlin App Journey with our Kotlin app development services!',
  openGraph: {
    title: "KushelDigi Solutions- Best kotlin app development company",
    description: 'Transform your Ideas into Reality and Boost Your Android App Excellence. Start Your Kotlin App Journey with our Kotlin app development services!',
    url: "https://www.kusheldigi.com/service/kotlin",
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
  return <KotlinComponent />;
};

export default Page;
