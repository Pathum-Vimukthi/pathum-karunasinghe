import DownloadIcon from "../../assets/download.png";
import GitHubIcon from "../../assets/github.png";
import LinkedInIcon from "../../assets/linkedin.png";
import MyProfile from "../../assets/Pathum Karunasinghe.jpg";
import MyResume from "../../assets/W.V.P.V. Karunasinghe_Software Engineer Intern.pdf";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="container lg:grid lg:grid-cols-2 items-center">
          <div className="items-center justify-center">
            <div className="flex items-center justify-center mt-20 mb-10">
              <figure className="img-box rounded-lg">
                <img
                  src={MyProfile}
                  alt="Pathum Karunasinghe.jpg"
                  className="img-cover rounded-full w-75 md:w-100"
                />
              </figure>
            </div>
            <div className="flex items-center gap-4 justify-center mt-10 mb-10">
              <figure>
                <a href="https://github.com/Pathum-Vimukthi" target="_blank">
                  <img
                    src={GitHubIcon}
                    width={50}
                    height={50}
                    alt="GitHub Icon"
                  />
                </a>
              </figure>
              <figure>
                <a
                  href="https://www.linkedin.com/in/pathum-karunasinghe/"
                  target="_blank"
                >
                  <img
                    src={LinkedInIcon}
                    width={40}
                    height={40}
                    alt="GitHub Icon"
                  />
                </a>
              </figure>
              <figure>
                <a href={MyResume} download>
                  <img
                    src={DownloadIcon}
                    width={40}
                    height={40}
                    alt="Download Icon"
                  />
                </a>
              </figure>
            </div>
          </div>

          <div>
            <div className="text-center z-10 px-4">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">
                Hi, I'm Pathum Karunasinghe
              </h1>
              <p className="text-gray-400 text-lg mb-8  mx-auto">
                Passionate full-stack developer and undergraduate at the
                University of Ruhuna, skilled in React, Spring Boot, Node.js,
                and Flutter, with a growing interest in DevOps. Experienced in
                technical roles and leadership through an ICT internship and as
                a Leo Club Director. Adaptable, quick to learn, and driven to
                create impactful, innovative solutions.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="#projects"
                  className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="border border-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] hover:bg-blue-500/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
