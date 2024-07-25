import React from "react";
import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import {
  Header64Props,
  Revoloutionary,
} from "@/components/views/riku/RevolutionarySection";
import {
  Layout365Props,
  Revoloutionizing,
} from "@/components/views/riku/RevolutionizingCooking";
import { FAQ, Faq1Props } from "@/components/views/riku/FAQ";
import {
  Layout31Props,
  LearnMore,
} from "@/components/views/riku/LearnMoreSection";
import { RxChevronRight } from "react-icons/rx";
import { Layout380 as MultiCards } from "@/components/common/MultiCards/MultiCards";
import CenterImageWithDesc, {
  CenterImageFeatureSectionProps,
} from "@/components/common/CenterImageWithDesc/CenterImageWithDesc";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import {
  Cta33Props,
  Innovative,
} from "@/components/views/riku/InnovativeTechnology";
import { Discover, Layout22Props } from "@/components/views/riku/Discover";
import { Layout396Props, Power } from "@/components/views/riku/PowerSection";
import SpecSection from "@/components/views/riku/SpecSection";
import NavigationTabs from "@/components/tabs/Tab";
const headings = ["Spects", "", "Riku"];

const firstSection: Layout16Props = {
  tagline: "Convenience",
  heading: "Enhance Your Cooking Experience with Riku",
  description:
    "Introducing Riku, the world's first automatic rice and curry maker. With its built-in spice rack featuring 10+ additional spice pods, each with a capacity of 120 ml and accurate dispensing as small as 1/4th tsp, Riku ensures a flavorful outcome for every dish and offers a wide range of culinary possibilities.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
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

const secondSection: Layout16Props = {
  tagline: "Simplify",
  heading: "Enhance Your Cooking Experience with Riku Technology",
  description:
    "Introducing the ingredient rack for Riku, featuring 8 pods in two sizes. This innovative design allows you to accommodate a variety of recipes and take full advantage of Riku's capabilities, while also providing easy dispensing.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
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
  reverse: true,
};
const CenterImageProps: CenterImageFeatureSectionProps = {
  tagline: "Revolutionize",
  heading: "The Smart Stirrer That Makes Cooking Foolproof",
  description:
    "Introducing Riku, the innovative smart stirrer that takes the guesswork out of cooking. With its advanced technology, Riku ensures perfect results every time, making your cooking experience effortless and delicious.",
  features: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "No More Overcooking or Undercooking",
      description:
        "Riku's precise temperature control and stirring action guarantee optimal cooking for every recipe.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Perfect Textures Every Time",
      description:
        "Achieve the ideal texture in your dishes with Riku's open and closed cooking modes.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Deliciousness in Every Bite",
      description:
        "Experience mouthwatering flavors with Riku's even cooking technology, ensuring every bite is a delight.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Cook with Confidence",
      description:
        "Riku's foolproof design makes it safe and easy to use, giving you peace of mind in the kitchen.",
    },
  ],
  mainImage:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
};

const heroProps: Header5Props = {
  heading:
    "Experience the future of cooking with Riku, engineered to combine technology and Cooking",
  description:
    "Introducing Riku, the world's first automatic rice and curry maker. With its innovative technology and user-friendly design, cooking has never been easier.",
  buttons: [
    { title: "Learn More" },
    { title: "Sign Up", variant: "secondary-alt" },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
const Header64Defaults: Header64Props = {
  heading: "Revolutionary Riku Technology",
  description:
    "Experience effortless control with Riku's intuitive touch-screen interface for your cooking needs.",
};
const Layout31Defaults: Layout31Props = {
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Discover Delicious Recipes",
      description:
        "Explore a wide range of mouthwatering recipes for your Riku",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading: "Plan Your Meals",
      description: "Effortlessly plan your meals for the week with Riku",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Personalize Your Recipes",
      description:
        "Customize recipes to suit your taste and dietary preferences",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 4",
      },
      heading: "Follow Prep Instructions",
      description:
        "Get step-by-step instructions to prepare your meals with ease",
      buttons: [
        {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-4" />,
        },
      ],
    },
  ],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};
