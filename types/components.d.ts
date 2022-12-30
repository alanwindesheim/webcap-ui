/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
export namespace Components {
    interface WebcapAccordion {
        "accordiontext": string;
        "backgroundcolor": string;
        "bordercolor": string;
        "collapsebg": string;
        "collapsecolor": string;
        "collapseheight": string | number;
        "fontstyle": string;
        "height": string | number;
        "labeltext": string;
        "textcolor": string;
        "togglecolor": string;
        "width": string | number;
    }
    interface WebcapAlert {
        "alertboxcolor": string;
        "alerttext": string;
        "backgroundcolor": string;
        "bordercolor": string;
        "borderradius": string | number;
        "deletecolor": string;
        "fontstyle": string;
        "height": string | number;
        "textcolor": string;
        "width": string | number;
    }
    interface WebcapButton {
        "backgroundcolor": string;
        "bordercolor": string;
        "borderradius": string | number;
        "fontsize": string | number;
        "fontstyle": string;
        "height": string | number;
        "textcolor": string;
        "titlebutton": string;
        "width": string | number;
    }
    interface WebcapButtonMondriaan {
        "backgroundcolor": string;
        "bordercolor": string;
        "bordercorner": string;
        "borderwidth": string;
        "fontsize": string;
        "textcolor": string;
        "titlebutton": string;
    }
}
export interface WebcapAccordionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWebcapAccordionElement;
}
export interface WebcapAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLWebcapAlertElement;
}
declare global {
    interface HTMLWebcapAccordionElement extends Components.WebcapAccordion, HTMLStencilElement {
    }
    var HTMLWebcapAccordionElement: {
        prototype: HTMLWebcapAccordionElement;
        new (): HTMLWebcapAccordionElement;
    };
    interface HTMLWebcapAlertElement extends Components.WebcapAlert, HTMLStencilElement {
    }
    var HTMLWebcapAlertElement: {
        prototype: HTMLWebcapAlertElement;
        new (): HTMLWebcapAlertElement;
    };
    interface HTMLWebcapButtonElement extends Components.WebcapButton, HTMLStencilElement {
    }
    var HTMLWebcapButtonElement: {
        prototype: HTMLWebcapButtonElement;
        new (): HTMLWebcapButtonElement;
    };
    interface HTMLWebcapButtonMondriaanElement extends Components.WebcapButtonMondriaan, HTMLStencilElement {
    }
    var HTMLWebcapButtonMondriaanElement: {
        prototype: HTMLWebcapButtonMondriaanElement;
        new (): HTMLWebcapButtonMondriaanElement;
    };
    interface HTMLElementTagNameMap {
        "webcap-accordion": HTMLWebcapAccordionElement;
        "webcap-alert": HTMLWebcapAlertElement;
        "webcap-button": HTMLWebcapButtonElement;
        "webcap-button-mondriaan": HTMLWebcapButtonMondriaanElement;
    }
}
declare namespace LocalJSX {
    interface WebcapAccordion {
        "accordiontext"?: string;
        "backgroundcolor"?: string;
        "bordercolor"?: string;
        "collapsebg"?: string;
        "collapsecolor"?: string;
        "collapseheight"?: string | number;
        "fontstyle"?: string;
        "height"?: string | number;
        "labeltext"?: string;
        "onToggle"?: (event: WebcapAccordionCustomEvent<any>) => void;
        "textcolor"?: string;
        "togglecolor"?: string;
        "width"?: string | number;
    }
    interface WebcapAlert {
        "alertboxcolor"?: string;
        "alerttext"?: string;
        "backgroundcolor"?: string;
        "bordercolor"?: string;
        "borderradius"?: string | number;
        "deletecolor"?: string;
        "fontstyle"?: string;
        "height"?: string | number;
        "onToggle"?: (event: WebcapAlertCustomEvent<any>) => void;
        "textcolor"?: string;
        "width"?: string | number;
    }
    interface WebcapButton {
        "backgroundcolor"?: string;
        "bordercolor"?: string;
        "borderradius"?: string | number;
        "fontsize"?: string | number;
        "fontstyle"?: string;
        "height"?: string | number;
        "textcolor"?: string;
        "titlebutton"?: string;
        "width"?: string | number;
    }
    interface WebcapButtonMondriaan {
        "backgroundcolor"?: string;
        "bordercolor"?: string;
        "bordercorner"?: string;
        "borderwidth"?: string;
        "fontsize"?: string;
        "textcolor"?: string;
        "titlebutton"?: string;
    }
    interface IntrinsicElements {
        "webcap-accordion": WebcapAccordion;
        "webcap-alert": WebcapAlert;
        "webcap-button": WebcapButton;
        "webcap-button-mondriaan": WebcapButtonMondriaan;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "webcap-accordion": LocalJSX.WebcapAccordion & JSXBase.HTMLAttributes<HTMLWebcapAccordionElement>;
            "webcap-alert": LocalJSX.WebcapAlert & JSXBase.HTMLAttributes<HTMLWebcapAlertElement>;
            "webcap-button": LocalJSX.WebcapButton & JSXBase.HTMLAttributes<HTMLWebcapButtonElement>;
            "webcap-button-mondriaan": LocalJSX.WebcapButtonMondriaan & JSXBase.HTMLAttributes<HTMLWebcapButtonMondriaanElement>;
        }
    }
}
