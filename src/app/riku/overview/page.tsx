import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import { RxChevronRight } from "react-icons/rx";
import { Header13Props, Header13 as VideoSection } from "@/components/views/riku/VideoSection";
import BlogsSection, { BlogPost } from "@/components/views/blog/BlogsSection";
import React from "react";
import Banner, { FeatureSectionProps } from "@/components/views/riku/Banner";
import MultiImageInfo from "@/components/common/multiImageInfo/MultiImageInfo";
import { Logo3 as LogoSection } from "@/components/views/riku/LogoSection";
import CenterImageWithDesc, {
  CenterImageFeatureSectionProps,
} from "@/components/common/CenterImageWithDesc/CenterImageWithDesc";
import { Layout380Props, Layout380 as MultiCards } from "@/components/common/MultiCards/MultiCards";
import LifeWithRikuSection, {
  LifeWithRikuSectionProps,
} from "@/components/views/riku/LifeWithRikuSection";
import UpgradeExpSection from "@/components/common/rightImageDesc/RightImageDescSection";
import { Faq3 as Faq, Faq3Props } from "@/components/common/faq1/Faq1";
import NavigationTabs from "@/components/tabs/Tab";

const CenterImageProps: CenterImageFeatureSectionProps = {
  tagline: "Revolutionize",
  heading: "Personalize Your Dishes with Riku's Advanced AI",
  description:
    "With Riku, you can adjust the seasoning, texture, thickness, and preferences of your dishes, creating a truly personalized culinary experience. Say goodbye to one-size-fits-all recipes and hello to a new level of cooking freedom.",
  features: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Enhance Your Flavors",
      description: "Discover the power of Riku's advanced AI technology that allows you to adjust seasonings effortlessly.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Perfect Consistency Every Time",
      description: "Achieve the ideal texture and thickness in your dishes with Riku's precise control.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Cater to Your Tastes",
      description: "Customize your meals according to your preferences and dietary restrictions effortlessly.",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/8f4bbae6e855e5004c289a1a887ee0c767b66f0780c9b6b60bb5e2fed8d8b841?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Cook with Confidence",
      description: "Experience the joy of cooking without the stress and effort, thanks to Riku's advanced features.",
    },
  ],
  mainImage:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
};

const prop: FeatureSectionProps = {
  heading: "Save Time and Effort in the Kitchen with Riku, the Ultimate Cooking Companion",
  description: "Riku is designed to save you valuable time and energy in the kitchen, allowing you to focus on what matters most.",
  statistics: [
    { title: "2hrs/day", description: "Cut cooking time in half with Riku's innovative features." },
    { title: "730hrs/year", description: "Spend less time cooking and more time enjoying your meals." },
  ],
  backgroundImageSrc:
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
};

const featureData: LifeWithRikuSectionProps = {
  heading: "Life with riku",
  features: [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/400558788122a3316b26788ebf16a34456b9069a62ac56124e5eeb0c9375360f?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Fresh and healthy meals evertime",
      description:
        "Experience the convenience of collaborative meal planning and grocery list management with the Klynk App",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Healthy lifestyle",
      description:
        "Join the community of cooking enthusiasts and explore a world of culinary possibilities",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d2adb108f093cf63db07ad907a331f1c98ffa4e001b7d4418320dbefee150d3?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
      title: "Do what you love while riku cooks",
      description:
        "Make cooking effortless and enjoyable with Klynk's range of products and services",
    },
  ],
};
const heroProps: Header5Props = {
    heading: "Effortless Cooking Solution",
    description:
      "Experience the future of cooking with Riku, the world's first automatic rice and curry maker.",
    buttons: [{ title: "Learn More" }, { title: "Sign Up", variant: "secondary-alt" }],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };
  const headerProps = {
    tagline: "Simplify",
    title: "Cooking made easy with Riku's 3 simple Steps",
    description: "Discover a new way to cook with Riku. Tap, load, and relax as Riku takes care of the rest."
  };

  const blogPosts: BlogPost[] = [
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
      title: "Step 1: Tap",
      description:
        "Simply tap on the desired recipe on the Klynk App.",
        readMore:false
       
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
      title: "Step 2: Load",
      description:
        "Load the necessary ingredients into Riku's compartments.",
        readMore:false
        
    },
    {
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
      title: "Step 3: Relax",
      description:
        "Sit back and relax as Riku cooks your meal.",
        readMore:false
       
    },
   
  ];

  const Header13Defaults: Header13Props = {
    heading: "Experience the magic of Riku in action",
    description:
      "See how Riku revolutionizes cooking with its automatic features and delicious results.",
    buttons: [{ title: "Learn More" }, { title: "Sign Up", variant: "secondary" }],
    video: "https://www.youtube.com/embed/8DKLYsikxTs?si=Ch9W0KrDWWUiCMMW",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-video-thumbnail.svg",
      alt: "Placeholder image",
    },
  };

  const Layout380Defaults: Layout380Props = {
    tagline: "Revolutionary",
    heading: "Effortless Cooking Made Easy",
    description: "Schedule, monitor, and automate your cooking experience",
    smallCard: {
      tagline: "Revolutionary",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-portrait.svg",
        alt: "Placeholder image 1",
      },
      heading: "Effortless Meal Planning and Grocery Shopping",
      description: "Simplify your meal planning and grocery list with Klynk App",
      button: {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    bigCard: {
      tagline: "Innovative",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 2",
      },
      heading: "Consistent Results Every Time You Cook",
      description:
        "With Riku, enjoy perfectly cooked rice and curry without any hassle or guesswork",
      buttons: [
        { title: "Learn More", variant: "secondary" },
        {
          title: "Sign Up",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
      ],
      reverse:true
    },
    featureSections: [
      {
        icon: {
          src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
          alt: "Relume logo 1",
        },
        heading: "Remote Cooking Made Simple ",
        description: "Monitor and control your cooking from anywhere with ease",
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
        heading: "Create and Share Your Own Recipes",
        description: "Join the community of chefs and food influencers",
        button: {
          title: "Learn More",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
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

  const tabs = [
    { title: 'Overview', url: '/riku/overview' },
    { title: 'Technology', url: '/riku/technology' },
    { title: 'Product', url: '/riku/product' },
    { title: "Cooking", url: "/riku/cooking" },
  ];

function Overview() {
  return (
    <div>
      <NavigationTabs  tabs={tabs} />
      <Hero {...heroProps}/>
      <VideoSection {...Header13Defaults} />
      <BlogsSection blogPosts={blogPosts} headerProps={headerProps}/>
      <Banner {...prop} />
      <MultiImageInfo
        reverse={false}
        tagline="Simplify"
        heading="Delicious Recipes Made Easy with Riku"
        description="From breakfast to curries and shallow fry to desserts, explore a wide range of one-pot recipes that Riku can effortlessly make. Experience the flavors of world cuisines in the comfort of your own kitchen."
        primaryButtonText="Learn More"
        secondaryButtonText="Sign Up"
      />
      <LogoSection />
      <CenterImageWithDesc {...CenterImageProps} />
      <MultiCards {...Layout380Defaults} />
      <LifeWithRikuSection
        heading={featureData.heading}
        features={featureData.features}
      />
      <UpgradeExpSection
        title="Upgrade Your Cooking Experience Today"
        description="Say goodbye to long hours in the kitchen and enjoy delicious meals effortlessly."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
          primaryButtonText="Learn More"
        secondaryButtonText="Buy Now"
      />
      <Faq {...Faq3Defaults} />
    </div>
  );
}

export default Overview;
