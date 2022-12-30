import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonMondriaanCss = ".button{--b:3px;--s:0.45em;--color:#0027d7;padding:calc(0.5em + var(--s)) calc(0.9em + var(--s));color:var(--color);--_p:var(--s);background:conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2 * var(--_p)) calc(100% - var(--b) - 2 * var(--_p));transition:0.3s linear, color 0s, background-color 0s;outline:var(--b) solid #0000;outline-offset:0.6em;font-size:16px;border:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button:hover,.button:focus-visible{--_p:0px;outline-color:var(--color);outline-offset:0.05em}.button:active{background:var(--color)}.button p{margin:0;padding:0;color:var(--textcolor);--textcolor:red}";

const webcapButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.titlebutton = undefined;
    this.bordercolor = undefined;
    this.backgroundcolor = undefined;
    this.textcolor = undefined;
    this.fontsize = undefined;
    this.borderwidth = undefined;
    this.bordercorner = undefined;
  }
  render() {
    return (h("button", { class: "button", style: {
        'background-color': this.backgroundcolor,
        '--color': this.bordercolor,
        'font-size': this.fontsize,
        '--b': this.borderwidth,
        '--s': this.bordercorner,
      } }, h("p", { style: {
        '--textcolor': this.textcolor,
      } }, this.titlebutton)));
  }
  static get style() { return buttonMondriaanCss; }
}, [1, "webcap-button-mondriaan", {
    "titlebutton": [1],
    "bordercolor": [1],
    "backgroundcolor": [1],
    "textcolor": [1],
    "fontsize": [1],
    "borderwidth": [1],
    "bordercorner": [1]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["webcap-button-mondriaan"];
  components.forEach(tagName => { switch (tagName) {
    case "webcap-button-mondriaan":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, webcapButton);
      }
      break;
  } });
}

const WebcapButtonMondriaan = webcapButton;
const defineCustomElement = defineCustomElement$1;

export { WebcapButtonMondriaan, defineCustomElement };
