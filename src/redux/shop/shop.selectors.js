import { createSelector } from "reselect";

const selectCol = state => state.shop

export const selectCollections = createSelector(
    [selectCol],
    (shop)=> shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
)

export const selectCollection = CollectionUrlParam => createSelector(
    [selectCollections],
    (collections) => collections[CollectionUrlParam]
)