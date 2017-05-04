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

  import { DEFAULT_STATE, DOUBLE_QUOTE_REGEX, SINGLE_QUOTE } from './constants'
  import * as service from './service'

  import { Textarea, Header } from './partials'

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
        if (singleQuotes) return jsx.replace(DOUBLE_QUOTE_REGEX, SINGLE_QUOTE)

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

      getFileContents(event) {

        const svgFile = event.target.files[0]

        // read the file and convert
        return service.getFileContents(svgFile)
          .then(svg => this.convertSvg(svg))
          .catch(error => this.set({ error }))

      },

      convertSvg(svg) {

        this.set({ svg, loading: true })

        return service.getTransformedSvg(svg)
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