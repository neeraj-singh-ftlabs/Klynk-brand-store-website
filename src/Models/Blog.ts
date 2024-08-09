import { ImageProps, RelumeButtonProps } from "@/Models/Common";

export type BlogCard = {
  url: string;
  image: ImageProps;
  category: string;
  readTime: string;
  title: string;
  description: string;
  button: RelumeButtonProps;
};

export type BlogCategory = {
  name: string;
  slug: string;
  description?: string;
};
