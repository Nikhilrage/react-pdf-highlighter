import React, { Component } from "react";
import "../style/Tip.css";
import { RiAccountCircleLine } from "react-icons/ri";

interface State {
  compact: boolean;
  text: string;
  emoji: string;
}

interface Props {
  onConfirm: (comment: { text: string; emoji: string }) => void;
  onOpen: () => void;
  onUpdate?: () => void;
}

export class Tip extends Component<Props, State> {
  state: State = {
    compact: true,
    text: "",
    emoji: "",
  };

  componentDidMount(): void {
    const { onOpen } = this.props;
    onOpen();
  }
  // for TipContainer
  componentDidUpdate(nextProps: Props, nextState: State) {
    const { onUpdate } = this.props;

    if (onUpdate && this.state.compact !== nextState.compact) {
      onUpdate();
    }
  }

  render() {
    const { text, emoji } = this.state;
    const { onConfirm } = this.props;
    return (
      <div className="Tip__card">
        <div
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            columnGap: 7,
            marginBottom: 28,
          }}
        >
          <RiAccountCircleLine
            style={{ color: "#029FB3", width: 27, height: 30 }}
          />
          <div style={{ fontWeight: 500, fontSize: 16, color: "#000" }}>
            Registry
          </div>
        </div>
        <div style={{ marginBottom: 27 }}>
          <input
            type="text"
            placeholder="Type your answer here..."
            autoFocus
            value={text}
            onChange={(event) => this.setState({ text: event.target.value })}
            ref={(node) => {
              if (node) {
                node.focus();
              }
            }}
            style={{}}
          />
        </div>
        <div>
          <button
            onClick={() => onConfirm({ text, emoji })}
            style={{
              background: "#BED7FE",
              color: "#0D0E0E",
              fontWeight: 500,
              fontSize: 14,
              padding: "9px 24px",
              border: "none",
              borderRadius: "24px",
              marginRight: 10,
              fontFamily: "Poppins",
            }}
          >
            Comment
          </button>
          <button
            onClick={() => console.log("saved")}
            style={{
              background: "#fff",
              color: "#0D0E0E",
              fontWeight: 500,
              fontSize: 14,
              padding: "8px 24px",
              border: "1px solid #BED7FE",
              borderRadius: "24px",
              marginRight: 10,
              fontFamily: "Poppins",
            }}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
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
