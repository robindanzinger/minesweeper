<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()

  export let column
  export let row
  export let state
  export let hasbomb = false
  export let numberOfNeighboursBombs

  function handleclick(e) {
    if (state == 'flagged') return
    dispatch('out', {
      uncover: {
        row,
        column,
      },
    })
  }

  function handleToggleFlag() {
    dispatch('out', {
      toggleflag: {
        row,
        column,
      },
    })
    return false
  }
</script>

{#if state == 'covered'}
  <button
    on:click={handleclick}
    on:contextmenu|stopPropagation|preventDefault={handleToggleFlag}
  ></button>
{:else if state == 'flagged'}
  <button on:contextmenu|stopPropagation|preventDefault={handleToggleFlag}
    >f</button
  >
{:else if hasbomb}
  <div class="bomb">o</div>
{:else}
  <div>{numberOfNeighboursBombs}</div>
{/if}

<style>
  div {
    height: 25px;
    width: 25px;
    text-align: center;
    line-height: 25px;
    background-color: lightgray;
  }
  button {
    height: 25px;
    width: 25px;
    background-color: lightgray;
  }
  .bomb {
    background-color: red;
  }
</style>
