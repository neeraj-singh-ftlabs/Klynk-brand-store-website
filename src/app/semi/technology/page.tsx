import React from 'react'
import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import SaveTimeAndEffort, {
  LifeWithRikuSectionProps,
} from "@/components/views/riku/LifeWithRikuSection";
import { ProductFAQ } from "@/components/views/riku/ProductFAQ";
import { RxChevronRight } from "react-icons/rx";
import { Faq1Props } from '@/components/views/riku/FAQ';
import UpgradeExpSection from "@/components/common/rightImageDesc/RightImageDescSection";
import NavigationTabs from "@/components/tabs/Tab";



const heroProps: Header5Props = {
  heading: "Revolutionize your cooking with Riku technology",
  description:
    "Experience the future of home cooking with Riku, the world's first automatic rice and curry maker. Its innovative technology and user-friendly design make cooking effortless and enjoyable.",
  buttons: [{ title: "Discover" }, { title: "Learn More", variant: "secondary-alt" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
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

const firstSection: Layout16Props = {
  // tagline: "Revolutionize",
  heading: "Discover New and Exciting Recipes to Elevate Your Cooking Experience",
  description:
    "Explore a vast library of recipes from around the world, ranging from traditional classics to innovative creations. With just a few taps on the intuitive touch-screen, you can easily navigate through the extensive collection and find the perfect dish to suit your taste and preferences.",
  
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  reverse: true,
  gridView: true,
};

const secondSection: Layout16Props = {
  tagline: "Revolutionize",
  heading: "Intuitive Touch-Screen Interface for Effortless Control",
  description:
    "Experience seamless navigation with our intuitive touch-screen interface. Easily control settings, timers, and access a wide range of recipes.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph:
        "Navigate through settings, timers, and recipes with ease using our intuitive touch-screen interface.",
      title: "Effortless Control",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph:
        "Achieve precise and consistent cooking results with our in-built weighing scale and recipe scaling feature.",
      title: "Perfect Precision",
    },
  ],
  buttons: [
    { title: "Learn More", variant: "secondary" },
    {
      title: "Sign up",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  reverse: true,
  gridView: true,
};

const featureData: LifeWithRikuSectionProps = {
  heading: "Automatic Cooking Process",
  // tagline: "Revolutionize",
  paragraph:
    "At Klynk, we believe that cooking should be enjoyable and stress-free. Our ecosystem of hardware, software, and services is designed to simplify your cooking journey and bring the joy back into your kitchen.",
  mainButtonView: true,
  features: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/400558788122a3316b26788ebf16a34456b9069a62ac56124e5eeb0c9375360f?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "AI-Driven Taste Profiles",
      description:
        "Experience consistent and healthy meals with Riku's automatic cooking process.",
        buttonText:"Learn More"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Recipe Sharing Capabilities",
      description: "Discover endless recipes and share your own with Riku's recipe sharing capabilities.",
      buttonText:"Learn More"
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d2adb108f093cf63db07ad907a331f1c98ffa4e001b7d4418320dbefee150d3?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Intuitive Touch-Screen Control",
      description:
        "Seamlessly navigate through settings and timers with Riku's intuitive touch-screen control.",
        buttonText:"Learn More"
    },
  ],
};

const Faq1Defaults: Faq1Props = {
  heading: "FAQs",
  description:
    "Find answers to commonly asked questions about our Semi technology.",
  questions: [
    {
      title: "How does Semi work?",
      answer:
        "Semi is an innovative smart induction cooktop that allows you to cook consistent, healthy, and perfect meals. It features an intuitive touch-screen interface that lets you control settings and timers with ease. The rice and curry vessels are made of non-stick aluminum, allowing you to serve the whole family without any waiting around. With the in-built weighing scale, you can accurately measure ingredients and scale recipes on the go. Explore personalized taste with advanced spice pods.",
    },
    {
      title: "Is Semi easy to use?",
      answer:
        "Yes, Semi is designed to be user-friendly. The intuitive touch-screen interface makes it easy to navigate and control the settings and timers. The in-built weighing scale ensures accurate ingredient measurement, making it convenient to follow recipes. Whether you're a beginner or an experienced cook, Semi simplifies the cooking process and helps you achieve consistent, healthy, and perfect meals.",
    },
    {
      title: "What are the benefits of using Semi?",
      answer:
        "Using Semi offers several benefits. Firstly, it saves you time and effort in the kitchen by automating the cooking process. Secondly, it ensures consistent and precise cooking results, eliminating guesswork. Thirdly, it allows you to explore a wide range of flavors with advanced spice pods. Lastly, it promotes healthy cooking by using non-stick aluminum vessels and accurate ingredient measurement.",
    },
    {
      title: "Is Semi suitable for families?",
      answer:
        "Absolutely! Semi is designed to cater to the needs of families. The rice and curry vessels are made of non-stick aluminum, allowing you to cook for the whole family without any waiting around. The in-built weighing scale ensures accurate ingredient measurement, making it easy to scale recipes according to the number of servings. With Semi, you can effortlessly prepare delicious and healthy meals for your loved ones.",
    },
    {
      title: "Can I personalize the taste of my meals with Semi?",
      answer:
        "Yes, you can! Semi offers advanced spice pods that allow you to explore a variety of flavors. Whether you prefer spicy, salty, savory, or sweet dishes, you can customize the taste of your meals to suit your preferences. With Semi, you have the freedom to experiment and create unique culinary experiences in your own kitchen.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact our support team for further assistance.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};

const tabs = [
  { title: 'Overview', url: '/semi/overview' },
  { title: 'Technology', url: '/semi/technology' },
  { title: 'Product', url: '/semi/product' },
  // { title: "Cooking", url: "/semi/cooking" },
];


function Technology() {
  return (
    <>
    <NavigationTabs  tabs={tabs} />
    <Hero {...heroProps} />
    <ImageWithDescription {...thirdSection} />
    <ImageWithDescription {...firstSection} />
    <ImageWithDescription {...secondSection} />
    <ImageWithDescription {...secondSection} />
    <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <ProductFAQ {...Faq1Defaults} />
      <UpgradeExpSection
        title="Discover the Power of Riku"
        description="Experience the convenience and precision of Riku's advanced cooking technology."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Learn More"
        secondaryButtonText="Sign Up"
      />
    </>
  )
}

export default Technology