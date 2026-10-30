import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("affiche le titre", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1, name: "POPolitics" })).toBeInTheDocument();
  });

  it("présente les institutions couvertes", () => {
    render(<Home />);
    expect(screen.getByText(/Assemblée nationale, du Sénat et du Parlement/)).toBeInTheDocument();
  });
});
