import { infoList } from "@/features/info/utils";
import { useDevice } from "@/hooks/useDevice";
import clsx from "clsx";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import {
  AirplaneIcon,
  CogIcon,
  HomeIcon,
  HourglassIcon,
  LinkIcon,
  MapPinHouseIcon,
  MessageSquareIcon,
  SparklesIcon,
} from "lucide-animated";
import * as React from "react";
import "./SeeWorks.scss";

interface ISeeWorksProps {}

type TSeeWorkItem = (typeof infoList)[number];

interface ISeeWorkCardProps {
  elm: TSeeWorkItem;
  idx: number;
  isPC: boolean;
  progress: MotionValue<number>;
  range: number[];
  targetScale: number;
}

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
  controlRef?: React.MutableRefObject<TAnimatedIconHandle | null>;
}

const AutoAnimatedIcon: React.FunctionComponent<IAutoAnimatedIconProps> = ({
  Icon,
  className,
  size,
  delayMs = 0,
  controlRef,
}) => {
  const iconRef = React.useRef<TAnimatedIconHandle | null>(null);

  React.useEffect(() => {
    const currentIconRef = iconRef.current;

    const start = () => {
      currentIconRef?.startAnimation();
    };

    if (controlRef) {
      controlRef.current = {
        startAnimation: start,
        stopAnimation: () => {
          currentIconRef?.stopAnimation();
        },
      };
    }

    const timeout = window.setTimeout(start, delayMs);
    const interval = window.setInterval(start, 2400);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
      currentIconRef?.stopAnimation();

      if (controlRef) {
        controlRef.current = null;
      }
    };
  }, [controlRef, delayMs]);

  return <Icon ref={iconRef} className={className} size={size} />;
};

const getProjectIcon = (title: string): TAnimatedIconComponent => {
  if (title.includes("OneHousing Maps")) {
    return MapPinHouseIcon;
  }

  if (title.includes("OneHousing")) {
    return HomeIcon;
  }

  if (title.includes("Mytour")) {
    return AirplaneIcon;
  }

  if (title.includes("Hotel Management Service")) {
    return CogIcon;
  }

  if (title.includes("Chat Portal")) {
    return MessageSquareIcon;
  }

  return SparklesIcon;
};

