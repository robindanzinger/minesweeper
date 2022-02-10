
import CustomComponentsBoard from '../src/components/board.svelte'
import CustomComponentsBoardDas from '../src/components/board.das.js'
import CustomComponentsField from '../src/components/field.svelte'
import CustomComponentsFieldDas from '../src/components/field.das.js'

export const componentmap = {
  'CustomComponentsBoard': CustomComponentsBoard,
'CustomComponentsField': CustomComponentsField
}
export const dasmap = {
  'CustomComponentsBoard': CustomComponentsBoardDas,
'CustomComponentsField': CustomComponentsFieldDas
}
