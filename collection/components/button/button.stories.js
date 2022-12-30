export default {
  title: 'Components/Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 50, max: 400, step: 1 },
    },
    height: {
      control: { type: 'range', min: 35, max: 200, step: 1 },
    },
    fontsize: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    borderradius: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
    },
    fontstyle: {
      control: 'select',
      options: ['Arial', 'Courier New', 'Gill Sans', 'Times New Roman'],
    },
  },
};
const Template = args => `<webcap-button titlebutton="${args.titlebutton}" fontsize="${args.fontsize}" fontstyle="${args.fontstyle}" bordercolor="${args.bordercolor}" borderradius="${args.borderradius}" backgroundcolor="${args.backgroundcolor}" textcolor="${args.textcolor}"  fontsize="${args.fontsize}" width="${args.width}" height="${args.height}" ></webcap-button>`;
export const BasicButton = Template.bind({});
BasicButton.args = {
  titlebutton: 'Button',
  bordercolor: 'orange',
  backgroundcolor: 'orange',
  textcolor: 'white',
  borderradius: 4,
  fontstyle: 'Arial',
  fontsize: 14,
  width: 50,
  height: 35,
};
