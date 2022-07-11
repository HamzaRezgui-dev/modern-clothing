import React from "react";
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import { connect } from "react-redux/es/exports";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import { CarticonContainer, ShoppingIconContainer, ItemCountSpan} from "./carticonCont";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <CarticonContainer onClick={ toggleCartHidden }>
        <ShoppingIconContainer>
            <ShoppingIcon/>
        </ShoppingIconContainer>
        <ItemCountSpan>{ itemCount }</ItemCountSpan>
    </CarticonContainer>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)