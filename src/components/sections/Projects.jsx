import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Sabaragamuwa Athsalu Inventory Management System
              </h3>
              <p className="text-gray-400 mb-4">
                Developing an Inventory Management System, including a
                responsive and interactive user interface using React.js and
                Flowbite UI components. The backend was built using Node.js and
                Express.js to implement strong server-side logic and APIs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "MySQL",
                  "Sequelize ORM",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/sabaragamu-athsalu/Sabaragamu-Athsalu-Management-System.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">TECMIS Application</h3>
              <p className="text-gray-400 mb-4">
                Developed a Desktop Application using OOP Concepts, Java,
                JavaFX, MySQL with SceneBuilder and IntelliJ IDEA as a part of
                Java Programming module in the second year.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "JavaFX", "MySQL", "SceneBuilder", "OOP"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Pathum-Vimukthi/TECMIS-Java-base-Management-Information-System"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
              <p className="text-gray-400 mb-4">
                Developed a Web Application using HTML, JavaScript, CSS, PHP and
                MySQL as a part of E-Commerce module in the second year.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "JavaScript", "CSS", "PHP", "MySQL", "OOP"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/Pathum-Vimukthi/KwikMart-E-commerce-PHP-project"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                Hotel Management System
              </h3>
              <p className="text-gray-400 mb-4">
                Implemented a Hotel Management System web application for
                Advanced Database Management module using Node JS, React JS and
                MySQL.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "Tailwind CSS",
                  "MySQL",
                  "Sequelize ORM",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 rounded-full px-3 py-1 text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/FOT-Group-Project/Hotel-Booking-Management-System.git"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project ➡
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
