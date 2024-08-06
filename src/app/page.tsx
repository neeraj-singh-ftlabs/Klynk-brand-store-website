'use client'
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import { Logo4 as AwardsAndNews, Logo4Props } from "@/components/views/home/AwardsAndNews";
import { Layout42 as ConnectingDots, Layout42Props } from "@/components/views/home/ConnectingDots";
import { Testimonial17 as CustomerTestimonials, Testimonial17Props } from "@/components/views/home/CustomerTestimonials";
import BlogsSection, { BlogPost } from "@/components/views/blog/BlogsSection";
import JoinCommunity from "@/components/views/home/JoinCommunity";
import { RxChevronRight } from "react-icons/rx";
import { useState } from "react";
import React from "react";
import SubscribeModal from "@/components/common/SubscribeModal";
import UpgradeExpSection from "@/components/common/rightImageDesc/RightImageDescSection";
import Carousel from "@/components/common/Carousel";
import { CreateAndShare, Layout396Props } from "@/components/views/home/CreateAndShare";
import { Header102Props, HeroCourosel } from "@/components/heroCourosel";
import { CravingChef, Layout422Props } from "@/components/views/home/CravingChef";
import ChefHatIcon from '../../public/assets/Images/Icons/ChefHat.svg'
import Logo2 from "../../public/assets/Images/Icons/SmokeBordered.svg";
import MobileWireless from "../../public/assets/Images/Icons/MobileWireless.svg";
import SecureIcon from "../../public/assets/Images/Icons/Secure.svg";
import WeighingMachineIcon from "../../public/assets/Images/Icons/WeighingMachine.svg";
import ThermometerIcon from "../../public/assets/Images/Icons/Thermometer.svg";

