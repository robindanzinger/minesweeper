let state = 'play'
let fields = []
let uncoveredFields = 0
let numberOfBombs = 0
let columns = 0
let rows = 0

export function help() {
  if (state != 'play') return state
  let row, column
  while (state == 'play') {
    const field = getRandomFreeField()
    row = field.row
    column = field.column
    if (field.state == 'covered') break
  }
  return uncover(row, column)
}

export function newGame() {
  initFields(columns, rows)
  return {
    fields: getfields(),
    state: getState()
  }
}

export function initFields(newColumns, newRows) {
  columns = newColumns
  rows = newRows
  state = 'play'
  uncoveredFields = 0
  if (columns == 0 || rows == 0) return
  fields = [rows]
  for (let row = 0; row < rows; row++) {
    fields[row] = [columns]
    for (let column = 0; column < columns; column++) {
      fields[row][column] = {state: 'covered', row, column}
    }
  }
  setBombs()
  updateNeighbourBombs()
  return getfields()
}

export function getState() {
  return state
}

export function getfields() {
  return fields.reduce((acc, cur) => {
    acc.push(cur.reduce((ac, cr) => {
     ac.push({...cr})
     return ac
    }, []))
    return acc
  }, [])

}

function setBombs() {
  numberOfBombs = Math.ceil(columns * rows / 6)
  for (let i = 0; i < numberOfBombs; i++) {
    getRandomFreeField().hasbomb = true
  }
}

function getRandomFreeField() {
  const column = getRandomInt(columns)
  const row = getRandomInt(rows)
  if (fields[row][column].hasbomb) {
    return getRandomFreeField()
  } 
  return fields[row][column]
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateNeighbourBombs() {
  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      fields[row][column].numberOfNeighboursBombs = countNeighboursBombs(row, column)
    }
  }
}

function countNeighboursBombs(row, column) {
  return getNeighbours(row, column).reduce((acc, cur) => {
    if (cur.hasbomb) {
      return acc + 1
    }
    return acc
  }, 0)
}

function getNeighbours(row, column) {
  const neighbours = []
  for (let i = row-1; i < row + 2; i++) {
    for (let j = column - 1; j < column + 2; j++) {
      if (i == row && j == column) continue
      if (i == rows || i < 0 || j == columns || j < 0) continue
      neighbours.push(fields[i][j])
    }
  }
  return neighbours
}

export function toggleflag(row, column) {
  fields[row][column].state = fields[row][column].state == 'flagged' ? 'covered' : 'flagged'
}

export function uncover(row, column) {
  if (state != 'play') return state
  if (fields[row][column].state == 'uncovered') return state

  fields[row][column].state = 'uncovered'
  if (fields[row][column].numberOfNeighboursBombs == 0 && !fields[row][column].hasbomb) {
    uncoverNeighbourFields(row, column)
  }
  if (fields[row][column].hasbomb) {
    state = 'lost'
  }
  else {
    uncoveredFields++
    if (uncoveredFields + numberOfBombs == rows * columns) {
      state = 'won'
    }
  }
  return state
}

function uncoverNeighbourFields(row, column) {
  getNeighbours(row, column).forEach(f => {
    uncover(f.row, f.column)
  })
}


