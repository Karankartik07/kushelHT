import UIUXComponent from "./UIUXComponent";

export const metadata = {
  metadataBase: new URL("https://www.kusheldigi.com"),
  alternates: {
    canonical: "/service/ui-ux-design",
  },
  title: "KushelDigi: UI/UX Design Services | Leading UI UX Design Company",
  description:
    "We Provide one of the best UI UX design services with unique and creative designs that transform your website performance to new hights.",
  openGraph: {
    title: "KushelDigi: UI/UX Design Services | Leading UI UX Design Company",
    description:
      "We Provide one of the best UI UX design services with unique and creative designs that transform your website performance to new hights.",
    url: "https://www.kusheldigi.com/service/ui-ux-design",
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
  return <UIUXComponent />;
};

export default Page;
