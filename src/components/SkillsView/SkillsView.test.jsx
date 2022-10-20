import React from "react";
import SkillsView from ".";
import SkillsCard from ".";
import { render, screen } from "@testing-library/react";

describe("SkillsView", () => {
  it("should render section title", () => {
    render(<SkillsView />);
    const skillsViewTitle = screen.getByText("MY TECHNICAL PROFICIENCIES");
    expect(skillsViewTitle).toBeInTheDocument();
  });

  it("should render name image", () => {
    render(<SkillsCard />);
    const title = screen.getByAltText("javascriptImage");
    expect(title).toBeInTheDocument();
  });

  //   it("should render work title", () => {
  //     render(<SkillsCard />);
  //     const title = screen.getById("");
  //     expect(title).toBeInTheDocument();
  //   });
});
