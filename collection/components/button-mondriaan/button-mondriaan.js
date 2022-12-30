import { h } from '@stencil/core';
export class webcapButton {
  constructor() {
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
  static get is() { return "webcap-button-mondriaan"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button-mondriaan.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button-mondriaan.css"]
    };
  }
  static get properties() {
    return {
      "titlebutton": {
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
        "attribute": "titlebutton",
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
      "fontsize": {
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
        "attribute": "fontsize",
        "reflect": false
      },
      "borderwidth": {
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
        "attribute": "borderwidth",
        "reflect": false
      },
      "bordercorner": {
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
        "attribute": "bordercorner",
        "reflect": false
      }
    };
  }
}
