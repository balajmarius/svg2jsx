<textarea
  class='editor__code'
  bind:value='value'
  disabled='{{disabled}}'
  on:drop='fire("drop", event)'
  on:dragover='fire("dragover", event)'
  on:dragenter='fire("dragenter", event)'
  on:dragexit='fire("dragexit", event)'
  on:input='fire("input", event)'/>

<script>
  import debounce from 'debounce'
  import { DEBOUNCE_TIME } from '../constants'

  export default {
    events: {
      input(node, callback) {
        node.addEventListener('input', debounce(callback, DEBOUNCE_TIME), false)
      },
      drop(node, callback) {
        node.addEventListener('drop', callback, false)
      },
      dragover(node, callback) {
        node.addEventListener('dragover', callback, false)
      },
      dragenter(node, callback) {
        node.addEventListener('dragenter', callback, false)
      },
      dragexit(node, callback) {
        node.addEventListener('dragexit', callback, false)
      },
    }
  }
</script>
