import { render, screen } from "@testing-library/react";
import Connexion from "@/app/auth/page";

describe("Connexion", () => {
  it("affiche le titre de la page", () => {
    render(<Connexion />);
    expect(screen.getByRole("heading", { level: 1, name: "Connexion" })).toBeInTheDocument();
  });
});
