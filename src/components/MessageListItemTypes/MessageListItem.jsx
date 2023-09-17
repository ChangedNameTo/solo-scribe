import TextMessageListItem from "./TextMessageListItem";
import CommandMessageListItem from "./CommandMessageListItem";

export default function MessageListItem(props) {
  if (props.message.type === "command") {
    return (
      <CommandMessageListItem
        message={props.message}
        index={props.index}
        length={props.length}
      />
    );
  } else {
    return (
      <TextMessageListItem
        message={props.message}
        index={props.index}
        length={props.length}
      />
    );
  }
}
