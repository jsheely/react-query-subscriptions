import { getDefaultStore } from "jotai";
import { itemDataAtom } from "./data";
import { queryClient } from "./client";
import { store } from "./store";
import { update } from "./redux.state";
import { update as update2 } from "./secondary.state";
const jotaiStore = getDefaultStore();
const reduxStore = store;


queryClient.getQueryCache().subscribe((event) => {
    if (event.type === 'observerResultsUpdated' && typeof event.query.queryKey[0] === 'string') {
        if (event.query.queryKey[0].startsWith('itemData')) {
            jotaiStore.set(itemDataAtom, event.query.state.data);
            reduxStore.dispatch(update(event.query.state.data));
            reduxStore.dispatch(update2(event.query.state.data));
        }
    }
});
