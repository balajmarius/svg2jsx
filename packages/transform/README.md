# svg2jsx 🌜

> Transform SVG into valid JSX

##### transform(`svg`, `config`)

##### Parameters

- _svg_ `String`
  The SVG string to be transformed
- _config_ `Map`
  - _type_ `functional | class` The type of the resulting component
  - _jsxSingleQuote_ `boolean` Either double or single quotes in JSX attributes

##### Returns

`Promise<String>` JSX string
