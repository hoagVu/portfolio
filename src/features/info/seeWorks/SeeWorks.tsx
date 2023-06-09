import { infoList } from "@/features/info/utils";
import * as React from "react";
import "./SeeWorks.scss";
interface ISeeWorksProps {}

const SeeWorks: React.FunctionComponent<ISeeWorksProps> = (props) => {
  return (
    <div className="see-works-container">
      <div className="see-works-title">See Works</div>
      {infoList.map((elm, idx) => {
        return (
          <div className="card" style={{ top: idx * 20 + 180 }} key={elm.id}>
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
    </div>
  );
};

export default SeeWorks;
