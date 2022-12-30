import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'webcap-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class webcapButton {
  @Prop() titlebutton: string;
  @Prop() bordercolor: string;
  @Prop() borderradius: string | number;
  @Prop() backgroundcolor: string;
  @Prop() textcolor: string;
  @Prop() fontsize: string | number;
  @Prop() fontstyle: string;
  @Prop() height: string | number;
  @Prop() width: string | number;

  render() {
    return (
      <button
        class="button"
        style={
          {
            'background-color': this.backgroundcolor,
            'border-color': this.bordercolor,
            'border-radius': this.borderradius + 'px',
            'color': this.textcolor,
            'font-size': this.fontsize + 'px',
            'min-height': this.height + 'px',
            'min-width': this.width + 'px',
            'font-family': this.fontstyle,
          } as any
        }
      >
        {this.titlebutton}
      </button>
    );
  }
}
