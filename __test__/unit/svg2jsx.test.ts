import { describe, expect, test } from "@jest/globals";

import { svg2jsx } from "../../src/pages/api";

describe("svg2jsx tests", () => {
  test("clean attributes", () => {
    const jsx = svg2jsx('<svg id=" test " strok="blue" fill="   red" />', {});

    expect(jsx).toEqual(expect.not.stringMatching(/strok/));
    expect(jsx).toMatchSnapshot();
  });

  test("remove unnecessary nodes", () => {
    const jsx = svg2jsx("<svg><g><g></g></g></svg>", {});

    expect(jsx).toEqual(expect.stringMatching(/<svg><\/svg>/));
    expect(jsx).toMatchSnapshot();
  });

  test("convert attributes", () => {
    const jsx = svg2jsx('<svg class="test" data-name="svg" fill-rule="evenodd"/>', {});

    expect(jsx).toEqual(expect.stringMatching(/className=/));
    expect(jsx).toEqual(expect.not.stringMatching(/class=/));
    expect(jsx).toEqual(expect.stringMatching(/fillRule=/));
    expect(jsx).toEqual(expect.not.stringMatching(/fill-rule=/));
    expect(jsx).toEqual(expect.stringMatching(/data-name=/));
    expect(jsx).toEqual(expect.not.stringMatching(/dataName=/));
    expect(jsx).toMatchSnapshot();
  });

  test("convert inline styles to style objects", () => {
    const jsx = svg2jsx('<svg style="margin-left:20px;padding-top:20px;" />', {});

    expect(jsx).toEqual(expect.stringMatching(/marginLeft: "20px"/));
    expect(jsx).toEqual(expect.stringMatching(/paddingTop: "20px"/));
    expect(jsx).toMatchSnapshot();
  });

  test("quote string style values", () => {
    const jsx = svg2jsx(
      `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <path style="margin-left: auto;" d="M12,9.9c-1.1,0-2.1,0.9-2.1,2.1c0,1.1,0.9,2.1,2.1,2.1c1.1,0,2.1-0.9,2.1-2.1C14.1,10.9,13.1,9.9,12,9.9z" />
      </svg>`,
      {}
    );

    expect(jsx).toEqual(expect.stringMatching(/marginLeft: "auto"/));
    expect(jsx).toMatchSnapshot();
  });

  test("convert nested nodes", () => {
    const jsx = svg2jsx(
      `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45">
        <defs>
          <clipPath id="svg-test">
            <path style="margin-left: auto;" d="M43,24c1.1-1.5,2.3-3"/>
          </clipPath>
        </defs>
        <circle cx="110" cy="110" r="100" fill="#9c6" clip-path="url(#svg-test)" />
      </svg>`,
      {}
    );

    expect(jsx).toEqual(expect.not.stringMatching(/>\s*>/gm));
    expect(jsx).toEqual(expect.stringMatching(/<svg/g));
    expect(jsx).toEqual(expect.stringMatching(/<\/svg/g));
    expect(jsx).toEqual(expect.stringMatching(/<defs/g));
    expect(jsx).toEqual(expect.stringMatching(/<\/defs/g));
    expect(jsx).toMatchSnapshot();
  });

  test("convert text elements", () => {
    const jsx = svg2jsx(
      `<svg width="200px" height="200px" viewBox="0 0 100 100">
        <text>svg2jsx</text>
      </svg>`,
      {}
    );

    expect(jsx.match(/<text>svg2jsx<\/text>/g)).toHaveLength(1);
    expect(jsx).toMatchSnapshot();
  });

  test("keep dimensions attributes", () => {
    const jsx = svg2jsx(
      `<svg width="125px" height="125px" viewBox="0 0 125 125">
        <path d="M49 3L49 27L61 15L49 3" fill="#ff0000"></path>
      </svg>`,
      {}
    );

    expect(jsx.match(/width="125"/g)).toHaveLength(1);
    expect(jsx.match(/height="125"/g)).toHaveLength(1);
    expect(jsx).toMatchSnapshot();
  });

  test("keep attribute values", () => {
    const jsx = svg2jsx(
      `<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
        <circle id="svg-test" cx="5" cy="5" r="4" stroke="blue"/>
        <use href="#svg-test" x="20" fill="white" stroke="red"/>
      </svg>`,
      {}
    );

    expect(jsx.match(/id="svg-test"/g)).toHaveLength(1);
    expect(jsx.match(/href="#svg-test"/g)).toHaveLength(1);
    expect(jsx).toMatchSnapshot();
  });
});
