import { render } from "@testing-library/react";
import Message from "../app/components/Message";

it("renders Message page unchanged", () => {
  const props = {
    id: 1,
    title: "Title",
    message:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  };
  const { container } = render(
    <Message id={props.id} title={props.title} message={props.message} />
  );
  expect(container).toMatchSnapshot();
});
