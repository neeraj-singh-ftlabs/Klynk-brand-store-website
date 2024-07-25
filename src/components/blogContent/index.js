'use client'
import React from 'react'
import { useEffect, useState } from 'react';

function BlogContent() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [image, setImages] = useState('')
    
    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://192.168.1.38:1337/api/blogs?populate=*');
            if (!response.ok) {
                throw new Error('Failed to fetch blogs');
            }
            const data = await response.json();
            setBlogs(data.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // useEffect(()=>{
    //     if (loading) {
    //         return <div style={{ textAlign: 'center', marginTop: '2rem' }}>Loading blogs...</div>;
    //       }
    
    //       if (error) {
    //         return <div style={{ textAlign: 'center', color: 'red', marginTop: '2rem' }}>Error: {error}</div>;
    //       }
    // },[])

    

    useEffect(() => {
        /* Progress bar */
        const h = document.documentElement;
        const b = document.body;
        const progress = document.querySelector('#progress');
        let scroll;
        let scrollpos = window.scrollY;
        const header = document.getElementById('header');

        const handleScroll = () => {
            /* Refresh scroll % width */
            scroll = (h.scrollTop || b.scrollTop) / ((h.scrollHeight || b.scrollHeight) - h.clientHeight) * 100;
            progress.style.setProperty('--scroll', scroll + '%');

            /* Apply classes for slide in bar */
            scrollpos = window.scrollY;

            if (scrollpos > 100) {
                header.classList.remove('hidden');
                header.classList.remove('fadeOutUp');
                header.classList.add('slideInDown');
            } else {
                header.classList.remove('slideInDown');
                header.classList.add('fadeOutUp');
                header.classList.add('hidden');
            }
        };

       

        // Scroll to top functionality
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        const scrollTopButton = document.querySelector('.js-scroll-top');
        if (scrollTopButton) {
            scrollTopButton.onclick = scrollToTop;

            const path = document.querySelector('.scroll-top path');
            const pathLength = path.getTotalLength();
            path.style.transition = path.style.WebkitTransition = 'none';
            path.style.strokeDasharray = `${pathLength} ${pathLength}`;
            path.style.strokeDashoffset = pathLength;
            path.getBoundingClientRect();
            path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

            const updateScrollPosition = () => {
                const scrollY = window.scrollY || window.scrollTop || document.documentElement.scrollTop;
                const maxScrollHeight = Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight,
                    document.body.offsetHeight,
                    document.documentElement.offsetHeight,
                    document.body.clientHeight,
                    document.documentElement.clientHeight
                );
                const windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

                const dashOffset = pathLength - (scrollY * pathLength) / (maxScrollHeight - windowHeight);
                path.style.strokeDashoffset = dashOffset;
            };

            updateScrollPosition();

            const scrollThreshold = 100;
            window.addEventListener('scroll', () => {
                updateScrollPosition();
                const scrollY = window.scrollY || window.scrollTop || document.getElementsByTagName('html')[0].scrollTop;
                if (scrollY > scrollThreshold) {
                    scrollTopButton.classList.add('is-active');
                } else {
                    scrollTopButton.classList.remove('is-active');
                }
            });
        }

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (


        <main class="bg-white font-sans leading-normal tracking-normal">

            {/* <!--Nav--> */}
            {/* <nav className="bg-gray-900 p-4 mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex text-white font-extrabold">
          <a className="flex text-white text-base no-underline hover:text-white hover:no-underline" href="#"> 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-squirrel">
              <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"/>
              <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"/>
              <path d="M15.2 22a3 3 0 0 0-2.2-5"/>
              <path d="M18 13h.01"/>
            </svg> 
            <span className="hidden w-0 md:w-auto md:block pl-1">Ghostwind CSS</span>
          </a>
        </div>
        <div className="flex pl-4 text-sm">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className="mr-2">
              <a className="inline-block py-2 px-2 text-white no-underline" href="index.html">HOME</a>
            </li>
            <li className="mr-2">
              <a className="inline-block text-indigo-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-2" href="#">LINK</a>
            </li>
            <li className="mr-2">
              <a className="inline-block text-indigo-200 no-underline hover:text-indigo-100 hover:text-underline py-2 px-2" href="#">LINK</a>
            </li>
            <li className="mr-2">
              <a className="inline-block text-indigo-200 no-underline hover:text-indigo-100 hover:text-underline py-2 px-2" href="#">LINK</a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */}

            {/* <!--slide in nav--> */}
            <div id="header" className="bg-white fixed w-full z-10 top-0 hidden animated" style={{ opacity: 0.95 }}>
                <div className="bg-white">
                    <div className="flex flex-wrap items-center content-center">
                        <div className="flex w-1/2 justify-start text-white font-extrabold">
                            <a className="flex text-gray-900 no-underline hover:text-gray-900 hover:no-underline pl-2" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#334484" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-squirrel">
                                    <path d="M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10" />
                                    <path d="M16 20c0-1.7 1.3-3 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4" />
                                    <path d="M15.2 22a3 3 0 0 0-2.2-5" />
                                    <path d="M18 13h.01" />
                                </svg>
                                <span className="hidden w-0 md:w-auto md:block pl-1">Ghostwind CSS</span>
                            </a>
                        </div>
                        <div className="flex w-1/2 justify-end content-center">
                            <p className="hidden sm:block mr-3 text-center h-14 p-4 text-xs"><span className="pr-2">Share this</span> 👉</p>
                            <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://twitter.com/intent/tweet?url=#" style={{ backgroundColor: '#33b1ff' }}>
                                <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" /></svg>
                            </a>
                            <a className="inline-block text-white no-underline hover:text-white hover:text-underline text-center h-10 w-10 p-2 md:h-auto md:w-16 md:p-4" href="https://www.facebook.com/sharer/sharer.php?u=#" style={{ backgroundColor: '#005e99' }}>
                                <svg className="fill-current text-white h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Progress bar */}
                <div id="progress" className="h-1 bg-white shadow" style={{ background: 'linear-gradient(to right, #4dc0b5 var(--scroll), transparent 0)' }}></div>
            </div>


            {/* Title */}
            {/* <div className="text-center pt-16 md:pt-32">
                <p className="text-sm md:text-base text-green-500 font-bold">
                    04 AUGUST 2023 <span className="text-gray-900">/</span> GETTING STARTED
                </p>
                <h1 className="font-bold break-normal text-3xl md:text-5xl">
                    Welcome to Ghostwind CSS
                </h1>
            </div> */}



            <div class="w-full max-w-8xl  mx-auto bg-white bg-cover mt-8 rounded bg-gray-100">
                <div
                    className="bg-white w-full text-4xl  text-gray-800 leading-normal ml-40 mt-20"
                //   style={{ fontFamily: 'Georgia, serif' }}
                >
                    <h4 className='text-xl flex gap-3 bg-gray-100'>
                        <svg  width="34"
                    height="34" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 288 480 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-370.7 0 73.4-73.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128z" /></svg>
                        Back</h4>
                    <h1 className='text-black bg-gray-100'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>
                </div>
                <a href="#">
                    {/* <img class="rounded-t-lg" src="https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg" alt="" /> */}
                    <div
                        className=" w-full max-w-[100%] mx-auto bg-white bg-cover mt-8 rounded"
                        style={{
                            backgroundImage: "url('https://www.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg')",
                            height: '75vh',
                        }}
                    ></div>
                </a>
                <div className="p-5 ml-40 mt-10">

                    <p className="text-xl text-black mb-5">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-500  ">
                        DATE

                    </a>
                </div>
            </div>

            <section class="flex justify-between mt-8 mx-4">
        <article class="w-1/4 px-4 py-6 bg-white rounded-lg shadow-md">
            <h2 class="text-xl font-bold mb-2 text-red-400" >Table of content</h2>
            <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel tortor ut odio fermentum suscipit.</p>
        </article>
        <div class="w-1/2 px-4 py-6 bg-white rounded-lg shadow-md overflow-y-auto scrollable">
            <div class="h-96">
                <h2 class="text-xl font-bold mb-2">Scrollable Text Area</h2>
                <div
                        className="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal"
                        style={{ fontFamily: 'Georgia, serif' }}
                    >
                        {/* Post Content */}
                        {/* Lead Para */}
                        <p className="text-2xl md:text-3xl mb-5">
                            Welcome fellow{' '}
                            <a
                                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                                href="https://www.tailwindcss.com"
                            >
                                Tailwind CSS
                            </a>{' '}
                            and{' '}
                            <a
                                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                                href="https://www.ghost.org"
                            >
                                Ghost
                            </a>{' '}
                            fan. This starter template is an attempt to replicate the default Ghost theme{' '}
                            <a
                                className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                                href="https://demo.ghost.io/welcome"
                            >
                                "Casper"
                            </a>{' '}
                            using Tailwind CSS and vanilla Javascript.
                        </p>

                        <p className="py-6">
                            The basic blog page layout is available and all using the default Tailwind CSS classes
                            (although there are a few hardcoded style tags). If you are going to use this in your
                            project, you will want to convert the classes into components.
                        </p>

                        <p className="py-6">
                            Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis
                            tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet,
                            tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at
                            lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel
                            erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus.
                            Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque
                            tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio
                            risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.
                        </p>

                        <ol>
                            <li className="py-3">
                                Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce
                                vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est
                                quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit
                                amet tellus scelerisque tortor semper posuere.
                            </li>
                            <li className="py-3">
                                Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis
                                auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra.
                                Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget
                                ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec
                                felis.
                            </li>
                            <li className="py-3">
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
                                Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique
                                rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis
                                malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit,
                                elementum odio et, consequat tellus.
                            </li>
                        </ol>

                        <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">
                            Crocodiles are easy. They try to kill and eat you. People are harder. Sometimes they
                            pretend to be your friend first. <br />- Steve Irwin
                        </blockquote>

                    
                    </div>
            </div>
        </div>
        <article class="w-1/4 h-full px-4 py-6 bg-white rounded-lg shadow-md">
           

<div class="max-w-[100%]  rounded-lg shadow ">
    <a href="#">
        <div className='bg-cover' style={{
                            backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC53r_mfuwGqpHKGnwrcXaaH1zU7FXqPJu-h-e8aWKPs50NTtD')",
                            height: '47vh',
                        }}>

        </div>
        {/* <img className="rounded-t-lg "   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC53r_mfuwGqpHKGnwrcXaaH1zU7FXqPJu-h-e8aWKPs50NTtD" alt="" /> */}
    </a>
    <div class="bg-transparent -mt-20 ml-5">
     
            <h5 className="mb-3 ">Noteworthy technology acquisitions 2021</h5>
        
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </article>
    </section>



        


            {/* <!--   Scroll Top Button  --> */}
            <button
                className="btn-toggle-round scroll-top js-scroll-top"
                type="button"
                title="Scroll to top"
            >
                <svg
                    className="progress-circle"
                    width="100%"
                    height="100%"
                    viewBox="-1 -1 102 102"
                >
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-arrow-up"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="18" y1="11" x2="12" y2="5" />
                    <line x1="6" y1="11" x2="12" y2="5" />
                </svg>
            </button>

            <div className="bg-gray-200">
                <div className="container w-full max-w-6xl mx-auto px-2 py-8">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <a href="#" className="no-underline hover:no-underline">
                                    <img
                                        src="https://source.unsplash.com/_AjqGGafofE/400x200"
                                        className="h-48 w-full rounded-t shadow-lg"
                                        alt="Article thumbnail"
                                    />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">GETTING STARTED</p>
                                        <div className="font-bold text-xl text-gray-900">Aperture Science</div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            I’ll be honest, we’re throwing science at the wall here to see what sticks. No idea what it’ll do. Probably nothing. Best case scenario you might get some super powers. Worst case, some tumors, which we’ll cut out.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4"
                                            src="http://i.pravatar.cc/300"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">2 MIN READ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <a href="#" className="no-underline hover:no-underline">
                                    <img
                                        src="https://source.unsplash.com/_AjqGGafofE/400x200"
                                        className="h-48 w-full rounded-t shadow"
                                        alt="Article thumbnail"
                                    />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">UNDERWATER</p>
                                        <div className="font-bold text-xl text-gray-900">Biolumini algae diatomeae ecology.</div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            Lorem ipsum dolor sit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4"
                                            src="http://i.pravatar.cc/300"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">4 MIN READ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 px-2 pb-12">
                            <div className="h-full bg-white rounded overflow-hidden shadow-md hover:shadow-lg relative smooth">
                                <a href="#" className="no-underline hover:no-underline">
                                    <img
                                        src="https://source.unsplash.com/DEa8_vxKlEo/400x200"
                                        className="h-48 w-full rounded-t shadow"
                                        alt="Article thumbnail"
                                    />
                                    <div className="p-6 h-auto md:h-48">
                                        <p className="text-gray-600 text-xs md:text-sm">FOREST</p>
                                        <div className="font-bold text-xl text-gray-900">What is life but a teardrop in the eye of infinity?</div>
                                        <p className="text-gray-800 font-serif text-base mb-5">
                                            Mollis pretium integer eros et dui orci, lectus nec elit sagittis neque. Dignissim ac nullam semper aliquet volutpat, ut scelerisque.
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-between inset-x-0 bottom-0 p-6">
                                        <img
                                            className="w-8 h-8 rounded-full mr-4"
                                            src="http://i.pravatar.cc/300"
                                            alt="Avatar of Author"
                                        />
                                        <p className="text-gray-600 text-xs md:text-sm">7 MIN READ</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900">
                <div className="container max-w-6xl mx-auto flex items-center px-2 py-8">
                    <div className="w-full mx-auto flex flex-wrap items-center">
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                            <a className="text-gray-900 no-underline hover:text-gray-900 hover:no-underline" href="#">
                                <span className="text-base text-gray-200">Ghostwind</span>
                            </a>
                        </div>
                        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                            <ul className="list-reset flex justify-center flex-1 md:flex-none items-center">
                                <li>
                                    <a className="inline-block py-2 px-3 text-white no-underline" href="index.html">HOME</a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                                </li>
                                <li>
                                    <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:underline py-2 px-3" href="#">link</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </main>



    )
}

export default BlogContent