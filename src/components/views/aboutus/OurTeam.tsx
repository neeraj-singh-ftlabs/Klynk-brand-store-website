import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiLogoDribbble, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

type ImageProps = {
  src: string;
  alt?: string;
};

type FooterProps = {
  heading: string;
  description: string;
  button: ButtonProps;
};

type SocialLinkProps = {
  href: string;
  icon: React.ReactNode;
};

type TeamMembersProps = {
  image: ImageProps;
  name: string;
  jobTitle: string;
  description: string;
  socialLinks: SocialLinkProps[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  teamMembers: TeamMembersProps[];
  footer: FooterProps;
};

export type Team5Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Team5 = (props: Team5Props) => {
  const { tagline, heading, description, teamMembers, footer } = {
    // ...Team5Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-center gap-x-8 gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-stretch text-center">
              <div className="mb-5 flex w-full items-center justify-center md:mb-6">
                <img
                  src={member.image.src}
                  alt={member.image.alt}
                  className="size-20 min-h-20 min-w-20 rounded-full object-cover"
                />
              </div>
              <div className="mb-3 md:mb-4">
                <h5 className="text-md font-semibold md:text-lg">{member.name}</h5>
                <h6 className="md:text-md">{member.jobTitle}</h6>
              </div>
              <p>{member.description}</p>
              <div className="mt-6 grid grid-flow-col grid-cols-[max-content] gap-[0.875rem] self-center">
                {member.socialLinks.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-14 w-full max-w-md text-center md:mt-20 lg:mt-24">
          <h4 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
            {footer.heading}
          </h4>
          <p className="md:text-md">{footer.description}</p>
          <div className="mt-6 flex items-center justify-center gap-x-4 text-center md:mt-8">
            <Button
              variant={footer.button.variant}
              size={footer.button.size}
              iconRight={footer.button.iconRight}
              iconLeft={footer.button.iconLeft}
            >
              {footer.button.title}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// export const Team5Defaults: Team5Props = {
//   tagline: "Tagline",
//   heading: "Our team",
//   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//   teamMembers: [
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 1",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 2",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 3",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 4",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 7",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//     {
//       image: {
//         src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
//         alt: "Placeholder image 8",
//       },
//       name: "Full name",
//       jobTitle: "Job title",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
//       socialLinks: [
//         { href: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
//         { href: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
//         { href: "#", icon: <BiLogoDribbble className="size-6" /> },
//       ],
//     },
//   ],
//   footer: {
//     heading: "We're hiring!",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     button: { title: "Open positions", variant: "secondary" },
//   },
// };

Team5.displayName = "Team5";
