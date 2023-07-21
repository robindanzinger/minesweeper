export default {
  'serverport': 3010,
  'wssocketport': 3012,
  'project_title': 'Minesweeper',
  'destination': '.garden/',
  'structure': {
    'custom': {
      'components': '/src/components/'
    }
  },
  'watch': {
    'directories': [
      './src'
    ],
    'include': [
      '.svelte', '.das.json', '.scss', '.css', '.js'
    ]
  },
}
