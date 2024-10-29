import pretty from "pretty";

export const readAndFormatFileContents = async (file: File) => {
  const reader = new FileReader();

  return new Promise<string>((resolve, reject) => {
    reader.onload = () => {
      resolve(pretty(reader.result as string));
    };
    reader.onabort = () => {
      reject(new DOMException("File reading was aborted."));
    };
    reader.onerror = () => {
      reject(new DOMException("Error reading file."));
    };
    reader.readAsText(file);
  });
};
