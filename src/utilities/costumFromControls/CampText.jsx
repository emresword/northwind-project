import { useField } from 'formik';
import React from 'react';
import { FormField, Input, Label } from 'semantic-ui-react';

export default function CampText({...props}) {
    const [field, meta] = useField(props);
    return (
        <FormField error={meta.touched && !!meta.error}>
            <Input {...field} {...props} />
            {meta.touched && !!meta.error ? (
                <Label pointing basic color="red" content={meta.error} />
            ) : null}
        </FormField>
        
    );
}
