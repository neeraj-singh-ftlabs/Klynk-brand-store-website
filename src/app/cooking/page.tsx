import ConvienenceSection from '@/components/views/cooking/Convienence'
import CookWithKlynk from '@/components/views/cooking/CookWithKlynk'
import EffortlessComp from '@/components/views/cooking/Effortless';
import React from 'react'
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import { KlynkMakes, Layout245Props } from '@/components/views/cooking/KlynkMakes';
import { RxChevronRight } from "react-icons/rx";

function Cooking() {
  const ConvienceProps = {
    heading:
      "Discover the Convenience of Klynk Products in Your Everyday Cooking",
    description:
      "Experience the ease and efficiency of using Klynk products to enhance your cooking experience. With our innovative hardware, software, and services, you can enjoy delicious meals without the stress and effort.",
    statistics: [
      {
        percentage: "50% off",
        description: "Save time, effort, and elevate your culinary skills.",
      },
      {
        percentage: "50% off",
        description: "Experience the future of home cooking with Klynk.",
      },
    ],
    imageSrc: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    imageAlt: "img",
  };
const thirdSection: Layout16Props = {
  // tagline: "Revolutionize",
  heading: "Experience Effortless Cooking with Riku's Advanced Engineering",
  description:
    "Discover endless recipes and effortlessly navigate through intuitive touch-screen controls and timers.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph:
        "Riku's advanced engineering ensures every meal is cooked to perfection with minimal effort.",
      title: "Consistent Performance",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph:
        "Explore a variety of flavors with Riku's advanced spice pods.",
      title: "Personalized Taste",
    },
  ],

  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  reverse: true,
  gridView: true,
  gridIconView: false,
};
  const Layout245Defaults: Layout245Props = {
    tagline: "Simplifying",
    heading: "Discover How Klynk Makes Cooking Effortless",
    description:
      "At Klynk, we believe that cooking should be stress-free and enjoyable. Our ecosystem of innovative hardware, software, and services seamlessly integrate to simplify your cooking journey. From the world's first automatic rice and curry maker to a smart induction cooktop, we have the tools to make your kitchen fully automatic. With our personalized food space for chefs and food influencers, as well as our collaborative meal planning and grocery list app, we bring together the community of cooking and make it easier than ever to eat what you want, when you want.",
    sections: [
      {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 1",
        },
        heading: "Experience the Future of Home Cooking",
        description: "Discover the power of our innovative products.",
      },
      {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 2",
        },
        heading: "Effortless Meal Planning and Grocery Shopping",
        description:
          "Simplify your meal planning and grocery shopping with our collaborative app.",
      },
      {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 3",
        },
        heading: "Medium length section heading goes here",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
      },
    ],
    buttons: [
      { title: "Button", variant: "secondary" },
      {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    ],
  };
  return (
    <>
      <CookWithKlynk />
      <ConvienenceSection ConvienceProps={ConvienceProps} />
      <EffortlessComp />
      <ImageWithDescription {...thirdSection} />
      <KlynkMakes {...Layout245Defaults} />
    </>
  );
}

export default Cooking