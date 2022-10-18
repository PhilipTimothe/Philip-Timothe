import React from "react";
import LandingView from ".";
import { render, screen } from "@testing-library/react";

describe("landingView", () => {
  it("should render image", () => {
    render(<LandingView />);
    const signatureLogo = screen.getByAltText("Philip Timothe Logo Signature");
    expect(signatureLogo).toBeInTheDocument();
  });

  it("should render name title", () => {
    render(<LandingView />);
    const title = screen.getByText("PHILIP TIMOTHE");
    expect(title).toBeInTheDocument();
  });

  it("should render work title", () => {
    render(<LandingView />);
    const title = screen.getByText("Software Engineer");
    expect(title).toBeInTheDocument();
  });
});
