import { createSelector } from "reselect";

const selectDir = state => state.directory

export const selectSelections = createSelector(
    [selectDir],
    (directory)=> directory.sections
)