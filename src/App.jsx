import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebars from "./components/ProjectsSideBars";

function App() {
  const [projectState, setProjectState] = useState({
    SelectedProjectID: undefined,
    project: [],
  });

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
        // title:
        // description:
        // duDate:
      };
      

      return {
        ...prevState,
        SelectedProjectID: undefined,

        project: [...prevState.project, newProject],
      };
    });
  }
  console.log(projectState);

  let content;

  if (projectState.SelectedProjectID === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />;
  } else if (projectState.SelectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebars projects={projectState.project} onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
