import examples from './boardexamples.js'

export default {
  name: 'Board',
  file: './board.svelte',
  in: [
    { name: 'rows', type: 'Number' },
    { name: 'columns', type: 'Number' },
  ],
  out: [],
  examples,
}
