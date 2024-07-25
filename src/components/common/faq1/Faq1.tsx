import {
    Button,
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@relume_io/relume-ui";
  import type { ButtonProps } from "@relume_io/relume-ui";
  
  type QuestionsProps = {
    title: string;
    answer: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    button: ButtonProps;
    questions: QuestionsProps[];
  };
  
  export type Faq3Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Faq3 = (props: Faq3Props) => {
    const { heading, description, button, questions } = {
    //   ...Faq3Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
        <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <p className="md:text-md">{description}</p>
            <div className="mt-6 md:mt-8">
              <Button {...button}>{button.title}</Button>
            </div>
          </div>
          <Accordion type="multiple">
            {questions.map((question, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="md:py-5 md:text-md">{question.title}</AccordionTrigger>
                <AccordionContent className="md:pb-6">{question.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    );
  };
  
//   export const Faq3Defaults: Faq3Props = {
//     heading: "FAQs",
//     description:
//       "Find answers to commonly asked questions about Klynk's products and their usage.",
//     button: {
//       title: "Contact",
//       variant: "secondary",
//     },
//     questions: [
//       {
//         title: "What is Klynk?",
//         answer:
//           "Klynk is an ecosystem of hardware, software, and services that aims to simplify cooking and make it more convenient for users. It offers a range of products such as Riku, the world's first automatic rice and curry maker, and Semi, a smart induction cooktop. With Klynk Recipes, users can access a personalized food space for chefs and food influencers, while the Klynk App provides collaborative meal planning and grocery list features.",
//       },
//       {
//         title: "How does Riku work?",
//         answer:
//           "Riku is designed to automate the process of cooking rice and curry. It uses advanced technology to ensure perfectly cooked meals every time. Users can simply add the ingredients, select the desired settings, and let Riku take care of the rest. With Riku, you can enjoy delicious homemade meals without the need for extensive cooking skills or constant monitoring.",
//       },
//       {
//         title: "What is Semi?",
//         answer:
//           "Semi is a smart induction cooktop that offers precise temperature control and a range of cooking modes. It is designed to make cooking easier and more efficient. With Semi, you can cook your favorite dishes with ease and confidence, knowing that the cooktop will provide consistent heat and accurate cooking results.",
//       },
//       {
//         title: "How can Klynk Recipes help?",
//         answer:
//           "Klynk Recipes is a personalized food space that allows chefs and food influencers to share their recipes and connect with a community of cooking enthusiasts. Users can discover new recipes, save their favorites, and even create their own personalized meal plans. With Klynk Recipes, you can explore a world of culinary inspiration and take your cooking skills to the next level.",
//       },
//       {
//         title: "What features does the Klynk App offer?",
//         answer:
//           "The Klynk App is a powerful tool for collaborative meal planning and grocery list management. It allows users to create and share meal plans with family and friends, ensuring everyone is on the same page when it comes to cooking. The app also offers a convenient grocery list feature, making it easy to keep track of the ingredients you need for your recipes.",
//       },
//     ],
//   };
  
  Faq3.displayName = "Faq3";
  