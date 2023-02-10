import { Resource } from "../models/resource";
import { PageFooterHyperlink } from "./PageFooterHyperlink";

export const PageFooter = () => {
  const resourceList: Resource[] = [
    {
      path: "https://insideoutdev.com/about-us",
      label: "Github",
    },
    {
      path: "",
      label: "LinkedIn",
    },
    {
      path: "https://drew-verwiel.vercel.app/#contact",
      label: "Website",
    },
  ];

  return (
    <footer className="page-footer">
      <section>
        <p>Developed by: 
          <PageFooterHyperlink path="https://drew-verwiel.vercel.app">
            Drew Verwiel
          </PageFooterHyperlink>
        </p>
      </section>

      <section>
        {resourceList.map((resource) => (
          <div
            key={resource.path}
            className="page-footer-info__resource-list-item"
          >
            <PageFooterHyperlink path={resource.path}>
              {resource.label}
            </PageFooterHyperlink>
          </div>
        ))}
      </section>
    </footer>
  );
};
