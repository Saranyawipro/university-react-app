import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NotFound } from "../pages/NotFound";

describe("NotFound", () => {
  test("renders", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
    expect(screen.getByText("Page Not Found")).toBeDefined();
  });
});
