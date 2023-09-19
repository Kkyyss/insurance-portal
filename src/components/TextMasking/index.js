import PropTypes from "prop-types";

import styled from "@emotion/styled";
import { Button } from "antd";
import { useCallback, useState } from "react";

const List = styled("div")`
  display: flex;
  align-items: center;
`;

const Spacing = styled("div")`
  width: 5px;
`;

export function TextMasking({ show, text }) {
  const [clicked, setClickedState] = useState(show);

  const onTextClicked = useCallback(() => {
    setClickedState(!clicked);
  }, [clicked, setClickedState]);

  const contentText = clicked ? text : "".padStart(4, "*");
  const buttonText = clicked ? "Hide" : "Show";

  return (
    <List>
      <span>{contentText}</span>
      <Spacing />
      <Button onClick={onTextClicked}>{buttonText}</Button>
    </List>
  );
}

TextMasking.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string
};

export default TextMasking;
