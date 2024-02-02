<script>
  import Field from './field.svelte'
  import {
    help,
    newGame,
    initFields,
    toggleflag,
    uncover,
    getfields,
  } from './logic.js'
  export let columns = 0
  export let rows = 0

  let state = 'play'
  let fields = []

  $: fields = initFields(columns, rows)
  function handleout(e) {
    if (e.detail.uncover) {
      state = uncover(e.detail.uncover.row, e.detail.uncover.column)
    } else if (e.detail.toggleflag) {
      toggleflag(e.detail.toggleflag.row, e.detail.toggleflag.column)
    }
    fields = getfields()
  }

  function helpme(evt) {
    state = help()
    fields = getfields()
  }

  function newgame() {
    ;({ fields, state } = newGame())
  }
</script>

{#if fields.length > 0}
  <div class="column">
    {#each { length: rows } as _, row}
      <div class="row">
        {#each { length: columns } as _, column}
          <Field {...fields[row][column]} on:out={handleout}></Field>
        {/each}
      </div>
    {/each}
  </div>
{/if}
<div>{state}</div>
<div class="buttons">
  <button on:click={helpme}>help</button>
  <button on:click={newgame}>new</button>
</div>

<style>
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    columns: 100%;
  }
  .column {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    margin: 4px 8px;
  }

  button {
    font-size: 1.1rem;
    width: 80px;
    margin-right: 8px;
  }
</style>
