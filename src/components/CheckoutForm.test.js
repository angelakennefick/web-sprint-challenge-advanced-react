import React from "react";
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event"

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, "Angela");

    const lastNameInput= screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, "Borgtron");

    const addressInput= screen.getByLabelText(/address:/i);
    userEvent.type(addressInput, "1234 S Nowhere St");

    const cityInput= screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "TestCity");

    const stateInput= screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "TestState");

    const zipInput= screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, "12345");

    const button = screen.getByRole("button");
    userEvent.click(button);

    const successDisplay = screen.getByTestId(/successMessage/i);
    expect(successDisplay).toBeInTheDocument();
});
