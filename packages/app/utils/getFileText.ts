import pretty from 'pretty';

export default function getFileText(file: File): Promise<string | ArrayBuffer | DOMException> {
  const fileReader = new FileReader();

  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      resolve(pretty(fileReader.result));
    };
    fileReader.onerror = () => {
      reject(new DOMException('Problem parsing file'));
    };
    fileReader.readAsText(file);
  });
}
