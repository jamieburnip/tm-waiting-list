import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { waitingList } from "@consts/endpoints";
import {
  InputGroup,
  Label,
  InputError,
  Input,
  Button,
} from "@components/Elements";
import LoadingDots from "@components/LoadingDots";
import validation from "@consts/validation";

const SuccessMessage = styled.p`
  font-size: 2rem;
  text-decoration: underline;
`;

// Very simple mobile number regex for basic validation.
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Use yup to handle validation schema.
// These validations rules means the server should only return an error on duplicate emails.
const schema = yup.object().shape({
  emailAddress: yup
    .string()
    .required(validation.emailAddress.required)
    .email(validation.emailAddress.valid),
  mobileNumber: yup
    .string()
    .required(validation.mobileNumber.required)
    .matches(phoneRegExp, { message: validation.mobileNumber.valid }),
});

export default function WaitingListForm() {
  // Use state to determin a successfull form submission as useForm doesn't handle it way we want.
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const { register, formState, handleSubmit } = useForm({
    mode: "onChange", // Reset validation on change.
    shouldFocusError: true,
    defaultValues: {
      emailAddress: "",
      mobileNumber: "",
    },
    resolver: yupResolver(schema),
  });
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data) => {
    const { emailAddress, mobileNumber } = data;

    const res = await fetch(waitingList, {
      body: JSON.stringify({
        emailAddress,
        mobileNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 200) {
      setSuccess(true);
    } else {
      const { message } = await res.json();
      setErrorMsg(message); // Grab the error message from the request.
    }
  };

  // Remove the form if the success message is to be showed.
  if (success) {
    return (
      <SuccessMessage>You have been added to the waiting list!</SuccessMessage>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} data-testid="form">
      {errorMsg && <InputError role="alert">{errorMsg}</InputError>}
      <InputGroup>
        <Label htmlFor="emailAddress">Email Address</Label>
        {/* Error message before input for screen readers. */}
        {errors.emailAddress && (
          <InputError role="alert">{errors.emailAddress?.message}</InputError>
        )}
        <Input
          id="emailAddress"
          name="emailAddress"
          type="email"
          aria-invalid={errors.emailAddress ? "true" : "false"}
          {...register("emailAddress")}
        />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="mobileNumber">Mobile Number</Label>
        {/* Error message before input for screen readers. */}
        {errors.mobileNumber && (
          <InputError role="alert">{errors.mobileNumber?.message}</InputError>
        )}
        <Input
          id="mobileNumber"
          name="mobileNumber"
          type="tel"
          aria-invalid={errors.mobileNumber ? "true" : "false"}
          {...register("mobileNumber")}
        />
      </InputGroup>
      <div>
        {/* Show loading dots in place of text so the user knows something is happeneding. */}
        {/* Also disable the button if the form is submitting. */}
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? <LoadingDots /> : "Sign Up"}
        </Button>
      </div>
    </form>
  );
}
