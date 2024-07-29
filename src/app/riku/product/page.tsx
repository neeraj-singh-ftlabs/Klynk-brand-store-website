import { Layout380 as MultiCards } from "@/components/common/MultiCards/MultiCards";
import CookingRiku from "@/components/views/riku/CookingRiku";
import { Faq1Props } from "@/components/views/riku/FAQ";
import {
  Layout423Props,
  Possibilities,
} from "@/components/views/riku/Possiblities";
import ProductPage from "@/components/views/riku/ProductDetail";
import { Faq4Props, ProductFAQ } from "@/components/views/riku/ProductFAQ";
import { Layout381Props, SaveTime } from "@/components/views/riku/SaveTime";
import { Cta8Props, StayUpdated } from "@/components/views/riku/StayUpdated";
import TimelineSection from "@/components/views/riku/TimelineSection";
import { Logo1Props, Trusted } from "@/components/views/riku/Trusted";
import React from "react";
import { RxChevronRight } from "react-icons/rx";
import BlogsSection, { BlogPost } from "@/components/views/blog/BlogsSection";
import NavigationTabs from "@/components/tabs/Tab";
import {
  Testimonial17 as CustomerTestimonials,
  Testimonial17Props,
} from "@/components/views/home/CustomerTestimonials";
import { ContentSection } from "@/components/views/riku/PreOrder";

const Logo1Defaults: Logo1Props = {
  heading: "Trusted by top global companies for their cooking needs",
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
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 4",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 4",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 5",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/relume-logo.svg",
      alt: "Relume logo 5",
    },
    {
      src: "https://relume-assets.s3.amazonaws.com/webflow-logo.svg",
      alt: "Webflow logo 6",
    },
  ],
};
const Layout381Defaults: Layout381Props = {
  tagline: "Effortless",
  heading: "Save Time with Riku",
  description: "Discover the joy of cooking without the hassle",
  smallCard: {
    tagline: "Effortless",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-bento-portrait2.svg",
      alt: "Placeholder image 1",
    },
    heading: "Experience the Convenience of Hands-Free Cooking",
    description:
      "Enjoy the benefits of hands-free cooking with Riku, the automatic rice and curry maker",
    button: {
      title: "Button",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight />,
    },
  },
  bigCard: {
    tagline: "Tagline",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
      alt: "Placeholder image 2",
    },
    heading: "Medium length section heading goes here",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    buttons: [
      { title: "Button", variant: "secondary" },
      {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    ],
  },
  featureSections: [
    {
      icon: {
        src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
        alt: "Relume logo 1",
      },
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      button: {
        title: "Button",
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
      heading: "Medium length section heading goes here",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
      button: {
        title: "Button",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
const Layout423Defaults: Layout423Props = {
  tagline: "Effortless",
  heading: "Discover the Possibilities",
  description: "Experience the Convenience of Smart Cooking Technology",
  features: [
    {
      tagline: "Effortless",
      url: "#",
      heading: "Experience the Future of Cooking with Riku",
      description:
        "Simplify Your Cooking Experience with Riku: The Automatic Rice and Curry Maker",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Effortless",
      url: "#",
      heading: "Experience the Future of Cooking with Riku",
      description:
        "Simplify Your Cooking Experience with Riku: The Automatic Rice and Curry Maker",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 2",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Effortless",
      url: "#",
      heading: "Experience the Future of Cooking with Riku",
      description:
        "Simplify Your Cooking Experience with Riku: The Automatic Rice and Curry Maker",
      image: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 3",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
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
const Cta8Defaults: Cta8Props = {
  heading: "Stay Updated with Riku News",
  description: "Get the latest updates and exclusive offers",
  inputPlaceholder: "Your Email Address",
  button: { title: "Join Now" },
  termsAndConditions: `
  <p class='text-xs'>
    By joining, you agree to our Terms and Conditions
    <a href='#' class='underline focus-visible:outline-none'>Terms and Conditions</a>.
  </p>
  `,
};
const headerProps = {
  tagline: "Simplify",
  title: "Cooking made easy with Riku's 3 simple Steps",
  description:
    "Discover a new way to cook with Riku. Tap, load, and relax as Riku takes care of the rest.",
};

const blogPosts: BlogPost[] = [
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Step 1: Tap",
    description: "Simply tap on the desired recipe on the Klynk App.",
    readMore: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Step 2: Load",
    description: "Load the necessary ingredients into Riku's compartments.",
    readMore: false,
  },
  {
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/57271da0931e0cee3bfaa67da24152bca3aeb78c89df4b2caa85a533f74d5843?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    //   category: "Category",
    //   readTime: "5 min read",
    title: "Step 3: Relax",
    description: "Sit back and relax as Riku cooks your meal.",
    readMore: false,
  },
];
const tabs = [
  { title: "Overview", url: "/riku/overview" },
  { title: "Technology", url: "/riku/technology" },
  { title: "Product", url: "/riku/product" },
  { title: "Cooking", url: "/riku/cooking" },
];
const productPageDetails: any = {
  heading: "Riku Cooker",
  price: "55",
  description:
    " Discover the convenience and versatility of the Riku Cooker. With its automatic cooking capabilities, you can enjoy delicious meals without the stress and effort.",
};
const tagline = "Revolutionary";
const heading = "Experience the Future of Cooking with Riku";
const description =
  "Introducing Riku, the world's first automatic rice and curry maker. Say goodbye to the hassle of cooking and enjoy delicious meals with just the touch of a button. With its innovative technology and user-friendly interface, Riku makes cooking easier and more convenient than ever before.";

const timelineData: any = [
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
  {
    date: "Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    imageUrl:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ddaebb816da109a7d9a51eb2ffc5b32a3ad1163ad276b2d4d289ede0166be2f6?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  },
];
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
const PreOrderData: any = {
  title: "Pre-order Riku today!",
  description: "Experience the future of home cooking with Riku.",
};

function Product() {
  return (
    <>
      <NavigationTabs tabs={tabs} />
      <ProductPage productPageDetails={productPageDetails} />
      <Trusted {...Logo1Defaults} />
      <TimelineSection timelineData={timelineData} />
      <CookingRiku
        tagline={tagline}
        heading={heading}
        description={description}
      />
      <SaveTime {...Layout381Defaults} />
      <Possibilities {...Layout423Defaults} />
      <BlogsSection blogPosts={blogPosts} headerProps={headerProps} />
      <ContentSection {...PreOrderData} />
      <ProductFAQ {...Faq1Defaults} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <StayUpdated {...Cta8Defaults} />
    </>
  );
}

export default Product;
