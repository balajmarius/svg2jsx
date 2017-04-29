<textarea bind:value='content' on:input='fire("input", event)'/>

<script>
  import debounce from 'debounce'
  import { DEBOUNCE_TIME } from '../constants'

  export default {

    events: {

      input(node, callback) {

        node.addEventListener('input', debounce(callback, DEBOUNCE_TIME), false)

      }
    
    }

  }
</script>