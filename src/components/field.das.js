export default {
  name: 'Field',
  file: './field.svelte',
  in: [
    { name: 'state', type: 'covered|uncovered|flagged' },
    { name: 'hasbomb', type: 'Boolean' },
    { name: 'row', type: 'Number' },
    { name: 'column', type: 'Number' },
    { name: 'numberOfNeighboursBombs', type: 'Number' },
  ],
  out: [
    { name: 'toggleflag', type: '{row, column}' },
    { name: 'uncover', type: '{row, column}' },
  ],
  examples: [
    {
      story: 'default',
      input: {
        state: 'covered',
        row: 5,
        column: 17,
      },
    },
    {
      story: 'flagged',
      input: {
        state: 'flagged',
      },
    },
    {
      story: 'bombed',
      input: {
        state: 'uncovered',
        hasbomb: true,
      },
    },
    {
      story: 'uncovered one',
      input: {
        state: 'uncovered',
        hasbomb: false,
        numberOfNeighboursBombs: 1,
      },
    },
    {
      story: 'uncovered 8',
      input: {
        state: 'uncovered',
        hasbomb: false,
        numberOfNeighboursBombs: 8,
      },
    },
    {
      story: 'uncovered zero',
      input: {
        state: 'uncovered',
        hasbomb: false,
        numberOfNeighboursBombs: 0,
      },
    },
  ],
}
