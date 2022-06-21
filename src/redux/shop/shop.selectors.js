import { createSelector } from "reselect";

const selectCol = state => state.shop

export const selectCollections = createSelector(
    [selectCol],
    (shop)=> shop.collections
)