import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

const ShopPage = ({collections}) => (
    <div className="shop-page">
            {
                collections.map(({id,...otherSelectionProps}) =>
                <PreviewCollection key={id} {...otherSelectionProps}/>)
            }
    </div>    
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)