import { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import * as Yup from "yup";
import {
  ContactFormValues,
  ContactInterface,
} from "../interfaces/contactInterface";

const initialValues: ContactFormValues = {
  firstName: "",
  email: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Le prénom est requis"),
  email: Yup.string().email("L'email est invalide"),
});

const ContactList = (): JSX.Element => {
  const [submittedContacts, setSubmittedContacts] = useState<
    ContactInterface[]
  >([]);

  const handleSubmit = (
    values: ContactFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ContactFormValues>
  ) => {
    setSubmitting(true);
    // Créer un nouveau contact à partir des valeurs du formulaire
    const newContact: ContactInterface = {
      firstName: values.firstName,
      email: values.email,
    };

    // Ajouter le nouveau contact au tableau des contacts
    setSubmittedContacts((prevState) => [...prevState, newContact]);

    // Réinitialiser le formulaire
    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="w-96 h-[560px] bg-white rounded-2xl text-3xl text-blue-900 p-6 shadow-gray-900 shadow-lg flex items-center flex-col">
      <h1 className={"p-6"}>ContactList</h1>
      <div>{/*<Contact />*/}</div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <label htmlFor="firstName">Prénom</label>
            <Field type="text" name="firstName" />
            <ErrorMessage name="firstName" />

            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" />

            <button type="submit" disabled={isSubmitting}>
              Ajouter le contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default ContactList;
