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
                react_1.default.createElement("button", { style: {
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
                    } }, "Save"))));
    }
}
exports.Tip = Tip;
exports.default = Tip;
//# sourceMappingURL=Tip.js.map