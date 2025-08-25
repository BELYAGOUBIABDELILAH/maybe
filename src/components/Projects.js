import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Github } from "lucide-react";
import projectsData from "../data/projects.json";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div className="min-h-screen bg-[#030014] px-6 md:px-12 py-12">
      <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">My Projects</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white/[0.05] p-6 rounded-xl border border-white/10 hover:border-blue-500/40 transition-all duration-300"
          >
            <img
              src={project.Img}
              alt={project.Title}
              className="rounded-lg mb-4 object-cover h-48 w-full"
            />
            <h2 className="text-xl font-semibold text-white mb-2">{project.Title}</h2>
            <p className="text-gray-400 text-sm mb-4">{project.Description}</p>

            <div className="flex gap-3">
              <button
                onClick={() => navigate(`/projects/${project.id}`)}
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Details
              </button>

              <a
                href={project.Github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
              >
                <Github className="w-4 h-4" /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
