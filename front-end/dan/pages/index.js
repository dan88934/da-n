import dynamic from "next/dynamic";
import Head from "next/head";
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Home from "../src/components/Home";
import Resume from "../src/components/Resume";
import AboutMe from "../src/components/sections/AboutMe";
import BlogSection from "../src/components/sections/Blog";
import Clients from "../src/components/sections/Clients";
import ContactForm from "../src/components/sections/ContactForm";
import ContactInfo from "../src/components/sections/ContactInfo";
import FunFact from "../src/components/sections/FunFact";
import Pricing from "../src/components/sections/Pricing";
import Quote from "../src/components/sections/Quote";
import ResumeSection from "../src/components/sections/Resume";
import Services from "../src/components/sections/Services";
import Skills from "../src/components/sections/Skills";
import Testimonials from "../src/components/sections/Testimonials";
import TypingAnimation from "../src/components/TypingAnimation";
import Work from "../src/components/Work";
import ContentContainer from "../src/layout/ContentContainer";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
const RecentWorks = dynamic(
  () => import("../src/components/sections/RecentWorks"),
  {
    ssr: false,
  }
);
const bio = `<p>
Hey, I'm Dan! I'm a skilled Full Stack Developer and DevOps Engineer with extensive experience in building and deploying web applications using Python, Go, and JavaScript.
</p>`;
const IndexDark = () => {
  return (
    <Layout bg={"blured"}>
      <Head>
        <link rel="stylesheet" href="css/new-skin/new-skin.css" />
        <link rel="stylesheet" href="css/template-dark/dark.css" />
        <link rel="stylesheet" href="css/new-skin/minimal-skin.css" />
      </Head>
      <Header />
      <Home>
        <div className="profile no-photo">
          <div
            className="slide"
            style={{ backgroundImage: "url(images/headshot-crop3.png)" }}
          />
          <div className="title">Dan Hughes</div>
          <TypingAnimation />
          <div className="social">
            <a target="_blank" rel="noreferrer" href="https://dribbble.com/">
              <span className="fa fa-linkedin" style={{fontSize:'25px'}}/>
            </a>
            {/* <a target="_blank" rel="noreferrer" href="https://twitter.com/">
              <span className="fa fa-twitter" style={{fontSize:'25px'}}/>
            </a> */}
            <a target="_blank" rel="noreferrer" href="https://github.com/">
              <span className="fa fa-github" style={{fontSize:'25px'}}/>
            </a>
          </div>
          {/* profile buttons */}
          <div className="lnks">
            <a href="#" className="lnk">
              <span className="text">Download CV</span>
              <span className="ion ion-ios-cloud-download"></span>
            </a>
            <a href="#" className="lnk discover">
              <span className="text">Contact Me</span>
              <span className="ion ion-paper-airplane"></span>
            </a>
          </div>
        </div>
      </Home>
      <ContentContainer>
        <About>
          <AboutMe bio={bio} />
          <Services />
          <Pricing />
          <FunFact />
          <Clients />
          <Quote />
        </About>
        <Resume>
          <ResumeSection />
          <Skills />
          <Testimonials />
        </Resume>
        <Work>
          <RecentWorks />
        </Work>
        <Blog>
          <BlogSection />
        </Blog>
        <Contact>
          <ContactInfo />
          <ContactForm />
        </Contact>
      </ContentContainer>
    </Layout>
  );
};
export default IndexDark;