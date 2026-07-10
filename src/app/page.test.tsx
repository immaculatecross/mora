import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Home from "./page";

describe("Home", () => {
  it("identifies Mora and its purpose accessibly", () => {
    render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "Mora" })).toBeInTheDocument();
    expect(screen.getByText(/language feedback from your natural speech/i)).toBeVisible();
  });
});
