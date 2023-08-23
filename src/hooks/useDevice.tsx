import UAParser from "ua-parser-js";

export const useDevice = () => {
  const parser = new UAParser();
  const deviceType = parser.getDevice().type;
  return {
    isPC: !(deviceType === "mobile"),
  };
};
