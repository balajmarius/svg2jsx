interface ResponseType {
  jsx: string;
}

export interface ConfigType {
  jsxSingleQuote: boolean;
  type: 'functional' | 'class';
}

interface PayloadType {
  svg: string;
  config: ConfigType;
}

export default async function post(
  url: string,
  data: PayloadType,
): Promise<ResponseType> {
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json());
}
