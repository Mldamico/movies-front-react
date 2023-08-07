import { SyntheticEvent, useState } from "react";
import Button from "../../ui/Button";

import { useLogin } from "./useLogin";
import Input from "../../ui/Form/Input";
import Form from "../../ui/Form/Form";
import SpinnerMini from "../../ui/SpinnerMini";
import FormRowVertical from "../../ui/Form/FormRowVertical";

function LoginForm() {
  const { login, isLoading } = useLogin();
  const [email, setEmail] = useState("probando@gmail.com");
  const [password, setPassword] = useState("Pa$$w0rd");

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    if (!email || !password) return;
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoading}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
