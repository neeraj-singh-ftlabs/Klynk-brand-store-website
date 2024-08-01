'use client'
import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
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

const firstSection: Layout16Props = {
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  features: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },

      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

      title:"grid view title"
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
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
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
  tagline: "Tagline",
  heading: "Medium length section heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
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
    { title: "Button", variant: "secondary" },
    {
      title: "Button",
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
    category: "Category",
    readTime: "5 min read",
    title: "Step 1: Tap",
    description:
      "Simply tap on the desired recipe on the Klynk App.",
      readMore:true
     
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Step 2: Load",
    description:
      "Load the necessary ingredients into Riku's compartments.",
      readMore:true
      
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Step 3: Relax",
    description:
      "Sit back and relax as Riku cooks your meal.",
      readMore:true
     
  },
 
];

const headerProps = {
  tagline: "Recipes",
  title: "Discover Delicious Klynk Recipes",
  description: "Explore our collection of mouthwatering recipes and cooking tips"
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

const Layout42Defaults: Layout42Props = {
  heading: "Connecting the dots in your cooking journey with innovative kitchen solutions.",
  description:
    "Klynk is revolutionizing home cooking with its innovative hardware, software, and services. Our goal is to make cooking easy for everyone with advanced products like Riku, the first automatic rice and curry maker, and Semi, a smart induction cooktop. We also offer Klynk Recipes, a personalized platform for chefs, and the Klynk App, a collaborative meal planning and grocery list app. Our vision is fully automated kitchens that save time and effort. Join us on this journey into the future of home cooking!",
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
  heading: "Customer testimonials",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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

function Home() {

  return (
    <div>
      <Hero {...heroProps} />
     

      <ConnectingDots {...Layout42Defaults} />
      <ImageWithDescription {...firstSection} />
      <ImageWithDescription {...secondSection} />
      <ImageWithDescription {...firstSection} />
      <ImageWithDescription {...fourthSection} />
      <JoinCommunity
        heading="Join the Klynk Community Today"
        paragraph="Get exclusive content and updates from Klynk, the future of home cooking."
        primaryButtonText="Join"
        secondaryButtonText="Learn More"
      />
      <BlogsSection blogPosts={blogPosts} headerProps={headerProps} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <AwardsAndNews {...Logo4Defaults} />
    </div>
  );
}

export default Home;
