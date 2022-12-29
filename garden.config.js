export default {
  'serverport': 3010,
  'wssocketport': 3011,
  'destination': 'garden/',
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
  }
}
