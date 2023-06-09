import WorkExperience from "@/features/info/workExperience/WorkExperience";
import * as React from "react";
import "./Info.scss";
interface IInfoProps {}

const Info: React.FunctionComponent<IInfoProps> = (props) => {
  return (
    <div className="wrapper">
      <WorkExperience />
    </div>
  );
};

export default Info;
