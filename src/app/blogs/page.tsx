"use client";
import { BlogGrid } from "../../components/blogDashboard/featuredBlogs";
import { Blog33 as LatestBlogs } from "../../components/blogDashboard/latestBlogs";
import { Cta25 as BottomCta } from "../../components/blogDashboard/bottomCta";

function BlogContent() {
  return (
    <>
      <BlogGrid />
      <LatestBlogs />
      <BottomCta />
    </>
  );
}

export default BlogContent;
