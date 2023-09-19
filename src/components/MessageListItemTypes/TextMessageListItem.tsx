import * as React from "react";

import { timeAgo, classNames } from "../../assets/Helpers";

export default function TextMessageListItem(props) {
  return (
    <li key={props.message.id} className="bg-white relative flex pl-0.5 pr-2 rounded-lg">
      <div
        className={classNames(
          props.index === props.length - 1 ? "h-6" : "-bottom-6",
          "absolute left-0.5 top-0 flex w-6 justify-center"
        )}
      >
        <div className="w-px bg-gray-300" />
      </div>
      <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
        <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300" />
      </div>
      <p className="flex-auto py-0.5 text-s leading-5 text-gray-500">
        {props.message.text}
      </p>
      <time
        dateTime={props.message.dateTime}
        className="flex-none py-0.5 text-s leading-5 text-gray-500"
      >
        {timeAgo.format(props.message.date)}
      </time>
    </li>
  )
}