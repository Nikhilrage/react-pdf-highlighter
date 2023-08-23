import React from "react";
import { RiAccountCircleLine } from "react-icons/ri";
export const CommentsSideBar = () => {
    return (React.createElement("div", null, commentsData === null || commentsData === void 0 ? void 0 : commentsData.map((i, index) => {
        var _a, _b, _c;
        return (React.createElement("div", { style: {
                position: "absolute",
                background: "rgb(222, 235, 255)",
                color: "rgb(13, 14, 14)",
                padding: "14px 14px 15px 20px",
                borderRadius: "8px",
                width: "300px",
                top: (_b = (_a = i === null || i === void 0 ? void 0 : i.position) === null || _a === void 0 ? void 0 : _a.boundingRect) === null || _b === void 0 ? void 0 : _b.x1,
                right: "10px",
            } },
            React.createElement(CommentBox, { time: "5: 20 PM Today", comments: (_c = i === null || i === void 0 ? void 0 : i.comment) === null || _c === void 0 ? void 0 : _c.text })));
    })));
};
const CommentBox = ({ time, comments }) => {
    return (React.createElement("div", { style: { background: "#DEEBFF", color: "#0D0E0E" } },
        React.createElement("div", { style: {
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                columnGap: 7,
            } },
            React.createElement("div", null,
                React.createElement(RiAccountCircleLine, { style: { color: "#029FB3", paddingTop: 6, width: 26, height: 26 } })),
            React.createElement("div", { style: { fontWeight: 500, fontSize: 16 } }, "Registry")),
        React.createElement("div", { style: {
                fontWeight: 400,
                fontSize: 14,
                color: "#667080",
                paddingTop: 7,
                paddingBottom: 25,
            } }, time),
        React.createElement("div", { style: { fontWeight: 500, fontSize: 16 } }, comments)));
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
//# sourceMappingURL=CommentsSideBar.js.map