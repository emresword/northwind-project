import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Button } from 'semantic-ui-react';
import CampText from '../utilities/costumFromControls/CampText'; // Ensure this path is correct
import CategoryService from '../services/categoryService'; // Ensure this path is correct

export default function CategoryAdd() {
    const initialValues = {
        categoryName: "",
    };

    const schema = Yup.object({
        categoryName: Yup.string().required("Category name cannot be null"),
    });

    const handleSubmit = (values) => {
        let categoryService = new CategoryService();
        categoryService.addCategory(values)
            .then(response => {
                console.log('Category added successfully:', response.data);
            })
            .catch(error => {
                console.error('There was an error adding the category:', error);
            });
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {({ handleSubmit }) => (
                    <Form className="ui form" onSubmit={handleSubmit}>
                        <CampText name="categoryName" placeholder="Category Name" />
                        <Button color="green" type="submit">
                            Add Category
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
