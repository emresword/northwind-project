import React, { useEffect, useState } from 'react'
import {
    TableRow,
    TableHeaderCell,
    TableHeader,
    TableFooter,
    TableCell,
    TableBody,
    MenuItem,
    Icon,
    Menu,
    Table,
    Button,
} from 'semantic-ui-react'
import ProductService from '../services/productService'  // Correct import
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cartActions';
import { toast } from 'react-toastify';
export default function ProductList() {

    const dispatch = useDispatch()


    const [products, setProducts] = useState([])

    useEffect(() => {
        let productService = new ProductService();
        productService.getProducts().then(result => setProducts(result.data.data));
    }, []);// Add an empty dependency array to ensure useEffect runs only once

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
        toast.success(`${product.productName} added to cart`)


    }


    return (
        <div>
            <Table celled>
                <TableHeader>
                    <TableRow>
                        <TableHeaderCell>Product Name</TableHeaderCell>
                        <TableHeaderCell>Price</TableHeaderCell>
                        <TableHeaderCell>Unit in stock</TableHeaderCell>
                        <TableHeaderCell>Explanation</TableHeaderCell>
                        <TableHeaderCell>Category</TableHeaderCell>
                        <TableHeaderCell>    </TableHeaderCell>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {
                        // Ensure products is an array before calling map
                        Array.isArray(products) && products.map(product => (
                            <TableRow key={product.id}>
                                <TableCell><Link to={`/products/${product.productName}`}>{product.productName}</Link></TableCell>
                                <TableCell>{product.unitPrice}</TableCell>
                                <TableCell>{product.unitsInStock}</TableCell>
                                <TableCell>{product.quantityPerUnit}</TableCell>
                                <TableCell>{product.category.categoryName}</TableCell>
                                <TableCell>
                                    <Button onClick={()=>handleAddToCart(product)}> Add to cart
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>

                <TableFooter>
                    <TableRow>
                        <TableHeaderCell colSpan='5'>
                            <Menu floated='right' pagination>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron left' />
                                </MenuItem>
                                <MenuItem as='a'>1</MenuItem>
                                <MenuItem as='a'>2</MenuItem>
                                <MenuItem as='a'>3</MenuItem>
                                <MenuItem as='a'>4</MenuItem>
                                <MenuItem as='a' icon>
                                    <Icon name='chevron right' />
                                </MenuItem>
                            </Menu>
                        </TableHeaderCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </div>
    )
}
