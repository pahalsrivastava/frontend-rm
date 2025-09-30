import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import MyButton from "../MyButton";

test("renders button with correct label", () =>{
    render(<MyButton label="Click Me"/>);
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
});
test("calls onClick when clicked", ()=>{
    const handleClick = jest.fn();
    render(<MyButton label="Click me" onClick={handleClick}/>);
    fireEvent.click(screen.getByText(/Click Me/i));
    expect(handleClick).toHaveBeenCalledTimes(1);
});
