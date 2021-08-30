export const placeItemInBag = (orderedItems, itemToAdd) => {
  const existingItemsInBag = orderedItems.find((orderedItem) => orderedItem.name === itemToAdd.name);

  if (existingItemsInBag) {
    return orderedItems.map((orderedItem) =>
      orderedItem.name === itemToAdd.name ? { ...orderedItem, quantity: orderedItem.quantity + 1 } : orderedItem
    );
  }

  return [...orderedItems, { ...itemToAdd, quantity: 1 }];
};
