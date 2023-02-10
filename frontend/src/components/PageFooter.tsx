import { Resource } from "../models/resource";
import { PageFooterHyperlink } from "./PageFooterHyperlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export const PageFooter = () => {
  const resourceList: Resource[] = [
    {
      path: "https://github.com/Verwiel",
      label: "Github",
      icon: faGithub
    },
    {
      path: "https://www.linkedin.com/in/drew-verwiel/",
      label: "LinkedIn",
      icon: faLinkedin
    },
    {
      path: "https://drew-verwiel.vercel.app/#contact",
      label: "Website",
      icon: faGlobe
    },
  ];

  return (
    <footer className="page-footer">
      <section>
        <small>Developed by: {" "}
          <PageFooterHyperlink path="https://drew-verwiel.vercel.app">
            Drew Verwiel
          </PageFooterHyperlink>
        </small>
      </section>

      <section className="page-footer-social">
        {resourceList.map((resource) => (
          <div
            key={resource.path}
          >
            <PageFooterHyperlink path={resource.path}>
              <FontAwesomeIcon icon={resource.icon} title={resource.label} />
            </PageFooterHyperlink>
          </div>
        ))}
      </section>
    </footer>
  );
};
