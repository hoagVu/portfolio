import * as React from "react";
import "./Description.scss";
import Typewriter from "typewriter-effect";
import {
  BrainIcon,
  FolderCodeIcon,
  LaptopMinimalCheckIcon,
  SparklesIcon,
} from "lucide-animated";
import avatarImg from "/src/assets/images/avatar.png";
interface IDescriptionProps {}

type TAnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

interface IAutoAnimatedIconProps {
  Icon: React.ForwardRefExoticComponent<any>;
  className: string;
  size: number;
}

const AutoAnimatedIcon: React.FunctionComponent<IAutoAnimatedIconProps> = ({
  Icon,
  className,
  size,
}) => {
  const iconRef = React.useRef<TAnimatedIconHandle | null>(null);

  React.useEffect(() => {
    iconRef.current?.startAnimation();

    const interval = window.setInterval(() => {
      iconRef.current?.startAnimation();
    }, 2200);

    return () => {
      window.clearInterval(interval);
      iconRef.current?.stopAnimation();
    };
  }, []);

  return <Icon ref={iconRef} className={className} size={size} />;
};

const heroHighlights = [
  {
    label: "Performance-first UI",
    icon: SparklesIcon,
  },
  {
    label: "Clean Architecture",
    icon: FolderCodeIcon,
  },
  {
    label: "Responsive by default",
    icon: LaptopMinimalCheckIcon,
  },
  {
    label: "Product mindset",
    icon: BrainIcon,
  },
];

const Description: React.FunctionComponent<IDescriptionProps> = () => {
  return (
    <div className="description">
      <span className="sub-title">
        <span className="title-intro">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Fast by design. Smooth by default.")
                .start();
            }}
          />
        </span>
        <span className="hero-summary">
          <span>I’m Hoang — a developer building clean, efficient, and user-centric web systems.</span>
        </span>
        <div className="hero-highlights">
          {heroHighlights.map((item) => {
            return (
              <span className="hero-pill" key={item.label}>
                <AutoAnimatedIcon
                  Icon={item.icon}
                  className="hero-pill-icon"
                  size={16}
                />
                <span>{item.label}</span>
              </span>
            );
          })}
        </div>
      </span>
      <div className="avatar">
        <img src={avatarImg} alt="" />
        <div className="avatar-linear"></div>
      </div>
    </div>
  );
};

export default Description;
