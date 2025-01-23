import { useQuery } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { itemDataAtom } from "./data";
import { ContentItem } from "./ContentItem";
import { useSelector } from "react-redux";
import { RootState } from "./store";

export function ContentWrapper({ count }: { count: number }) {
  const { data } = useQuery({
    queryKey: ["itemData", count],
    queryFn: () =>
      fetch(`https://jsonplaceholder.typicode.com/posts/${count}`).then((res) =>
        res.json()
      ),
  });
  const itemData = useAtomValue(itemDataAtom);
  const reduxData = useSelector((state: RootState) => state.globalData.data);
  console.log("wat", data, itemData, reduxData);

  return (
    <div>
      <ul>
        <li>RQ: {JSON.stringify(data)}</li>
        <li>JA: {JSON.stringify(itemData)}</li>
        <li>RT: {JSON.stringify(reduxData)}</li>
        <li>
          CI: <ContentItem />{" "}
        </li>
      </ul>
    </div>
  );
}
