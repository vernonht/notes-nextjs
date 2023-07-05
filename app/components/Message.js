import Image from "next/image";
import useStore from "@/store/store";
import parse from "html-react-parser";

export default function Message({ id, title, message }) {
  const currentNote = useStore((state) => state.currentNote);
  const isCurrentNote = currentNote === id;
  return (
    <div
      className={`
        ${
          isCurrentNote ? "bg-slate-600" : ""
        } flex items-center space-x-4 px-4 py-2 border-y border-gray-600 hover:bg-slate-600 hover:cursor-pointer transition-all
      `}
    >
      <div className="flex-none rounded-full h-14 w-14 overflow-hidden">
        <Image
          src="https://picsum.photos/56/56"
          width={56}
          height={56}
          alt="Picture of the author"
        />
      </div>
      <div className="grid">
        <div>{title}</div>
        <div className="text-sm text-gray-500 line-clamp-1">{parse(message)}</div>
      </div>
    </div>
  );
}
