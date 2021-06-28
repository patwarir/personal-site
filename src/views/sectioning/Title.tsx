import { FunctionComponent } from "react";

const Title: FunctionComponent<{ title: string, subtitle?: string }> = (props) => {
  return (
    <header>
      <div className="text-center mb-2">
        <h1 className="display-1 font-weight-bold mb-0">{props.title}</h1>
        {props.subtitle && <p className="text-muted mb-0">{props.subtitle}</p>}
        {props.children}
      </div>
    </header>
  );
};

export default Title;
