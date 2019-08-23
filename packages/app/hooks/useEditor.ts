import useSetState from './useSetState';
import getFileText from '../utils/getFileText';

interface IEditor {
  svg?: string;
}

export default function useEditor() {
  const [editor, setEditor] = useSetState<IEditor>({
    svg: undefined,
  });

  function setSvg(svg: string): void {
    setEditor({
      svg,
    });
  }

  async function setFile([file]: File[]): Promise<void> {
    const fileText = await getFileText(file);

    setEditor({
      svg: fileText,
    });
  }

  return {
    editor,
    setSvg,
    setFile,
  };
}
