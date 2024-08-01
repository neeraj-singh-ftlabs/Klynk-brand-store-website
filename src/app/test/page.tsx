"use client"
import Head from 'next/head';
import { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState('introduction');

  const sections = [
    { id: 'introduction', title: 'Introduction' },
    { id: 'conditions', title: 'Conditions of Use' },
    { id: 'account', title: 'Your Account' },
    { id: 'privacy', title: 'Privacy' },
    { id: 'communication', title: 'E-Platform for Communication' },
    { id: 'access', title: 'Access to our Platforms' },
    { id: 'license', title: 'License for Platform Access' },
    { id: 'premium', title: 'Premium Features and Restrictions' },
    { id: 'content', title: 'Content and Posting' },
    { id: 'conduct', title: 'Your Conduct' },
    { id: 'reviews', title: 'Reviews and Communications' },
    { id: 'objectionable', title: 'Claims against Objectionable Content' },
    { id: 'copyright', title: 'Copyright and Database Rights' },
    { id: 'trademarks', title: 'Trademarks' },
    { id: 'disclaimer', title: 'Disclaimer' },
    { id: 'indemnity', title: 'Indemnity and Release' },
    { id: 'children', title: 'Children' },
    { id: 'communications', title: 'Communications' },
    { id: 'losses', title: 'Losses' },
    { id: 'alterations', title: 'Alterations to Service' },
    { id: 'recipes', title: 'Recipes and Guided Cooking' },
    { id: 'events', title: 'Events Beyond Our Control' },
    { id: 'waiver', title: 'Waiver' },
    { id: 'governing-law', title: 'Governing Law and Jurisdiction' },
    { id: 'company-details', title: 'Our Details' },
    { id: 'software', title: 'Software Terms' },
    { id: 'sanctions', title: 'Sanctions' },
    { id: 'infringement', title: 'Claims of Right Infringements' },
  ];

  return (
    // <div className="min-h-screen bg-gray-100">
    //   <Head>
    //     <title>Terms and Conditions - Futuristic Labs Private Limited</title>
    //     <meta name="description" content="Terms and Conditions for Futuristic Labs Private Limited platforms and services" />
    //   </Head>

    //   <main className="container mx-auto px-4 py-8">
    //     <h1 className="text-3xl font-bold mb-6 text-center">Terms and Conditions</h1>
        
    //     <div className="flex flex-col md:flex-row gap-6">
    //       <nav className="md:w-1/4">
    //         <ul className="sticky top-4 bg-white shadow-md rounded-lg p-4">
    //           {sections.map((section) => (
    //             <li key={section.id} className="mb-2">
    //               <button
    //                 onClick={() => setActiveSection(section.id)}
    //                 className={`w-full text-left px-2 py-1 rounded ${
    //                   activeSection === section.id ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'
    //                 }`}
    //               >
    //                 {section.title}
    //               </button>
    //             </li>
    //           ))}
    //         </ul>
    //       </nav>

    //       <div className="md:w-3/4">
    //         <div className="bg-white shadow-md rounded-lg p-6">
    //           {activeSection === 'introduction' && (
    //             <section>
    //               <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
    //               <p className="mb-4">
    //                 The platforms www.klynk.recipes, www.klynk.app, www.cookwithsemi.com, www.getriku.com, and appliances
    //                 Semi, Riku, and other associated hardware appliances manufactured or distributed which may or may not be
    //                 embedded with its proprietary software are collectively referred to as "platform/s" and are operated by M/s.
    //                 Futuristic Labs Private Limited, (hereinafter referred to as "Futuristic Labs", "We", "Our", and "Us") having its
    //                 registered address at "1-107-9/4, MIG 187/8, MVP Colony, Sector -8, Visakhapatnam 530017, Andhra Pradesh,
    //                 India" and having its office located at AIKA Plaza, 5th floor, Ayyappa Society, Madhapur, Hyderabad, Telangana.
    //               </p>
    //               <p className="mb-4">
    //                 Please read the Conditions of Use document carefully before using our platforms. By using any of the platform or
    //                 application, hardware appliances embedded with or without our software are collectively referred to as platform,
    //                 you signify your agreement to be bound by Futuristic Labs Private Limited's terms of usage.
    //               </p>
    //               <p>
    //                 For any queries or issues relating to our platforms, you can contact us at hello@ftlabs.io
    //               </p>
    //             </section>
    //           )}

    //           {activeSection === 'conditions' && (
    //             <section>
    //               <h2 className="text-2xl font-semibold mb-4">Conditions of Use</h2>
    //               <p className="mb-4">
    //                 Please read these conditions carefully before using our platform. By using the platform, you signify your agreement
    //                 to be bound by these conditions.
    //               </p>
    //               <p className="mb-4">
    //                 In addition, when you use any current or future Futuristic Labs Private Limited services and products you will also
    //                 be subject to the terms, guidelines and conditions applicable to that Service terms.
    //               </p>
    //               <p>
    //                 These "Conditions of Use" constitute an electronic record within the meaning of the applicable law. This electronic
    //                 record is generated by a computer system and does not require any physical or digital signatures.
    //               </p>
    //             </section>
    //           )}

    //           {activeSection === 'account' && (
    //             <section>
    //               <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
    //               <p className="mb-4">
    //                 If you use the platform or the application of our platform, you are responsible for maintaining the confidentiality of
    //                 your account and password and for restricting access to your computer to prevent unauthorized access to your account.
    //               </p>
    //               <p className="mb-4">
    //                 You agree to accept responsibility for all activities that occur under your account or password. You should
    //                 take all necessary steps to ensure that the password is kept confidential and secure and should inform us
    //                 immediately if you have any reason to believe that your password has become known to anyone else, or if the
    //                 password is being, or is likely to be, used in an unauthorized manner.
    //               </p>
    //               <p>
    //                 Futuristic Labs Private Limited reserves the right to refuse access to the platform, terminate accounts,
    //                 remove or edit content at any time without notice to you.
    //               </p>
    //             </section>
    //           )}

    //           {/* Add more sections here, following the same pattern */}

    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
    <></>
  );
};

export default TermsAndConditions;