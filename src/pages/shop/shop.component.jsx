import React from "react";

import { Route, Switch } from "react-router";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component"
import CollectionPage from "../collection/Collection.component";

const ShopPage = ( { match } ) => {
    console.log(match);
    return (
    <div className="shop-page">
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
        </Switch>
    </div>    
)
}

export default ShopPage