
import CustomComponentsBoard from '../src/components/board.svelte'
import CustomComponentsField from '../src/components/field.svelte'

export const routes = {
  '/custom/components/board': {
  "das": {
    "name": "Board",
    "file": "./board.svelte",
    "in": [
      {
        "name": "rows",
        "type": "Number"
      },
      {
        "name": "columns",
        "type": "Number"
      }
    ],
    "out": [],
    "examples": [
      {
        "story": "5x5 board",
        "input": {
          "rows": 5,
          "columns": 5
        }
      },
      {
        "story": "15x10 board",
        "input": {
          "rows": 15,
          "columns": 10
        }
      },
      {
        "story": "25x25 board",
        "input": {
          "rows": 25,
          "columns": 25
        }
      },
      {
        "story": "50x50 board",
        "input": {
          "rows": 50,
          "columns": 50
        }
      },
      {
        "story": "8x4 board",
        "input": {
          "rows": 8,
          "columns": 4
        }
      }
    ]
  },
  "basepath": "src/components/",
  "navbasenode": "custom/components",
  "fullnavnode": "custom/components",
  "relativepath": "",
  "fullpath": "src/components/",
  "file": "../src/components/board.svelte",
  "fullname": "CustomComponentsBoard",
  "route": "/custom/components/board"
},
'/custom/components/field': {
  "das": {
    "name": "Field",
    "file": "./field.svelte",
    "in": [
      {
        "name": "state",
        "type": "covered|uncovered|flagged"
      },
      {
        "name": "hasbomb",
        "type": "Boolean"
      },
      {
        "name": "row",
        "type": "Number"
      },
      {
        "name": "column",
        "type": "Number"
      },
      {
        "name": "numberOfNeighboursBombs",
        "type": "Number"
      }
    ],
    "out": [
      {
        "name": "toggleflag",
        "type": "{row, column}"
      },
      {
        "name": "uncover",
        "type": "{row, column}"
      }
    ],
    "examples": [
      {
        "story": "default",
        "input": {
          "state": "covered",
          "row": 5,
          "column": 17
        }
      },
      {
        "story": "flagged",
        "input": {
          "state": "flagged"
        }
      },
      {
        "story": "bombed",
        "input": {
          "state": "uncovered",
          "hasbomb": true
        }
      },
      {
        "story": "uncovered one",
        "input": {
          "state": "uncovered",
          "hasbomb": false,
          "numberOfNeighboursBombs": 1
        }
      },
      {
        "story": "uncovered 8",
        "input": {
          "state": "uncovered",
          "hasbomb": false,
          "numberOfNeighboursBombs": 8
        }
      },
      {
        "story": "uncovered zero",
        "input": {
          "state": "uncovered",
          "hasbomb": false,
          "numberOfNeighboursBombs": 0
        }
      }
    ]
  },
  "basepath": "src/components/",
  "navbasenode": "custom/components",
  "fullnavnode": "custom/components",
  "relativepath": "",
  "fullpath": "src/components/",
  "file": "../src/components/field.svelte",
  "fullname": "CustomComponentsField",
  "route": "/custom/components/field"
}
}

export const navtree = {
  "custom": {
    "components": {
      "_items": [
        {
          "href": "/custom/components/board",
          "text": "Board",
          "key": "CustomComponentsBoard"
        },
        {
          "href": "/custom/components/field",
          "text": "Field",
          "key": "CustomComponentsField"
        }
      ]
    }
  }
}

export const componentmap = {
  'CustomComponentsBoard': CustomComponentsBoard,
'CustomComponentsField': CustomComponentsField
}

export const dynamicImport = {
  Sidenav: () => import ('componentlib/src/components/sidenav/SidenavExample.svelte')
}
