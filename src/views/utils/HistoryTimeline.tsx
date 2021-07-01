import { FunctionComponent, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faBriefcase, faCode, faExternalLinkAlt, faLayerGroup, faLink, faLongArrowAltRight, faUniversity, IconDefinition } from "@fortawesome/free-solid-svg-icons";

import { ThemeContext } from "ps-theme";

import styles from "./HistoryTimeline.module.scss";

const Link: FunctionComponent<{ to: string, icon: IconDefinition }> = (props) => {
  return (
    <a rel="noopener noreferrer" target="_blank" href={props.to}>
      <span className="small"><FontAwesomeIcon fixedWidth icon={props.icon} /></span>
    </a>
  );
};

const DateRange: FunctionComponent<{ from: string, to: string }> = (props) => {
  return (
    <p className="small text-muted fst-italic mb-0">{props.from} <span className="small"><FontAwesomeIcon fixedWidth icon={faLongArrowAltRight} /></span> {props.to}</p>
  );
};

const Badges: FunctionComponent<{ items: string[] }> = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="d-inline mb-0">
      {props.items.map((item, index) => (
        <span key={index} className={"badge rounded-pill " + styles["tech-badge-" + themeContext.theme] + " me-1"}>{item}</span>
      ))}
    </div>
  );
};

const Item: FunctionComponent<{ direction: "left" | "right", icon: IconDefinition, iconAligment: string }> = (props) => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={styles["timeline-item"] + " " + styles["timeline-item-" + props.direction] + " ps-4" + (props.direction === "left" ? " ps-md-0 pe-md-4" : "") + " py-2"}>
      <div className={styles["timeline-icon-" + themeContext.theme] + " text-center"}>
        <FontAwesomeIcon fixedWidth icon={props.icon} className={props.iconAligment} />
      </div>
      <div className={styles["timeline-item-content"]}>
        <div className={"card " + styles["timeline-item-card-" + themeContext.theme]}>
          <div className="card-body">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryTimeline: FunctionComponent = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <div className={styles["timeline-container"]}>
      <div className={styles["timeline-line-" + themeContext.theme]}></div>
      <Item direction="left" icon={faLayerGroup} iconAligment="align-top-top">
        <h4 className="fw-bold mb-0">Wundu <Link to="https://rajatpatwari.com/wundu" icon={faLink} /> <Link to="https://github.com/patwarir/wundu" icon={faExternalLinkAlt} /></h4>
        <DateRange from="2021" to="Present" />
        <div className="mt-2 mb-0">
          <span className="small text-muted">Platform</span> <Badges items={[ "AWS", "Docker", "NodeJS", "NGINX", "Jest", "TypeScript" ]} />
          <br className="mb-0" />
          <span className="small text-muted">Backend</span> <Badges items={[ "OpenAPI/Swagger", "Socket.io", "NestJS-Express", "Redis", "PostgreSQL" ]} />
          <br className="mb-0" />
          <span className="small text-muted">Frontend</span> <Badges items={[ "ReactJS", "ReduxJS", "SCSS/SASS", "Bootstrap", "Axios" ]} />

          <div className="mb-2"></div>

          The classic UNO!<span className="trademark">TM</span> card game - but now with configurability!
        </div>
      </Item>
      <Item direction="right" icon={faBriefcase} iconAligment="align-top-top">
        <h4 className="fw-bold mb-0">Full Stack Web Developer Co-op</h4>
        <p className="text-muted mb-0">Uptake Canada, Inc. - Remote/Mississauga, ON</p>
        <DateRange from="May 2021" to="Aug 2021" />
        <div className="mt-2 mb-0">
          <span className="small text-muted">Backend</span> <Badges items={[ "ASP.NET", "NestJS-Express", "C#", "TypeScript", "SQL Server" ]} />
          <br className="mb-0" />
          <span className="small text-muted">Frontend</span> <Badges items={[ "ExtJS/Sencha", "JavaScript" ]} />

          <div className="mb-2"></div>

          <p className="mb-0">Worked on enhancing existing features in the ExtJS/Sencha UI and ASP.NET API layers</p>
          <p className="mb-0">Created new features/endpoints in the brand new NestJS-Express API layer</p>
          <p className="mb-0">Performed bugfixes on existing layers and in SQL Stored Procedures</p>
        </div>
      </Item>
      <Item direction="left" icon={faUniversity} iconAligment="align-top-top">
        <h4 className="fw-bold mb-0">Software Engineering</h4>
        <p className="text-muted mb-0">University of Waterloo, ON</p>
        <DateRange from="Sep 2020" to="Present - Jun 2025" />
      </Item>
      <Item direction="right" icon={faCode} iconAligment="align-top-top">
        <h4 className="fw-bold mb-0">Vertex <Link to="https://rajatpatwari.com/vertex" icon={faLink} /> <Link to="https://gitlab.com/patwarir/vertex" icon={faExternalLinkAlt} /></h4>
        <DateRange from="2019" to="Present" />
        <div className="mt-2 mb-0">
          <span className="small text-muted">Core</span> <Badges items={[ "C#", ".NET Core", "XUnit" ]} />
          <br className="mb-0" />
          <span className="small text-muted">Online</span> <Badges items={[ "AWS", "Docker", "NodeJS", "NestJS-Express" ]} />

          <div className="mb-2"></div>

          A new extensible assembly-like programming language that runs in a virtual machine.
        </div>
      </Item>
      <Item direction="left" icon={faBorderAll} iconAligment="align-top-top">
        <h4 className="fw-bold mb-0">GridWorld <Link to="https://gitlab.com/patwarir/gridworld" icon={faExternalLinkAlt} /></h4>
        <DateRange from="2018" to="Present" />
        <div className="mt-2 mb-0">
          <span className="small text-muted">Core</span> <Badges items={[ "WPF", "C#", ".NET Framework" ]} />

          <div className="mb-2"></div>

          A replica of the CollegeBoard<span className="trademark">TM</span> case study completely rewritten in idiomatic WPF/C#.
        </div>
      </Item>
    </div>
  );
};

export default HistoryTimeline;
