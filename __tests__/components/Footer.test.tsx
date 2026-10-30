import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

it("affiche le copyright avec l'année courante", () => {
  render(<Footer />);
  expect(screen.getByText(`© ${new Date().getFullYear()} POPolitics`)).toBeInTheDocument();
});
