import { proxyCustomElement, HTMLElement, createEvent, h } from '@stencil/core/internal/client';

const alertCss = ".box{display:grid;grid-template-columns:0.18fr 1fr 1fr 0.5fr;border:1px solid red;border-radius:1px;min-width:350px;min-height:45px}.box .color{display:grid;grid-column:1/2;background-color:#ff4a4a}.box .color p{display:grid;justify-content:center;align-self:center;margin:0}.box .text{display:grid;grid-column:2/5}.box .text p{display:grid;justify-self:start;align-self:center;margin:0px 0px 0px 10px}.box .delete{display:grid;grid-column:5/6;justify-content:end;align-self:start}.box .delete .button{border:none;background-color:transparent;color:black;margin:5px 5px 0px 0px;cursor:pointer}.close{display:none}";

const webcapAlert = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.toggle = createEvent(this, "toggle", 7);
    this.alerttext = undefined;
    this.textcolor = undefined;
    this.fontstyle = undefined;
    this.alertboxcolor = undefined;
    this.bordercolor = undefined;
    this.borderradius = undefined;
    this.height = undefined;
    this.width = undefined;
    this.backgroundcolor = undefined;
    this.deletecolor = undefined;
    this.togglefalse = false;
  }
  toggleComponent() {
    this.togglefalse = !this.togglefalse;
    this.toggle.emit({ visible: this.togglefalse });
  }
  render() {
    return (h("div", { class: `box ${this.togglefalse ? 'close' : 'not-close'}`, style: {
        'border-color': this.bordercolor,
        'color': this.textcolor,
        'background-color': this.backgroundcolor,
        'border-radius': this.borderradius + 'px',
        'min-width': this.width + 'px',
        'min-height': this.height + 'px',
        'font-family': this.fontstyle,
      } }, h("div", { class: "color", style: {
        'background-color': this.alertboxcolor,
      } }), h("div", { class: "text" }, h("p", null, this.alerttext)), h("div", { class: "delete" }, h("button", { onClick: () => this.toggleComponent(), class: "button", style: {
        color: this.deletecolor,
      } }, "X"))));
  }
  static get style() { return alertCss; }
}, [1, "webcap-alert", {
    "alerttext": [1],
    "textcolor": [1],
    "fontstyle": [1],
    "alertboxcolor": [1],
    "bordercolor": [1],
    "borderradius": [8],
    "height": [8],
    "width": [8],
    "backgroundcolor": [1],
    "deletecolor": [1],
    "togglefalse": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["webcap-alert"];
  components.forEach(tagName => { switch (tagName) {
    case "webcap-alert":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, webcapAlert);
      }
      break;
  } });
}

const WebcapAlert = webcapAlert;
const defineCustomElement = defineCustomElement$1;

export { WebcapAlert, defineCustomElement };
