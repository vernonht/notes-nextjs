import Message from "./Message";
import Search from "./Search";
import useStore from "@/store/store";

export default function Sidebar() {
  const notes = useStore((state) => state.notes);
  const setCurrentNote = (id) => {
    useStore.setState({ currentNote: id});
  }
  return (
    <>
      <div className="p-4 bg-black sticky top-0">
        <Search />
      </div>
      {notes
        ? notes.map((i) => (
            <div key={i.id} onClick={() => setCurrentNote(i.id)}>
              <Message id={i.id} title={i.title} message={i.message} />
            </div>
          ))
        : ""}
    </>
  );
}
