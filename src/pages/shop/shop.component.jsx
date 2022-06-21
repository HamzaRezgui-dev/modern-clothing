import React from "react";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component"

const ShopPage = ({collections}) => (
    <div className="shop-page">
          <CollectionsOverview/>
    </div>    
)


export default ShopPage