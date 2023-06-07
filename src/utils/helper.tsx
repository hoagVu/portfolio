// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type some = { [key: string]: any };

export const defaultDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

export const parseJSON = <T,>(value: string | null): T | undefined => {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
};