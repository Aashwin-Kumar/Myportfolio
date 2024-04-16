import dynamic from "next/dynamic";
import Head from "next/head";

const FrontEnd = dynamic(() => import("../components/FrontEnd"));
const Heads = dynamic(() => import("../components/Heads"));
const Contact = dynamic(() => import("../components/Contact"));
const Skills = dynamic(() => import("../components/Skills"));
const Footer = dynamic(() => import("../components/Footer"));
const About = dynamic(() => import("../components/About"));
const Card = dynamic(() => import("../components/Card"));

const Particalsbackground = dynamic(
  () => import("../components/Particalsbackground"),
  {
    ssr: false,
  }
);
// import Particalsbackground from "../components/Particalsbackground";
// import Slider from "../helper/Slider";

// import Headings from "../components/Headings";

const text =
  "Its not who you are underneath, its what you do that defines you.";
console.log(text);
export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hello there this is Ashwin Kumar Software Engineer and Digital Marketer from Pune"
        />
        <meta
          name="keywords"
          content="Software Engineer, Digital Marketer, web developer,Freelance web developer,react web developer, Ashwin Kumar,"
        />
        <meta
          name="google-site-verification"
          content="2JiSX7E5qG08N5uRVo_unzYtuOoyU741bNi--funpxc"
        />
      </Head>
      {/* <ThemeProvider attribute="class"> */}
      <div className="min-h-screen px-3 sm:px-5 scroll-smooth ">
        <Particalsbackground />
        <Heads />
        <Card />
        <About />
        <FrontEnd />
        <Skills />
        <Contact />
        <Footer />
      </div>

      {/* </ThemeProvider> */}
    </>
  );
}
