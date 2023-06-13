import { infoList } from "@/features/info/utils";
import clsx from "clsx";
import * as React from "react";
import "./SeeWorks.scss";

interface ISeeWorksProps {}

const SeeWorks: React.FunctionComponent<ISeeWorksProps> = () => {
  return (
    <>
      {infoList.map((elm, idx) => {
        if (idx === 0) {
          return (
            <div className="sticky-container" key={elm.id}>
              <div className="see-works-title">See Works</div>
              <div className="card" style={{ top: 0, marginBottom: 0 }}>
                <div className="card-content">
                  <span className="work-title">{elm.title}</span>
                  <span className="work-role-content">{elm.role}</span>
                  <span className="work-content">{elm.workDesctiprion}</span>
                  {elm.link ? (
                    <a
                      className={clsx("button", !elm.link && "button-disabled")}
                      href={elm.link || "#"}
                      target="_blank"
                      rel="noreferrer">
                      {"Website"}
                    </a>
                  ) : (
                    <button className={"button button-disabled"}>
                      {"Website Coming Soon!"}
                    </button>
                  )}
                </div>
                <div className="project-img">
                  <img
                    src={elm.img}
                    alt=""
                    className={clsx(!elm.link && "img-blur img-object-fit")}
                  />
                </div>
              </div>
            </div>
          );
        }
        return (
          <div
            className={clsx(
              "card",
              idx === infoList.length - 1 && "card-display"
            )}
            style={{ top: idx * 20 + 175 }}
            key={elm.id}>
            <div className="card-content">
              <span className="work-title">{elm.title}</span>
              <span className="work-role-content">{elm.role}</span>
              <span className="work-content">{elm.workDesctiprion}</span>
              {elm.link ? (
                <a
                  className={clsx("button", !elm.link && "button-disabled")}
                  href={elm.link || "#"}
                  target="_blank"
                  rel="noreferrer">
                  {"Website"}
                </a>
              ) : (
                <button className={"button button-disabled"}>
                  {"Website Coming Soon!"}
                </button>
              )}
            </div>
            <div className={"project-img"}>
              <img
                src={elm.img}
                alt=""
                className={clsx(!elm.link && "img-blur img-object-fit")}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeeWorks;
