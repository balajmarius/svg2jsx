<section>

  <Header on:clear='onClearClick(event)' jsx='{{jsx}}'/>

  <div class='editor'>

    {{#if error && svg}}
      <div class='editor__error'>{{error}}</div>
    {{/if}}

    <Textarea value='{{svg}}' on:input='onEditorChange(event.target.value)'/>
  
    <Textarea value='{{jsx}}' disabled/>

  </div>

</section>

<script>
  import Clipboard from 'clipboard'

  import { DEFAULT_STATE } from './constants'
  import { Textarea, Header } from './partials'
  import { getTransformedSVG } from './service'

  export default {

    data() {

      return DEFAULT_STATE

    },

    oncreate() {

      new Clipboard('[data-clipboard-text]')

    },

    methods: {

      onClearClick(event) {

        event.preventDefault()

        return this.set(DEFAULT_STATE)

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