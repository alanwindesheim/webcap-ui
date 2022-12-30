import { h } from '@stencil/core';
export class webcapAlert {
  constructor() {
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
  static get is() { return "webcap-alert"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["alert.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["alert.css"]
    };
  }
  static get properties() {
    return {
      "alerttext": {
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
        "attribute": "alerttext",
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
      "alertboxcolor": {
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
        "attribute": "alertboxcolor",
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
      "borderradius": {
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
        "attribute": "borderradius",
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
      "deletecolor": {
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
        "attribute": "deletecolor",
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
