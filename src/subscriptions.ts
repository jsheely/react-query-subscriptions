import { getDefaultStore } from "jotai";
import { itemDataAtom } from "./data";
import { queryClient } from "./client";
export const store = getDefaultStore();

queryClient.getQueryCache().subscribe((event) => {
    if (event.type === 'observerResultsUpdated' && typeof event.query.queryKey[0] === 'string') {
        if (event.query.queryKey[0].startsWith('itemData')) {
            store.set(itemDataAtom, event.query.state.data);
        }
    }
});
