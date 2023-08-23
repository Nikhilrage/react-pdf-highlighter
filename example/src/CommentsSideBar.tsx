import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";

const CommentsSideBar = () => {
  return (
    <div>
      {commentsData?.map((i: any, index: number) => (
        <div
          style={{
            position: "absolute",
            background: "rgb(222, 235, 255)",
            color: "rgb(13, 14, 14)",
            padding: "14px 14px 15px 20px",
            borderRadius: "8px",
            width: "300px",
            top: i?.position?.boundingRect?.x1,
            right: "10px",
          }}
        >
          <CommentBox time={"5: 20 PM Today"} comments={i?.comment?.text} />
        </div>
      ))}
    </div>
  );
};

export default CommentsSideBar;

interface CommentBoxProps {
  time: string;
  comments: string;
}
const CommentBox = ({ time, comments }: CommentBoxProps) => {
  return (
    <div style={{ background: "#DEEBFF", color: "#0D0E0E" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
          columnGap: 7,
        }}
      >
        {/*<div style={{borderRadius:'50%', padding: 3}}></div>*/}
        <div>
          <RiAccountCircleLine
            style={{ color: "#029FB3", paddingTop: 6, width: 26, height: 26 }}
          />
        </div>
        <div style={{ fontWeight: 500, fontSize: 16 }}>Registry</div>
      </div>
      <div
        style={{
          fontWeight: 400,
          fontSize: 14,
          color: "#667080",
          paddingTop: 7,
          paddingBottom: 25,
        }}
      >
        {time}
      </div>
      <div style={{ fontWeight: 500, fontSize: 16 }}>{comments}</div>
    </div>
  );
};

const commentsData = [
  {
    content: {
      text: " Type Checking for JavaScript",
    },
    position: {
      boundingRect: {
        x1: 255.73419189453125,
        y1: 139.140625,
        x2: 574.372314453125,
        y2: 165.140625,
        width: 809.9999999999999,
        height: 1200,
      },
      rects: [
        {
          x1: 255.73419189453125,
          y1: 139.140625,
          x2: 574.372314453125,
          y2: 165.140625,
          width: 809.9999999999999,
          height: 1200,
        },
      ],
      pageNumber: 1,
    },
    comment: {
      text: "Fix Grammer. Make Changes Here ",
    },
    id: "8245652131754351",
  },
];
