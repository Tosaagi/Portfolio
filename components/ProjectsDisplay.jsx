import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: 'BITSPLIT: a Bill Splitting App',
    description: 'A dynamic web application designed to split bills among a group of people. it uses Artificial Intelligence to automatically read and process information from a receipt.',
    imageUrl: 'https://tosaagi.github.io/assets/images/BITSPLIT.png',
    tags: ['Python'],
    liveUrl: 'https://bitsplit-cnh9ezhxgyh9hpf2.eastus-01.azurewebsites.net/',
    githubUrl: 'https://github.com/Tosaagi/BITSPLIT',
  },
  {
    id: 2,
    title: 'Python Sorted ToDo App',
    description: 'An automatic sorting to-do app. Just input your task name and the due date (in ddmmyy format), and the tasks will be sorted automatically.',
    imageUrl: 'https://tosaagi.github.io/assets/images/sorted_todo_app.png',
    tags: ['Python'],
    liveUrl: '',
    githubUrl: 'https://github.com/Tosaagi/Sorted-ToDo-App',
  },
  {
    id: 2,
    title: "Tosaagi's Quest",
    description: 'A simple text-based web RPG',
    imageUrl: 'https://tosaagi.github.io/assets/images/tosaagi-quest.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://tosaagi.github.io/projects/tosaagiquest/',
    githubUrl: 'https://github.com/Tosaagi/Tosaagi-s-Quest',
  },
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
