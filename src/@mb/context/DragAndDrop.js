import React, {Fragment} from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";

function is_touch_enabled() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function useDNDProviderElement(props) {
  if (!props.children) return null;
  const backend = is_touch_enabled() ? TouchBackend : HTML5Backend;
  return (
    // enableMouseEvents: true is for the case where the user has a touchscreen capable device but wants to use the mouse cursor
    // to drag and drop also.
    <DndProvider backend={backend} options={{ enableMouseEvents: true }}>
      {props.children}
    </DndProvider>
  );
}

export default function DragAndDrop(props) {
  const DNDElement = useDNDProviderElement(props);
  return <React.Fragment>{DNDElement}</React.Fragment>;
}
