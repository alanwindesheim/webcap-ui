import type { Components, JSX } from "../types/components";

interface WebcapAccordion extends Components.WebcapAccordion, HTMLElement {}
export const WebcapAccordion: {
  prototype: WebcapAccordion;
  new (): WebcapAccordion;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
