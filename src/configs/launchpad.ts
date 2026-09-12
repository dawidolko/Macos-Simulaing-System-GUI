import type { LaunchpadData } from "~/types";

/*
 * The launchpad opens my own projects.
 *
 * Icons are loaded from each site's own favicon rather than copied in: they
 * then follow the project when its branding changes, and there is no second
 * copy here to go stale. The two entries without a favicon of their own reuse
 * the neutral icons that ship with the desktop.
 */
const launchpadApps: LaunchpadData[] = [
  {
    id: "portfolio",
    title: "dawidolko.pl",
    img: "https://dawidolko.pl/src/assets/img/favicon.ico",
    link: "https://dawidolko.pl/"
  },
  {
    id: "cv",
    title: "My CV",
    img: "https://cv.dawidolko.pl/assets/favicon.svg",
    link: "https://cv.dawidolko.pl/"
  },
  {
    id: "reelcut",
    title: "ReelCut",
    img: "https://reelcut.dawidolko.pl/favicon.svg",
    link: "https://reelcut.dawidolko.pl/"
  },
  {
    id: "cvforge",
    title: "CVForge",
    img: "https://cvforge.dawidolko.pl/favicon.svg",
    link: "https://cvforge.dawidolko.pl/"
  },
  {
    id: "techbyte",
    title: "TechByte",
    img: "https://techbyte.dawidolko.pl/favicon.ico",
    link: "https://techbyte.dawidolko.pl/"
  },
  {
    id: "templates",
    title: "Website Templates",
    img: "img/icons/launchpad/gungnir.png",
    link: "https://templateswebsite.dawidolko.pl/"
  },
  {
    id: "achievements",
    title: "GitHub Badges",
    img: "img/icons/launchpad/meta.png",
    link: "https://achievements.dawidolko.pl/"
  },
  {
    id: "github",
    title: "GitHub",
    img: "img/sites/github.svg",
    link: "https://github.com/dawidolko"
  }
];

export default launchpadApps;
