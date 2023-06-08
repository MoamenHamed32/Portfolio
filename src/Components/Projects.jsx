import projectsData from "../projects-data";
import Project from "./Project.jsx";
export default function Projects() {
  const myProjects = projectsData.map((prj) => {
    return (
      <Project
        key={prj.id}
        img={prj.prjImg}
        title={prj.prjTitle}
        desc={prj.desc}
        link={prj.link}
      />
    );
  });
  return (
    <div id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-div">{myProjects}</div>
    </div>
  );
}
