import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'webcap-button-mondriaan',
  styleUrl: 'button-mondriaan.scss',
  shadow: true,
})
export class webcapButton {
  @Prop() titlebutton: string;
  @Prop() bordercolor: string;
  @Prop() backgroundcolor: string;
  @Prop() textcolor: string;
  @Prop() fontsize: string;
  @Prop() borderwidth: string;
  @Prop() bordercorner: string;

  render() {
    return (
      <button
        class="button"
        style={
          {
            'background-color': this.backgroundcolor,
            '--color': this.bordercolor,
            'font-size': this.fontsize,
            '--b': this.borderwidth,
            '--s': this.bordercorner,
          } as any
        }
      >
        <p
          style={
            {
              '--textcolor': this.textcolor,
            } as any
          }
        >
          {this.titlebutton}
        </p>
      </button>
    );
  }
}
