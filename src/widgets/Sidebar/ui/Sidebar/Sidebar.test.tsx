import { fireEvent, render, screen } from "@testing-library/react";
// import { componentRender } from "@/shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
  test("with only first param", () => {
    render(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    render(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