const SeeWorkCard: React.FunctionComponent<ISeeWorkCardProps> = ({
  elm,
  idx,
  isPC,
  progress,
  range,
  targetScale,
}) => {
  const cardScale = useTransform(progress, range, [1, targetScale]);
  const isHmsProject = elm.title === "Hotel Management Service (HMS)";
  const canShowIframe = Boolean(elm.link) && !isHmsProject;
  const shouldRenderComingSoonPlaceholder = !canShowIframe && elm.img === elm.imgSP;
  const ProjectIcon = getProjectIcon(elm.title);
  const websiteIconRef = React.useRef<TAnimatedIconHandle | null>(null);
  const comingSoonIconRef = React.useRef<TAnimatedIconHandle | null>(null);

  const triggerIconAnimation = (iconRef: React.RefObject<TAnimatedIconHandle | null>) => {
    iconRef.current?.startAnimation();
  };

  return (
    <div className="card-container">
      <motion.div
        className="card"
        style={{
          top: isPC ? `${idx * 24}px` : 0,
          scale: isPC ? cardScale : 1,
        }}
      >
        <div className="card-content">
          {elm.link ? (
            <a
              className="work-title work-title-link"
              href={elm.link}
              target="_blank"
              rel="noreferrer"
            >
              <AutoAnimatedIcon
                Icon={ProjectIcon}
                className="work-title-icon"
                size={20}
                delayMs={idx * 160}
              />
              <span>{elm.title}</span>
            </a>
          ) : (
            <span className="work-title">
              <AutoAnimatedIcon
                Icon={ProjectIcon}
                className="work-title-icon"
                size={20}
                delayMs={idx * 160}
              />
              <span>{elm.title}</span>
            </span>
          )}
          <span className="work-role-content">{elm.role}</span>
          <span className="work-content">{elm.workDesctiprion}</span>
          {elm.link ? (
            <a
              className={clsx("button", !elm.link && "button-disabled")}
              href={elm.link || "#"}
              target="_blank"
              rel="noreferrer"
              onFocus={() => triggerIconAnimation(websiteIconRef)}
              onMouseEnter={() => triggerIconAnimation(websiteIconRef)}
            >
              <span className="button-content">
                <AutoAnimatedIcon
                  Icon={LinkIcon}
                  className="button-icon"
                  size={16}
                  delayMs={200 + idx * 120}
                  controlRef={websiteIconRef}
                />
                <span>Website</span>
              </span>
            </a>
          ) : (
            <button
              className={"button button-disabled"}
              onFocus={() => triggerIconAnimation(comingSoonIconRef)}
              onMouseEnter={() => triggerIconAnimation(comingSoonIconRef)}
            >
              <span className="button-content">
                <AutoAnimatedIcon
                  Icon={HourglassIcon}
                  className="button-icon"
                  size={16}
                  delayMs={240 + idx * 120}
                  controlRef={comingSoonIconRef}
                />
                <span>Website Coming Soon!</span>
              </span>
            </button>
          )}
        </div>
        <div className={clsx("project-img", elm.link && "project-img-link")}>
          {canShowIframe ? (
            <div className="website-preview">
              <div className="website-toolbar">Live preview</div>
              <div className="project-img-inner">
                <iframe
                  title={`${elm.title} preview`}
                  src={elm.link}
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  className="website-preview-overlay"
                  href={elm.link || "#"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${elm.title} website`}
                >
                  <span className="overlay-link-text">Open {elm.title} website</span>
                </a>
              </div>
            </div>
          ) : (
            <div
              className={clsx(
                "project-img-inner",
                shouldRenderComingSoonPlaceholder && "coming-soon-placeholder"
              )}
            >
              {shouldRenderComingSoonPlaceholder ? (
                <div className="coming-soon-content" aria-label="Coming soon preview">
                  <span className="coming-soon-text">Coming Soon</span>
                  <span className="coming-soon-subtext">Launching shortly</span>
                </div>
              ) : (
                <img
                  src={isPC ? elm.img : elm.imgSP}
                  alt=""
                  className={clsx(!elm.link && "img-blur img-object-fit")}
                />
              )}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const SeeWorks: React.FunctionComponent<ISeeWorksProps> = () => {
  const { isPC } = useDevice();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLDivElement>(null);
  const [titleHeight, setTitleHeight] = React.useState(56);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  React.useEffect(() => {
    const titleElm = titleRef.current;

    if (!titleElm) {
      return;
    }

    const updateTitleHeight = () => {
      setTitleHeight(Math.ceil(titleElm.getBoundingClientRect().height));
    };

    updateTitleHeight();

    const resizeObserver = new ResizeObserver(updateTitleHeight);
    resizeObserver.observe(titleElm);
    window.addEventListener("resize", updateTitleHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateTitleHeight);
    };
  }, []);

  return (
    <div
      id="info-projects"
      ref={containerRef}
      className="see-works-container info-section-anchor"
      style={{
        ["--see-works-title-height" as string]: `${titleHeight}px`,
      }}
    >
      <div ref={titleRef} className="see-works-title">
        <AutoAnimatedIcon Icon={SparklesIcon} className="section-icon" size={26} />
        <span>See Works</span>
      </div>
      {infoList.map((elm, idx) => {
        const targetScale = 1 - (infoList.length - idx) * 0.05;
        const rangeStart = Math.min(idx * 0.25 + 0.08, 0.98);

        return (
          <SeeWorkCard
            key={elm.id}
            elm={elm}
            idx={idx}
            isPC={isPC}
            progress={scrollYProgress}
            range={[rangeStart, 1]}
            targetScale={targetScale}
          />
        );
      })}
      <div className="see-works-bottom-spacer" aria-hidden="true" />
    </div>
  );
};

export default SeeWorks;
