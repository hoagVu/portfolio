import { infoList } from "@/features/info/utils";
import * as React from "react";
import "./SeeWorks.scss";
interface ISeeWorksProps {}

const SeeWorks: React.FunctionComponent<ISeeWorksProps> = (props) => {
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
                  <span className="work-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Harum, perspiciatis blanditiis accusamus commodi consectetur
                    id tempora rem iure eligendi quos eos et autem ratione
                    exercitationem earum laborum ad a sequi!
                  </span>
                </div>
                <div className="project-img">
                  <img src="/src/assets/images/avatar.png" alt="" />
                </div>
              </div>
            </div>
          );
        }
        return (
          <div
            className="card"
            style={{
              top: idx * 20 + 175,
              marginBottom: idx === infoList.length - 1 ? 0 : "2em",
            }}
            key={elm.id}>
            <div className="card-content">
              <span className="work-title">{elm.title}</span>
              <span className="work-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
                perspiciatis blanditiis accusamus commodi consectetur id tempora
                rem iure eligendi quos eos et autem ratione exercitationem earum
                laborum ad a sequi!
              </span>
            </div>
            <div className="project-img">
              <img src="/src/assets/images/avatar.png" alt="" />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SeeWorks;
