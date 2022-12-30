import { Component, Event, Prop, State, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'webcap-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class MyComponent {
  @State() togglefalse = false;
  @Event() toggle: EventEmitter;
  @Prop() labeltext: string;
  @Prop() accordiontext: string;
  @Prop() width: string | number;
  @Prop() height: string | number;
  @Prop() textcolor: string;
  @Prop() fontstyle: string;
  @Prop() backgroundcolor: string;
  @Prop() bordercolor: string;
  @Prop() togglecolor: string;
  @Prop() collapsecolor: string;
  @Prop() collapsebg: string;
  @Prop() collapseheight: string | number;

  toggleComponent() {
    this.togglefalse = !this.togglefalse;
    this.toggle.emit({ visible: this.togglefalse });
  }

  render() {
    return (
      <div>
        <button
          class="accordion"
          style={
            {
              'min-width': this.width + 'px',
              'min-height': this.height + 'px',
              'color': this.textcolor,
              'background-color': this.backgroundcolor,
              'border-color': this.bordercolor,
              'font-family': this.fontstyle,
            } as any
          }
          onClick={() => this.toggleComponent()}
        >
          <div class="label">{this.labeltext}</div>
          <div class="arrow">
            {this.togglefalse ? (
              <span
                style={
                  {
                    color: this.togglecolor,
                  } as any
                }
              >
                &#9650;
              </span>
            ) : (
              <span>&#9660;</span>
            )}
          </div>
        </button>
        <div
          class={`content-box ${this.togglefalse ? 'open' : 'close'}`}
          style={
            {
              'min-height': this.collapseheight + 'px',
              'color': this.collapsecolor,
              'background-color': this.collapsebg,
            } as any
          }
        >
          <p>{this.accordiontext}</p>
        </div>
      </div>
    );
  }
}
