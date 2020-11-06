import ShopACtionType from "./shop.types";

export const updateCollection = (collectionsMap) => ({
  type: ShopACtionType.UPDATE_COLLECTION,
  payload: collectionsMap,
});
