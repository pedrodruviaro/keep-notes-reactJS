import React from "react";
import { useState } from "react";
import {
  Button,
  FieldsetStyled,
  FormStyled,
  FormWrap,
  InputStyled,
  SpanErro,
  TextareaStyled,
} from "./styles";



export default function Index() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("work");

  const [titleError, setTitleError] = useState({ valid: true, text: "" });
  const [contentError, setContentError] = useState({ valid: true, text: "" });

  //   title validation
  function titleValidation(event) {
    if (event.target.value.length < 6 || event.target.value === "") {
      const valid = {
        valid: false,
        text: "Title must have at least 6 caracters!",
      };
      setTitleError(valid);
    } else {
      const valid = { valid: true, text: "" };
      setTitleError(valid);
    }
  }

  // content validation
  function contentValidation(event) {
    if (event.target.value.length >= 500 || event.target.value.length < 10) {
      const valid = {
        valid: false,
        text: "Note must have a minimum of 10 caracters and a maximum of 500 caracters.",
      };
      setContentError(valid);
    } else {
      const valid = { valid: true, text: "" };
      setContentError(valid);
    }
  }

  //   handle submit
  function handleSubmit(event) {
    event.preventDefault();

    // title === false
    if (!title) {
      const valid = {
        valid: false,
        text: "Title must have at least 6 caracters!",
      };
      setTitleError(valid);
    }

    //  content === false
    if (!content) {
      const valid = {
        valid: false,
        text: "Note must have a minimum of 10 caracters and a maximum of 500 caracters.",
      };
      setContentError(valid);
    }

    // both empty
    if (!title && !content) {
      return;
    }

    // check validarion
    if (!titleError.valid && !contentError.valid) {
      return;
    }

    //results
    console.log({ title, content, category });
  }

  return (
    <FormWrap>

      <FormStyled onSubmit={handleSubmit}>
        <InputStyled
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          onBlur={titleValidation}
        />

        {titleError.valid === false ? (
          <SpanErro>{titleError.text}</SpanErro>
        ) : null}

        <TextareaStyled
          placeholder="Note..."
          value={content}
          onChange={(event) => setContent(event.target.value)}
          onBlur={contentValidation}
        />

        {contentError.valid === false ? (
          <SpanErro>{contentError.text}</SpanErro>
        ) : null}

        <FieldsetStyled onChange={(event) => setCategory(event.target.value)}>
          <label>
            <input
              type="radio"
              name="category"
              value="work"
              checked={category === "work"}
              readOnly
            />
            Work
          </label>
          <label>
            <input type="radio" name="category" value="study" />
            Study
          </label>
          <label>
            <input type="radio" name="category" value="money" />
            Money
          </label>
          <label>
            <input type="radio" name="category" value="other" />
            Other
          </label>
        </FieldsetStyled>

        <Button type="submit">Submit</Button>
      </FormStyled>
    </FormWrap>
  );
}
