export default {
  title: 'Components/Alert',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: {
      control: { type: 'range', min: 100, max: 1200, step: 1 },
    },
    height: {
      control: { type: 'range', min: 10, max: 200, step: 1 },
    },
    borderradius: {
      control: { type: 'range', min: 1, max: 5, step: 1 },
    },
    fontstyle: {
      control: 'select',
      options: ['Arial', 'Courier New', 'Gill Sans', 'Times New Roman'],
    },
  },
};
const Template = args => `<webcap-alert
alerttext="${args.alerttext}" 
textcolor="${args.textcolor}" 
alertboxcolor="${args.alertboxcolor}" 
bordercolor="${args.bordercolor}" 
backgroundcolor="${args.backgroundcolor}" 
borderradius="${args.borderradius}" 
deletecolor="${args.deletecolor}" 
width="${args.width}" 
height="${args.height}"
fontstyle="${args.fontstyle}" 
></webcap-alert>`;
export const BasicAlert = Template.bind({});
BasicAlert.args = {
  alerttext: 'Fail!',
  textcolor: 'red',
  alertboxcolor: 'red',
  bordercolor: 'red',
  backgroundcolor: 'white',
  deletecolor: 'black',
  borderradius: 3,
  fontstyle: 'Arial',
  width: 400,
  height: 40,
};
