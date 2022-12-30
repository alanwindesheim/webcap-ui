import { proxyCustomElement, HTMLElement, h } from '@stencil/core/internal/client';

const buttonCss = ".button{background-color:#ff1111;border:1px solid;border-color:#d5d9d9;color:#0f1111;border-radius:8px;box-shadow:rgba(213, 217, 217, 0.5) 0 2px 5px 0;cursor:pointer;font-size:13px;padding:0px 10px 0px 10px;min-width:60px;min-height:30px}.button:hover{filter:brightness(90%)}.button:active{border-color:#008296;box-shadow:rgba(213, 217, 217, 0.5) 0 2px 5px 0}";

const webcapButton = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.titlebutton = undefined;
    this.bordercolor = undefined;
    this.borderradius = undefined;
    this.backgroundcolor = undefined;
    this.textcolor = undefined;
    this.fontsize = undefined;
    this.fontstyle = undefined;
    this.height = undefined;
    this.width = undefined;
  }
  render() {
    return (h("button", { class: "button", style: {
        'background-color': this.backgroundcolor,
        'border-color': this.bordercolor,
        'border-radius': this.borderradius + 'px',
        'color': this.textcolor,
        'font-size': this.fontsize + 'px',
        'min-height': this.height + 'px',
        'min-width': this.width + 'px',
        'font-family': this.fontstyle,
      } }, this.titlebutton));
  }
  static get style() { return buttonCss; }
}, [1, "webcap-button", {
    "titlebutton": [1],
    "bordercolor": [1],
    "borderradius": [8],
    "backgroundcolor": [1],
    "textcolor": [1],
    "fontsize": [8],
    "fontstyle": [1],
    "height": [8],
    "width": [8]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["webcap-button"];
  components.forEach(tagName => { switch (tagName) {
    case "webcap-button":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, webcapButton);
      }
      break;
  } });
}

const WebcapButton = webcapButton;
const defineCustomElement = defineCustomElement$1;

export { WebcapButton, defineCustomElement };
