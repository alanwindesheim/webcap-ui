import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const accordionCss = ".accordion{display:grid;grid-template-columns:1fr 1fr 1fr 0.3fr;border-radius:2px;min-width:350px;height:35px;cursor:pointer;border:1px solid purple;background-color:white}.accordion .label{display:grid;grid-column:1/4;justify-self:start;align-self:center;padding-left:10px}.accordion .arrow{display:grid;grid-column:4/5;justify-self:start;align-self:center}.open{display:grid;min-height:70px;background-color:#ededed}.open p{justify-self:start;align-self:start;padding:13px 0 0 15px;margin:0;font-size:12px}.close{display:none}";

const MyComponent = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.toggle = createEvent(this, "toggle", 7);
    this.togglefalse = false;
    this.labeltext = undefined;
    this.accordiontext = undefined;
    this.width = undefined;
    this.height = undefined;
    this.textcolor = undefined;
    this.fontstyle = undefined;
    this.backgroundcolor = undefined;
    this.bordercolor = undefined;
    this.togglecolor = undefined;
    this.collapsecolor = undefined;
    this.collapsebg = undefined;
    this.collapseheight = undefined;
  }
  toggleComponent() {
    this.togglefalse = !this.togglefalse;
    this.toggle.emit({ visible: this.togglefalse });
  }
  render() {
    return (h("div", null, h("button", { class: "accordion", style: {
        'min-width': this.width + 'px',
        'min-height': this.height + 'px',
        'color': this.textcolor,
        'background-color': this.backgroundcolor,
        'border-color': this.bordercolor,
        'font-family': this.fontstyle,
      }, onClick: () => this.toggleComponent() }, h("div", { class: "label" }, this.labeltext), h("div", { class: "arrow" }, this.togglefalse ? (h("span", { style: {
        color: this.togglecolor,
      } }, "\u25B2")) : (h("span", null, "\u25BC")))), h("div", { class: `content-box ${this.togglefalse ? 'open' : 'close'}`, style: {
        'min-height': this.collapseheight + 'px',
        'color': this.collapsecolor,
        'background-color': this.collapsebg,
      } }, h("p", null, this.accordiontext))));
  }
  static get style() { return accordionCss; }
}, [1, "webcap-accordion", {
    "labeltext": [1],
    "accordiontext": [1],
    "width": [8],
    "height": [8],
    "textcolor": [1],
    "fontstyle": [1],
    "backgroundcolor": [1],
    "bordercolor": [1],
    "togglecolor": [1],
    "collapsecolor": [1],
    "collapsebg": [1],
    "collapseheight": [8],
    "togglefalse": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["webcap-accordion"];
  components.forEach(tagName => { switch (tagName) {
    case "webcap-accordion":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, MyComponent);
      }
      break;
  } });
}

const WebcapAccordion = MyComponent;
const defineCustomElement = defineCustomElement$1;

export { WebcapAccordion, defineCustomElement };
