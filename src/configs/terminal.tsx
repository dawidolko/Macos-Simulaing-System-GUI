import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, this is Dawid Olko. I am a computer science graduate from the
              University of Rzeszów, building web applications and recommender
              systems.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content: "Web development / Recommender systems / Accessibility / Databases"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "Open to interesting projects and collaboration. Most of my work is public on GitHub."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:kontakt@dawidolko.pl"
                target="_blank"
                rel="noreferrer"
              >
                kontakt@dawidolko.pl
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/dawidolko"
                target="_blank"
                rel="noreferrer"
              >
                @dawidolko
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/dawidolko"
                target="_blank"
                rel="noreferrer"
              >
                dawidolko
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://dawidolko.pl"
                target="_blank"
                rel="noreferrer"
              >
                https://dawidolko.pl
              </a>
            </li>
            <li>
              CV:{" "}
              <a
                className="text-blue-300"
                href="https://cv.dawidolko.pl"
                target="_blank"
                rel="noreferrer"
              >
                https://cv.dawidolko.pl
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
