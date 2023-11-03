import React from "react";

// comments are array of objects, replies again is array of object so it is nested.
const CommentsData = [
  {
    name: "Venkatesh Basati",
    description: "lorem sddfgfg fm",
    replies: [
      {
        name: "VB",
        description: " ddfl,g;l;blgl lg;k ",
        replies: [],
      },
    ],
  },
  {
    name: "Venkatesh Basati",
    description: "lorem sddfgfg fm",
    replies: [
      {
        name: "VB",
        description: " ddfl,g;l;blgl lg;k ",
        replies: [
          {
            name: "Venkatesh ",
            description: "lorem sddfgfg fm",
            replies: [{
              name: "VB",
              description: " ddfl,g;l;blgl lg;k ",
              replies: []
            },{
              name: "VB 2",
              description: " ddfl,g;l;blgl lg;k ",
              replies: []
            }],
          },
        ],
      },
    ],
  },
  {
    name: "Venkatesh Basati",
    description: "lorem sddfgfg fm",
    replies: [
      {
        name: "VB",
        description: " ddfl,g;l;blgl lg;k ",
        replies: [],
      },
    ],
  },
];

const Comment = ({ info }) => {
  return (
    <div className="flex px-2 py-2 ml-2 my-2   bg-slate-100 rounded-lg  ">
      <img
        className="w-6 h-7  "
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png"
      />
      <div className="pl-2 ">
        <p className="font-medium">{info.name}</p>
        <p>{info.description}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return data.map((comment) => (
    <>
      <Comment info={comment} />
      <div className="ml-6 border-{left} border-l-gray-400  border-l-2">
        <CommentsList data={comment.replies}/>
      </div>
    </>
  ));
};

const Comments = () => {
  return (
    <>
      <div className="p-2 font-semibold text-lg underline">Comments :</div>
      <CommentsList data={CommentsData} />
    </>
  );
};

export default Comments;
