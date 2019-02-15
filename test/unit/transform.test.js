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
});
