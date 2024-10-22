import noProjectImage from "../assets/no-projects.png";
import Buttons from "./Button";


export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectImage}
        alt="an empty task list"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 mt-4">
        No Project Selected
      </h2>
      <p className=" text-stone-400 mb-4 mt-8">
        Select Project or get start with a new one
      </p>
        <Buttons onClick={onStartAddProject}> Select A project or Start a new one </Buttons>
      
    </div>
  );
}
