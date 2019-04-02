import { color } from './constants';

export function noop() {}

export function post(url, data) {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      data,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function readFile(file) {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = () => {
      reject(new DOMException('Problem parsing file.'));
    };
    fileReader.readAsText(file);
  });
}

export function stripedBackground(direction, backgroundColor, stripeColor = color.black) {
  return `
    linear-gradient(
      to ${direction},
      ${backgroundColor},
      ${backgroundColor} calc(50% - 1px),
      ${stripeColor} calc(50% - 1px),
      ${stripeColor} calc(50% + 1px),
      ${backgroundColor} calc(50% + 1px),
      ${backgroundColor}
    );
  `;
}
