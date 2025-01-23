import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { itemDataAtom } from "./data";
import { ContentItem } from "./ContentItem";

export function ContentWrapper({ count }: { count: number }) {
  const { data } = useQuery({
    queryKey: ["itemData", count],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${count}`).then((res) =>
        res.json()
      ),
  });
  const itemData = useAtomValue(itemDataAtom);
  console.log("wat", data, itemData);

  return (
    <div>
      <ul>
        <li>RQ: {JSON.stringify(data)}</li>
        <li>JA: {JSON.stringify(itemData)}</li>
        <li>
          CI: <ContentItem />{" "}
        </li>
      </ul>
    </div>
  );
}
