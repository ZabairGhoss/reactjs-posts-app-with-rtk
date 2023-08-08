import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostsAuthor from "./PostsAuthor";
import TimesAgo from "./TimesAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p className="postslist-content">{post.content.substring(0, 300)}</p>
      <p className="postCredit">
        <PostsAuthor userId={post.userId} />
        <TimesAgo timeStamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2 className="posts-display-sec">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
