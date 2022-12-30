import type { Components, JSX } from "../types/components";

interface WebcapButton extends Components.WebcapButton, HTMLElement {}
export const WebcapButton: {
  prototype: WebcapButton;
  new (): WebcapButton;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