const firstSection: Layout16Props = {
  tagline: "Meet Semi",
  heading: "India's 1st Intelligent Induction Cooktop",
  description:
    "Introducing Semi, an advanced cooktop designed to enhance your cooking experience with seamless operation and innovative features, ensuring precision and ease in every cooking experience.",
  features: [
    {
      icon: {
        src: ChefHatIcon,
        alt: "Relume logo 1",
      },

      paragraph: "Auto Guided Cooking",

      title: "grid view title",
    },
    {
      icon: {
        src: Logo2,
        alt: "Relume logo 2",
      },
      paragraph: "Automated Heating",
    },
    {
      icon: {
        src: WeighingMachineIcon,
        alt: "Relume logo 3",
      },
      paragraph: "Smart Application Control",
    },
    {
      icon: {
        src: MobileWireless,
        alt: "Relume logo 2",
      },
      paragraph: "Advanced Safety Features",
    },
    {
      icon: {
        src: SecureIcon,
        alt: "Relume logo 3",
      },
      paragraph: "Built-in Weighing Scale",
    },
    {
      icon: {
        src: ThermometerIcon,
        alt: "Relume logo 2",
      },
      paragraph: "Precise Temperature Control",
    },
  ],
  buttons: [{ title: "Learn More", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};

const secondSection: Layout16Props = {
  tagline: "Meet Riku",
  heading: "The World's 1st Automatic Rice & Curry Maker",
  description:
    "Step into the future of home cooking with Riku. Simplify meal prep and enjoy effortless automation. Choose recipes, add ingredients, and let Riku handle the rest, reducing kitchen time and effort.",
  features: [
    {
      icon: {
        src: ThermometerIcon,
        alt: "Relume logo 1",
      },

      paragraph: "7” Multi-Touch Capacitive Display",

      title: "grid view title",
    },
    {
      icon: {
        src: ChefHatIcon,
        alt: "Relume logo 2",
      },
      paragraph: "Innovative Smart Stirrer",
    },
    {
      icon: {
        src: Logo2,
        alt: "Relume logo 3",
      },
      paragraph: "8 Ingredient Pods",
    },
    {
      icon: {
        src: WeighingMachineIcon,
        alt: "Relume logo 2",
      },
      paragraph: "Integrated Spice Storage (10+ Pods)",
    },
    {
      icon: {
        src: MobileWireless,
        alt: "Relume logo 3",
      },
      paragraph: "Built-in Weighing Scale",
    },
    {
      icon: {
        src: SecureIcon,
        alt: "Relume logo 2",
      },
      paragraph: "Inbuilt Refillable Water & Oil Containers",
    },
  ],
  buttons: [{ title: "Learn More", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  reverse: true,
};

const fourthSection: Layout16Props = {
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",

  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  reverse: true,
};

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Blog Category",
    readTime: "Aug 22, 2024",
    title: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.",
    description: "Simply tap on the desired recipe on the Klynk App.",
    readMore: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Blog Category",
    readTime: "Aug 22, 2024",
    title: "Step 2: Load",
    description: "Load the necessary ingredients into Riku's compartments.",
    readMore: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Blog Category",
    readTime: "Aug 22, 2024",
    title: "Step 3: Relax",
    description: "Sit back and relax as Riku cooks your meal.",
    readMore: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Blog Category",
   readTime: "Aug 22, 2024",
    title: "Step 4: Relax",
    description: "Sit back and relax as Riku cooks your meal.",
    readMore: true,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Blog Category",
   readTime: "Aug 22, 2024",
    title: "Step 5: Relax",
    description: "Sit back and relax as Riku cooks your meal.",
    readMore: true,
  },
];

const headerProps = {
  // tagline: "Recipes",
  title: "Discover the Future of Automated Cooking and Innovation",
  // description: "Explore our collection of mouthwatering recipes and cooking tips"
};

const Header102Defaults: Header102Props = {
  buttons: [
    { title: "Learn More " },
    { title: "Get Demo", variant: "primary" },
  ],
  images: [
    {
      src: "https://img.freepik.com/premium-photo/microwave-oven-black-background_472640-1469.jpg",
      alt: "Placeholder image 1",
      heading: "The Feature of Home Cooking is  here",
      description:
        "Let klynk's smart technology take the stress out of cooking.",
    },

    {
      src: "https://img.freepik.com/premium-photo/microwave-oven-black-background_472640-1469.jpg",
      alt: "Placeholder image 2",
      heading: "Smart Cooking, Simplified",
      description:
        "Let klynk's smart technology take the stress out of cooking.",
    },
  ],
};


const Layout42Defaults: Layout42Props = {
  heading: "Innovating the Future of Home Cooking",
  description:
    "At Klynk, we merge the art and science of cooking with smart technology to revolutionize your kitchen experience. Our intuitive appliances streamline meal preparation, delivering perfect, chef-quality results every time. Even with AI at its core, our technology ensures every dish retains the perfect human touch and taste. We are dedicated to making cooking a joyful and effortless endeavor for everyone, every time.",
};

const Logo4Defaults: Logo4Props = {
  heading: "Discover the Latest Awards and News",
  description:
    "Stay updated with our company's achievements and exciting updates.",
  buttons: [
    { title: "Learn More", variant: "secondary" },
    {
      title: "Sign Up",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
  logos: [
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Placeholder image",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Placeholder image",
    },
  ],
};

const Testimonial17Defaults: Testimonial17Props = {
  heading: "What Our Users Are Saying",
  description:
    "Hear from satisfied Klynk customers who have transformed their cooking experience with our innovative solutions.",
  testimonials: [
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 2",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 3",
      },
      name: "Name Surname",
      position: "Position",
      companyName: "Company name",
      numberOfStars: 5,
    },
  ],
};
const Layout396Defaults: Layout396Props = {
  //   tagline: "Tagline",
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
  heading: "Smart Recipes",
  description:
    "Klynk Recipe Platform lets you create smart, machine-readable recipes for precise, consistent cooking with guided instructions. Share your culinary creations, build a personal food space, and connect with a community of food enthusiasts",
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
const Layout422Defaults: Layout422Props = {
  heading: "Craving Chef-Worthy Meals?",
  description:
    "Transform your kitchen and enjoy stress-free homemade delicacies with Klynk's innovative solutions.",
  features: [
    {
      tagline: "Riku",
      url: "#",
      heading: "Explore",
      description:
        "Not a pro at cooking?", 
        subDes:"Let Riku handle it while you enjoy what you love.",
      image: {
        src: "https://img.freepik.com/premium-photo/microwave-oven-black-background_472640-1469.jpg",
        alt: "Placeholder image 1",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Semi",
      url: "#",
      heading: "Explore",
      description:
        "Craving chef-quality meals?",
        subDes:"Achieve perfect taste every time with Semi.",
      image: {
        src: "https://img.freepik.com/premium-photo/microwave-oven-black-background_472640-1469.jpg",
        alt: "Placeholder image 2",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};

function Home() {

  return (
    <div>
      <HeroCourosel {...Header102Defaults} />
      <ConnectingDots {...Layout42Defaults} />
      <CravingChef {...Layout422Defaults} />
      <ImageWithDescription {...firstSection} />
      <ImageWithDescription {...secondSection} />
      <ImageWithDescription {...firstSection} color={true} />
      {/* <ImageWithDescription {...fourthSection} /> */}
      <CreateAndShare {...Layout396Defaults} />
      <UpgradeExpSection
        status={true}
        title="Join Our Foodie"
        description="Subscribe for Exclusive Recipes and Blog Updates"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Submit"
        secondaryButtonText="Learn More"
      />
      {/* <BlogsSection blogPosts={blogPosts} headerProps={headerProps} /> */}
      <CustomerTestimonials {...Testimonial17Defaults} />
      <Carousel blogPosts={blogPosts} headerProps={headerProps} />
      <AwardsAndNews {...Logo4Defaults} />
    </div>
  );
}

export default Home;
