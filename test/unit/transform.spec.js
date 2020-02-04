const transform = require('../../packages/transform');

describe('transform tests', () => {
  test('clean attributes', async () => {
    const transformed = await transform('<svg id=" test " strok="blue" fill="   red" />');

    expect(transformed).toEqual(expect.not.stringMatching(/strok/));
    expect(transformed).toMatchSnapshot();
  });

  test('remove unnecessary nodes', async () => {
    const transformed = await transform('<svg id="test"><g><g></g></g></svg>');

    expect(transformed).toEqual(expect.stringMatching(/<svg \/>/));
    expect(transformed).toMatchSnapshot();
  });

  test('convert attributes', async () => {
    const transformed = await transform('<svg class="test" data-name="svg" fill-rule="evenodd"/>');

    expect(transformed).toEqual(expect.stringMatching(/className=/));
    expect(transformed).toEqual(expect.not.stringMatching(/class=/));
    expect(transformed).toEqual(expect.stringMatching(/fillRule=/));
    expect(transformed).toEqual(expect.not.stringMatching(/fill-rule=/));
    expect(transformed).toEqual(expect.stringMatching(/data-name=/));
    expect(transformed).toEqual(expect.not.stringMatching(/dataName=/));
    expect(transformed).toMatchSnapshot();
  });

  test('convert inline styles to style objects', async () => {
    const transformed = await transform('<svg style="margin-left:20px;padding-top:20px;" />');

    expect(transformed).toEqual(expect.stringMatching(/marginLeft: 20/));
    expect(transformed).toEqual(expect.stringMatching(/paddingTop: 20/));
    expect(transformed).toMatchSnapshot();
  });

  test('allow prettier config options', async () => {
    const transformed = await transform('<svg data-test="svg-test" />', {
      semi: false,
    });

    expect(transformed).toEqual(expect.not.stringMatching(/;/));
    expect(transformed).toMatchSnapshot();
  });

  test('don\'t convert "clip-path"', async () => {
    const transformed = await transform(`
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <path clip-path="url(#SVGID_2_134rwd)" d="M43,24c1.1-1.5,2.3-3"/>
      </svg>
    `);

    expect(transformed).toEqual(expect.stringMatching(/clip-path=/));
    expect(transformed).toMatchSnapshot();
  });

  test('quote string style values', async () => {
    const transformed = await transform(`
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <path style="margin-left: auto;" d="M43,24c1.1-1.5,2.3-3"/>
      </svg>
    `);

    expect(transformed).toEqual(expect.stringMatching(/marginLeft: "auto"/));
    expect(transformed).toMatchSnapshot();
  });

  test('convert nested nodes', async () => {
    const transformed = await transform(`
      <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <defs>
          <clipPath id="path-1">
            <path style="margin-left: auto;" d="M43,24c1.1-1.5,2.3-3"/>
          </clipPath>
        </defs>
        <circle cx="110" cy="110" r="100" fill="#9c6" clip-path="url(#path-1)" />
      </svg>      
    `);

    expect(transformed.match(/>\s*>/gm)).toBeFalsy();
    expect(transformed.match(/<svg/g)).toHaveLength(1);
    expect(transformed.match(/<\/svg/g)).toHaveLength(1);
    expect(transformed.match(/<defs/g)).toHaveLength(1);
    expect(transformed.match(/<\/defs/g)).toHaveLength(1);
    expect(transformed).toMatchSnapshot();
  });

  test('create functional component', async () => {
    const transformed = await transform('<svg data-test="svg-test" />', {
      type: 'functional',
    });

    expect(transformed).toMatchSnapshot();
  });

  test('create class component', async () => {
    const transformed = await transform('<svg data-test="svg-test" />', {
      type: 'class',
    });

    expect(transformed).toMatchSnapshot();
  });

  test('convert "background: none" elements', async () => {
    const transformed = await transform(
      `<svg width="200px" height="200px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-reload" style="background: none;">
        <g transform="rotate(119.952 50 50)">
          <path d="M50 15A35 35 0 1 0 74.787 25.213" fill="none" stroke="#eca611" stroke-width="12"></path>
          <path d="M49 3L49 27L61 15L49 3" fill="#eca611"></path>
          <animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;360 50 50" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform>
        </g>
      </svg>`,
    );

    expect(transformed.match(/background:\s*"none"\s/g)).toHaveLength(1);
    expect(transformed).toMatchSnapshot();
  });

  test('convert text elements', async () => {
    const transformed = await transform(
      `<svg width="200px" height="200px" viewBox="0 0 100 100">
        <text>svg2jsx</text>
      </svg>`,
    );

    expect(transformed.match(/<text>svg2jsx<\/text>/g)).toHaveLength(1);
    expect(transformed).toMatchSnapshot();
  });

  test('keep dimensions attributes', async () => {
    const transformed = await transform(
      `<svg width="125px" height="125px" viewBox="0 0 125 125">
        <path d="M49 3L49 27L61 15L49 3" fill="#ff0000"></path>
      </svg>`,
    );

    expect(transformed.match(/width="125"/g)).toHaveLength(1);
    expect(transformed.match(/height="125"/g)).toHaveLength(1);
    expect(transformed).toMatchSnapshot();
  });

  test('keep ID attribute', async () => {
    const transformed = await transform('<svg id="svg-test" />', {
      cleanupIDs: false,
    });

    expect(transformed.match(/id="svg-test"/g)).toHaveLength(1);
    expect(transformed).toMatchSnapshot();
  });
});
