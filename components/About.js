import Myday from "../helper/Myday";
import Greetings from "../helper/Greetings";
const About = () => {
  return (
    <>
      <div className="flex flex-col shadow-xl leading-8 shadow-sky-300 text-lg lg:text-2xl rounded-lg max-w-5xl lg:max-w-7xl mt-20 mx-auto pb-10 mb-3 text-center font-normal">
        <p className="sm:pb-10 pb-3 font-cursive text-lg sm:text-6xl pt-10">
          <Greetings />
        </p>
        <div className="text-left">
          <div className="mx-auto sm:w-4/5">
            <p
              className="pl-6 pr-6 sm:pr-0 text-justify align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              <span className="inline-block pr-1">
                <Myday />
              </span>
              I'm Ashwin, a tech enthusiast on a journey fueled by data. After
              spending 3+ years into the depths of digital marketing as a
              <span className="font-bold p-1">Paid Analyst</span>, I discovered
              my true passion my ❤️ belongs to data. So, I waved goodbye to my
              old job and dove into the world of data science.
            </p>
          </div>
          <div className="mx-auto sm:w-4/5 pt-3">
            <p
              className="pl-6 text-justify pr-6 align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              With a degree in Information Technology from Pune University, I've
              spent time polishing my skills in data cleaning, modeling,
              visualization, and predictions. But more than that, I'm genuinely
              curious about the stories data can tell.
            </p>
          </div>

          <div className="mx-auto sm:w-4/5 pt-3">
            <p
              className="pl-6 text-justify pr-6 align-paragraph"
              style={{ lineHeight: "1.6" }}
            >
              Now, I'm ready for new adventures—whether that's a full-time gig
              or some freelance projects. If you're interested in knowing more
              about me or want to chat about potential opportunities, don't
              hesitate to reach out. You can find my resume 👉
              <a
                className="sm:m-2 sm:p-2 hover:bg-blue-300 rounded-full"
                href="https://drive.google.com/drive/folders/1D4xZRbmFEl3COi35hu2Z0ALXeGfK3wwU?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄
              </a>
            </p>
          </div>
        </div>
        {/* <ScrollIntoView selector="#scroll">
        <div className="mx-auto ">
          <FaArrowAltCircleDown className="animate-bounce mx-auto text-3xl text-blue-600"></FaArrowAltCircleDown>
        </div>
      </ScrollIntoView> */}
      </div>
    </>
  );
};

export default About;
