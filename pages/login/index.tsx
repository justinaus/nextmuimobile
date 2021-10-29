import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useFormik } from 'formik';
import Head from 'next/head';
import React from 'react';
import * as Yup from 'yup';

interface ILoginForm {
  id: string;
  password: string;
}

const schema = Yup.object().shape({
  id: Yup.string().required('필수 값 입니다.'),
  password: Yup.string()
    .required('필수 값 입니다.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
});

export default function Login() {
  const formik = useFormik<ILoginForm>({
    initialValues: {
      id: '',
      password: '',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      alert(`Login!: ${values.id}`);
    },
  });

  const { values, errors, touched, handleChange, handleSubmit } = formik;

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login" />
      </Head>
      <Box padding={2} component="form">
        <Typography variant="h6" marginBottom={2}>
          Login
        </Typography>
        <TextField
          required
          fullWidth
          label="ID"
          variant="outlined"
          inputProps={{ maxLength: 10 }}
          name="id"
          value={values.id}
          onChange={handleChange}
          error={!!errors.id && touched.id}
          helperText={touched.id && errors.id}
          sx={{
            marginBottom: 2,
          }}
        />
        <TextField
          required
          fullWidth
          type="password"
          label="Password"
          variant="outlined"
          inputProps={{ maxLength: 10 }}
          name="password"
          value={values.password}
          onChange={handleChange}
          error={!!errors.password && touched.password}
          helperText={touched.password && errors.password}
          autoComplete="current-password"
          sx={{
            marginBottom: 2,
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          size="large"
          onClick={() => handleSubmit()}
        >
          LOGIN
        </Button>
      </Box>
    </>
  );
}
