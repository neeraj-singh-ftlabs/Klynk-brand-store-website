import React from 'react'
import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import { Team5 as OurTeam, Team5Props} from '@/components/views/aboutus/OurTeam';
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ProductFAQ } from "@/components/views/riku/ProductFAQ";
import { Faq1Props } from '@/components/views/riku/FAQ';
import { RxChevronRight } from "react-icons/rx";
import OpenPositions, { JobListingProps } from '@/components/views/aboutus/OpenPositions';
import Timeline, { HeroSectionProps, TimelineItemProps } from '@/components/views/aboutus/Timeline';


const heroProps: Header5Props = {
    center:true,
    tagline:"Revolutionize",
    heading: "Connecting the Dots",
    description:
      "Discover a world of stress-free cooking with Klynk's innovative ecosystem of products and services.",
    buttons: [{ title: "Learn More" }, { title: "Sign Up", variant: "secondary-alt" }],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
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

  const Team5Defaults: Team5Props = {
    tagline: "Innovative",
    heading: "Meet Our Team",
    description: "Passionate experts dedicated to revolutionizing the cooking industry.",
    teamMembers: [
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 1",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 2",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 3",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 4",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 7",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
      {
        image: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Placeholder image 8",
        },
        name: "Full name",
        jobTitle: "Job title",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
        socialLinks: [
          { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
          { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
          { href: "#", icon: <BiLogoDribbble className="size-6" /> },
        ],
      },
    ],
    footer: {
      heading: "We're hiring!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      button: { title: "Open positions", variant: "secondary" },
    },
  };
  const Faq1Defaults: Faq1Props = {
    padding:false,
    heading: "FAQs",
    description:
      "Find answers to frequently asked questions about Klynk, its products, and its services.",
    questions: [
      {
        title: "How does Klynk work?",
        answer:
          "Klynk is an ecosystem of hardware, software, and services that aims to simplify home cooking. With products like Riku, the world's first automatic rice and curry maker, and Semi, a smart induction cooktop, Klynk offers innovative solutions to save time and effort in the kitchen. The Klynk App and Klynk Recipes further enhance the cooking experience by providing collaborative meal planning and personalized food spaces for chefs and food influencers.",
      },
      {
        title: "What are the benefits of using Klynk products?",
        answer:
          "Using Klynk products brings numerous benefits to your cooking journey. By automating the cooking process, Klynk saves hands-on cooking time, reduces effort, and minimizes the need for cooking skills. Whether you're a beginner or an experienced chef, Klynk's innovative solutions make home cooking easier and more enjoyable.",
      },
      {
        title: "Are Klynk products easy to use?",
        answer:
          "Yes, Klynk products are designed with user-friendliness in mind. With intuitive interfaces and step-by-step instructions, anyone can easily operate Klynk devices. Whether you're cooking rice and curry with Riku or using the smart induction cooktop Semi, Klynk ensures a seamless and hassle-free cooking experience.",
      },
      {
        title: "What is the Klynk community?",
        answer:
          "The Klynk community is a gathering of cooking enthusiasts, chefs, and food influencers. Through Klynk Recipes, a personalized food space, and the Klynk App, a collaborative meal planning and grocery list app, the community connects, shares, and explores new culinary experiences. Join the Klynk community and be part of the future of home cooking.",
      },
      {
        title: "How can I get in touch with Klynk?",
        answer:
          "If you have any more questions or need further assistance, please don't hesitate to contact us. Our team is ready to provide you with the information and support you need. Reach out to us through the contact details provided below.",
      },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Contact our support team for further assistance.",
    button: {
      title: "Contact",
      variant: "secondary",
    },
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
  const heroProps1: Header5Props = {
    small:true,
    heading: "Discover the Klynk Difference",
    description:
      "Experience the future of home cooking with our innovative products and services.",
    buttons: [{ title: "Learn More" }, { title: "Join Now", variant: "secondary-alt" }],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };

  const jobListings: JobListingProps[] = [
    {
      title: "Job Title",
      department: "Department",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      contractType: "Contract Type"
    },
    {
      title: "Job Title",
      department: "Department",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      contractType: "Contract Type"
    },
    {
      title: "Job Title",
      department: "Department",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      location: "Location",
      contractType: "Contract Type"
    }
  ];

  const heroProps2 : HeroSectionProps = {
    tagline: "Tagline",
    heading: "Medium length section heading goes here",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
    primaryButtonText: "Button",
    secondaryButtonText: "Button"
  };

  const timelineItems :TimelineItemProps[] = [
    {
      date: "Date",
      content: "January 2020 - Launch of Riku, the world's first automatic rice and curry maker.",
      buttonText: "Button",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0f19beb789927e5cdd78eda75a52cb2bd55ed4bfaae93c27252618a1087a96d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    },
    {
      date: "Date",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Button",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0f19beb789927e5cdd78eda75a52cb2bd55ed4bfaae93c27252618a1087a96d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    },
    {
      date: "Date",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Button",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0f19beb789927e5cdd78eda75a52cb2bd55ed4bfaae93c27252618a1087a96d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    }
    ,
    {
      date: "Date",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      buttonText: "Button",
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b0f19beb789927e5cdd78eda75a52cb2bd55ed4bfaae93c27252618a1087a96d?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
    }
  ];

function AboutUs
() {
  return (
    <div>
<Hero {...heroProps}/>
<ImageWithDescription {...firstSection} />
<Timeline heroProps={heroProps2} timelineItems={timelineItems} />
<OurTeam {...Team5Defaults} />
<ProductFAQ {...Faq1Defaults} />
<Hero {...heroProps1}/>
<OpenPositions jobListings={jobListings} />
{/* <Timeline heroProps={heroProps2} timelineItems={timelineItems} /> */}

    </div>
  )
}

export default AboutUs
