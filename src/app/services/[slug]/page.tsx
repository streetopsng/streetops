import ServiceDetailPage from "../dynamic-page";
type metaProps = {
  params: { slug: string };
};

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(params: Props) {
  const { slug } = await params.params;
  console.log(slug);

  if (slug == "diagnostic") {
    return {
      title: "Employee Engagement Survey & Diagnostic | StreetOps",
      description:
        "You cannot fix what you have not measured. StreetOps' Team Diagnostic identifies exactly where your employee engagement is breaking down. Book a session.",
    };
  } else if (slug == "training") {
    return {
      title: "Manager Training in Nigeria | StreetOps",
      description:
        "Most managers were never trained to lead people. StreetOps' Manager Effectiveness Training gives your leaders practical skills that create real behavioural change.",
    };
  } else if (slug == "talent") {
    return {
      title:
        "Employee Onboarding and Retention Advisory in Nigeria | StreetOps",
      description:
        "Losing new hires before they settle in costs you more than you think. StreetOps' Talent Integration Advisory fixes your onboarding and improves employee retention.",
    };
  } else if (slug == "culture") {
    return {
      title: "Workplace Culture Change in Nigeria | StreetOps",
      description:
        "Workplace culture does not change with a workshop. StreetOps works inside Nigerian organisations to shift how people lead, collaborate, and operate — for good.",
    };
  }

  return {
    title: "Team Bonding ideas in Lagos | Experience Design | StreetOps",
    description:
      "Planning team bonding in Lagos? StreetOps designs and delivers experiences your team will actually look forward to. Tailored, memorable, and results-driven.",
  };
}

const Page = async ({ params }: Props) => {
  const value = await params;
  // console.log(slug);
  generateMetadata({ params });

  return <ServiceDetailPage />;
};

export default Page;
