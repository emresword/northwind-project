import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    CardMeta,
    CardHeader,
    CardGroup,
    CardDescription,
    CardContent,
    Button,
    Card,
    Image,
} from 'semantic-ui-react';
import ProductService from '../services/productService'; // Changed the import name to avoid conflict

export default function ProductDetail() {
    let { name } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productServiceInstance = new ProductService(); // Changed the variable name
        productServiceInstance.getByProductName(name).then(result => setProduct(result.data.data));
    }, [name]); // Added 'name' to the dependency array to ensure it re-runs when 'name' changes

    return (
        <div>
            <Card.Group>
                <Card fluid size="large">
                    <CardContent>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                        />
                        <CardHeader>{product.productName}</CardHeader>
                        <CardMeta>{product.category ? product.category.categoryName : ''}</CardMeta>
                        <CardDescription>
                            Steve wants to add you to the group <strong>best friends</strong>
                        </CardDescription>
                    </CardContent>
                    <CardContent extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Approve
                            </Button>
                            <Button basic color='red'>
                                Decline
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </Card.Group>
        </div>
    );
}
