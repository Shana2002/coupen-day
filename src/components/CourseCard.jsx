import React from "react";

const CourseCard = ({data}) => {
  return (
    <div className="flex items-center justify-center flex-col w-[20vw] p-3 shadow rounded-2xl">
      <img
        src="https://www.courspora.my.id/_next/image?url=https%3A%2F%2Fimg-c.udemycdn.com%2Fcourse%2F480x270%2F5734514_2a61.jpg&w=640&q=75"
        alt=""
      />
      <h1 className="line-clamp-3 my-2">
        {data.title}
      </h1>
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center justify-center gap-3">
          <img
            src="data:image/png;base64,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"
            alt=""
            className="w-10 rounded-full object-cover"
          />
          <h1>Hansak Ravishan</h1>
        </div>
        <div className="flex items-center justify-center ">
            <img src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000" alt="" className="w-5" />
            <h1>4.5</h1>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
