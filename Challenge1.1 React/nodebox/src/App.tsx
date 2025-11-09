import "./styles.css";
import imageMe from "./assets/ImageMe1.jpg";

export default function App() {
  return (
    <div className="App">
      <img src={imageMe} className="imageMe" alt="hello" />
      <Intro />
      <SkillList />
    </div>
  );
}

function Intro() {
  return (
    <p className="paragraphe">
      Hello , My name is Mohamed MOALLA . Im A Student At Esprit , I love Web
      Development And I am passionate with Front-End And I love Working On Reel
      Projects .
    </p>
  );
}

function SkillList() {
  const skills = [
    { name: "HTML+CSS", color: "#2551af", emojie: "💪" },
    { name: "Javascript", color: "yellow", emojie: "💪" },
    { name: "Web Design", color: "green", emojie: "💪" },
    { name: "Git And Github", color: "red", emojie: "💪" },
    { name: "React", color: "#2551af", emojie: "👶" },
    { name: "Python", color: "red", emojie: "👌" },
  ];
  return (
    <div className="skills">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="skill"
          style={{ backgroundColor: skill.color }}
        >
          {skill.name} {skill.emojie}
        </div>
      ))}
    </div>
  );
}
