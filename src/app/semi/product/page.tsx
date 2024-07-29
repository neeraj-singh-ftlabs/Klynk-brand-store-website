import NavigationTabs from "@/components/tabs/Tab";
import ProductPage from "@/components/views/riku/ProductDetail";
import { Layout381Props, SaveTime } from "@/components/views/riku/SaveTime";
import { Logo1Props, Trusted } from "@/components/views/riku/Trusted";
import {
  Gallery1Props,
  Gallery1 as SingleGallary,
} from "@/components/views/semi/SingleGallary";
import TableContent from "@/components/views/semi/TableContent";
import { RxChevronRight } from "react-icons/rx";
import React from "react";
import {
  Testimonial17 as CustomerTestimonials,
  Testimonial17Props,
} from "@/components/views/home/CustomerTestimonials";
import OtaUpdates from "@/components/views/semi/OtaUpdates";
import ProductDocument from "@/components/views/semi/ProductDocument";
import { Faq3 as Faq, Faq3Props } from "@/components/common/faq1/Faq1";
import ProductsSection from "@/components/views/semi/ProductList";

const page = () => {
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
  const Gallery1Defaults: Gallery1Props = {
    heading: "Image Collection",
    description:
      "Explore our stunning collection of product images and designs",
    images: [
      {
        url: "#",
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 1",
      },
    ],
  };
  const OtaData: any = {
    subHeading: "Simplify",
    Heading: "Free OTA Updates",
    description:
      "Discover innovative solutions that make cooking easier and more enjoyable.",
  };
  const Layout381Defaults: Layout381Props = {
    tagline: "Effortless",
    heading: "Save Time with Semi",
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
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
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        button: {
          title: "Button",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight />,
        },
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
        title: "How to order?",
        answer:
          "To place an order, simply visit our website, select the desired product, and proceed to checkout. If you need any assistance, feel free to contact our customer support.",
      },
      {
        title: "What are the payment options?",
        answer:
          "We accept various payment methods, including credit cards, debit cards, and online payment platforms such as PayPal. You can choose the option that suits you best during the checkout process.",
      },
      {
        title: "Do you offer refunds?",
        answer:
          "Yes, we have a hassle-free refund policy. If you are not satisfied with your purchase, you can contact our customer support within 30 days of receiving the product to initiate a return and refund process.",
      },
      {
        title: "How long is the warranty?",
        answer:
          "Our products come with a standard one-year warranty. If you encounter any issues during this period, please reach out to our customer support, and we will assist you accordingly.",
      },
      {
        title: "Can I cancel my order?",
        answer:
          "Yes, you can cancel your order before it is shipped. Please contact our customer support as soon as possible with your order details to request a cancellation.",
      },
    ],
  };
  const features: any = [
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
      heading: "User Manual",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
      heading: "Warranty",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
      heading: "Error Troubleshooting",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  const products: any = [
    {
      name: "Product name",
      variant: "Variant",
      price: 55,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4d1512ff35aeff0563389b3554658c1c58c77c9af42ab8b28a286c693238f3?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      name: "Product name",
      variant: "Variant",
      price: 55,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4d1512ff35aeff0563389b3554658c1c58c77c9af42ab8b28a286c693238f3?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      name: "Product name",
      variant: "Variant",
      price: 55,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4d1512ff35aeff0563389b3554658c1c58c77c9af42ab8b28a286c693238f3?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      name: "Product name",
      variant: "Variant",
      price: 55,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4d1512ff35aeff0563389b3554658c1c58c77c9af42ab8b28a286c693238f3?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      name: "Product name",
      variant: "Variant",
      price: 55,
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/6d4d1512ff35aeff0563389b3554658c1c58c77c9af42ab8b28a286c693238f3?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
  ];

  const tabs = [
    { title: "Overview", url: "/semi/overview" },
    { title: "Technology", url: "/semi/technology" },
    { title: "Product", url: "/semi/product" },
    // { title: "Cooking", url: "/semi/cooking" },
  ];
  const tableOfContentsItems = [
    { title: "Heading 2", level: 1 },
    { title: "Heading 3", level: 2 },
    { title: "Heading 4", level: 3 },
    { title: "Heading 5", level: 4 },
    { title: "Heading 6", level: 5 },
  ];
  const productPageDetails = {
    heading: "Semi Cooker",
    price: "55",
    description:
      " Discover the convenience and versatility of the Riku Cooker. With its automatic cooking capabilities, you can enjoy delicious meals without the stress and effort.",
  };
  return (
    <>
      <NavigationTabs tabs={tabs} />
      <ProductPage productPageDetails={productPageDetails} />
      <Trusted {...Logo1Defaults} />
      <TableContent tableOfContentsItems={tableOfContentsItems} />
      <SingleGallary {...Gallery1Defaults} />
      <ProductsSection products={products} />
      <SaveTime {...Layout381Defaults} />
      <OtaUpdates color={false} OtaData={OtaData} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <ProductDocument features={features} />
      <Faq {...Faq3Defaults} />
      <OtaUpdates color={true} OtaData={OtaData} />
    </>
  );
};

export default page;
