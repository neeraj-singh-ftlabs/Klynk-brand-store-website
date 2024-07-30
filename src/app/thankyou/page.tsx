import { EffortlessMeal, Layout4Props } from '@/components/views/app/EffortlessMeal';
import { Cta7Props, Thankyou } from '@/components/views/thankyou/SupportThankyou';
import React from 'react';
import { RxChevronRight } from "react-icons/rx";

const page = () => {
    const Cta7Defaults: Cta7Props = {
      heading: "Thank You for Your Support",
      description: "We appreciate your continued support and trust in Klynk.",
      buttons: [{ title: "Continue" }, { title: "Learn More", variant: "secondary" }],
    };
    const EffortlessMealData: Layout4Props = {
      tagline: "Simplify",
      heading: "Thank You for Choosing Klynk",
      description:
        "Your invoice and tracking information will be sent to you shortly. If you have any questions or concerns, please don't hesitate to reach out to our customer support team.",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "Sign Up",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image",
      },
    };
   
  return (
    <>
      <Thankyou {...Cta7Defaults} />
          <EffortlessMeal {...EffortlessMealData} />

    </>
  );
}

export default page
