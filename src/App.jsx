import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebars from "./components/ProjectsSideBars";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    SelectedProjectID: undefined,
    projects: [],
  });

  function handleSelectproject(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: null,
      };
    });
  }
  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectid = Math.random();
      const newProject = {
        ...projectData,
        id: projectid,
      };

      return {
        ...prevState,
        SelectedProjectID: undefined,
        projects: [...prevState.projects, newProject], // should be 'projects' not 'project'
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: undefined,
        projects: prevState.projects.filter(
        (project) => project.id !== prevState.SelectedProjectID // Filter out the project with the given id
      )
      };
    });
  }

  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.SelectedProjectID
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectState.SelectedProjectID === null) {
    content = (
      <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
    );
  } else if (projectState.SelectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebars
        projects={projectState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectproject}
      />
      {content}
    </main>
  );
}

export default App;
