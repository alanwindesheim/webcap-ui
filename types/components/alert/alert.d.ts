import { EventEmitter } from '../../stencil-public-runtime';
export declare class webcapAlert {
  alerttext: string;
  textcolor: string;
  fontstyle: string;
  alertboxcolor: string;
  bordercolor: string;
  borderradius: string | number;
  height: string | number;
  width: string | number;
  backgroundcolor: string;
  deletecolor: string;
  togglefalse: boolean;
  toggle: EventEmitter;
  toggleComponent(): void;
  render(): any;
}
