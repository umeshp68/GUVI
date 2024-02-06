import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const App = () => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);

  const handleAddBook = values => {
    setBooks([...books, values]);
  };

  const handleEditBook = (values, index) => {
    const updatedBooks = [...books];
    updatedBooks[index] = values;
    setBooks(updatedBooks);
  };

  const handleDeleteBook = index => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  const handleAddAuthor = values => {
    setAuthors([...authors, values]);
  };

  const handleEditAuthor = (values, index) => {
    const updatedAuthors = [...authors];
    updatedAuthors[index] = values;
    setAuthors(updatedAuthors);
  };

  const handleDeleteAuthor = index => {
    const updatedAuthors = authors.filter((_, i) => i !== index);
    setAuthors(updatedAuthors);
  };

  return (
    <div>
      <h1>Library Management System</h1>

      <h2>Add Book</h2>
      <Formik
        initialValues={{ title: '', author: '', isbn: '', publicationDate: '' }}
        validate={values => {
          const errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          if (!values.author) {
            errors.author = 'Required';
          }
          if (!values.isbn) {
            errors.isbn = 'Required';
          }
          if (!values.publicationDate) {
            errors.publicationDate = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          handleAddBook(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="title" placeholder="Title" />
            <ErrorMessage name="title" component="div" />

            <Field type="text" name="author" placeholder="Author" />
            <ErrorMessage name="author" component="div" />

            <Field type="text" name="isbn" placeholder="ISBN" />
            <ErrorMessage name="isbn" component="div" />

            <Field type="text" name="publicationDate" placeholder="Publication Date" />
            <ErrorMessage name="publicationDate" component="div" />

            <button type="submit" disabled={isSubmitting}>Add Book</button>
          </Form>
        )}
      </Formik>

      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            {book.title} - {book.author} - {book.isbn} - {book.publicationDate}
            <button onClick={() => handleEditBook(book, index)}>Edit</button>
            <button onClick={() => handleDeleteBook(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add Author</h2>
      <Formik
        initialValues={{ name: '', birthDate: '', biography: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.birthDate) {
            errors.birthDate = 'Required';
          }
          if (!values.biography) {
            errors.biography = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          handleAddAuthor(values);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="name" placeholder="Name" />
            <ErrorMessage name="name" component="div" />

            <Field type="text" name="birthDate" placeholder="Birth Date" />
            <ErrorMessage name="birthDate" component="div" />

            <Field type="text" name="biography" placeholder="Biography" />
            <ErrorMessage name="biography" component="div" />

            <button type="submit" disabled={isSubmitting}>Add Author</button>
          </Form>
        )}
      </Formik>

      <h2>Authors</h2>
      <ul>
        {authors.map((author, index) => (
          <li key={index}>
            {author.name} - {author.birthDate} - {author.biography}
            <button onClick={() => handleEditAuthor(author, index)}>Edit</button>
            <button onClick={() => handleDeleteAuthor(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
