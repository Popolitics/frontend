import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";

describe("Header", () => {
  it("affiche un lien vers l'accueil", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /POPolitics/ })).toHaveAttribute("href", "/");
  });

  it("affiche les liens de navigation", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: "Assemblée nationale" })).toHaveAttribute("href", "/assemblee-nationale");
    expect(screen.getByRole("link", { name: "Sénat" })).toHaveAttribute("href", "/senat");
    expect(screen.getByRole("link", { name: "Parlement européen" })).toHaveAttribute("href", "/parlement-europeen");
    expect(screen.getByRole("link", { name: "Connexion" })).toHaveAttribute("href", "/connexion");
  });
});
