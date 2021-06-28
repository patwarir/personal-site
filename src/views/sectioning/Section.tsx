import { FunctionComponent } from "react";

const Section: FunctionComponent<{ title: string }> = (props) => {
  return (
    <section className="mb-4">
      <header>
        <h2 className="display-6 text-decoration-underline mb-0">{props.title}</h2>
      </header>
      {props.children}
    </section>
  );
};

export default Section;
