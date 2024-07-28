"use client";

import { useState } from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
interface ProductData {
  imageSrc: string;
  name: string;
}

const products: ProductData[] = [
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/22d66e7ab1eb84cb7eb6c765c22d7a86111270106e1a2868965dda7a52577b9b?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    name: "Ola S1 Pro",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/5c9de794d1cca8caf688345f4fc17e51e9491b941cd390b0fb4676369fb374c5?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    name: "Ola S1 Air",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/798fba74692defb10fd4111e029b732fd13b79c43fc154d74ff89c958cca69db?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    name: "Ola S1 X",
  },
  {
    imageSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3fec0a4533618aabe7a1e4587c15bd1be886992881c93398a8c747fc666a1439?apiKey=971b6410d97242e7b97afd5891e4e40f&",
    name: "Motorcycles",
  },
];

const techItems = [
  "Tech & Design",
  "Software",
  "Cell Tech",
  "Manufacturing",
  "Performance",
  "Design",
];

const ownershipItems = [
  "Ownership",
  "Electric Store",
  "Hypercharger",
  "Community",
  "Referrals",
  "Service",
  "Battery Warranty",
  "Break All Barriers",
];

const companyItems = [
  "Our Company",
  "About Us",
  "Investor Relations",
  "News & Events",
  "Blogs",
  "Careers",
];

// const accountItems = [
//   "Account",
//   "Sign in",
//   "Support",
// ];

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type MegaMenuLink = {
  url: string;
  image: ImageProps;
  title: string;
  description: string;
  button?: ButtonProps;
};

type CategoryLink = {
  title: string;
  links: MegaMenuLink[];
};

type MegaMenuLinkProps = {
  categoryLinks: CategoryLink[];
  featuredSections: {
    title: string;
    links: MegaMenuLink[];
  };
  button: ButtonProps;
};

type LinkProps = {
  title: string;
  url: string;
  megaMenu?: MegaMenuLinkProps;
};

type Props = {
  logo: ImageProps;
  links: LinkProps[];
  buttons: ButtonProps[];
};

const hamburger = {
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
};

