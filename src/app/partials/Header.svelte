<header class='header'>

  <div class='header__content'>
    
    <h1>SVG &#10142; JSX <span>Converter</span></h1>
    
    <div>
      <a href='http://github.com/balajmarius/svg-to-jsx-gui' target='_blank'>⭐️ Star on Github</a>
      <a href='mailto:balajmarius93@gmail.com'>💼 Hire me</a>
    </div>

  </div>

  <div class='header__tabs'>

    <div class='header__tab'>

      <h2>SVG <span>(Paste your code)</span></h2>
      
      <div>
        <button on:click='fire("clear", event)'>Clear</button>
      </div>

    </div>

    <div class='header__tab'>
      
      <h2>JSX <span>(JSX valid SVG)</span></h2>
      
      <div>
        <button on:click='fire("convert", event)'>
          To
          {{#if singleQuotes}}
            double
          {{else}}
            single
          {{/if}}
          quotes
        </button>

        <button data-clipboard-text='{{jsx}}'>Copy</button>
      </div>

    </div>
  </div>

</header>