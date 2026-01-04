import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "A Decentralized File Sharing DApp",
    description:
      "MetaDrive is a decentralized file storage and sharing platform that allows users to upload files and securely control access using blockchain technology.",
    image: "/projects/project1.png",
    tags: ["React", "Ether.js", "Solidity"],
    deployment:
      "https://meta-drive-git-master-rugvedgadge789-8111s-projects.vercel.app?_vercel_share=XcVsuqGqq04RezsvN62lEO9wtL6OLFw2",
    github:
      "https://github.com/Rugved789/MetaDrive-Decentralized-File-Sharing-dApp",
  },
  {
    id: 2,
    title: "DevShare: Seamless Code Sharing & Execution",
    description:
      "DevShare is a real-time code collaboration platform that enables developers to share, edit, and execute code simultaneously with live output and chat-style history.",
    image: "./projects/project2.jpeg",
    tags: ["React", "Node.js", "Socket.io", "Piston API"],
    deployment: "",
    github: "https://github.com/Rugved789/DevShare-Real-Time-Code-Share",
  },
];
const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to details, performance and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => {
            return (
              <div
                key={key}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => {
                      return (
                        <span className="px-4 py-2 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground border">
                          {tag}
                        </span>
                      );
                    })}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 mt-4">
                    {project.description}
                  </p>

                  <div className="flex justify-end items-center mt-auto">
                    <div className="flex space-x-3">
                      <a
                        href={project.deployment}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 ">
          <a
            href="https://github.com/Rugved789"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
