import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Counter from "../Counter";

test("renders initial count", () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/)).toBeInTheDocument();
});

test("increments count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/increment/i)); 
  expect(screen.getByText(/Count: 1/)).toBeInTheDocument();
});

test("decrements count", () => {
  render(<Counter />);
  fireEvent.click(screen.getByText(/decrement/i)); 
  expect(screen.getByText(/Count: -1/)).toBeInTheDocument();
});
