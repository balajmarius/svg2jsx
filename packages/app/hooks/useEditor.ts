import useSetState from './useSetState';
import getFileText from '../utils/getFileText';

interface IEditor {
  svg?: string;
  copy?: string;
}

export default function useEditor() {
  const [editor, setEditor] = useSetState<IEditor>({
    svg: undefined,
    copy: "copy"
  });

  function setSvg(svg: string): void {
    setEditor({
      svg,
    });
  }

  function setCopy(): void {
    setEditor({
      copy: "copied",
    });

    setTimeout(()=>{
      setEditor({
        copy: "copy",
      });
    }, 1500)
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
    setCopy,
    setFile,
  };
}
