import React, { useEffect, useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button, Dropdown } from 'semantic-ui-react';
import CampText from '../utilities/costumFromControls/CampText';
import CategoryService from '../services/categoryService';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addProductThunk } from '../store/thunks/productThunk'; // Import the thunk

export default function ProductAdd() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch(); // Initialize useDispatch

    useEffect(() => {
        let categoryService = new CategoryService();
        categoryService.getCategories().then(result => setCategories(result.data.data));
    }, []);

    const initialValues = {
        productName: "",
        unitPrice: "",
        unitInStock: "",
        quantityPerUnit: "",
        category: ""  // Category field to hold the selected category ID
    };

    const schema = Yup.object({
        productName: Yup.string().required("Name cannot be null"),
        unitPrice: Yup.number().required("Unit price cannot be blank"),
        unitInStock: Yup.number().required("Unit in stock cannot be blank"),
        quantityPerUnit: Yup.string().required("Quantity cannot be null"),
        category: Yup.number().required("Category must be selected")
    });

    const handleSubmit = (values) => {
        dispatch(addProductThunk(values)); // Dispatch the thunk action instead
    };

    const categoryOptions = categories.map(category => ({
        key: category.id,
        text: category.categoryName,
        value: category.id,
    }));

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit, setFieldValue }) => (
                    <Form className="ui form" onSubmit={handleSubmit}>
                        <CampText name="productName" placeholder="Product Name" />
                        <CampText name="unitPrice" placeholder="Unit Price" />
                        <CampText name="unitInStock" placeholder="Unit in Stock" />
                        <CampText name="quantityPerUnit" placeholder="Quantity per Unit" />

                        <Dropdown
                            placeholder="Select Category"
                            fluid
                            selection
                            options={categoryOptions}
                            onChange={(event, data) => setFieldValue("category", data.value)}
                        />

                        <Button color="green" type="submit">
                            Add
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
