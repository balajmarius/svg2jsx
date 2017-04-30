<header class='header'>

  <div class='header__content'>
    
    <h1>SVG &#10142; JSX <span>Converter</span></h1>
    <a href='http://github.com/balajmarius/svg-to-jsx-gui' target='_blank'>⭐️ Star on Github</a>

  </div>

  <div class='header__tabs'>

    <div class='header__tab'>

      <h2>SVG <span>(Paste your code)</span></h2>
      <button on:click='fire("clear", event)'>Clear</button>

    </div>

    <div class='header__tab'>
      
      <h2>JSX <span>(JSX valid SVG)</span></h2>
      <button data-clipboard-text='{{jsx}}'>Copy</button>

    </div>
  </div>

</header>