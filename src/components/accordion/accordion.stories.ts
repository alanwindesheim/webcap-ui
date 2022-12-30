export default {
  title: 'Components/Accordion',
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
    collapseheight: {
      control: { type: 'range', min: 10, max: 200, step: 1 },
    },
    fontstyle: {
      control: 'select',
      options: ['Arial', 'Courier New', 'Gill Sans', 'Times New Roman'],
    },
  },
};

const Template = args =>
  `<webcap-accordion
  labeltext="${args.labeltext}"
  accordiontext="${args.accordiontext}"
  width="${args.width}"
  height="${args.height}"
  textcolor="${args.textcolor}"
  backgroundcolor="${args.backgroundcolor}"
  bordercolor="${args.bordercolor}"
  togglecolor="${args.togglecolor}"
  collapsecolor="${args.collapsecolor}"
  collapseheight="${args.collapseheight}"
  fontstyle="${args.fontstyle}"
></webcap-accordion>`;

export const BasicAccordion = Template.bind({});
BasicAccordion.args = {
  labeltext: 'Collapse accordion',
  accordiontext: 'Informatie tekst',
  textcolor: '#5d45f8',
  fontstyle: 'Arial',
  backgroundcolor: 'white',
  bordercolor: '#e8e8e8',
  width: 400,
  height: 30,
  togglecolor: 'gray',
  collapsecolor: 'black',
  collapseheight: 130,
};
