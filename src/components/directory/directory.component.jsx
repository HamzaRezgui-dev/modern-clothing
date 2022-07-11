import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSelections } from "../../redux/directory/directory.selectors";

import { DirectoryContainer } from "./directoryCont";



const Directory = ({sections}) => (
    <DirectoryContainer>
        {
            sections.map( ({id,...OtherSections}) => (
            <MenuItem key={ id } {...OtherSections}/>
             ))
        }
    </DirectoryContainer>
)

const mapStateToProps =  createStructuredSelector({
sections: selectSelections
})


export default connect(mapStateToProps)(Directory)