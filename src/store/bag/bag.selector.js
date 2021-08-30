import { createSelector } from "reselect";

const selectBag = (state) => state.bag;

export const selecteBagItems = createSelector([selectBag], (bag) => bag.orderedItems);

export const selectBagItemsCount = createSelector([selecteBagItems], (orderedItems) =>
  orderedItems.reduce((accumulateQty, orderedItem) => accumulateQty + orderedItem.quantity, 0)
);

export const selectBagTotal = createSelector([selecteBagItems], (orderedItems) =>
  orderedItems
    .reduce((accumulateQty, orderedItem) => accumulateQty + orderedItem.quantity * orderedItem.price, 0)
    .toFixed(2)
);
