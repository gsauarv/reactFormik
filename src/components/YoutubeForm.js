import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
  color: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email format").required("Required"),
  channel: Yup.string().required("Required"),
});

function YoutubeForm() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name"></Field>
        <ErrorMessage name="name" />

        <br></br>

        <label htmlFor="email">Email</label>
        <Field type="email" id="email" name="email"></Field>
        <ErrorMessage name="email" />
        <br></br>

        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel"></Field>
        <ErrorMessage name="channel" />
        <br></br>

        <Field name="color" as="select">
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </Field>
        <ErrorMessage name="color" />

        <br></br>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}

export default YoutubeForm;
