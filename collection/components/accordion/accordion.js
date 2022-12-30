import { h } from '@stencil/core';
export class MyComponent {
  constructor() {
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
  static get is() { return "webcap-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion.css"]
    };
  }
  static get properties() {
    return {
      "labeltext": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "labeltext",
        "reflect": false
      },
      "accordiontext": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "accordiontext",
        "reflect": false
      },
      "width": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "width",
        "reflect": false
      },
      "height": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "height",
        "reflect": false
      },
      "textcolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "textcolor",
        "reflect": false
      },
      "fontstyle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "fontstyle",
        "reflect": false
      },
      "backgroundcolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "backgroundcolor",
        "reflect": false
      },
      "bordercolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "bordercolor",
        "reflect": false
      },
      "togglecolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "togglecolor",
        "reflect": false
      },
      "collapsecolor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "collapsecolor",
        "reflect": false
      },
      "collapsebg": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "collapsebg",
        "reflect": false
      },
      "collapseheight": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "collapseheight",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "togglefalse": {}
    };
  }
  static get events() {
    return [{
        "method": "toggle",
        "name": "toggle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
}
