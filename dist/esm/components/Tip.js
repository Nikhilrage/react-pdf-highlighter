import React, { Component } from "react";
import "../style/Tip.css";
import { RiAccountCircleLine } from "react-icons/ri";
export class Tip extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            compact: true,
            text: "",
            emoji: "",
        };
    }
    // for TipContainer
    componentDidUpdate(nextProps, nextState) {
        const { onUpdate } = this.props;
        if (onUpdate && this.state.compact !== nextState.compact) {
            onUpdate();
        }
    }
    render() {
        const { onConfirm, onOpen } = this.props;
        const { compact, text, emoji } = this.state;
        console.log({ onConfirm, onOpen, compact, text, emoji });
        return (React.createElement("div", { className: "Tip__card" },
            React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    columnGap: 7,
                    marginBottom: 28,
                } },
                React.createElement(RiAccountCircleLine, { style: { color: "#029FB3", width: 27, height: 30 } }),
                React.createElement("div", { style: { fontWeight: 500, fontSize: 16, color: "#000" } }, "Registry")),
            React.createElement("div", { style: { marginBottom: 27 } },
                React.createElement("input", { type: "text", placeholder: "Type your answer here...", autoFocus: true, value: text, onChange: (event) => this.setState({ text: event.target.value }), ref: (node) => {
                        if (node) {
                            node.focus();
                        }
                    }, style: {} })),
            React.createElement("div", null,
                React.createElement("button", { style: {
                        background: "#BED7FE",
                        color: "#0D0E0E",
                        fontWeight: 500,
                        fontSize: 14,
                        padding: "9px 24px",
                        border: "none",
                        borderRadius: "24px",
                        marginRight: 10,
                        fontFamily: "Poppins",
                    } }, "Comment"),
                React.createElement("button", { onClick: () => console.log("saved"), style: {
                        background: "#fff",
                        color: "#0D0E0E",
                        fontWeight: 500,
                        fontSize: 14,
                        padding: "8px 24px",
                        border: "1px solid #BED7FE",
                        borderRadius: "24px",
                        marginRight: 10,
                        fontFamily: "Poppins",
                    } }, "Save"))));
    }
}
export default Tip;
//# sourceMappingURL=Tip.js.map