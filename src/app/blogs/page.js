"use client";
import { BlogGrid } from "../../components/blogDashboard/featuredBlogs";
import { Blog33 as LatestBlogs } from "../../components/blogDashboard/latestBlogs";
import { Cta25 as BottomCta } from "../../components/blogDashboard/bottomCta";
import { Footer2 as Footer } from "../../components/common/footer/Footer";

function BlogContent() {
  return (
    <>
      <BlogGrid />
      <LatestBlogs />
      <BottomCta />
      <Footer />
    </>
  );
}

export default BlogContent;
