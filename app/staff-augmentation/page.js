import StaffAugmentComponent from "./StaffAugmentComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/staff-augmentation",
  },
  title: "KushelDigi Solutions- Staf augmentation services",
  description:
    "Boost your team's capacity with KushelDigi's expert staff augmentation services. Streamline operations and scale efficiently. Contact us today!",
  openGraph: {
    title: "KushelDigi Solutions- Staf augmentation services",
    description:
      "Boost your team's capacity with KushelDigi's expert staff augmentation services. Streamline operations and scale efficiently. Contact us today!",
    url: "https://www.kusheldigi.com/staff-augmentation",
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
  return <StaffAugmentComponent />;
};

export default Page;
