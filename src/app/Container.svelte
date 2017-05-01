<section>

  <Header
    on:clear='onClearClick(event)'
    on:convert='onQuotesClick(event)'
    singleQuotes='{{singleQuotes}}'
    jsx='{{jsx}}'/>

  <div class='editor'>

    {{#if error && svg}}
      <div class='editor__error'>{{error}}</div>
    {{/if}}

    <Textarea
      on:input='onEditorChange(event.target.value)'
      value='{{svg}}'/>
  
    <Textarea
      value='{{convertQuotes(jsx, singleQuotes)}}'
      disabled/>

  </div>

</section>

<script>
  import Clipboard from 'clipboard'

  import { DEFAULT_STATE, DOUBLE_QUOTE_REGEX, SINGLE_QUOTE } from './constants'
  import { Textarea, Header } from './partials'
  import { getTransformedSVG } from './service'

  export default {

    data() {

      return DEFAULT_STATE

    },

    oncreate() {

      new Clipboard('[data-clipboard-text]')

    },

    helpers: {

      convertQuotes(jsx, singleQuotes) {

        if (singleQuotes) return jsx.replace(DOUBLE_QUOTE_REGEX, SINGLE_QUOTE)

        return jsx

      },

    },

    methods: {

      onClearClick(event) {

        return this.set(DEFAULT_STATE)

      },

      onQuotesClick(event) {

        const { singleQuotes } = this.get()

        return this.set({ singleQuotes: !singleQuotes })

      },

      onEditorChange(svg) {

        this.set({ svg })

        return getTransformedSVG({ svg })
          .then(response => {

            const { jsx, error } = response

            if (error) return this.set({ error })

            return this.set({ jsx, error })

          })
          .catch(error => this.set({ error }))

      },

    },

    components: {
      Header,
      Textarea,
    }

  }
</script>