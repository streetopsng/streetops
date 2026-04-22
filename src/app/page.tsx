import Main from "@/components/AnotherLandingPage/Main";

export const metadata = {
  title: "StreetOps - Behavioural Research and Management Consulting company",
  description: `StreetOps is a pan-African behavioral research and management consulting company that helps institutions optimize workforce performance for business growth.`,
  openGraph: {
    title: "Behavioural Research and Management Consulting company",
    description:
      "StreetOps is a pan-African behavioral research and management consulting company that helps institutions optimize workforce performance for business growth.",
    url: "https://www.streetops.ng",
    siteName: "StreetOps",
    images: [
      {
        url: "https://www.streetops.ng/social-icon-cropped.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const page = () => {
  return (
    // <StreetopsLandingPage />
    <Main />
  );
};

export default page;
