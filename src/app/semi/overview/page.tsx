import ExploreAndLearnMore from "@/components/common/exploreALearnMore/ExploreAndLearnMore";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import SaveTimeAndEffort, {
  LifeWithRikuSectionProps,
} from "@/components/views/riku/LifeWithRikuSection";
import BlogsSection, { BlogPost } from "@/components/views/blog/BlogsSection";
import {
  Gallery1Props,
  Gallery1 as SingleGallary,
} from "@/components/views/semi/SingleGallary";
import {
  Gallery4Props,
  Gallery4 as MultipleGallary,
} from "@/components/views/semi/MultipleGallary";
import { Pricing27, Pricing27Props } from "@/components/views/semi/PricingPlan";
import { BiCheck } from "react-icons/bi";
import UpgradeExpSection from "@/components/common/rightImageDesc/RightImageDescSection";
import { Faq3 as Faq, Faq3Props } from "@/components/common/faq1/Faq1";
import NavigationTabs from "@/components/tabs/Tab";


const thirdSection: Layout16Props = {
  tagline: "Revolutionize",
  heading: "Effortless Cooking Made Possible with Klynk",
  description:
    "Discover the future of home cooking with Klynk's innovative products and services. Our ecosystem of hardware, software, and personalized food space brings together the community of cooking, making it easier than ever to enjoy delicious meals without stress or effort.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph:
        "Experience hands-on cooking time reduction with Riku, the world's first automatic rice and curry maker.",
      title: "Save Time",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph:
        "Prepare delicious meals effortlessly with Semi, our smart induction cooktop.",
      title: "Effortless Meals",
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

const secondSection: Layout16Props = {
  tagline: "Revolutionize",
  heading: "Effortless Cooking Made Possible with Klynk",
  description:
    "Discover the future of home cooking with Klynk's innovative products and services. Our ecosystem of hardware, software, and personalized food space brings together the community of cooking, making it easier than ever to enjoy delicious meals without stress or effort.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph:
        "Experience hands-on cooking time reduction with Riku, the world's first automatic rice and curry maker.",
      title: "Save Time",
    },
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 2",
      },
      paragraph:
        "Prepare delicious meals effortlessly with Semi, our smart induction cooktop.",
      title: "Effortless Meals",
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
  heading: "Simplifying Cooking with Innovative and Smart Solutions",
  tagline: "Revolutionize",
  paragraph:
    "At Klynk, we believe that cooking should be enjoyable and stress-free. Our ecosystem of hardware, software, and services is designed to simplify your cooking journey and bring the joy back into your kitchen.",
  mainButtonView: true,
  features: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/400558788122a3316b26788ebf16a34456b9069a62ac56124e5eeb0c9375360f?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Effortlessly cook with our smart induction cooktop",
      description:
        "Enjoy personalized recipes from top chefs and food influencers",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Simplify meal planning with our collaborative app",
      description: "Discover new recipes and create grocery lists effortlessly",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d2adb108f093cf63db07ad907a331f1c98ffa4e001b7d4418320dbefee150d3?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Experience the future of home cooking with Klynk",
      description:
        "Join the community of cooking enthusiasts and simplify your kitchen",
    },
  ],
};

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Save Time and Effort in the Kitchen",
    description:
      "Riku, the world's first automatic rice and curry maker, takes the hassle out of meal preparation.",
    readMore: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Smart Cooking Made Simple",
    description:
      "Semi, the smart induction cooktop, simplifies cooking with its intuitive controls and advanced features.",
    readMore: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Personalized Food Space for Chefs and Food Influencers",
    description:
      "Klynk Recipes is a platform where chefs and food influencers can share their creations and inspire others.",
    readMore: false,
  },
];

const headerProps = {
  tagline: "Revolutionize",
  title: "Discover the Future of Home Cooking with Klynk",
  description:
    "Experience a world where cooking is effortless and stress-free. Klynk's ecosystem of hardware, software, and services brings together the community of cooking, making fully automatic kitchens a reality.",
};

const Gallery1Defaults: Gallery1Props = {
  heading: "Image Collection",
  description: "Explore our stunning collection of product images and designs",
  images: [
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
  ],
};

const Gallery4Defaults: Gallery4Props = {
  heading: "Image Showcase",
  description: "Explore our stunning collection of product images.",
  images: [
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 1",
    },
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 2",
    },
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 3",
    },
    {
      url: "#",
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image 4",
    },
  ],
};

