import { act, fireEvent, render, screen } from "@testing-library/react";
import Form from "@components/WaitingListForm";
import validation from "@consts/validation";

describe("Form render", () => {
  it("render input component", () => {
    const { getByLabelText } = render(<Form />);
    expect(getByLabelText("Email Address")).toBeInTheDocument();
  });

  it("renders a submit button", () => {
    const { getByText } = render(<Form />);
    expect(getByText("Sign Up")).toBeInTheDocument();
  });
});

describe("Form behaviour", () => {
  it("validates required fields", async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Form />);

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(getByText(validation.emailAddress.required)).toBeInTheDocument();
    expect(getByText(validation.mobileNumber.required)).toBeInTheDocument();
  });

  it("validates invalid email address", async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Form />);

    await act(async () => {
      fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: "thisisnotanemailaddress" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(getByText(validation.emailAddress.valid)).toBeInTheDocument();
  });

  it("validates invalid mobile number", async () => {
    const { getByTestId, getByText, getByLabelText } = render(<Form />);

    await act(async () => {
      fireEvent.change(getByLabelText(/Mobile Number/i), {
        target: { value: "thisisnotaphonenumber" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(getByText(validation.mobileNumber.valid)).toBeInTheDocument();
  });

  it("should catch api errors and display them", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 400,
        json: () =>
          Promise.resolve({
            status: "error",
            message: "You have already been added to the waiting list",
          }),
      })
    );

    const { getByTestId, queryByText, getByLabelText } = render(<Form />);

    await act(async () => {
      fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: "alreadysubscribed@gmail.com" },
      });

      fireEvent.change(getByLabelText(/Mobile Number/i), {
        target: { value: "07123456789" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(
      queryByText("You have already been added to the waiting list")
    ).toBeInTheDocument();
  });

  it("should message on successful sign up", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        status: 200,
        json: () =>
          Promise.resolve({
            status: "success",
          }),
      })
    );

    const { getByTestId, queryByText, getByLabelText } = render(<Form />);

    await act(async () => {
      fireEvent.change(getByLabelText(/Email Address/i), {
        target: { value: "jamieburnip@gmail.com" },
      });

      fireEvent.change(getByLabelText(/Mobile Number/i), {
        target: { value: "07123456789" },
      });
    });

    await act(async () => {
      fireEvent.submit(getByTestId("form"));
    });

    expect(
      queryByText("You have already been added to the waiting list")
    ).not.toBeInTheDocument();

    expect(
      queryByText("You have been added to the waiting list!")
    ).toBeInTheDocument();
  });
});
