import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectSelections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss"

const Directory = ({sections}) => (
    <div className="directory-menu">
        {
            sections.map( ({id,...OtherSections}) => (
            <MenuItem key={ id } {...OtherSections}/>
             ))
        }
    </div>
)

const mapStateToProps =  createStructuredSelector({
sections: selectSelections
})


export default connect(mapStateToProps)(Directory)