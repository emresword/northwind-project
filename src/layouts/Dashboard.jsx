import React from 'react'
import Categories from './Categories'
import ProductList from '../pages/ProductList'
import Navi from './Navi'
import { Grid, GridColumn, GridRow } from 'semantic-ui-react'
import { Route, Routes } from 'react-router-dom'
import ProductDetail from '../pages/ProductDetail'
import CartDetail from '../pages/CartDetail'
import { ToastContainer } from 'react-toastify'
import ProductAdd from '../pages/ProductAdd'
import CategoryAdd from '../pages/CategoryAdd'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>

         
            <Grid>
                <GridRow>
                    <GridColumn width={4}>
                        <Categories />
                    </GridColumn>
                    <GridColumn width={12}>
                        <Routes>
                            <Route exact path="/" Component={ProductList} />

                            <Route  path="/products" Component={ProductList} />
                            <Route  path="/products/:name" Component={ProductDetail} />
                            <Route exact path="/cart" Component={CartDetail} />
                            <Route exact path="/category/add" Component={CategoryAdd} /> 
                            <Route exact path="/product/add" Component={ProductAdd} />    
                        </Routes>



                    </GridColumn>
                </GridRow>

            </Grid>




        </div>
    )
}
