import { Header64Props, SimplifyMeal } from '@/components/views/app/SimplifyMeal';
import React from 'react'
import SaveTimeAndEffort, {
  LifeWithRikuSectionProps,
} from "@/components/views/riku/LifeWithRikuSection";
import { EffortlessMeal, Layout4Props } from '@/components/views/app/EffortlessMeal';
import {
  Testimonial17 as CustomerTestimonials,
  Testimonial17Props,
} from "@/components/views/home/CustomerTestimonials";
import UpgradeExpSection from '@/components/common/rightImageDesc/RightImageDescSection';
import { Gallery10Props, ImageCollection } from '@/components/views/app/ImageCollection';
import { FAQ, Faq1Props } from '@/components/views/riku/FAQ';

function Recipes() {
  const Header64Defaults: Header64Props = {
    heading: "Discover Delicious Recipes",
    description:"Explore a wide range of culinary creations shared by chefs and food influencers.",
  };
  const featureData: LifeWithRikuSectionProps = {
    heading: "Personalize Your Recipes to Suit Your Taste Preferences",
    // tagline: "Revolutionize",
    paragraph:
      "At Klynk, we believe that cooking should be enjoyable and stress-free. Our ecosystem of hardware, software, and services is designed to simplify your cooking journey and bring the joy back into your kitchen.",
    mainButtonView: true,
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/400558788122a3316b26788ebf16a34456b9069a62ac56124e5eeb0c9375360f?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
        title: "Easily Find Recipes with Advanced Search Filters",
        description:
          "Discover new recipes and explore a wide variety of cuisines with Klynk Recipes.",
        buttonText: "Learn More",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fa6119d5f81204fe6d3516d96540d57df07aacd17aae3a163ee6969b8454b114?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
        title: "Rate and Review Recipes to Share Your Culinary Experiences",
        description:
          "Join the Klynk Recipes community and contribute your feedback to help others discover great recipes.",
        buttonText: "Sign Up",
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4d2adb108f093cf63db07ad907a331f1c98ffa4e001b7d4418320dbefee150d3?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f",
        title: "Save and Organize Your Favorite Recipes for Easy Access",
        description:
          "Never lose a recipe again. Keep all your favorite recipes in one place with Klynk Recipes.",
        buttonText: "Get Started",
      },
    ],
  };
   const SimplyGroceryData: Layout4Props = {
     //  tagline: "Simplify",
     heading:
       "Discover New Dishes and Find Meal Inspiration with Klynk Recipes",
     description:
       "Klynk Recipes offers a wide variety of delicious recipes to help you explore new flavors and expand your culinary horizons. With our user-friendly interface and extensive collection of recipes, you'll never run out of ideas for your next meal.",
     subHeadings: [
       {
         title: "Find Recipes",
         description:
           "Browse through a diverse selection of recipes from around the world.",
       },
       {
         title: "Save Favorites",
         description:
           "Create your own recipe collection by saving your favorite dishes.",
       },
     ],
     image: {
       src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
       alt: "Placeholder image",
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
  const Gallery10Defaults: Gallery10Props = {
    heading: "Delicious Creations",
    description:
      "Discover mouthwatering recipes that will delight your taste buds.",
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
  const Faq1Defaults: Faq1Props = {
    heading: "FAQs",
    description:
      "Find answers to commonly asked questions about using our recipe platform and its features.",
    questions: [
      {
        title: "How to submit recipes?",
        answer:
          "To submit a recipe, simply create an account on our platform and navigate to the recipe submission page. Fill in the required details, including the ingredients, preparation steps, and any additional information. Once submitted, our team will review the recipe before it is published.",
      },
      {
        title: "Are there any fees?",
        answer:
          "No, it is completely free to submit and share your recipes on our platform. We believe in fostering a community of cooking enthusiasts and providing a space for everyone to showcase their culinary creations.",
      },
      {
        title: "Can I edit my recipes?",
        answer:
          "Yes, you can easily edit your recipes at any time. Simply log in to your account, go to your recipe dashboard, and select the recipe you wish to edit. Make the necessary changes and save your updated recipe.",
      },
      {
        title: "How can I share recipes?",
        answer:
          "Sharing recipes is simple. Each recipe has a unique URL that you can copy and share with others. You can also use the social sharing buttons on our platform to share recipes directly to your favorite social media channels.",
      },
      {
        title: "How to find recipes?",
        answer:
          "Finding recipes on our platform is easy. You can browse through different categories, search for specific ingredients or dish names, and even filter recipes based on dietary preferences. Explore our vast collection of recipes and discover new culinary inspirations.",
      },
    ],
    footerHeading: "Still have questions?",
    footerDescription: "Contact our support team for further assistance.",
    button: {
      title: "Contact",
      variant: "secondary",
    },
  };
  return (
    <>
      <SimplifyMeal {...Header64Defaults} center={false} />
      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <SaveTimeAndEffort
        heading={featureData.heading}
        features={featureData.features}
      />
      <EffortlessMeal {...SimplyGroceryData} />
      <EffortlessMeal {...SimplyGroceryData} />
      <CustomerTestimonials {...Testimonial17Defaults} />
      <UpgradeExpSection
        title="Save and organize your recipes"
        description="Subscribe to our newsletter for the latest updates and special offers."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Sign Up"
        secondaryButtonText="Login"
      />
      <ImageCollection {...Gallery10Defaults} />
      <FAQ {...Faq1Defaults} />
      <UpgradeExpSection
        title="Share your favorite recipes here"
        description="Subscribe to our newsletter for the latest updates and special offers."
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/1f23a3427c8904e04004d18a7bac5335c7d9718101b21c60eccca03b5419b2fb?apiKey=971b6410d97242e7b97afd5891e4e40f&&apiKey=971b6410d97242e7b97afd5891e4e40f"
        primaryButtonText="Submit"
        secondaryButtonText="Learn More"
      />
    </>
  );
}

export default Recipes