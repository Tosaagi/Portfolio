import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured online shopping platform with a modern UI, product management, and a secure checkout process.',
    imageUrl: 'https://placehold.co/600x400/3498db/ffffff?text=E-commerce',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative tool to help teams organize tasks, set deadlines, and track progress with an intuitive drag-and-drop interface.',
    imageUrl: 'https://placehold.co/600x400/2ecc71/ffffff?text=Task+Manager',
    tags: ['Next.js', 'Firebase', 'Tailwind CSS', 'React Query'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects, built with a focus on performance and aesthetics.',
    imageUrl: 'https://placehold.co/600x400/e74c3c/ffffff?text=Portfolio',
    tags: ['React', 'Framer Motion', 'Styled Components'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    id: 4,
    title: 'Weather Dashboard',
    description: 'A clean and simple weather application that provides real-time weather data for any city in the world.',
    imageUrl: 'https://placehold.co/600x400/9b59b6/ffffff?text=Weather+App',
    tags: ['React', 'OpenWeatherMap API', 'CSS Modules'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Blogging Platform',
    description: 'A full-stack blogging platform where users can create, edit, and publish their own articles with rich text formatting.',
    imageUrl: 'https://placehold.co/600x400/f1c40f/ffffff?text=Blog+Platform',
    tags: ['React', 'GraphQL', 'Prisma', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
  },
   {
    id: 6,
    title: 'AI Chatbot Assistant',
    description: 'An intelligent chatbot built with the Gemini API to assist users with their queries in a conversational manner.',
    imageUrl: 'https://placehold.co/600x400/1abc9c/ffffff?text=AI+Chatbot',
    tags: ['Python', 'Flask', 'Gemini API', 'React'],
    liveUrl: '#',
    githubUrl: '#',
  }
];

function ProjectsDisplay() {
  return (
    <section id="projects" className="w-full flex flex-col items-center space-y-4 scroll-mt-20 animate-fade-in-up px-4 sm:px-0">
      <h2 className="text-3xl font-bold">My Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsDisplay;