export type Navbar5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Navbar = (
  props: Navbar5Props,
  { params }: { params: { slug: string[] } }
) => {
  const { logo, links, buttons } = {
    // ...Navbar5Defaults,
    ...props,
  } as Props;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");

  const pathname = usePathname();
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(pathname);
  }, [pathname]);

  return (
    <nav className="relative flex w-full items-center justify-between border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%] z-50">
      <div className="size-full lg:flex lg:items-center lg:justify-between">
        <div className="lg:flex">
          <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
            <a href={logo.url}>
              <img src={logo.src} alt={logo.alt} />
            </a>
            <button
              className="-mr-2 flex size-12 flex-col items-center justify-center lg:hidden"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={topLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? "open" : "closed"}
                variants={middleLineVariants}
              />
              <motion.span
                className="my-[3px] h-0.5 w-6 bg-black"
                animate={isMobileMenuOpen ? ["open", "rotatePhase"] : "closed"}
                variants={bottomLineVariants}
              />
            </button>
          </div>
          <motion.div
            variants={{
              open: {
                height: "var(--height-open, 100dvh)",
              },
              close: {
                height: "var(--height-closed, 0)",
              },
            }}
            initial="close"
            exit="close"
            animate={isMobileMenuOpen ? "open" : "close"}
            transition={{ duration: 0.4 }}
            className="overflow-auto px-[5%] lg:ml-6 lg:flex lg:items-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
          >
            {links.map((link, index) => (
              <div key={index} className="first:pt-4 lg:first:pt-0">
                {link.megaMenu ? (
                  <Link href={link.url}>
                    <SubMenu
                      megaMenu={link.megaMenu}
                      title={link.title}
                      isMobile={isMobile}
                    />
                  </Link>
                ) : (
                  <Link
                    href={link.url}
                    className={`block py-3 text-md focus-visible:outline-none lg:px-4 lg:py-6 lg:text-base ${
                      link.url == url ? "text-blue-300" : "text-black"
                    }`}
                  >
                    {link.title}
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-6 flex w-full flex-col gap-y-4 pb-24 lg:hidden lg:pb-0">
              {buttons.map((button, index) => (
                <Button key={index} className="w-full" {...button}>
                  {button.title}
                </Button>
              ))}
              <HamMenu
                megaMenu={hamburger.megaMenu as MegaMenuLinkProps}
                title={"More"}
                isMobile={isMobile}
              />
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:flex lg:gap-4">
          {buttons.map((button, index) => (
            <Button key={index} {...button}>
              {button.title}
            </Button>
          ))}

          <HamMenu
            megaMenu={hamburger.megaMenu as MegaMenuLinkProps}
            title={"More"}
            isMobile={isMobile}
          />
        </div>
      </div>
    </nav>
  );
};
const SubMenu = ({
  title,
  isMobile,
  megaMenu,
}: {
  title: string | null;
  isMobile: boolean;
  megaMenu: MegaMenuLinkProps;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      <button
        className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md focus-visible:outline-none lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <span>{title}</span>
        <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        >
          {/* <RxChevronDown /> */}
        </motion.span>
      </button>
      <motion.div
        variants={{
          open: {
            visibility: "visible",
            opacity: 1,
            height: "var(--height-open, auto)",
          },
          close: {
            visibility: "hidden",
            opacity: "0",
            height: "var(--height-close, 0)",
          },
        }}
        initial="close"
        exit="close"
        animate={isDropdownOpen ? "open" : "close"}
        transition={{ duration: 0.3 }}
        className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
      >
        <div className="mx-auto flex size-full max-w-full items-center justify-between">
          <div className="w-full lg:flex">
            <div className="grid flex-1 gap-x-8 gap-y-6 py-4 pr-8 md:grid-cols-2 md:px-0 md:py-8 lg:py-8 lg:pr-8">
              {megaMenu.categoryLinks.map((group, index) => (
                <div
                  key={index}
                  className="grid auto-rows-max grid-cols-1 grid-rows-[max-content] gap-y-2 md:gap-y-4"
                >
                  <h4 className="text-sm font-semibold leading-[1.3]">
                    {group.title}
                  </h4>
                  {group.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="grid w-full grid-cols-[max-content_1fr] items-start gap-x-3 py-2 focus-visible:outline-none"
                    >
                      <div className="flex size-6 flex-col items-center justify-center">
                        <img src={link.image.src} alt={link.image.alt} />
                      </div>
                      <div className="flex flex-col items-start justify-center">
                        <h5 className="font-semibold">{link.title}</h5>
                        <p className="hidden text-sm md:block">
                          {link.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="max-w-none relative flex flex-1 p-6 md:py-8 md:pl-8 md:pr-0 lg:max-w-md">
              <div className="relative z-10 grid w-full auto-cols-fr auto-rows-max grid-cols-1 grid-rows-[max-content_max-content] gap-4">
                <h4 className="text-sm font-semibold leading-[1.3]">
                  {megaMenu.featuredSections.title}
                </h4>
                <div className="grid auto-cols-fr grid-cols-1 grid-rows-[auto_auto] items-start gap-y-2 lg:grid-rows-[auto]">
                  {megaMenu.featuredSections.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.url}
                      className="flex auto-cols-fr grid-cols-[0.6fr_1fr] flex-col gap-x-6 py-2 focus-visible:outline-none md:grid"
                    >
                      <div className="relative w-full pt-[66.66%]">
                        <img
                          src={link.image.src}
                          alt={link.image.alt}
                          className="absolute inset-0 size-full object-cover"
                        />
                      </div>
                      <div className="mt-4 flex flex-col justify-start md:mt-0">
                        <h5 className="mb-1 font-semibold">{link.title}</h5>
                        <p className="text-sm">{link.description}</p>
                        {link.button && (
                          <div className="mt-1.5">
                            <Button
                              variant={link.button.variant}
                              size={link.button.size}
                              iconRight={link.button.iconRight}
                              iconLeft={link.button.iconLeft}
                              className="text-sm underline"
                            >
                              {link.button.title}
                            </Button>
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="flex items-center">
                  <Button
                    variant={megaMenu.button.variant}
                    size={megaMenu.button.size}
                    iconRight={megaMenu.button.iconRight}
                    iconLeft={megaMenu.button.iconLeft}
                  >
                    {megaMenu.button.title}
                  </Button>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const HamMenu = ({
  title,
  isMobile,
  megaMenu,
}: {
  title: string | null;
  isMobile: boolean;
  megaMenu: MegaMenuLinkProps;
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <div
      className="z-50"
      // onMouseEnter={() => !isMobile && setIsDropdownOpen(true)}
      // onMouseLeave={() => !isMobile && setIsDropdownOpen(false)}
    >
      {/* <button
        className="flex w-full items-center justify-between gap-x-2 py-3 text-center text-md focus-visible:outline-none lg:w-auto lg:flex-none lg:justify-start lg:px-4 lg:py-6 lg:text-base"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      > */}
      <Button
        className="flex w-full"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        {title}
      </Button>
      {/* <motion.span
          variants={{
            rotated: { rotate: 180 },
            initial: { rotate: 0 },
          }}
          animate={isDropdownOpen ? "rotated" : "initial"}
          transition={{ duration: 0.3 }}
        > */}
      {/* <RxChevronDown /> */}
      {/* </motion.span> */}
      {/* </button> */}
      <motion.div
        variants={{
          open: {
            visibility: "visible",
            opacity: 1,
            height: "var(--height-open, auto)",
          },
          close: {
            visibility: "hidden",
            opacity: "0",
            height: "var(--height-close, 0)",
          },
        }}
        initial="close"
        exit="close"
        animate={isDropdownOpen ? "open" : "close"}
        transition={{ duration: 0.3 }}
        className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-[100vw] lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
      >
        <div className="flex gap-5 justify-around items-start py-9 pr-7 pl-0 bg-white max-md:flex-wrap max-md:px-5">
          <section className="flex gap-5   mt-3 max-md:flex-wrap max-md:max-w-1/3">
            <div className="flex flex-col text-lg tracking-wide text-center text-blue-950">
              <div className="flex gap-5 md:mr-20">
                {products.slice(0, 2).map((product, index) => (
                  <ProductCard
                    key={index}
                    imageSrc={product.imageSrc}
                    name={product.name}
                  />
                ))}
              </div>
              <div className="flex gap-5 mt-3">
                {products.slice(2).map((product, index) => (
                  <ProductCard
                    key={index}
                    imageSrc={product.imageSrc}
                    name={product.name}
                  />
                ))}
              </div>
              <Image
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d24e3619902eb4b8651c3c0ee68eb458dffacd2f47ee2aa60740da2d64a12a?apiKey=971b6410d97242e7b97afd5891e4e40f&"
                alt=""
                width={1000} // Example width, you can adjust it to fit your layout
                height={Math.round(1000 / 3.03)} // Maintain aspect ratio of 3.03
                className="mt-12 w-full aspect-[3.03] max-md:mt-10"
                loading="lazy"
              />{" "}
            </div>
            {/* <div className="shrink-0 self-stretch w-px bg-gray-200 h-[494px]" /> */}
          </section>
          <div className="shrink-0 self-stretch w-px bg-gray-200 h-[494px] hidden md:block " />

          <section className="flex gap-30 justify-between items-start text-base tracking-tight text-black max-md:flex-wrap max-md:max-w-1/2 md:ml-20">
            <ListSection items={techItems} />
            <ListSection items={ownershipItems} />
            <ListSection items={companyItems} />
            {/* <ListSection items={accountItems}/> */}
          </section>
        </div>
      </motion.div>
    </div>
  );
};

interface ProductCardProps {
  imageSrc: string;
  name: string;
}

function ProductCard({ imageSrc, name }: ProductCardProps) {
  return (
    <div className="flex flex-col  items-center leading-[126%] ">
      {/* <img loading="lazy" src={imageSrc} alt={name} className="aspect-[1.28] w-[148px]" /> */}
      <Image
        src={imageSrc}
        alt={name}
        width={200}
        height={Math.round(200 / 1.28)} // Calculate height based on the aspect ratio
        className="w-[200px] aspect-[1.28]"
        loading="lazy"
      />
      <div className="mt-4">{name}</div>
    </div>
  );
}

interface ListSectionProps {
  items: string[];
  children?: React.ReactNode;
}

function ListSection({ items, children }: ListSectionProps) {
  return (
    <div className="flex flex-col mt-4">
      {children}
      {items.map((item, index) => (
        <div
          key={index}
          className={`${index > 0 ? "mt-8" : ""} leading-[140%] ${
            index === 0 ? "text-gray-500" : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

const topLineVariants = {
  open: {
    translateY: 8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: -45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

const middleLineVariants = {
  open: {
    width: 0,
    transition: { duration: 0.1 },
  },
  closed: {
    width: "1.5rem",
    transition: { delay: 0.3, duration: 0.2 },
  },
};

const bottomLineVariants = {
  open: {
    translateY: -8,
    transition: { delay: 0.1 },
  },
  rotatePhase: {
    rotate: 45,
    transition: { delay: 0.2 },
  },
  closed: {
    translateY: 0,
    rotate: 0,
    transition: { duration: 0.2 },
  },
};

Navbar.displayName = "Navbar";
