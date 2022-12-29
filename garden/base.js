
export const routes = {
  '/custom/components/board': {
  "name": "Board",
  "basepath": "src/components/",
  "navbasenode": "custom/components",
  "fullnavnode": "custom/components",
  "relativepath": "",
  "fullpath": "src/components/",
  "file": "../src/components/board.svelte",
  "dasfile": "../src/components/board.das.js",
  "fullname": "CustomComponentsBoard",
  "route": "/custom/components/board"
},
'/custom/components/field': {
  "name": "Field",
  "basepath": "src/components/",
  "navbasenode": "custom/components",
  "fullnavnode": "custom/components",
  "relativepath": "",
  "fullpath": "src/components/",
  "file": "../src/components/field.svelte",
  "dasfile": "../src/components/field.das.js",
  "fullname": "CustomComponentsField",
  "route": "/custom/components/field"
}
}

export const navtree = [
  {
    "isNode": true,
    "name": "custom",
    "key": "/custom/",
    "children": [
      {
        "isNode": true,
        "name": "components",
        "key": "/custom/components/",
        "children": [
          {
            "isLeaf": true,
            "href": "/custom/components/board",
            "name": "Board",
            "key": "CustomComponentsBoard"
          },
          {
            "isLeaf": true,
            "href": "/custom/components/field",
            "name": "Field",
            "key": "CustomComponentsField"
          }
        ]
      }
    ]
  }
]
