import React from "react";

import { Route, Switch } from "react-router";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component"
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CollectionPage from "../collection/Collection.component";
import { UpdateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
    unSubscribeFromAuth = null
    componentDidMount(){
        const {updateCollections} = this.props 
       const collectionRef = firestore.collection("collections")

       collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
        })
    }
   render(){
    const {match} = this.props
       return (<div className="shop-page">
       <Switch>
           <Route exact path={`${match.path}`} component={CollectionsOverview}/>
           <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
       </Switch>
   </div>    
       )
   }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)