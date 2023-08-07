import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostsForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );
    }

    setTitle("");
    setContent("");
  };

  return (
    <section className="form-container">
      <h2>Add a new Post</h2>
      <form>
        <fieldset>
          <legend>Add Post:</legend>
          <label htmlFor="postTitle">
            Post Title:
            <br />
            <input
              type="text"
              id="postTitle"
              name="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
          </label>
          <br />
          <label htmlFor="postContent">
            Post Content:
            <br />
            <textarea
              id="postContent"
              name="postContent"
              value={content}
              onChange={onContentChanged}
            />
          </label>
          <button type="submit" onClick={onSavePostClicked}>
            Save Post
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default AddPostsForm;
