import '../globals.css'
import Hire2 from "../components/Hire2";

export const metadata = {
    metadataBase: new URL("https://www.kusheldigi.com"),
    alternates: {
        canonical: "/hire",
    },
    title: "KushelDigi | Job Search Marketplace Tech Job Hunting Simplified",
    description:
        "Discover your dream tech job effortlessly with KushelDigi! Our job search marketplace streamlines the process, connecting talented professionals with top tech companies. Simplify your job hunt today.",
    openGraph: {
        title: "KushelDigi | Job Search Marketplace Tech Job Hunting Simplified",
        description:
            "Discover your dream tech job effortlessly with KushelDigi! Our job search marketplace streamlines the process, connecting talented professionals with top tech companies. Simplify your job hunt today.",
        url: "https://www.kusheldigi.com/hire",
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

const Hire = ({ notify }) => {
  
  return (
    <>
    <Hire2 notify={notify} />
    </>
  );
};

export default Hire;

