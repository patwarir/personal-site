import { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLink, faLongArrowAltRight, faSmileWink } from "@fortawesome/free-solid-svg-icons";

import { useTheme } from "@root/pages/_app";
import { Link } from "@root/components/shared/shared";

import styles from "./HistoryTimeline.module.scss";

interface TitleSection {
  text: string | JSX.Element,
  subtitle?: string | JSX.Element,
  demoHref?: string,
  sourceHref?: string
}

interface DateSection {
  from: string | JSX.Element,
  to: string | JSX.Element
}

interface BadgeSection {
  title?: string | JSX.Element,
  items: (string | JSX.Element)[]
}

interface TimelineItem {
  title: TitleSection,
  date?: DateSection,
  badgeSections?: BadgeSection[],
  content?: string | JSX.Element
}

const Title: FunctionComponent<TitleSection> = (props) => {
  return (
    <div className="mb-0">
      <h4 className="font-monospace fw-bold mb-0">
        <span className="me-2">{props.text}</span>
        {props.demoHref && <Link href={props.demoHref} external styling="small me-2" icon={faExternalLinkAlt} />}
        {props.sourceHref && <Link href={props.sourceHref} external styling="small me-2" icon={faLink} />}
      </h4>
      {props.subtitle && <p className="mb-0">{props.subtitle}</p>}
    </div>
  );
};

const DateRange: FunctionComponent<DateSection> = (props) => {
  return (
    <p className="small text-muted fst-italic mb-0">
      {props.from} <FontAwesomeIcon fixedWidth icon={faLongArrowAltRight} className="small" /> {props.to}
    </p>
  );
};

const Badges: FunctionComponent<{ sections: BadgeSection[] }> = (props) => {
  const [ theme, _ ] = useTheme();

  return (
    <div className="d-block mb-0">
      {props.sections.map((section, i) => (
        <div key={i} className="d-block mb-0">
          {section.title && <span className="small text-muted align-middle me-1">{section.title}</span>}
          <div className="d-inline mb-0">
            {section.items.map((item, j) => (
              <span key={j} className={"badge rounded-pill bg-ps-" + (theme === "light" ? "blue" : "black") + " me-1"}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const Item: FunctionComponent<{ direction: "left" | "right" }> = (props) => {
  const [ theme, _ ] = useTheme();

  return (
    <div className={styles["timeline-item-" + theme] + " ps-4" + (props.direction === "left" ? " ps-md-0 pe-md-4" : "") + " py-2"}>
      <div className={styles["timeline-item-content"]}>
        <div className={"card text-" + (theme === "light" ? "black" : "white") + " bg-ps-" + (theme === "light" ? "white" : "gray") + " border-ps-" + (theme === "light" ? "black" : "gray")}>
          <div className="card-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

const Layout: FunctionComponent<{ direction: "left" | "right", item: TimelineItem }> = (props) => {
  return (
    <Item direction={props.direction}>
      <Title {...props.item.title} />
      {props.item.date && <DateRange {...props.item.date} />}
      {props.item.badgeSections && <Badges sections={props.item.badgeSections} />}
      {props.item.content && <div className="mt-2 mb-0">{props.item.content}</div>}
      {props.children}
    </Item>
  );
};

const items: TimelineItem[] = [
  {
    title: {
      text: "Personal Website",
      demoHref: "https://rajatpatwari.com",
      sourceHref: "https://github.com/patwarir/personal-site"
    },
    date: { from: "2021", to: "Present" },
    badgeSections: [
      {
        items: [ "Cloud", "Docker", "Next.js-React.js", "Node.js", "MongoDB", "TypeScript", "SCSS/SASS", "Bootstrap" ]
      }
    ],
    content: (
      <div>
        <p className="mb-0">A personal summary website and blog.</p>
        <p className="mb-0">Glad to see you here! <FontAwesomeIcon icon={faSmileWink} /></p>
      </div>
    )
  },
  {
    title: {
      text: "Wundu",
      demoHref: "https://rajatpatwari.com/wundu",
      sourceHref: "https://github.com/patwarir/wundu"
    },
    date: { from: "2021", to: "Present" },
    badgeSections: [
      {
        title: "Platform",
        items: [ "Cloud", "Docker", "Node.js", "TypeScript", "Jest" ]
      },
      {
        title: "Backend",
        items: [ "OpenAPI/Swagger", "Socket.io", "Redis", "PostgreSQL", "Nest.js-Express.js" ]
      },
      {
        title: "Frontend",
        items: [ "React.js", "Redux.js", "SCSS/SASS", "Bootstrap" ]
      }
    ],
    content: (
      <p className="mb-0">The classic UNO! <span className="trademark">TM</span> card game - but now with full configurability!</p>
    )
  },
  {
    title: {
      text: "Full Stack Web Developer Co-op",
      subtitle: "Uptake Canada, Inc. - Remote/Mississauga, ON"
    },
    date: { from: "May 2021", to: "Aug 2021" },
    badgeSections: [
      {
        title: "Backend",
        items: [ "ASP.NET", "Nest.js-Express.js", "SQL Server", "C#", "TypeScript" ]
      },
      {
        title: "Frontend",
        items: [ "Ext.js/Sencha", "JavaScript" ]
      }
    ],
    content: (
      <div>
        <p className="mb-0">Worked on enhancing existing features in the Ext.js/Sencha UI and ASP.NET API layers.</p>
        <p className="mb-0">Implemented features and endpoints in the brand new Nest.js-Express.js API layer.</p>
        <p className="mb-0">Performed bugfixes on existing layers and in SQL Stored Procedures.</p>
        <p className="mb-0">Communicated and worked with customers to design new features.</p>
      </div>
    )
  },
  {
    title: {
      text: "Software Engineering",
      subtitle: "University of Waterloo, ON"
    },
    date: { from: "Sep 2020", to: "Jun 2025" }
  },
  {
    title: {
      text: "Vertex",
      demoHref: "https://rajatpatwari.com/vertex",
      sourceHref: "https://gitlab.com/patwarir/vertex"
    },
    date: { from: "2019", to: "Present" },
    badgeSections: [
      {
        title: "Platform",
        items: [ "Cloud", "Docker" ]
      },
      {
        title: "Web Demo",
        items: [ "Flask", "Python" ]
      },
      {
        title: "Compiler",
        items: [ ".NET (Core)", "C#", "XUnit" ]
      },
      {
        title: "Virtual Machine",
        items: [ "Cargo", "Rust" ]
      }
    ],
    content: (
      <p className="mb-0">A new assembly-like programming language running in its own virtual machine.</p>
    )
  },
  {
    title: {
      text: "GridWorld",
      sourceHref: "https://gitlab.com/patwarir/gridworld"
    },
    date: { from: "2018", to: "Present" },
    badgeSections: [
      {
        items: [ "WPF", ".NET Framework", "C#" ]
      }
    ],
    content: (
      <p className="mb-0">A replica of the CollegeBoard<span className="trademark">TM</span> case study completely rewritten in idiomatic WPF/C#.</p>
    )
  }
];

const HistoryTimeline: FunctionComponent = () => {
  return (
    <div className={styles["timeline-container"]}>
      <div className={styles["timeline-line"]}></div>
      {items.map((item, i) => <Layout key={i} direction={i % 2 === 0 ? "left" : "right"} item={item} />)}
    </div>
  );
};

export default HistoryTimeline;
