import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import { Logo4 as AwardsAndNews } from "@/components/views/home/AwardsAndNews";
import { Layout42 as ConnectingDots } from "@/components/views/home/ConnectingDots";
import { Testimonial17 as CustomerTestimonials } from "@/components/views/home/CustomerTestimonials";
import BlogsSection, { BlogPost } from "@/components/views/blog/BlogsSection";
import JoinCommunity from "@/components/views/home/JoinCommunity";
import { RxChevronRight } from "react-icons/rx";

import React from "react";



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

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Step 1: Tap",
    description:
      "Simply tap on the desired recipe on the Klynk App.",
     
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Step 2: Load",
    description:
      "Load the necessary ingredients into Riku's compartments.",
      
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    category: "Category",
    readTime: "5 min read",
    title: "Step 3: Relax",
    description:
      "Sit back and relax as Riku cooks your meal.",
     
  },
 
];

const headerProps = {
  tagline: "Recipes",
  title: "Discover Delicious Klynk Recipes",
  description: "Explore our collection of mouthwatering recipes and cooking tips"
};

function Home() {
  return (
    <div>
       {/* <Hero {...heroProps}/>
      <ConnectingDots />
      <ImageWithDescription {...firstSection} />
      <ImageWithDescription {...secondSection} />
      <ImageWithDescription {...firstSection} />
      <ImageWithDescription {...fourthSection} />
      <JoinCommunity  heading="Medium length heading goes here"
      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."
      primaryButtonText="Primary Button"
      secondaryButtonText="Secondary Button" />
      <BlogsSection blogPosts={blogPosts} headerProps={headerProps} />
      <CustomerTestimonials />
      <AwardsAndNews /> */}
    </div>
  );
}

export default Home;
