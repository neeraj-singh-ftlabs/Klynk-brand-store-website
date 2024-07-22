'use client'
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import moment from "moment";
import Image from "next/image";



function BlogContent() {
    const [blogDetail, setBlogDetail] = useState<BlogDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imageUrl, setImageUrl] = useState('');
  const {id} = useParams()

  interface BlogAttributes {
    title: string;
    summary: string;
    featuredImage?: {
      data?: {
        attributes?: {
          url?: string;
        };
      };
    };
    publishedAt?: string; // Add this line to handle publishedAt
  }
  
  interface BlogDetail {
    attributes?: BlogAttributes;
  }
  
  interface ApiResponse {
    data: BlogDetail;
  }
  

  useEffect(() => {
    fetchBlogs();
    console.log(id,"params <<<<<<<<<")
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(
        `http://192.168.1.19:1337/api/blogs/${id}/?populate=*`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch blogDetail");
      }
      const data = await response.json();
      setBlogDetail(data.data);
      setLoading(false);
    } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
        }
        setLoading(false);
      }
  };

  //   if (loading) {
  //     return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading blogDetail...</div>;
  //   }

  //   if (error) {
  //     return <div style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>Error: {error}</div>;
  //   }

  useEffect(() => {
    /* Progress bar */
    const h = document.documentElement;
    const b = document.body;
    const progress = document.querySelector("#progress")as HTMLElement | null;
    let scroll;
    let scrollpos = window.scrollY;
    const header = document.getElementById("header")as HTMLElement | null;

    const handleScroll = () => {
        if (progress) {
      /* Refresh scroll % width */
      scroll =
        ((h.scrollTop || b.scrollTop) /
          ((h.scrollHeight || b.scrollHeight) - h.clientHeight)) *
        100;
      progress?.style.setProperty("--scroll", scroll + "%");
        }

      /* Apply classes for slide in bar */
      scrollpos = window.scrollY;

      if(header){
      if (scrollpos > 100) {
        
        header.classList.remove("hidden");
        header.classList.remove("fadeOutUp");
        header.classList.add("slideInDown");
      } else {
        header.classList.remove("slideInDown");
        header.classList.add("fadeOutUp");
        header.classList.add("hidden");
      }
    }
    };

    // Scroll to top functionality
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const scrollTopButton = document.querySelector(".js-scroll-top")as HTMLElement | null;
    if (scrollTopButton) {
      scrollTopButton.onclick = scrollToTop;

      const path = document.querySelector(".scroll-top path")as SVGPathElement | null;
      let pathLength=0
      if(path){

           pathLength = path.getTotalLength();
          path.style.transition = path.style.transition = "none";
          path.style.strokeDasharray = `${pathLength} ${pathLength}`;
          path.style.strokeDashoffset = `${pathLength}`
          path.getBoundingClientRect();
          path.style.transition = path.style.transition =
            "stroke-dashoffset 10ms linear";
      }

      const updateScrollPosition = () => {
        const scrollY =
          window.scrollY ||
        //   window.scrollTop ||
          document.documentElement.scrollTop;
        const maxScrollHeight = Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );
        const windowHeight = Math.max(
          document.documentElement.clientHeight,
          window.innerHeight || 0
        );
if(path){

    const dashOffset =
      pathLength -
      (scrollY * pathLength) / (maxScrollHeight - windowHeight);
    path.style.strokeDashoffset = `${dashOffset}`;
  };
}

      updateScrollPosition();

      const scrollThreshold = 100;
      window.addEventListener("scroll", () => {
        updateScrollPosition();
        const scrollY =
          window.scrollY ||
        //   window.scrollTop ||
          document.getElementsByTagName("html")[0].scrollTop;
        if (scrollY > scrollThreshold) {
          scrollTopButton.classList.add("is-active");
        } else {
          scrollTopButton.classList.remove("is-active");
        }
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="bg-white font-sans leading-normal tracking-normal overflow-hidden">
     
      <div
        id="header"
        className="bg-white fixed w-full z-10 top-0 hidden animated"
        style={{ opacity: 0.95 }}
      >
        <div className="bg-white">
          <div className="flex flex-wrap items-center content-center">
            <div className="flex w-1/2 justify-start text-white font-extrabold">
              <a
                className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#334484"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-squirrel"
                >
                  <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
                  <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
                  <path d="M15.2 22a3 3 0 0 0-2.2-5" />
                  <path d="M18 13h.01" />
                </svg>
                <span className="hidden w-0 md:w-auto md:block pl-1">
                  Ghostwind CSS
                </span>
              </a>
            </div>
            <div className="flex w-1/2 justify-end content-center">
              <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs">
                <span className="pr-2">Share this</span> 👉
              </p>
              <a
                className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                href="https://twitter.com/intent/tweet?url=#"
                style={{ backgroundColor: "#33b1ff" }}
              >
                <svg
                  className="fill-current text-white h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
                </svg>
              </a>
              <a
                className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4"
                href="https://www.facebook.com/sharer/sharer.php?u=#"
                style={{ backgroundColor: "#005e99" }}
              >
                <svg
                  className="fill-current text-white h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                >
                  <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div
          id="progress"
          className="h-1 bg-white shadow"
          style={{
            background:
              "linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)",
          }}
        ></div>
      </div>

    

      <div className="w-full max-w-8xl  mx-auto bg-white bg-cover mt-8 rounded ">
        <div
          className="bg-white w-full text-4xl  text-gray-800 leading-normal md:ml-10 text-start mt-10"
          //   style={{ fontFamily: 'Georgia, serif' }}
        >
          <Link href="/">
          <h4 className="text-xl flex gap-3  ml-20">
            <svg
              width="34"
              height="34"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" />
            </svg>
            Back
          </h4>
          </Link>
          <h1 className="text-black ml-20 font-semibold mt-3">
            {blogDetail?.attributes?.title || "-"}
          </h1>
        </div>
        

 <div className="relative w-full h-60 sm:h-80 md:h-96 lg:h-[500px] mt-4">
    {blogDetail?.attributes?.featuredImage?.data?.attributes?.url && <Image
        src={"http://192.168.1.19:1337"+blogDetail?.attributes?.featuredImage?.data?.attributes?.url}
        alt={"alt"}
        layout="fill"
        objectFit="cover"
        quality={100}
      />}
    </div>
        <div className="bg-gray-100 ">
        <div className=" container mx-auto p-10   ">
          <p className="text-xl text-black mb-5 text-wrap">
          {blogDetail?.attributes?.summary || "-"}

          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 text-sm font-medium text-center   "
            style={{color:"#f25d23"}}
          >
                        { moment(blogDetail?.attributes?.publishedAt).format('MMMM Do YYYY, h:mm:ss a') || "-"}

          </a>
        </div>
        </div>
        
      </div>

      <section className="flex justify-start mt-8 h-[100vh] container mx-auto ">
        <article className="w-1/4 px-4 py-6 bg-white rounded-lg ml-5 md:ml-5">
          <h2 className="text-xl font-bold mb-2  text-center md:text-start" style={{color:"#f25d23"}}>Table of content</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            tortor ut odio fermentum suscipit.
          </p>
        </article>
        <div className="w-1/2 px-4 py-6 bg-white rounded-lg overflow-y-auto overflow-hidden scrollable">
          <div className="h-96 ">
            <h2 className="text-xl font-bold mb-2 text-center md:text-start">Title goes here</h2>
            <div
              className="bg-white w-full p-8 md:p-0 text-xl md:text-xl text-gray-800 text-wrap leading-normal"
              style={{ fontFamily: "Georgia, serif" }}
            >
           
              {/* <p className="py-6">
                The basic blog page layout is available and all using the
                default Tailwind CSS classes (although there are a few hardcoded
                style tags). If you are going to use this in your project, you
                will want to convert the classes into components.
              </p> */}
              <p className="py-6">
                Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt
                lacus purus, in mattis tortor sollicitudin pretium. Phasellus at
                diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras
                nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at
                lorem condimentum, dignissim lorem eu, blandit massa. Phasellus
                eleifend turpis vel erat bibendum scelerisque. Maecenas id risus
                dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor
                in dolor molestie ornare. Aenean pulvinar diam nec neque
                tincidunt, vitae molestie quam fermentum. Donec ac pretium diam.
                Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent
                taciti sociosqu ad litora torquent per conubia nostra, per
                inceptos himenaeos. Duis nec nulla eget sem dictum elementum.
              </p>
              <ol>
                <li className="py-3">
                  Maecenas accumsan lacus sit amet elementum porta. Aliquam eu
                  libero lectus. Fusce vehicula dictum mi. In non dolor at sem
                  ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse
                  quam quam, commodo sit amet placerat in, interdum a ipsum.
                  Morbi sit amet tellus scelerisque tortor semper posuere.
                </li>
                <li className="py-3">
                  Morbi varius posuere blandit. Praesent gravida bibendum neque
                  eget commodo. Duis auctor ornare mauris, eu accumsan odio
                  viverra in. Proin sagittis maximus pharetra. Nullam lorem
                  mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id
                  quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac
                  ornare vulputate, pretium nec felis.
                </li>
                <li className="py-3">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras
                  leo mauris, tristique in risus ac, tristique rutrum velit.
                  Mauris accumsan tempor felis vitae gravida. Cras egestas
                  convallis malesuada. Etiam ac ante id tortor vulputate
                  pretium. Maecenas vel sapien suscipit, elementum odio et,
                  consequat tellus.
                </li>
                <li className="py-3">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras
                  leo mauris, tristique in risus ac, tristique rutrum velit.
                  Mauris accumsan tempor felis vitae gravida. Cras egestas
                  convallis malesuada. Etiam ac ante id tortor vulputate
                  pretium. Maecenas vel sapien suscipit, elementum odio et,
                  consequat tellus.
                </li>
              </ol>
             
            </div>
          </div>
        </div>
        <article className="w-1/4 h-full md:px-4 py-6 bg-white rounded-lg ">
          <div className="max-w-[100%] text-wrap rounded-lg shadow ">
            <a href="#">
              {/* <div
                className=" bg-contain bg-no-repeat md:bg-cover "
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC53r_mfuwGqpHKGnwrcXaaH1zU7FXqPJu-h-e8aWKPs50NTtD')",
                  height: "47vh",
                }}
              ></div> */}
               <div className="relative z-10" style={{ height: '47vh', width: '100%' }}>
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC53r_mfuwGqpHKGnwrcXaaH1zU7FXqPJu-h-e8aWKPs50NTtD"
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="object-cover"
      />
           <div className="w-full absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-transparent z-20 p-5">
              <h5 className="mb-3 ">Noteworthy technology acquisitions 2021</h5> 

            
                <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none bg-gradient-to-r from-[#ef4924] to-[#f47022] rounded ">Shop Now</button>
                
              
            
            </div>
    </div>
              
              {/* <img className="rounded-t-lg "   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC53r_mfuwGqpHKGnwrcXaaH1zU7FXqPJu-h-e8aWKPs50NTtD" alt="" /> */}
            </a>
            
            {/* <div class="bg-transparent -mt-40 md:-mt-20 md:ml-5 z-20">
              <h5 className="mb-3 ">Noteworthy technology acquisitions 2021</h5> 

            
                <button className="inline-flex items-center px-5 py-2 text-sm font-medium text-center text-white  focus:ring-4 focus:outline-none bg-gradient-to-r from-[#ef4924] to-[#f47022] rounded ">Shop Now</button>
                
              
            
            </div> */}
          </div>
          
        </article>
      </section>

{/* 
      <div className="bg-gray-200">
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded-2xl border-orange-500 border overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400,363"
                    className="h-48 w-full rounded-t shadow-lg"
                    alt="Article thumbnail"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-orange-500 text-xs md:text-lg">
                      Blog Category
                    </p>
                   
                    <p className="text-gray-800 font-serif text-md font-semibold mb-5 mt-5 leading-7">
                      Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                      posuere et sit amet ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                   
                    <p className="text-gray-600 text-xs md:text-sm">
                      5 Days ago
                    </p>
                    <p className="text-orange-600 text-xs md:text-2xl">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded-2xl border-orange-500 border overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400,363"
                    className="h-48 w-full rounded-t shadow-lg"
                    alt="Article thumbnail"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-orange-500 text-xs md:text-lg">
                      Blog Category
                    </p>
                  
                    <p className="text-gray-800 font-serif text-md font-semibold mb-5 mt-5 leading-7">
                      Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                      posuere et sit amet ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                   
                    <p className="text-gray-600 text-xs md:text-sm">
                      5 Days ago
                    </p>
                    <p className="text-orange-600 text-xs md:text-2xl">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2 pb-12">
              <div className="h-full bg-white rounded-2xl border-orange-500 border overflow-hidden shadow-md hover:shadow-lg relative smooth">
                <a href="#" className="no-underline hover:no-underline">
                  <img
                    src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/113777-0b21d44.jpg?quality=90&resize=400,363"
                    className="h-48 w-full rounded-t shadow-lg"
                    alt="Article thumbnail"
                  />
                  <div className="p-6 h-auto md:h-48">
                    <p className="text-orange-500 text-xs md:text-lg">
                      Blog Category
                    </p>
                   
                    <p className="text-gray-800 font-serif text-md font-semibold mb-5 mt-5 leading-7">
                      Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo
                      posuere et sit amet ligula.
                    </p>
                  </div>
                  <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                   
                    <p className="text-gray-600 text-xs md:text-sm">
                      5 Days ago
                    </p>
                    <p className="text-orange-600 text-xs md:text-2xl">
                      <FaArrowRightLong />
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}

     
    </main>
  );
}

export default BlogContent;