const Layout2Defaults: any = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [
    { title: "Learn More", variant: "secondary" },
    {
      title: "Sign Up",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
    alt: "Placeholder image",
  },
};
const Layout365Defaults: Layout365Props = {
  tagline: "Innovative",
  heading: "Revolutionizing Cooking Technology",
  description: "Experience the Future of Home Cooking with Riku",
  cardsSmall: [
    {
      tagline: "Convenient",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
        alt: "Placeholder image 1",
      },
      heading: "Built-In Weighing Scale for Effortless Cooking",
      description:
        "Discover the Joy of Hands-Free Cooking with Riku, the Automatic Rice and Curry Maker",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
    {
      tagline: "Smart",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
        alt: "Placeholder image 2",
      },
      heading: "Dishwasher Safe",
      description:
        "Experience the Future of Cooking with Riku, the World's First Automatic Rice and Curry Maker",
      button: {
        title: "Sign Up",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    },
  ],
  cardsBig: [
    {
      tagline: "Efficient",

      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      heading: "Enhance Your Cooking Skills with Riku",
      description:
        "With Riku, you can enjoy delicious, perfectly cooked rice and curry dishes without any hassle or culinary expertise. Its advanced technology and intuitive interface make it easy for anyone to create restaurant-quality meals at home.",
      buttons: [
        { title: "Discover", variant: "secondary" },
        {
          title: "Buy Now",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      ],
    },
  ],
};
const Layout396Defaults: Layout396Props = {
  //   tagline: "Tagline",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  heading: "Discover the Power of Riku's Induction Technology",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  featureSections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Effortless Cooking with Riku's Induction Features",
      description:
        "Experience the convenience of Riku's advanced induction technology.",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      heading:
        "Enhance Your Cooking Experience with Riku's Induction Technology",
      description:
        "Unlock a new level of precision and control in your cooking.",
      button: {
        title: "Discover",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 3",
      },
      heading: "Revolutionize Your Cooking with Riku's Induction Technology",
      description:
        "Experience the future of cooking with cutting-edge induction features.",
      button: {
        title: "Sign Up",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

const Cta33Defaults: Cta33Props = {
  heading: "Innovative Technology Ensuring Food Safety and Quality",
  description:
    "At Klynk, we prioritize the safety of our customers' food. Our Riku technology incorporates food grade parts to ensure that every meal prepared is safe and of the highest quality.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  logos: [
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 1",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 2",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 3",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 3",
    },
  ],
};
const Layout22Defaults: Layout22Props = {
  icon: {
    src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
    alt: "Relume logo",
  },
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
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
const Faq1Defaults: Faq1Props = {
  heading: "FAQs",
  description:
    "Find answers to commonly asked questions about Riku technology.",
  questions: [
    {
      title: "How does Riku work?",
      answer:
        "Riku is equipped with advanced sensors and algorithms that ensure precise cooking. Simply add the ingredients, select the desired recipe, and Riku will take care of the rest, automatically adjusting temperature and cooking time for perfect results every time.",
    },
    {
      title: "Is Riku easy to clean?",
      answer:
        "Yes, Riku is designed with easy cleaning in mind. The inner pot and accessories are dishwasher safe, making cleanup a breeze. Additionally, the sleek and durable exterior can be wiped clean with a damp cloth.",
    },
    {
      title: "Can I customize recipes?",
      answer:
        "Absolutely! With the Klynk Recipes app, you can create and save your own recipes, customize existing ones, and share them with the Klynk community. Explore endless culinary possibilities and make each meal uniquely yours.",
    },
    {
      title: "Is Riku safe to use?",
      answer:
        "Yes, Riku is designed with safety as a top priority. It features multiple safety mechanisms, including automatic shut-off and overheat protection. You can trust Riku to cook your meals safely and reliably.",
    },
    {
      title: "What is the warranty?",
      answer:
        "Riku comes with a 1-year warranty that covers any manufacturing defects. Our dedicated customer support team is also available to assist you with any questions or concerns you may have.",
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
  { title: 'Overview', url: '/riku/overview' },
  { title: 'Technology', url: '/riku/technology' },
  { title: 'Product', url: '/riku/product' },
];
function Technology() {
  return (
    <>
    <NavigationTabs  tabs={tabs} />
      <Hero {...heroProps} />
      <Revoloutionary {...Header64Defaults} />
      <LearnMore {...Layout31Defaults} {...Layout2Defaults} />
      <CenterImageWithDesc {...CenterImageProps} />
      <ImageWithDescription {...secondSection} />
      <ImageWithDescription {...firstSection} />
      <Revoloutionizing {...Layout365Defaults} />
      <ImageWithDescription {...secondSection} />
      <Power {...Layout396Defaults} />
      <Innovative {...Cta33Defaults} />
      <SpecSection headings={headings} />
      <Discover {...Layout22Defaults} />
      <FAQ {...Faq1Defaults} />
    </>
  );
}

export default Technology;
