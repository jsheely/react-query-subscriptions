import { useAtomValue } from "jotai";
import { itemDataAtom } from "./data";

export function ContentItem() {
  const data = useAtomValue(itemDataAtom);

  return <span>{JSON.stringify(data)}</span>;
}
