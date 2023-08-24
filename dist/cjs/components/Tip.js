"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tip = void 0;
const react_1 = __importStar(require("react"));
require("../style/Tip.css");
const ri_1 = require("react-icons/ri");
class Tip extends react_1.Component {
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
        const { text, emoji } = this.state;
        const { onConfirm } = this.props;
        return (react_1.default.createElement("div", { className: "Tip__card" },
            react_1.default.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    columnGap: 7,
                    marginBottom: 28,
                } },
                react_1.default.createElement(ri_1.RiAccountCircleLine, { style: { color: "#029FB3", width: 27, height: 30 } }),
                react_1.default.createElement("div", { style: { fontWeight: 500, fontSize: 16, color: "#000" } }, "Registry")),
            react_1.default.createElement("div", { style: { marginBottom: 27 } },
                react_1.default.createElement("input", { type: "text", placeholder: "Type your answer here...", autoFocus: true, value: text, onChange: (event) => this.setState({ text: event.target.value }), ref: (node) => {
                        if (node) {
                            node.focus();
                        }
                    }, style: {} })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("button", { onClick: () => onConfirm({ text, emoji }), style: {
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
                react_1.default.createElement("button", { onClick: () => console.log("saved"), style: {
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
exports.Tip = Tip;
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