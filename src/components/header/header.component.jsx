import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from "../../firebase/firebase.utils";

import { selectcurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {LogoContainer,OptionsContainer,OptionDiv,OptionLinkContainer,HeaderContainer } from "./headerCont";

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className="logo"/>
        </LogoContainer>
        <OptionsContainer>
            <OptionLinkContainer to="/shop">
                SHOP
            </OptionLinkContainer>
            <OptionLinkContainer to="/shop">
                CONTACT
            </OptionLinkContainer>
            {
                currentUser ?
                <OptionDiv onClick={()=> auth.signOut()}>SIGN OUT</OptionDiv>
                :
                <OptionLinkContainer to="/signin">SIGN IN</OptionLinkContainer>
            }
            <CartIcon/>
        </OptionsContainer>
        {   
            hidden ? null : <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectcurrentUser,
    hidden: selectCartHidden
})


export default connect(mapStateToProps)(Header)