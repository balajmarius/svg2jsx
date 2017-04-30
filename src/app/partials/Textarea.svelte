<textarea
  class='editor__code'
  bind:value='value'
  disabled='{{disabled}}'
  on:input='fire("input", event)'
/>
