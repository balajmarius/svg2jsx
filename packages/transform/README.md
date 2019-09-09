# svg2jsx 🌜

> Transform SVG into valid JSX

#### transform(`svg`, `config`)

#### Parameters

- **svg** `String` The SVG string to be transformed
- **_config_** `Map`
  - **type** `functional | class` The type of the resulting component
  - **jsxSingleQuote** `Boolean` Either double or single quotes in JSX attributes

#### Returns

`Promise<String>` JSX string
