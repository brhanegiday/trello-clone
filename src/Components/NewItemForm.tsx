import React, { useState } from "react";
import {
  NewItemFormContainer,
  NewItemButton,
  NewItemInput,
} from "../styles/styles";
import { useFocus } from "../utils/useFocus";

type NewItemFormProps = {
  onAdd(text: string): void;
};

function NewItemForm({ onAdd }: NewItemFormProps) {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  const handleAddText = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      onAdd(text);
    }
  };
  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        placeholder="Enter a title for this card"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={handleAddText}
      />

      <NewItemButton onClick={() => onAdd(text)}>Add Card</NewItemButton>
    </NewItemFormContainer>
  );
}

export default NewItemForm;
