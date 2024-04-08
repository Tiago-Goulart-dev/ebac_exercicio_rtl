import { fireEvent, render, screen } from "@testing-library/react";
import Post from ".";
import PostComment from ".";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });
  test("Adição de dois comentários", () => {
    render(<PostComment />);
    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Teste comentário 1",
      },
    });
    fireEvent.click(screen.getByTestId("comentario-button"));

    fireEvent.change(screen.getByTestId("comentario-textarea"), {
      target: {
        value: "Teste comentário 2",
      },
    });
    fireEvent.click(screen.getByTestId("comentario-button"));

    expect(screen.getAllByTestId("comentario-li")).toHaveLength(2);
  });
});
