import React, { Component } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import "../style/Tip.css";
export class Tip extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            compact: true,
            text: "",
            emoji: "",
        };
    }
    componentDidMount() {
        const { onOpen } = this.props;
        onOpen();
    }
    // for TipContainer
    componentDidUpdate(nextProps, nextState) {
        const { onUpdate } = this.props;
        if (onUpdate && this.state.compact !== nextState.compact) {
            onUpdate();
        }
    }
    render() {
        const { onConfirm } = this.props;
        const { text, emoji } = this.state;
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
                React.createElement("button", { onClick: () => onConfirm({ text, emoji }), style: {
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
                    } }, "Cancel"))));
    }
}
export default Tip;
{
    /*<div className="Tip">
          {/*{compact ? (
            <div
              className="Tip__compact"
              onClick={() => {
                onOpen();
                this.setState({ compact: false });
              }}
            >
              Add highlightgjgjgjgj
            </div>
          ) : (*/
}
//<form
//  className="Tip__card"
//  onSubmit={(event) => {
//    event.preventDefault();
//    onConfirm({ text, emoji });
//  }}
//>
//  <div>
//    <textarea
//      placeholder="Your comment"
//      autoFocus
//      value={text}
//      onChange={(event) => this.setState({ text: event.target.value })}
//      ref={(node) => {
//        if (node) {
//          node.focus();
//        }
//      }}
//    />
//    {/*<div>
//      {["💩", "😱", "😍", "🔥", "😳", "⚠️"].map((_emoji) => (
//        <label key={_emoji}>
//          <input
//            checked={emoji === _emoji}
//            type="radio"
//            name="emoji"
//            value={_emoji}
//            onChange={(event) =>
//              this.setState({ emoji: event.target.value })
//            }
//          />
//          {_emoji}
//        </label>
//      ))}
//    </div>*/}
//  </div>
//  <div>
//    <input type="submit" value="Save" />
//  </div>
//</form>
{
    /*)}*/
}
//</div>*/}
//# sourceMappingURL=Tip.js.map