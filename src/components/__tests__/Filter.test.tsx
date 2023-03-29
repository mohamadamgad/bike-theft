import { render } from "@testing-library/react";
import Filter from "../Filter";

import "@testing-library/jest-dom";

describe("Filter component", () => {
  const onTitleFilterChangeMock = jest.fn();
  const onStartDateFilterChangeMock = jest.fn();
  const onEndDateFilterChangeMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render a title input", () => {
    const { getByPlaceholderText, getByText } = render(
      <Filter
        onTitleFilterChange={onTitleFilterChangeMock}
        onStartDateFilterChange={onStartDateFilterChangeMock}
        onEndDateFilterChange={onEndDateFilterChangeMock}
      />
    );
    const titleInput = getByPlaceholderText("Enter case title");

    expect(titleInput).toBeInTheDocument();
  });

  it("should call onStartDateFilterChange and onEndDateFilterChange when date range changes", () => {
    const onStartDateFilterChangeMock = jest.fn();
    const onEndDateFilterChangeMock = jest.fn();
    const { getByTestId } = render(
      <Filter
        onTitleFilterChange={() => {}}
        onStartDateFilterChange={onStartDateFilterChangeMock}
        onEndDateFilterChange={onEndDateFilterChangeMock}
      />
    );
    const rangePicker = getByTestId("range-picker");
    expect(rangePicker).toBeInTheDocument();
  });
});
