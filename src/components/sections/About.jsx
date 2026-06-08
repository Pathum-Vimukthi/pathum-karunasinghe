import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Flutter",
    "Angular"
  ];
  const backendSkills = [
    "Node.js",
    "Nest.js",
    "Express",
    "MongoDB",
    "Spring Boot",
    "Java",
    "Python",
    "MySQL",
    "PHP",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Associate Software Engineer at WATTSOFT Pvt Ltd and BICT (Hons) graduate from the University of Ruhuna with a Second Class Upper Division. Experienced in full-stack software development using Java, Spring Boot, React.js, TypeScript, Node.js, PostgreSQL, MySQL, and modern development tools.
              Currently working on enterprise applications involving React.js, Spring Boot, Docker, PostgreSQL, and scalable software architectures. Previously contributed to an Incident Management System at Sri Lanka Telecom PLC, developing frontend and backend features, REST APIs, JWT authentication, and real-time functionalities.
              Passionate about Software Engineering, Full-Stack Development, Cloud Technologies, and DevOps. Committed to writing clean, maintainable code, solving real-world problems, and continuously learning emerging technologies. Strong collaborator with experience in Agile development environments and cross-functional teams.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Frontend
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </h3>
              </div>
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  Backend
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  {/* Education */}
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-6">🏫 Education</h3>
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/80 via-cyan-400/40 to-transparent" />
      <div className="space-y-6">
        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-blue-400 font-medium tracking-wide">2022 – 2026</span>
            <h4 className="font-semibold text-white">Bachelor of Information and Communication Technology (Honors)</h4>
            <p className="text-sm text-gray-400">University of Ruhuna, Matara, Sri Lanka</p>
            <p className="text-xs text-gray-500 mt-1">
              Second Class Upper Division | Software Engineering, Web Application Development, Software Testing and Quality Assurance.
            </p>
          </div>
        </div>

        
        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-blue-400 font-medium tracking-wide">2020 Dec – 2021 Jan</span>
            <h4 className="font-semibold text-white">Certificate Program in Java Application Development using JavaSE</h4>
            <p className="text-sm text-gray-400">University of Colombo School of Computing, Colombo</p>
            <p className="text-xs text-gray-500 mt-1">
              Core Java, OOP Concepts, Exception Handling, Collections, Multithreading, JDBC, GUI (AWT & Swing), Socket Programming, and Java Security.
            </p>
          </div>
        </div>
       
       
        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-blue-400 font-medium tracking-wide">2019 Sep – 2020 Mar</span>
            <h4 className="font-semibold text-white">National Certificate: ICT Technician, (NVQ Level 4)</h4>
            <p className="text-sm text-gray-400">National Apprentice and Industrial Training Authority, Mawanella</p>
            <p className="text-xs text-gray-500 mt-1">
              Computer Operations, MS Office Applications, Database Management, Network Services, Graphic Design, and Information System Development.
            </p>
          </div>
        </div>
       
        
      </div>
    </div>
  </div>

  {/* Work Experience */}
  <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
    <h3 className="text-xl font-bold mb-6">💼 Work Experience</h3>
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/80 via-blue-400/40 to-transparent" />
      <div className="space-y-6">

        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-cyan-400 font-medium tracking-wide">2026 Jan – Present</span>
            <h4 className="font-semibold text-white">Associate Software Engineer</h4>
            <p className="text-sm text-gray-400">WATTSOFT Pvt Ltd, Kegalle</p>
            <p className="text-xs text-gray-500 mt-1">
              Working on enterprise applications with React.js, Spring Boot, Docker, and PostgreSQL.
            </p>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-cyan-400 font-medium tracking-wide">2025 Jul – 2025 Dec</span>
            <h4 className="font-semibold text-white">Intern Software Engineer</h4>
            <p className="text-sm text-gray-400">SLT PLC, Colombo</p>
            <p className="text-xs text-gray-500 mt-1">
              Built React.js dashboards and REST API integrations for an enterprise Incident Management System (SDesk), with backend contributions in Nest.js, PostgreSQL, JWT auth, and Agile workflows.
            </p>
          </div>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-cyan-500/20 border-2 border-cyan-500 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xs text-cyan-400 font-medium tracking-wide">2020 Jul – 2021 Jan</span>
            <h4 className="font-semibold text-white">Trainee ICT Technician</h4>
            <p className="text-sm text-gray-400">NAITA, District Office, Kegalle</p>
            <p className="text-xs text-gray-500 mt-1">
              Completed a 6-month training program, efficiently handling tasks with strong computer skills and a dedicated, reliable work ethic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
