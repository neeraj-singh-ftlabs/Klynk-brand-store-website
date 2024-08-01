"use client";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Head from "next/head";
import { useState } from "react";
const PrivacyPolicy = () => {
  const sections = [
    {
      id: "introduction",
      title: "Introduction",
      content: (
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Welcome to Klynk’s Privacy Policy
          </h2>
          <p className="mb-4">
            The creator of this Privacy Policy ensures a steady commitment to
            your privacy with regard to the protection of your invaluable
            information that you may share across the Klynk Products. This
            privacy policy contains information about the Klynk Products.
          </p>
          <p className="mb-4">
            To provide You with our uninterrupted use of the Klynk Products, We
            may collect and, in some circumstances, disclose information about
            you with your permission. To ensure better protection of Your
            privacy, We provide this notice explaining Our information
            collection and disclosure policies, and the choices You make about
            the way Your information is collected and used.
          </p>
          <hr />
          <p className="font-bold pt-5 pb-5">
            If you do not agree with the terms and conditions of our Privacy
            Policy, including in relation to the manner of collection or use of
            your information, please do not use or access the Site. If you have
            any questions or concerns regarding this Privacy Policy, you should
            contact our Customer Support Desk at “support@ftlabs.io”.
          </p>
          <hr />
        </section>
      ),
    },
    {
      id: "conditions",
      title: "INFORMATION WE COLLECT",
      content: (
        <>
         
          <p className="text-wrap leading-5 ">
            We are committed to respecting Your online privacy. We further
            recognize Your need for appropriate protection and management of any
            Personal Information You share with us. We may collect the following
            information:
          </p>
          <p className="leading-5 mt-10 ml-10 lg:ml-20">
            a. Personal data includes but not limited to Name, Phone Number,
            Email ID, Address, City. <br /> <br />
            b. Information is collected through permission derived by the Klynk
            Products for Location access, and storage permissions etc. <br />{" "}
            <br /> a. Tracking Information such as, but not limited to the IP
            address of your device and Device ID when connected to the Internet.
            This information may include the URL that you just came from, which
            URL you next go to, your computer or device browser information, and
            other information associated with your interaction with the Klynk
            Products; <br /> <br /> b. Details of Klynk Products usage for
            analytics. This privacy policy also applies to data we collect from
            users who are not registered as members of the Klynk Products,
            including, but not limited to, browsing behaviour, pages viewed etc.
            We also collect and store personal information provided by You from
            time to time on the Klynk Products. We only collect and use such
            information from you that we consider necessary for achieving a
            seamless, efficient and safe experience, customized to your needs
            including: <br /> <br /> a. To enable the provision of services
            opted for by you; <br /> <br /> b. To enable the viewing of content
            in your interest; <br /> <br /> c. To communicate the necessary
            account and service-related information from time to time; <br />{" "}
            <br /> d. To allow you to receive quality customer care services and
            data Collection; <br /> <br /> e. To comply with applicable laws,
            rules and regulations; Where any service requested by You involves a
            third party, such information as is reasonably necessary by the
            Company to carry out Your service request may be shared with such
            third party. We also do use your contact information to send you
            offers based on your interests and prior activity and also to view
            the content preferred by you. The Company may also use contact
            information internally to direct its efforts for service improvement
            but shall immediately delete all such information upon withdrawal of
            your consent for the same through the ‘unsubscribe’ button or
            through an email to be sent to “support@ftlabs.io”.
          </p>
        </>
      ),
    },
    {
      id: "account",
      title: "OUR USE OF YOUR INFORMATION",
      content: (
        <>
       
          <p className="text-wrap leading-5 ">
            The information provided by you shall be used to provide and improve
            the service for you and all users.
          </p>
          <p className="leading-5 mt-10 ml-10 lg:ml-20">
            a. To provide you with services on your request. <br /> <br /> b.
            For maintaining an internal record. <br /> <br />
            c. For enhancing the Services provided. <br /> <br /> d. For
            maintaining record under the legal and statutory provisions
          </p>
          <p className="text-wrap leading-5 mt-10">
            For more details about the nature of such communications, please
            refer to our Terms of Service. Further, your data and Sensitive
            Personal data may be collected and stored by Us for internal record.
            We use Your tracking information such as IP addresses, and or Device
            ID to help identify you and to gather broad demographic information
            and make further services available to you. We will not sell,
            license or trade Your personal information. We will not share your
            personal information with others unless they are acting under our
            instructions or we are required to do so by law. Information
            collected via Our server logs includes users IP addresses and the
            pages visited; this will be used to manage the web system and
            troubleshoot problems. We also use third-party analytics, tracking,
            optimization and targeting tools to understand how users engage with
            the Klynk Products so that we can improve it and cater personalized
            content/ads according to their preferences.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      title: "HOW INFORMATION IS COLLECTED",
      content: (
        <>
        
          <p className="text-wrap leading-8 mt-10">
            Before or at the time of collecting personal information, we will
            identify the purposes for which information is being collected. If
            the same is not identified to you, you have the right to request the
            Company to elucidate the purpose of collection of said personal
            information, pending the fulfilment of which you shall not be
            mandated to disclose any information whatsoever. We will collect and
            use your personal information solely to fulfil those purposes
            specified by us, within the scope of the consent of the individual
            concerned or as required by law. We will only retain personal
            information as long as necessary for the fulfilment of those
            purposes. We will collect personal information by lawful and fair
            means and with the knowledge and consent of the individual
            concerned. Personal data should be relevant to the purposes for
            which it is to be used, and, to the extent necessary for those
            purposes, should be accurate, complete, and up-to-date.
          </p>
        </>
      ),
    },
    {
      id: "communication",
      title: "GOOGLE ADSENSE",
      content: (
        <>
          <p className="text-wrap leading-8 mt-10">
            The Company uses Google AdSense which is a tool that allows Klynk
            Products publishers to deliver advertisements to site visitors in
            exchange for revenue calculated on a per-click or per-impression
            basis. You may visit the links in the advertisements at your own
            risk or choose to not accept the cookies permitting third parties to
            display their advertisements.
          </p>
        </>
      ),
    },
    {
      id: "access",
      title: "YOUR RIGHTS",
      content: (
        <>
          <p className="text-wrap leading-8 mt-10">
            The Company uses Google AdSense which is a tool that allows Klynk
            Products publishers to deliver advertisements to site visitors in
            exchange for revenue calculated on a per-click or per-impression
            basis. You may visit the links in the advertisements at your own
            risk or choose to not accept the cookies permitting third parties to
            display their advertisements.
          </p>
          <p className="text-wrap  mt-10">
            Unless subject to an exemption, you have the following rights
            concerning your data:
          </p>
          <p className="leading-5 mt-10 ml-10 lg:ml-20">
            a. The right to request a copy of your data which we hold about you;{" "}
            <br /> <br />
            b. The right to request for any correction to any personal data if
            it is found to be inaccurate or out of date;
            <br /> <br /> c. The right to withdraw Your consent to the
            processing at any time;
            <br /> <br /> d. The right to object to the processing of personal
            data;
            <br /> <br /> e. The right to complain about a supervisory
            authority.
            <br /> <br />
            f. The right to obtain information as to whether personal data are
            transferred to a third country or an international organization.
          </p>
          <p className="text-wrap leading-8 mt-10">
            Where you hold an account with any of our services, you are entitled
            to a copy of all personal data which we hold concerning you. You are
            also entitled to request that we restrict how we use your data in
            your account when you log in.
          </p>
        </>
      ),
    },
    {
      id: "license",
      title: "COMPLIANCES",
      content: (
        <>
          <p className="text-wrap leading-10 mt-10">
            <span className="font-bold">a. Indian Compliances</span>
            <br /> <br /> i. This legal agreement is an electronic record in
            terms of the Indian Information Technology Act, 2000 and rules there
            under as applicable and the amended provisions about electronic
            records in various statutes as amended by the Indian Information
            Technology Act, 2000. This electronic record is generated by a
            computer system and does not require any physical or digital
            signatures. <br /> <br />
            ii. This legal document is published in accordance with the
            provisions of Rule 3 (1) of the Indian Information Technology
            (Intermediaries guidelines) Rules, 2011 and Rule 4 of the
            Information Technology (Reasonable security practices and procedures
            and sensitive personal data or information) Rules, 2011 of
            Information Technology Act, 2000 amended through Information
            Technology Amendment Act, 2008 that require publishing the Terms of
            Use and practices for access and usage of any functional Klynk
            Products.
          </p>
          <p className="text-wrap leading-5 mt-10">
            <span className="font-bold">b. US Compliances:</span>
            <br /> <br /> This Privacy Policy is in compliance to all State and
            Federal Data Protection Law, including but not limited to The
            Childrens Online Privacy Protection Act (COPPA), California Business
            Code and any other law that shall be applicable to our Company.
          </p>
          <br /> <br />
          <p className="text-wrap leading-10mt-10 ">
            <span className="font-bold">c. GDPR Privacy Rights</span>
            <br /> <br /> The EU General Data Protection Regulation or GDPR
            gives certain rights to individuals in relation to their personal
            data. Accordingly, we are happy to offer transparency and access
            controls to help Users take advantage of those rights. As available,
            except as limited under applicable law, the rights afforded to
            individuals are:
            <br /> <br />
            i. Right of access- the right to be informed of, and request access
            to, the data we process about you, <br /> <br /> ii. Right to
            rectification – the right to request that we amend or update your
            data where it is inaccurate or incomplete, <br /> <br /> iii. Right
            to erasure- the right to request that we delete your data, <br />{" "}
            <br /> iv. Right to restrict – the right to request that we
            temporarily or permanently stop processing all or some of your
            personal data, <br /> <br /> v. Right to object – the right to
            object to us processing your personal data on grounds relating to
            your particular situation. Along with the right to object to your
            personal data being processed for direct marketing purposes, <br />{" "}
            <br /> vi. Right to data portability – the right to request a copy
            of your personal data in electronic format and the right to transmit
            that personal data for use in another part’s service, <br /> <br />{" "}
            vii. Right not to be subject to automated decision-making, the right
            to not be subject to a decision based solely on automated decision
            making, including profiling, where the decision would have a legal
            effect on you or produce a similarly significant effect.
          </p>
        </>
      ),
    },
    {
      id: "premium",
      title: "COOKIES",
      content: (
        <>
          <p className="text-wrap leading-10 mt-10 ">
            A cookie is a small file of letters and numbers that we store on
            your browser or the hard drive of your computer if you agree. By
            continuing to browse the site, you are agreeing to our use of
            cookies. Cookies contain information that is transferred to your
            computer’s hard drive. You can set your browser to refuse all or
            some browser cookies, or to alert you when Websites set or access
            cookies. If you disable or refuse cookies, please note that some
            parts of this Website may become inaccessible or not function
            properly. A list of the type of cookies we use is as follows;
          </p>
          <p className="font-bold text-wrap leading-5 mt-10 ">
            1. Strictly necessary cookies. <br /> <br /> 2.
            Analytical/performance cookies. <br /> <br /> 3. Functionality
            cookies. <br /> <br /> 4. Targeting cookies.
          </p>
          <p className="text-wrap leading-10 mt-10 ">
            Please note that third-parties (including, for example, advertising
            networks and providers of external services like web traffic
            analysis services) may also use cookies, over which we have no
            control. These cookies are likely to be analytical/performance
            cookies or targeting cookies. You can block cookies by activating
            the setting on your browser that allows you to refuse the setting of
            all or some cookies. However, if you use your browser settings to
            block all cookies (including essential cookies) you may not be able
            to access all or parts of our Website.
          </p>
        </>
      ),
    },
    {
      id: "content",
      title: "OUR DISCLOSURE OF YOUR INFORMATION",
      content: (
        <>
       
          <p className="leading-8">
            As a matter of policy, we do not sell or rent any personally
            identifiable information about you to any third party. However, the
            following describes some of the ways that your personally
            identifiable information may be disclosed: <br />
            <br /> a. External Service Providers: There may be several services
            offered by external service providers that help you use the Klynk
            Products. If you choose to use these optional services, and in the
            course of doing so, disclose information to the external service
            providers, and/or permit them to collect information about you, then
            their use of your information is governed by their privacy policy.
            Such External Service Providers shall be listed and updated in
            Annexure – A to this Policy. The Company shall update the same from
            time to time on the Platform. <br />
            <br /> b. Law and Order: We cooperate with law enforcement
            inquiries, as well as other third parties to enforce laws, such as
            intellectual property rights, fraud and other rights. We can (and
            you authorize us to) disclose any information about you to law
            enforcement and other government officials as we, in our sole
            discretion, believe necessary or appropriate, in connection with an
            investigation of fraud, intellectual property infringements, or
            other activity that is illegal or may expose us or you to legal
            liability.
          </p>
        </>
      ),
    },
    {
      id: "conduct",
      title: "ACCESSING, REVIEWING AND CHANGING YOUR PROFILE",
      content: (
        <>
      
          <p className="leading-8">
            You can review and change the information you submitted except Email
            ID. An option for facilitating such change shall be present on the
            Klynk Products and such change shall be facilitated by the User. If
            you change any information, we may or may not keep track of your old
            information. We will not retain in our files information you have
            requested to remove for certain circumstances, such as to resolve
            disputes, troubleshoot problems and enforce our terms and
            conditions. Such prior information shall be completely removed from
            our databases, including stored ‘back up’ systems. If you believe
            that any information, we are holding on to you is incorrect or
            incomplete, or to remove your profile so that others cannot view it,
            the User needs to rectify, and promptly correct any such incorrect
            information.
          </p>
        </>
      ),
    },
    {
      id: "reviews",
      title: "SECURITY",
      content: (
        <>
          <p className="leading-8">
            We treat data as an asset that must be protected against loss and
            unauthorized access. We employ many different security techniques to
            protect such data from unauthorized access by members inside and
            outside the Company. We follow generally accepted industry standards
            to protect the Personal Information submitted to us and information
            that we have accessed. However, as effective as encryption
            technology is, no security system is impenetrable. Our Company
            cannot guarantee the security of our database, nor can we guarantee
            that information you provide won’t be intercepted while being
            transmitted to the Company over the Internet
          </p>
        </>
      ),
    },
    {
      id: "objectionable",
      title: "SEVERABILITY",
      content: (
        <>
          <p className="leading-8">
            Each paragraph of this Privacy Policy shall be and remain separate
            from and independent of and severable from all and any other
            paragraphs herein except where otherwise expressly indicated or
            indicated by the context of the agreement. The decision or
            declaration that one or more of the paragraphs are null and void
            shall not affect the remaining paragraphs of this privacy policy.
          </p>
        </>
      ),
    },
    {
      id: "copyright",
      title: "AMENDMENT",
      content: (
        <>
          <p className="leading-8">
            Our Privacy Policy may change from time to time. The most current
            version of the policy will govern our use of your information and
            will always be on the Klynk Products. Any amendments to this Policy
            shall be deemed as accepted by the User on their continued use of
            the Klynk Products.
          </p>
        </>
      ),
    },
    {
      id: "trademarks",
      title: "CONSENT WITHDRAWAL, DATA DOWNLOAD & DATA REMOVAL REQUESTS",
      content: (
        <>
       
          <p className="leading-8">
            To withdraw your consent, or to request the download or delete your
            data with us for any or all our services at any time, please email
            to “Support@ftlabs.io”.
          </p>
        </>
      ),
    },
    {
      id: "disclaimer",
      title: "CONTACT US",
      content: (
        <>
          <p className="leading-8">
            If you have any questions or concerns regarding this privacy policy,
            you should contact us by sending an e-mail to “Support@ftlabs.io” or
            by writing to us at:
          </p>
          <h1 className="text-2xl text-center font-semibold mb-4 mt-10">
            M/s. Futuristic Labs Private Limited
          </h1>
          <p className="leading-8 text-center">
            “1-107-9/4, MIG 187/8, MVP Colony, Sector -8, Visakhapatnam 530017,
            Andhra Pradesh, India”
          </p>
        </>
      ),
    },
    // { id: "indemnity", title: "Indemnity and Release" },
    // { id: "children", title: "Children" },
    // { id: "communications", title: "Communications" },
    // { id: "losses", title: "Losses" },
    // { id: "alterations", title: "Alterations to Service" },
    // { id: "recipes", title: "Recipes and Guided Cooking" },
    // { id: "events", title: "Events Beyond Our Control" },
    // { id: "waiver", title: "Waiver" },
    // { id: "governing-law", title: "Governing Law and Jurisdiction" },
    // { id: "company-details", title: "Our Details" },
    // { id: "software", title: "Software Terms" },
    // { id: "sanctions", title: "Sanctions" },
    // { id: "infringement", title: "Claims of Right Infringements" },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>PRIVACY POLICY - Futuristic Labs Private Limited</title>
        <meta
          name="description"
          content="Terms and Conditions for Futuristic Labs Private Limited platforms and services"
        />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center lg:ml-40">
          PRIVACY POLICY
        </h1>
        <Sidebar sections={sections} />
      </main>
    </div>
  );
};
export default PrivacyPolicy;
