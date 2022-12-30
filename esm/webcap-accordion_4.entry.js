import { r as registerInstance, c as createEvent, h } from './index-8174ff27.js';

const accordionCss = ".accordion{display:grid;grid-template-columns:1fr 1fr 1fr 0.3fr;border-radius:2px;min-width:350px;height:35px;cursor:pointer;border:1px solid purple;background-color:white}.accordion .label{display:grid;grid-column:1/4;justify-self:start;align-self:center;padding-left:10px}.accordion .arrow{display:grid;grid-column:4/5;justify-self:start;align-self:center}.open{display:grid;min-height:70px;background-color:#ededed}.open p{justify-self:start;align-self:start;padding:13px 0 0 15px;margin:0;font-size:12px}.close{display:none}";

const MyComponent = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
MyComponent.style = accordionCss;

const alertCss = ".box{display:grid;grid-template-columns:0.18fr 1fr 1fr 0.5fr;border:1px solid red;border-radius:1px;min-width:350px;min-height:45px}.box .color{display:grid;grid-column:1/2;background-color:#ff4a4a}.box .color p{display:grid;justify-content:center;align-self:center;margin:0}.box .text{display:grid;grid-column:2/5}.box .text p{display:grid;justify-self:start;align-self:center;margin:0px 0px 0px 10px}.box .delete{display:grid;grid-column:5/6;justify-content:end;align-self:start}.box .delete .button{border:none;background-color:transparent;color:black;margin:5px 5px 0px 0px;cursor:pointer}.close{display:none}";

const webcapAlert = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
webcapAlert.style = alertCss;

const buttonCss = ".button{background-color:#ff1111;border:1px solid;border-color:#d5d9d9;color:#0f1111;border-radius:8px;box-shadow:rgba(213, 217, 217, 0.5) 0 2px 5px 0;cursor:pointer;font-size:13px;padding:0px 10px 0px 10px;min-width:60px;min-height:30px}.button:hover{filter:brightness(90%)}.button:active{border-color:#008296;box-shadow:rgba(213, 217, 217, 0.5) 0 2px 5px 0}";

const webcapButton$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
webcapButton$1.style = buttonCss;

const buttonMondriaanCss = ".button{--b:3px;--s:0.45em;--color:#0027d7;padding:calc(0.5em + var(--s)) calc(0.9em + var(--s));color:var(--color);--_p:var(--s);background:conic-gradient(from 90deg at var(--b) var(--b), #0000 90deg, var(--color) 0) var(--_p) var(--_p)/calc(100% - var(--b) - 2 * var(--_p)) calc(100% - var(--b) - 2 * var(--_p));transition:0.3s linear, color 0s, background-color 0s;outline:var(--b) solid #0000;outline-offset:0.6em;font-size:16px;border:none;user-select:none;-webkit-user-select:none;touch-action:manipulation}.button:hover,.button:focus-visible{--_p:0px;outline-color:var(--color);outline-offset:0.05em}.button:active{background:var(--color)}.button p{margin:0;padding:0;color:var(--textcolor);--textcolor:red}";

const webcapButton = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
webcapButton.style = buttonMondriaanCss;

export { MyComponent as webcap_accordion, webcapAlert as webcap_alert, webcapButton$1 as webcap_button, webcapButton as webcap_button_mondriaan };
