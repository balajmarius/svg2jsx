<section>

  <Header
    on:clear='onClear(event)'
    on:convert='onQuotesChange(event)'
    on:upload='onUpload(event)'
    singleQuotes='{{singleQuotes}}'
    loading='{{loading}}'
    jsx='{{jsx}}'/>

  <div class='editor'>
    {{#if showError}}
      <div class='editor__error'>{{error}}</div>
    {{/if}}

    <Textarea
      on:input='convertSvg(event.target.value)'
      on:drop='onDrop(event)'
      on:dragover='onDragOver(event)'
      on:dragenter='onDragEnter(event)'
      on:dragexit='onDragExit(event)'
      value='{{svg}}'/>
  
    <Textarea
      value='{{convertQuotes(jsx, singleQuotes)}}'
      disabled/>
  </div>

  <input 
    ref:upload
    on:change='getFileContents(event)'
    accept='image/svg'
    type='file'/>
</section>

<script>
  import Clipboard from 'clipboard'

  import { DEFAULT_STATE, DOUBLE_QUOTE_REGEX } from './constants'
  import * as service from './service'

  import { Textarea, Header } from './components'

  export default {

    data() {

      return DEFAULT_STATE

    },

    oncreate() {

      // initialize clipboard.js
      new Clipboard('[data-clipboard-text]')

    },

    computed: {

      showError: (loading, error, svg) => error && svg && !loading

    },

    helpers: {
      convertQuotes(jsx, singleQuotes) {

        // replace double quotes
        if (singleQuotes) return jsx.replace(DOUBLE_QUOTE_REGEX, '\'')

        return jsx

      }
    },

    methods: {
      
      onClear() {

        // reset state
        return this.set(DEFAULT_STATE)

      },

      onUpload() {

        // open upload window
        return this.refs.upload.click()

      },

      onQuotesChange() {

        const { singleQuotes } = this.get()
        // toggle quotes
        return this.set({ singleQuotes: !singleQuotes })

      },

      onDrop(event) {

        event.stopPropagation()
        event.preventDefault()

        this.refs.upload.files = event.dataTransfer.files

      },

      onDragOver(event) {

        event.stopPropagation()
        event.preventDefault()

      },

      onDragEnter(event) {

        event.stopPropagation()
        event.preventDefault()

      },

      onDragExit(event) {

        event.stopPropagation()
        event.preventDefault()

      },

      getFileContents(event) {

        const [ svgFile ] = event.target.files

        // read the file and convert
        return service.getFileContents(svgFile)
          .then(svg => this.convertSvg(svg))
          .catch(error => this.set({ error }))

      },

      convertSvg(svg) {

        return Promise.resolve()
          .then(() => this.set({ svg, loading: true }))
          .then(() => service.getTransformedSvg(svg))
          .then(({ jsx, error }) => {
            // show error and hide the loader
            if (error) return this.set({ error, loading: false })
            // set jsx, error to undefined and hide the loader
            return this.set({ jsx, error, loading: false })
          })
          .catch(error => this.set({ error, loading: false }))

      }

    },

    components: {
      Header,
      Textarea,
    }
  }
</script>
