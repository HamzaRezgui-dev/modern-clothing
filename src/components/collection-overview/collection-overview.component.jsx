import React from 'react'
import { connect } from 'react-redux/es/exports'
import { createStructuredSelector } from "reselect";
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from '../preview-collection/preview-collection.component';
import './collection-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
        <div className='collection-overview'>
            {
                collections.map(({id,...otherSelectionProps}) =>
                <PreviewCollection key={id} {...otherSelectionProps}/>)
            }
        </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})


export default connect(mapStateToProps)(CollectionsOverview)