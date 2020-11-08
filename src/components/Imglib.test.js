import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders the neccessary text", () => {
	render(<App />);
	const linkElement = screen.getByText(/Hello World/g);
	expect(linkElement).toBeInTheDocument();
});
