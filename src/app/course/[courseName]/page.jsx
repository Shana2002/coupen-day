import NavBar from "@/components/NavBar";
import React, { useState } from "react";

const page = async ({ params }) => {
  const { courseName } = params;
  const [data, setData] = useState();

  useState(() => {
    const fetchData = async () => {
      const data1 = {
        title: "Hello world",
        image:
          "https://www.courspora.my.id/_next/image?url=https%3A%2F%2Fimg-c.udemycdn.com%2Fcourse%2F480x270%2F5134992_6169_3.jpg&w=640&q=75",
      };
      setData(data1);
    };

    fetchData();
  },[]);

  return (
    <div className="w-full  reletive">
      <NavBar />
      <div className="mt-[10vh] w-full px-[5vw] h-full flex py-5 gap-10">
        <div className="w-1/2 h-[80vh]">
          <img
            src={data.image}
            alt=""
            className="w-full object-contain h-full"
          />
        </div>
        <div className="w-1/2 flex flex-col">
          <h1 className="text-green-600 text-4xl font-bold my-4">
            {data.title}
          </h1>
          <div className="my-3 flex items-center">
            <div className="flex items-center justify-center ">
              <img
                src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                alt=""
                className="w-5"
              />
              <h1>4.5</h1>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quos iusto earum saepe quaerat, perspiciatis sit optio quis magnam
            est iure architecto blanditiis, maxime qui, illo neque nihil placeat
            dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos quos iusto earum saepe quaerat, perspiciatis sit optio
            quis magnam est iure architecto blanditiis, maxime qui, illo neque
            nihil placeat dolorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos quos iusto earum saepe quaerat,
            perspiciatis sit optio quis magnam est iure architecto blanditiis,
            maxime qui, illo neque nihil placeat dolorem. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dignissimos quos iusto earum
            saepe quaerat, perspiciatis sit optio quis magnam est iure
            architecto blanditiis, maxime qui, illo neque nihil placeat dolorem.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            quos iusto earum saepe quaerat, perspiciatis sit optio quis magnam
            est iure architecto blanditiis, maxime qui, illo neque nihil placeat
            dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos quos iusto earum saepe quaerat, perspiciatis sit optio
            quis magnam est iure architecto blanditiis, maxime qui, illo neque
            nihil placeat dolorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Dignissimos quos iusto earum saepe quaerat,
            perspiciatis sit optio quis magnam est iure architecto blanditiis,
            maxime qui, illo neque nihil placeat dolorem.
          </p>
          <div className="h-full w-full  flex items-center justify-center">
            <button className="w-1/3 bg-green-600 h-1/3 text-white text-2xl rounded-2xl font-semibold cursor-pointer">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
