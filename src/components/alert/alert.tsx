import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'webcap-alert',
  styleUrl: 'alert.scss',
  shadow: true,
})
export class webcapAlert {
  @Prop() alerttext: string;
  @Prop() textcolor: string;
  @Prop() fontstyle: string;
  @Prop() alertboxcolor: string;
  @Prop() bordercolor: string;
  @Prop() borderradius: string | number;
  @Prop() height: string | number;
  @Prop() width: string | number;
  @Prop() backgroundcolor: string;
  @Prop() deletecolor: string;
  @State() togglefalse = false;
  @Event() toggle: EventEmitter;

  toggleComponent() {
    this.togglefalse = !this.togglefalse;
    this.toggle.emit({ visible: this.togglefalse });
  }

  render() {
    return (
      <div
        class={`box ${this.togglefalse ? 'close' : 'not-close'}`}
        style={
          {
            'border-color': this.bordercolor,
            'color': this.textcolor,
            'background-color': this.backgroundcolor,
            'border-radius': this.borderradius + 'px',
            'min-width': this.width + 'px',
            'min-height': this.height + 'px',
            'font-family': this.fontstyle,
          } as any
        }
      >
        <div
          class="color"
          style={
            {
              'background-color': this.alertboxcolor,
            } as any
          }
        ></div>
        <div class="text">
          <p>{this.alerttext}</p>
        </div>
        <div class="delete">
          <button
            onClick={() => this.toggleComponent()}
            class="button"
            style={
              {
                color: this.deletecolor,
              } as any
            }
          >
            X
          </button>
        </div>
      </div>
    );
  }
}
