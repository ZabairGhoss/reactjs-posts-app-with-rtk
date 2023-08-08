import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";

const AddPostsForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const onSavePostClicked = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(postAdded(title, content, userId));
    }

    setTitle("");
    setContent("");
  };

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId);

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section className="form-container">
      <form>
        <fieldset>
          <legend>Add New Post:</legend>
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
          <label>Author:</label>
          <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
            <option value={""}>Select Author</option>
            {usersOptions}
          </select>
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

          <button type="submit" onClick={onSavePostClicked} disabled={!canSave}>
            Save Post
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default AddPostsForm;
