import { create } from "zustand";

const useStore = create((set, get) => ({
  notes: [],
  currentNote: null,
  setCurrentNote: () => set((state, value) => ({ currentNote: value })),
  getCurrentNote(id) {
    const { notes, currentNote } = get();
    return notes.find((note) => note.id === id);
  },
  fetchNotes: async () => {
    await fetch("/api/notes")
      .then((response) => response.json())
      .then((data) => {
        set({ notes: data });
      });
  },
  updateNotes: async (id, data) => {
    const { fetchNotes } = get();
    await fetch(`/api/notes/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchNotes()
      });
  },
}));

export default useStore;
