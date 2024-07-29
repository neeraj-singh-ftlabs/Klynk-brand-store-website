'use client'
import { RxChevronRight } from "react-icons/rx";
import { EffortlessMeal, Layout4Props } from "@/components/views/app/EffortlessMeal";
import { SimplifyMeal } from "@/components/views/app/SimplifyMeal";
import { Header64Props } from "@/components/views/riku/RevolutionarySection";
import DiscoverDelicious from "@/components/views/app/DiscoverDelicious";
import { Journey, Layout3Props } from "@/components/views/app/Journey";
import { Gallery10Props, ImageCollection } from "@/components/views/app/ImageCollection";
import {
  Testimonial17 as CustomerTestimonials,
  Testimonial17Props,
} from "@/components/views/home/CustomerTestimonials";
import JoinCommunity from "@/components/views/home/JoinCommunity";
import FAQSectionApp from "@/components/views/app/Faq";

const App: React.FC = () => {

 const Header64Defaults: Header64Props = {
   heading: "Simplify Your Meals",
   description: "Discover, Plan, and Shop with Ease using the Klynk App",
 };
const EffortlessMealData: Layout4Props = {
  tagline: "Simplify",
  heading: "Effortless Meal Planning for Your Week",
  description:
    "Plan your meals for the entire week with ease using the Klynk App. Discover a variety of recipes suited for different skill levels and dietary needs, and create shopping lists to streamline your grocery shopping.",
  subHeadings: [
    {
      title: "Plan",
      description:
        "Effortlessly plan meals for the week, saving time and reducing food waste.",
    },
    {
      title: "Discover",
      description:
        "Explore a wide range of recipes tailored to your preferences and dietary needs.",
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
  const SimplyGroceryData: Layout4Props = {
    tagline: "Simplify",
    heading: "Simplify Grocery Shopping with Our Convenient App Feature",
    description:
      "Our Klynk App makes grocery shopping easier than ever. With just a few taps, you can create and manage shopping lists directly from your phone.",
    subHeadings: [
      {
        title: "Create",
        description:
          "Effortlessly create shopping lists for all your cooking needs, ensuring you never forget an ingredient.",
      },
      {
        title: "Manage",
        description:
          "Easily manage your shopping lists, check off items as you go, and stay organized.",
      },
    ],
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };
  const DiscoverData = {
    heading:
      "Discover Delicious Recipes for Every Skill Level and Dietary Need",
    iconSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    description:
      "With the Klynk App, you can explore a wide range of recipes tailored to your cooking skills and dietary preferences. Whether you're a novice or an experienced chef, our app has something for everyone. From quick and easy meals to gourmet dishes, you'll find inspiration for every occasion.",
    imageSrc: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  };
  const DelciousRecipes: Layout4Props = {
    tagline: "Simplify",
    heading: "Discover Delicious Recipes and Simplify Meal Planning",
    description:
      "The Klynk App is your ultimate cooking companion, offering a wide range of recipes tailored to your skill level and dietary preferences. Plan your meals, create shopping lists, and explore new flavors with ease.",
    subHeadings: [
      {
        title: "Save Time",
        description:
          "Effortlessly plan meals for the week, saving time and reducing food waste.",
      },
      {
        title: "Collobrate Easily",
        description:
          "Invite friends and family to join your meal planning journey and cook together.",
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
  const Layout3Defaults: Layout3Props = {
    heading: "Simplify Your Cooking Journey with the Klynk App",
    description:
      "Discover delicious recipes, plan meals, and shop smarter with our intuitive and collaborative app.",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
      alt: "Placeholder image",
    },
  };
  const Gallery10Defaults: Gallery10Props = {
    heading: "Image Gallery",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 3",
      },
      {
        url: "#",
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
        alt: "Placeholder image 4",
      },
      {
        url: "#",
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 5",
      },
      {
        url: "#",
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 6",
      },
      {
        url: "#",
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Placeholder image 7",
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
  const faqData: any = [
    {
      question: "How does the app work?",
      answer:
        "The Klynk App is designed to help you with meal planning, grocery shopping, and recipe discovery. It offers a variety of recipes suited for different skill levels and dietary needs. You can create shopping lists, collaborate with others, and save recipes to reduce food waste.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf35343d4461c34aab2e73c654f0a4fed0dbc1f2170872f4d2aea9271fad78e1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Can I save recipes?",
      answer:
        "Absolutely! The Klynk App allows you to save your favorite recipes for easy access. You can create a personalized recipe collection and organize it based on your preferences.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b7caff686b17270bbdc20458946c211d2f11f2fc01ab022ba21ea59a51bb66?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Is the app free?",
      answer:
        "Yes, the Klynk App is available for free download on both iOS and Android devices. However, some premium features may require a subscription.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf35343d4461c34aab2e73c654f0a4fed0dbc1f2170872f4d2aea9271fad78e1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "How can I reduce food waste?",
      answer:
        "The Klynk App provides tools to help you reduce food waste. You can plan your meals, create accurate shopping lists, and use leftover ingredients efficiently by finding recipes that utilize them.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b7caff686b17270bbdc20458946c211d2f11f2fc01ab022ba21ea59a51bb66?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Can I customize recipes?",
      answer:
        "Absolutely! The Klynk App allows you to personalize recipes based on your preferences and dietary restrictions. You can easily modify ingredients, portion sizes, and cooking instructions.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf35343d4461c34aab2e73c654f0a4fed0dbc1f2170872f4d2aea9271fad78e1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Can I get support?",
      answer:
        "Of course! If you have any questions or need assistance, our support team is here to help. You can reach out to us through the app or visit our website for more information.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b7caff686b17270bbdc20458946c211d2f11f2fc01ab022ba21ea59a51bb66?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "How can I collaborate?",
      answer:
        "With the Klynk App, you can invite friends and family to collaborate on meal planning. You can share recipes, assign tasks, and create a shared grocery list for seamless coordination.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf35343d4461c34aab2e73c654f0a4fed0dbc1f2170872f4d2aea9271fad78e1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Is the app available globally?",
      answer:
        "Yes, the Klynk App is available for download worldwide. However, please note that some features may vary based on your location and language settings.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b7caff686b17270bbdc20458946c211d2f11f2fc01ab022ba21ea59a51bb66?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes, we take data security seriously. The Klynk App uses advanced encryption and follows industry best practices to protect your personal information and ensure a safe and secure experience.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/bf35343d4461c34aab2e73c654f0a4fed0dbc1f2170872f4d2aea9271fad78e1?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
    {
      question: "Can I share feedback?",
      answer:
        "Absolutely! We value your feedback and suggestions. You can provide feedback directly through the app or contact our support team. Your input helps us improve the app for all users.",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/d3b7caff686b17270bbdc20458946c211d2f11f2fc01ab022ba21ea59a51bb66?apiKey=cad9cc51066f446382ba26fef0169eb1&&apiKey=cad9cc51066f446382ba26fef0169eb1",
    },
  ];

  return (
    <>
      <SimplifyMeal {...Header64Defaults} />
      <EffortlessMeal {...EffortlessMealData} />
      <EffortlessMeal {...SimplyGroceryData} />
      <DiscoverDelicious DiscoverData={DiscoverData} />
      <DiscoverDelicious DiscoverData={DiscoverData} />
      <EffortlessMeal {...DelciousRecipes} />
      <Journey {...Layout3Defaults} />
      <ImageCollection {...Gallery10Defaults} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <JoinCommunity
        heading="Simplify your meal planning journey"
        paragraph="Discover delicious recipes, plan meals, and collaborate with others using the Klynk App. Say goodbye to food waste and hello to stress-free cooking."
        primaryButtonText="Download"
        secondaryButtonText="Learn More"
      />
      <FAQSectionApp faqData={faqData} />
    </>
  );
};

export default App;
