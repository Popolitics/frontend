import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("NotFound", () => {
  it("affiche le code 404", () => {
    render(<NotFound />);
    expect(screen.getByText("404")).toBeInTheDocument();
  });

  it("affiche le titre et le message d'erreur", () => {
    render(<NotFound />);
    expect(screen.getByRole("heading", { level: 1, name: "Page introuvable" })).toBeInTheDocument();
    expect(screen.getByText("Cette page n'existe pas ou a été déplacée.")).toBeInTheDocument();
  });

  it("propose un lien de retour vers l'accueil", () => {
    render(<NotFound />);
    expect(screen.getByRole("link", { name: "Retour à l'accueil" })).toHaveAttribute("href", "/");
  });
});
