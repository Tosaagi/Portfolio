// SVG Icon for GitHub
const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

// SVG Icon for External Link
const ExternalLinkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
        <polyline points="15 3 21 3 21 9"></polyline>
        <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
);


// Individual Project Card Component
const ProjectCard = ({ project }) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl bg-gray-800 shadow-md transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-2">
        <div className="relative">
          <a href={project.githubUrl}>
            <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
            />
          </a>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-4">
                 <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                    <span key={index} className="rounded-full bg-mainaccent px-3 py-1 text-xs font-semibold text-black">
                        {tag}
                    </span>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-bold text-mainaccent">{project.title}</h3>
            <p className="mt-3 flex-1 text-gray-300">{project.description}</p>
            <div className="mt-6 flex items-center justify-start gap-4">
              {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <ExternalLinkIcon />
                Live Demo
              </a>
              )}
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-gray-700 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                  <GitHubIcon />
                  GitHub
              </a>
            </div>
        </div>
    </div>
  );
};

export default ProjectCard;