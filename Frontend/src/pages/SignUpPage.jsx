import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormHelperText from "@mui/material/FormHelperText";
import { Form } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function SignUpPage() {
  const { createUser } = useContext(UserContext);
  const formControlStyle = { padding: "25px" };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    createUser({
      email: data.get("email"),
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      password: data.get("password"),
    });
  };

  return (
    <>
      <NavBar />
      <Box
        component="form"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
          gap: "1rem",
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Stack
          sx={{
            backgroundColor: "white",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            padding: "25px 50px",
          }}
        >
          <Typography
            sx={{ textAlign: "left", fontSize: "xx-large", fontWeight: 700 }}
          >
            Register
          </Typography>
          <FormControl sx={formControlStyle}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="user-email" name="email" />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <InputLabel htmlFor="firstname-input">First Name</InputLabel>
            <Input id="firstname-input" name="firstName" />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <InputLabel htmlFor="surname-input">Surname</InputLabel>
            <Input id="surname-input" name="lastName" />
          </FormControl>
          <FormControl sx={formControlStyle}>
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input id="password-input" name="password" type="password" />
          </FormControl>
          <Button type="submit" variant="contained">
            Create Account
          </Button>
        </Stack>
      </Box>
    </>
  );
}
