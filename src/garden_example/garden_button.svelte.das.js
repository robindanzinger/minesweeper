export default {
  name: 'GardenVueButton',
  file: './garden_button.vue',
  in: [{ name: 'name', type: 'String' }],
  out: [{ name: 'click', type: 'String' }],
  examples: [
    {
      story: 'with text',
      input: {
        name: 'GardenButton',
      },
    },
    { story: 'no text', input: {} },
  ],
}
