
import useStore from "@/store/store";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

export default function MessageScreen() {
  const [value, setValue] = useState(null);
  const currentNote = useStore((state) => state.currentNote);
  const getCurrentNote = useStore((state) => state.getCurrentNote);

  const updateNote = useStore((state) => state.updateNotes);
  const handleUpdateNote = () => {
    updateNote(currentNote, {message: value});
  }
  useEffect(() => {
    const note = getCurrentNote(currentNote);
    setValue(note?.message);
  }, [currentNote]);
  return (
    <>
      <ReactQuill theme="snow" value={value} onChange={setValue} />
      <button
        className="bg-gray-700 absolute bottom-4 right-4 h-10 px-8 rounded"
        onClick={handleUpdateNote}
      >
        Save
      </button>
    </>
  );
}