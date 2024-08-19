import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeExperience(
  ".digitalhouse",
  `Worked as a frontend intern. Helped renew the UI of the official
  website. Designed the frontend of the website (Figma). Debugged and
  optimized their official website (React.js). Interacted with
  users. Mainly worked with React, JavaScript, HTML, CSS, and Figma.`,
  "Front-End Developer (Intern)",
  "Webiknowr",
  "Feb 2020 - Apr 2020 (2 months)"
);

hoverChangeExperience(
  ".zuplae",
  `Developed a basic UI for a banking management system and completed all the tasks assigned by seniors. Worked mainly with React.js, HTML, JS, and CSS.`,
  "Web Developer (Intern)",
  "The Sparks Foundation",
  "Jan 2021 - Feb 2021 (1 month)"
);

hoverChangeExperience(
  ".codigofontetv",
  `<br>
  - Qualified GATE 2022 and GATE 2023 with above 96 percentile.<br>
  - Solved over 500 coding problems across various platforms, showcasing strong problem-solving skills.<br>
  - LeetCode Top 19% in contest rating.<br>
  - As I was preparing for competitive exams, I didn't join any company during my 3rd and 4th years of graduation. But I kept polishing my skills and achieving new milestones.<br>`,
  "Achievements",
  "",
  "Present"
);

hoverChangeExperience(
  ".text-to-kg",
  `Developed a fully automated pipeline for generating knowledge graphs from raw text using Large Language Models (LLMs).
  Integrated NLP and LLMs to process large datasets (200,000 words), resulting in a knowledge graph with 35,000 nodes.
  Technologies Used: Python, TensorFlow, Transformers, NLP, Ollama, Git.`,
  "Text to Knowledge Graph (Thesis Project)",
  "",
  "March 2024 - May 2024"
);


hoverChangeDescription(
  ".html",
  "HTML is a markup language, where we mark elements to define what information the page will display.<br>"
);
hoverChangeDescription(
  ".css",
  "CSS is a style sheet language composed of “layers”, created for the purpose of styling pages."
);
hoverChangeDescription(
  ".js",
  "JavaScript is a programming language that allows you to implement dynamic elements on web pages."
);
hoverChangeDescription(
  ".sass",
  "Sass is a CSS preprocessor that adds some features that aren't available natively."
);
hoverChangeDescription(
  ".react",
  "React is a JavaScript library focused on building user interfaces in a componentized way."
);
hoverChangeDescription(
  ".next",
  "Next.js is a web framework that enables functionality like server-side rendering and static website generation for React-based web sites."
);
hoverChangeDescription(
  ".styled",
  "styled-components is a library that uses the concept of CSS-in-JS, that is, it allows us to write CSS codes inside Javascript."
);
hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a CSS framework that provides us with utility classes for the purpose of styling pages."
);
hoverChangeDescription(
  ".typescript",
  "TypeScript is a superset of JavaScript that includes features that are not natively present in the language, in addition to making it static."
);
// hoverChangeDescription(
//   ".radix",
//   "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React."
// );
// hoverChangeDescription(
//   ".cypress",
//   "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript."
// );
// hoverChangeDescription(
//   ".storybook",
//   "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação."
// );
