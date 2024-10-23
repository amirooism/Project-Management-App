import Buttons from "./Button";

export default function ProjectSidebars({
  onStartAddProject,
  projects,
  onSelectProject,
  selectProjectID, //we create this prob for highlighting the title in sidebar when it selected
}) {
  return (
    <aside className="w-1/3 p x-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Buttons onClick={onStartAddProject}>+ Add Project</Buttons>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClass =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800";
          if (project.id === selectProjectID) {
            cssClass += " bg-stone-800 text-stone-200";
          } else {
            cssClass += " text-stone-400";
          }

          return (
            //we make return here so we can add more code to the map function, because we want to add css class to button dynamclly
            <li key={project.id}>
              <button className={cssClass} onClick={() => onSelectProject(project.id)}>
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
