<div>

  <Header/>

  <Editor content='{{svg}}' on:input='onSVGEditorChange(event)'/>

</div>

<script>
  import { DEFAULT_VALUE } from './constants'
  import { Editor, Header } from './partials'
  import { getTransformedSVG } from './service'

  export default {

    data() {

      return {
        svg: DEFAULT_VALUE.SVG,
        jsx: DEFAULT_VALUE.JSX,
        loading: null,
        error: null,
      }

    },

    methods: {

      onSVGEditorChange(event) {

        const { value } = event.target

        console.log(value)

      },

    },

    components: {
      Editor,
      Header,
    }

  }
</script>
