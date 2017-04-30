<section>

  <Header on:clear='onClearClick(event)' on:copy='onCopyClick()'/>

  <div class='editor'>

    <Textarea value='{{svg}}' on:input='onEditorChange(event.target.value)'/>
  
    <Textarea value='{{jsx}}' disabled/>

  </div>

</section>

<script>
  import { DEFAULT_STATE } from './constants'
  import { Textarea, Header } from './partials'
  import { getTransformedSVG } from './service'

  export default {

    data() {

      return DEFAULT_STATE

    },

    methods: {

      onCopyClick() {

        console.log('copy')

      },

      onClearClick(event) {

        event.preventDefault()

        return this.set({ svg: DEFAULT_STATE.svg })

      },

      onEditorChange(svg) {

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