import * as React from "react";
import "./WorkExperience.scss";
import {
  educationInfo,
  technilcaList,
  workList,
} from "@/features/info/workExperience/utils";

interface IWorkExperienceProps {}

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = (
  props
) => {
  return (
    <div className="work-experience-container">
      <div className="title">Education</div>
      <div className="work-experience-card">
        <div className="card-label">
          <span className="card-title">{educationInfo.name}</span>
          <span className="card-sub-title">{educationInfo.major}</span>
          <span className="card-sub-title">{educationInfo.degreeGrade}</span>
        </div>
        <div className="card-label card-time-label">
          <span className="card-title">{educationInfo.timeServing}</span>
        </div>
      </div>
      <div className="title">Work Experience</div>
      {workList.map((elm) => {
        return (
          <div className="work-experience-card" key={elm.id}>
            <div className="card-label">
              <span className="card-title">{elm.companyName}</span>
              <span className="card-sub-title">{elm.role}</span>
            </div>
            <div className="card-label card-time-label">
              <span className="card-title">{elm.timeServing}</span>
              <span className="card-sub-title">{elm.workingDuration}</span>
            </div>
          </div>
        );
      })}
      <div className="title">Technical Skillset</div>
      {technilcaList.map((elm) => {
        return (
          <div className="work-experience-card" key={elm.id}>
            <div className="card-label">
              <span className="card-title">{elm.skill}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkExperience;
