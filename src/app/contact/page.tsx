import React from 'react'
import { Header5Props, Header5 as Hero } from "@/components/common/hero/Hero";
import { ProductFAQ } from "@/components/views/riku/ProductFAQ";
import { Faq1Props } from '@/components/views/riku/FAQ';
import ContactUs from '@/components/views/contact/contactInfo';
import ContactForm from '@/components/views/contact/ContactForm';
import LocationsPage from '@/components/views/contact/Location';



const heroProps1: Header5Props = {
  center:true,
  small:true,
  heading: "Get in Touch",
  description:
    "We'd love to hear from you! Reach out to us using the contact details below.",
  // buttons: [{ title: "Learn More" }, { title: "Join Now", variant: "secondary-alt" }],
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};

const Faq1Defaults: Faq1Props = {
  heading: "FAQs",
  description:
    "Find quick solutions to common questions without needing to contact support.",
  questions: [
    {
      title: "How to place an order?",
      answer:
        "To place an order, simply browse our menu, select the items you want, and proceed to checkout. If you have any issues, our support team is here to assist you.",
    },
    {
      title: "How can I track my order?",
      answer:
        "Once your order is confirmed, you will receive a tracking number via email. You can use this tracking number to monitor the status of your delivery.",
    },
    {
      title: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, as well as PayPal and Apple Pay. You can choose your preferred payment method during the checkout process.",
    },
    {
      title: "Do you offer refunds?",
      answer:
        "Yes, we have a refund policy in place. If you are not satisfied with your order, please contact our support team within 7 days of receiving your delivery.",
    },
    {
      title: "How can I contact support?",
      answer:
        "You can reach our support team by emailing support@example.com or by calling our toll-free number at 1-800-123-4567.",
    },
  ],
  footerHeading: "Still have questions?",
  footerDescription: "Contact our support team for further assistance.",
  button: {
    title: "Contact",
    variant: "secondary",
  },
};


function Contact() {
  return (
    <div>
        <Hero {...heroProps1}/>
        <ContactUs/>
        <ContactForm/>
        <LocationsPage/>
        <ProductFAQ {...Faq1Defaults} />

    </div>
  )
}

export default Contact