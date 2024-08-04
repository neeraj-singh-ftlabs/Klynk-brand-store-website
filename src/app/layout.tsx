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
import Head from "next/head";



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
      title: "Riku",
      url: "/riku/overview",
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
      title: "Semi",
      url: "/semi/overview",
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
      title: "Klynk",
      url: "/app",
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
      title: "Recipes",
      url: "/recipes",

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
      title: "Cooking",
      url: "/cooking",
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
      title: "About Us",
      url: "/aboutus",

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
      title: "Contact Us",
      url: "/contact",
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
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@200;300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta+Mahee:wght@200;300;400;500;600;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Slab:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
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
