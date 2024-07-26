// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./fonts.css";
import ClientLayout from "../components/ClientLayout"; // Ensure path is correct
import { Providers } from "../context/LanguageProvider";
import { Navbar, Navbar5Props } from "@/components/common/navbar/Navbar";
import { Footer } from "@/components/common/footer/Footer";
import { RxChevronRight } from "react-icons/rx";


const Navbar5Defaults: Navbar5Props = {
  logo: {
    url: "#",
    src: "https://relume-assets.s3.amazonaws.com/logo-image.svg",
    alt: "Logo image",
  },
  links: [
    // {
    //   title: "Overview",
    //   url: "/riku/overview",},
    //   {
    //     title: "Technology",
    //     url: "/riku/technology",},
    //     {
    //       title: "Product",
    //       url: "/riku/product",}
    //       ,
    {
      title: "Link One",
      url: "#",
      megaMenu: {
        categoryLinks: [
          {
            title: "Page group one",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        featuredSections: {
          title: "Featured from Blog",
          links: [
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 1",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 2",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
          ],
        },
        button: {
          title: "See all articles",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      },
    },
    {
      title: "Link Two",
      url: "#",
      megaMenu: {
        categoryLinks: [
          {
            title: "Page group one",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        featuredSections: {
          title: "Featured from Blog",
          links: [
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 1",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 2",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
          ],
        },
        button: {
          title: "See all articles",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      },
    },
    {
      title: "Link Three",
      url: "#",
      megaMenu: {
        categoryLinks: [
          {
            title: "Page group one",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        featuredSections: {
          title: "Featured from Blog",
          links: [
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 1",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 2",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
          ],
        },
        button: {
          title: "See all articles",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      },
    },
    {
      title: "Link Four",
      url: "#",
      megaMenu: {
        categoryLinks: [
          {
            title: "Page group one",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 1",
                },
                title: "Page One",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 2",
                },
                title: "Page Two",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 3",
                },
                title: "Page Three",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 4",
                },
                title: "Page Four",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
          {
            title: "Page group two",
            links: [
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 5",
                },
                title: "Page Five",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 6",
                },
                title: "Page Six",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 7",
                },
                title: "Page Seven",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
              {
                url: "#",
                image: {
                  src: "https://relume-assets.s3.amazonaws.com/relume-icon.svg",
                  alt: "Icon 8",
                },
                title: "Page Eight",
                description: "Lorem ipsum dolor sit amet consectetur elit",
              },
            ],
          },
        ],
        featuredSections: {
          title: "Featured from Blog",
          links: [
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 1",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
            {
              url: "#",
              image: {
                src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
                alt: "Placeholder image 2",
              },
              title: "Article Title",
              description: "Lorem ipsum dolor sit amet consectetur elit",
              button: { title: "Read more", variant: "link", size: "link" },
            },
          ],
        },
        button: {
          title: "See all articles",
          variant: "link",
          size: "link",
          iconRight: <RxChevronRight className="size-6" />,
        },
      },
    },
  ],
  buttons: [
    {
      title: "Buy Now",
      variant: "secondary",
      size: "sm",
    },
    // {
    //   title: "Button",
    //   size: "sm",
    // },
  ],
};



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientLayout>
            <Navbar {...Navbar5Defaults} />
            {children}
            <Footer />
          </ClientLayout>
        </Providers>
      </body>
    </html>
  );
}
