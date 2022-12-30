import type { Components, JSX } from "../types/components";

interface WebcapAlert extends Components.WebcapAlert, HTMLElement {}
export const WebcapAlert: {
  prototype: WebcapAlert;
  new (): WebcapAlert;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
