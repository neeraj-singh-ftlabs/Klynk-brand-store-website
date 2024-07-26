import NavigationTabs from "@/components/tabs/Tab";
import {
  Testimonial17 as CustomerTestimonials,
  Testimonial17Props,
} from "@/components/views/home/CustomerTestimonials";
import {
  CookingHeader,
  PortfolioHeader6Props,
} from "@/components/views/riku/CookingHeader";
import {
  Layout17 as ImageWithDescription,
  Layout16Props,
} from "@/components/common/ImageWithDescription/ImageWithDescription";
import CustomizebleMeals from "@/components/views/riku/CustomizableMeals";
import { Faq1Props } from "@/components/views/riku/FAQ";
import { Cta1Props, MagicRiku } from "@/components/views/riku/MagicRiku";
import { ProductFAQ } from "@/components/views/riku/ProductFAQ";
import TimeSaving from "@/components/views/riku/TimeSavingCooking";
import { RxChevronRight } from "react-icons/rx";
import React from "react";

const page = () => {
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
  const paragraphs: any = [
    "Cooking with Riku is a game-changer. With its intuitive interface and advanced features, preparing meals has never been easier. Say goodbye to the stress and effort of traditional cooking methods. Riku allows you to create mouthwatering dishes with just a few taps, saving you precious time in the kitchen.Whether you're a seasoned chef or a novice in the culinary world, Riku is designed to simplify your cooking experience. Its smart technology ensures precise temperature control and automated cooking processes, guaranteeing consistent and delicious results every time.Imagine coming home to the aroma of a perfectly cooked meal, without having to spend hours in the kitchen. Riku's innovative design and functionality make it a must-have for any modern kitchen.Experience the future of home cooking with Riku and unlock a world of culinary possibilities. From gourmet recipes to everyday favorites, Riku empowers you to explore new flavors and expand your cooking repertoire Discover the joy of effortless cooking with Riku and revolutionize your culinary journey today.",
  ];

  const infoItems: any = [
    { label: "Benefits", value: "Lorem Ipsum" },
    { label: "Features", value: "Lorem Ipsum" },
    { label: "Experience", value: "Lorem Ipsum" },
    { label: "Explore", value: "Lorem Ipsum" },
  ];
  const MealsProps: any = {
    tagline: "Delicious",
    heading: "Discover Nutritious and Customizable Meals with Riku",
    description:
      "Prepare meals that are not only delicious but also packed with nutritional benefits with Riku. Our automatic rice and curry maker takes the stress out of cooking, allowing you to enjoy homemade meals without any effort. With Riku, you can customize your meals to suit your taste preferences and dietary needs, ensuring that every bite is satisfying and nourishing.",
    primaryButtonText: "Learn More",
    secondaryButtonText: "Sign Up",
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7cd6a1b6490f84f1dd56afcc6f23c9a21e49c37f5b2535173cf89a22d6367c39?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
  };
  const PortfolioHeader6Defaults: PortfolioHeader6Props = {
    heading: "Riku: Revolutionizing Cooking",
    description:
      "Experience the future of cooking with Riku, the world's first automatic rice and curry maker.",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
    tags: [
      {
        url: "#",
        label: "Innovative",
      },
      {
        url: "#",
        label: "Effortless",
      },
      {
        url: "#",
        label: "Convenient",
      },
    ],

    metaDataSections: [
      {
        title: "Client",
        description: "Klynk",
      },
      {
        title: "Date",
        description: "March 2023",
      },
      {
        title: "Role",
        description: "Product Manager",
      },
      {
        url: "#",
        title: "Website",
        description: "www.relume.io",
      },
    ],
  };

  const tabs = [
    { title: "Overview", url: "/riku/overview" },
    { title: "Technology", url: "/riku/technology" },
    { title: "Product", url: "/riku/product" },
    { title: "Cooking", url: "/riku/cooking" },
  ];
 const Cta1Defaults: Cta1Props = {
  heading: "Medium length heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  buttons: [{ title: "Button" }, { title: "Button", variant: "secondary" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
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
  return (
    <>
      <NavigationTabs tabs={tabs} />
      <CookingHeader {...PortfolioHeader6Defaults} />
      <TimeSaving paragraphs={paragraphs} infoItems={infoItems} />
      <ImageWithDescription {...secondSection} />
      <ImageWithDescription {...thirdSection} />
      <CustomizebleMeals {...MealsProps} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <MagicRiku {...Cta1Defaults} />
      <ProductFAQ {...Faq1Defaults} />
    </>
  );
};

export default page;
