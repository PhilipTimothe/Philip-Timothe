import React from "react";
import LandingView from ".";
import { render, screen } from "@testing-library/react";

describe("landingView", () => {
  it("should render image", () => {
    render(<LandingView />);
    const signatureLogo = screen.getByAltText("Philip Timothe Logo Signature");
    expect(signatureLogo).toBeInTheDocument();
  });
});
