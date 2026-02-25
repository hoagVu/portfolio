import * as React from "react";
import {
  BookTextIcon,
  FolderCodeIcon,
  IdCardIcon,
  UserIcon,
} from "lucide-animated";
import AboutMe from "@/features/description/AboutMe";
import useDarkMode from "@/hooks/useDarkMode";
import "./WorkExperience.scss";
import {
  educationInfo,
  technilcaList,
  workList,
} from "@/features/info/workExperience/utils";

interface IWorkExperienceProps {}

type TAnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type TAnimatedIconComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> &
    { size?: number } &
    React.RefAttributes<TAnimatedIconHandle>
>;

interface IAutoAnimatedIconProps {
  Icon: TAnimatedIconComponent;
  className: string;
  size: number;
  delayMs?: number;
}

const AutoAnimatedIcon: React.FunctionComponent<IAutoAnimatedIconProps> = ({
  Icon,
  className,
  size,
  delayMs = 0,
}) => {
  const iconRef = React.useRef<TAnimatedIconHandle | null>(null);

  React.useEffect(() => {
    const start = () => {
      iconRef.current?.startAnimation();
    };

    const timeout = window.setTimeout(start, delayMs);
    const interval = window.setInterval(start, 2400);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
      iconRef.current?.stopAnimation();
    };
  }, [delayMs]);

  return <Icon ref={iconRef} className={className} size={size} />;
};

const getSkillIconUrl = (
  iconKey: string,
  theme: "dark" | "light",
  customIconUrl?: string
) => {
  if (customIconUrl) {
    return customIconUrl;
  }

  return `https://skillicons.dev/icons?i=${iconKey}&theme=${theme}`;
};

const WorkExperience: React.FunctionComponent<IWorkExperienceProps> = () => {
  const { isDarkMode } = useDarkMode();
  const skillIconTheme = isDarkMode ? "dark" : "light";

  return (
    <div className="work-experience-container">
      <section id="info-about" className="info-section-anchor">
        <div className="title">
          <AutoAnimatedIcon Icon={UserIcon} className="title-icon" size={26} />
          <span>About Me</span>
        </div>
        <div className="work-experience-card about-me-card">
          <div className="card-label">
            <AboutMe />
          </div>
        </div>
      </section>
      <section id="info-education" className="info-section-anchor">
        <div className="title">
          <AutoAnimatedIcon
            Icon={BookTextIcon}
            className="title-icon"
            size={26}
            delayMs={200}
          />
          <span>Education</span>
        </div>
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
      </section>
      <section id="info-work" className="info-section-anchor">
        <div className="title">
          <AutoAnimatedIcon
            Icon={IdCardIcon}
            className="title-icon"
            size={26}
            delayMs={400}
          />
          <span>Work Experience</span>
        </div>
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
      </section>
      <section id="info-skills" className="info-section-anchor">
        <div className="title">
          <AutoAnimatedIcon
            Icon={FolderCodeIcon}
            className="title-icon"
            size={26}
            delayMs={600}
          />
          <span>Technical Skillset</span>
        </div>
        <div className="work-experience-card technical-skill-card">
          <div className="technical-skill-grid">
            {technilcaList.map((elm, index) => {
              return (
                <div className="technical-skill-item" key={elm.id} title={elm.label}>
                  <img
                    className="technical-skill-logo"
                    src={getSkillIconUrl(
                      elm.iconKey,
                      skillIconTheme,
                      elm.customIconUrl
                    )}
                    alt={`${elm.label} icon`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  />
                  <span className="technical-skill-label">{elm.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience;
