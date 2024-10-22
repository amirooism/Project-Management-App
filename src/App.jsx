import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebars from "./components/ProjectsSideBars";

function App() {
  const [projectState, setProjectState] = useState({
    SelectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        SelectedProjectID: null,
      };
    });
  }
  let content

  if (projectState.SelectedProjectID === null) {
    content = <NewProject />
  } else if (projectState.SelectedProjectID === undefined) {
content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebars onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
