import { atom, useAtomValue, useSetAtom } from "jotai";
import { v4 as uid } from "uuid";
import { useInterval } from "usehooks-ts";
import { useAtomsDebugValue,useAtomDevtools } from 'jotai-devtools'

interface Item {
  id: string;
  title: string;
  year: number;
  watched: boolean;
}

const itemsAtom = atom<Item[]>([]);
itemsAtom.debugLabel = "itemsAtom";

const progressAtom = atom(0);
progressAtom.debugLabel = "progressAtom";

const ItemList = () => {
  const items = useAtomValue(itemsAtom);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

const AddItem = () => {
  const setItem = useSetAtom(itemsAtom);

  return (
    <button
      onClick={() => {
        setItem((item) => [
          ...item,
          {
            id: uid(),
            title: "TITLE abc",
            year: 1998,
            watched: false,
          },
        ]);
      }}
    >
      Add Item
    </button>
  );
};

const ProgressTracker = () => {
  const progress = useAtomValue(progressAtom);

  return <div>{Math.trunc(progress * 100)}% watched</div>;
};

const ControlProgress = () => {
  const setProgress = useSetAtom(progressAtom);
  useInterval(() => setProgress((p) => p + 1), 1000);

  return <></>;
};



const DebugAtoms = () => {
  useAtomsDebugValue()
  return null
}

const JotaiDemo = () => {
  return (
    <>
      <DebugAtoms />
      <ItemList />
      <AddItem />
      <ProgressTracker />
      <ControlProgress />
    </>
  );
};
export default JotaiDemo;
