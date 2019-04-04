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
      componentType: 'functional',
    });

    expect(transformed).toMatchSnapshot();
  });

  test.only('create class component', async () => {
    const transformed = await transform('<svg data-test="svg-test" />', {
      componentType: 'class',
    });

    expect(transformed).toMatchSnapshot();
  });
});
