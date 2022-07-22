import React from "react";

import { Route, Switch } from "react-router";
import CollectionsOverview from "../../components/collection-overview/collection-overview.component"
import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import CollectionPage from "../collection/Collection.component";
import { UpdateCollections } from "../../redux/shop/shop.actions";
import withSpinner from "../../components/withSpinner/withSpinner";


const CollectionsOverviewWithSpinner = withSpinner(CollectionsOverview)
const CollectionPageWithSpinner = withSpinner(CollectionPage)
class ShopPage extends React.Component {
    state = {
        loading: true
    }
    unSubscribeFromAuth = null
    componentDidMount(){
        const {updateCollections} = this.props 
       const collectionRef = firestore.collection("collections")

       collectionRef.onSnapshot( async snapshot => {
            const collectionsMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({
                loading:false
            })
        })
    }
   render(){
    const {match} = this.props
    const {loading} = this.state
       return (<div className="shop-page">
       <Switch>
           <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
           <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
       </Switch>
   </div>    
       )
   }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(UpdateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)