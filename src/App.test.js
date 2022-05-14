import { render, screen } from "@testing-library/react";
import App from "./App";
import Header from "./App";

import userEvent from "@testing-library/user-event";

test("Is book in list?", () => {
  render(<App />);
  let addButton = screen.getAllByText("Ekle");
  let input = screen.getAllByPlaceholderText("Kitap Adı");
  const bookName = "A Tale of Two Cities";
  userEvent.type(input, bookName);
  userEvent.click(addButton);
  expect(screen.getByText(bookName)).toBeInDocument();
});

test("Header is on it?", () => {
  render(<Header />);
  let header = screen.getByText("Ayraç");
  expect(header).toBeInDocument();
});
