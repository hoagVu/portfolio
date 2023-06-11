/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import * as React from "react";
import "./CatAnimation.scss";

interface ICatAnimationProps {}

const CatAnimation: React.FunctionComponent<ICatAnimationProps> = () => {
  return (
    <div className="cat" onClick={() => window.scrollTo(0, 0)}>
      <div className="ear ear--left"></div>
      <div className="ear ear--right"></div>
      <div className="face">
        <div className="eye eye--left">
          <div className="eye-pupil"></div>
        </div>
        <div className="eye eye--right">
          <div className="eye-pupil"></div>
        </div>
        <div className="muzzle"></div>
      </div>
    </div>
  );
};

export default CatAnimation;
