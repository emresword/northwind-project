import React,{useState} from 'react'
import CartSummary from './CartSummary'
import { NavLink } from 'react-router-dom'
import {
    MenuMenu,
    MenuItem,
    Button,
    Menu,
    Container,
} from 'semantic-ui-react'
import SignedOut from './SignedOut'
import SignedIn from './SignedIn'
import { useNavigate} from "react-router";
import { useSelector } from 'react-redux'
export default function Navi() {
    const {cartItems} =useSelector(state=>state.cart)

    const [isAuthenticated, setIsAuthenticated] = useState(true)

    const navigate=useNavigate()

    function handleSignOut(params) {
        setIsAuthenticated(false)
        navigate("/")
    }
    function handleSignIn(params) {
        setIsAuthenticated(true)
    }

    return (
        <div>
            <Menu inverted fixed="top">
                <Container>
                    <MenuItem as={NavLink} to ="/products"
                        name='products'

                    />
                    <MenuItem as={NavLink} to ="/product/add"
                        name='product add'

                    />

                    <MenuMenu position='right'>
                      {cartItems.length>0&&<CartSummary/>}
                      {isAuthenticated? <SignedIn signOut={handleSignOut}/>:  <SignedOut signIn={handleSignIn}/>}

                     
                    </MenuMenu>
                </Container>

            </Menu>

        </div>
    )
}
