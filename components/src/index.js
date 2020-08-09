import React from "react";
import ReactDOM from "react-dom";
import ComponentDetail from "./CommentDetail";
import faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        avatar={faker.image.avatar()}
        timeAgo="Today at 4:45PM"
        content="So informative, thanks!"
      />
      <CommentDetail
        author="Alex"
        avatar={faker.image.avatar()}
        timeAgo="Today at 2:00AM"
        content="Not the usual echo chamber."
      />
      <CommentDetail
        author="Jane"
        avatar={faker.image.avatar()}
        timeAgo="Yesterday at 5:00PM"
        content="Hope you're having fun with props!"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