const Faq3Defaults: Faq3Props = {
  heading: "FAQs",
  description:
    "Find answers to commonly asked questions about Klynk's products and their usage.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
  questions: [
    {
      title: "What is Klynk?",
      answer:
        "Klynk is an ecosystem of hardware, software, and services that aims to simplify cooking and make it more convenient for users. It offers a range of products such as Riku, the world's first automatic rice and curry maker, and Semi, a smart induction cooktop. With Klynk Recipes, users can access a personalized food space for chefs and food influencers, while the Klynk App provides collaborative meal planning and grocery list features.",
    },
    {
      title: "How does Riku work?",
      answer:
        "Riku is designed to automate the process of cooking rice and curry. It uses advanced technology to ensure perfectly cooked meals every time. Users can simply add the ingredients, select the desired settings, and let Riku take care of the rest. With Riku, you can enjoy delicious homemade meals without the need for extensive cooking skills or constant monitoring.",
    },
    {
      title: "What is Semi?",
      answer:
        "Semi is a smart induction cooktop that offers precise temperature control and a range of cooking modes. It is designed to make cooking easier and more efficient. With Semi, you can cook your favorite dishes with ease and confidence, knowing that the cooktop will provide consistent heat and accurate cooking results.",
    },
    {
      title: "How can Klynk Recipes help?",
      answer:
        "Klynk Recipes is a personalized food space that allows chefs and food influencers to share their recipes and connect with a community of cooking enthusiasts. Users can discover new recipes, save their favorites, and even create their own personalized meal plans. With Klynk Recipes, you can explore a world of culinary inspiration and take your cooking skills to the next level.",
    },
    {
      title: "What features does the Klynk App offer?",
      answer:
        "The Klynk App is a powerful tool for collaborative meal planning and grocery list management. It allows users to create and share meal plans with family and friends, ensuring everyone is on the same page when it comes to cooking. The app also offers a convenient grocery list feature, making it easy to keep track of the ingredients you need for your recipes.",
    },
  ],
};

const Pricing27Defaults: Pricing27Props = {
  tagline: "Revolutionize",
  heading: "Flexible Pricing",
  description: "Discover the perfect plan for your cooking needs",
  tabs: [
    {
      value: "monthly",
      tabName: "Monthly",
      pricingPlans: [
        {
          planName: "Basic",
          price: "$19",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Business",
          price: "$29",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Enterprise",
          price: "$49",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
      ],
    },
    {
      value: "yearly",
      tabName: "Yearly",
      pricingPlans: [
        {
          planName: "Basic",
          price: "$180",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Business",
          price: "$280",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
        {
          planName: "Enterprise",
          price: "$480",
          discount: "Save 20%",
          description: "Lorem ipsum dolor sit amet",
          button: {
            title: "Get started",
          },
        },
      ],
    },
  ],
  featureCategories: [
    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <BiCheck key={"1"} className="size-6" />],
        },
      ],
    },

    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <BiCheck key={"1"} className="size-6" />],
        },
      ],
    },

    {
      title: "Feature Category",
      features: [
        {
          text: "Feature text goes here",
          items: ["10", "25", "Unlimited"],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
            <BiCheck key={"3"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: [
            "",
            <BiCheck key={"1"} className="size-6" />,
            <BiCheck key={"2"} className="size-6" />,
          ],
        },
        {
          text: "Feature text goes here",
          items: ["", "", <BiCheck key={"1"} className="size-6" />],
        },
      ],
    },
  ],
  buttons: [
    {
      title: "Get started",
    },
    {
      title: "Get started",
    },
    {
      title: "Get started",
    },
  ],
};

const tabs = [
  { title: 'Overview', url: '/semi/overview' },
  { title: 'Technology', url: '/semi/technology' },
  { title: 'Product', url: '/semi/product' },
  // { title: "Cooking", url: "/semi/cooking" },
];

function Dashboard() {
  return (
    <>
    <NavigationTabs  tabs={tabs} />
      <ExploreAndLearnMore
        Tagline="Simplify"
        title="Revolutionize Your Cooking"
        paragraph="Discover innovative solutions that make cooking easier and more enjoyable."
        buttons={[
          { text: "Explore", variant: "primary" },
          { text: "Learn More", variant: "secondary" },
        ]}
      />
      <ImageWithDescription {...secondSection} />
      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
        tagline={featureData.tagline}
        paragraph={featureData.paragraph}
        mainButtonView={featureData.mainButtonView}
      />

      <ImageWithDescription {...secondSection} />
      <SingleGallary {...Gallery1Defaults} />
      <ImageWithDescription {...thirdSection} />

      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <BlogsSection blogPosts={blogPosts} headerProps={headerProps} />
      <MultipleGallary {...Gallery4Defaults} />
      <Pricing27 {...Pricing27Defaults} />
      <UpgradeExpSection
        title="Discover our innovative kitchen products"
        description="Explore our range of automatic rice and curry makers, smart induction cooktops, and more"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Learn More"
        secondaryButtonText="Buy Now"
      />
      <Faq {...Faq3Defaults} />
      <UpgradeExpSection
        title="Stay Updated with Klynk"
        description="Subscribe to our newsletter for the latest updates and special offers."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Subscribe"
        secondaryButtonText="Learn More"
      />
    </>
  );
}

export default Dashboard;
