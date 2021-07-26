import { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <footer>
      <p className="small mb-2">
        Copyright &copy; {new Date().getUTCFullYear()} - Coded, Designed and Written by <span className="text-decoration-underline"><span className="fw-bold">Rajat Patwari</span></span>
      </p>
    </footer>
  );
};

export default Footer;
