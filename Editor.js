import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applyChange, setContent } from "../store";
import socket from "../socket";

const Editor = () => {
  const content = useSelector((state) => state.document.content);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("receive-changes", (change) => {
      dispatch(applyChange(change));
    });

    return () => {
      socket.off("receive-changes");
    };
  }, [dispatch]);

  const handleChange = (e) => {
    const change = e.target.value.slice(content.length);
    dispatch(setContent(e.target.value));
    socket.emit("send-changes", change);
  };

  return (
    <textarea
      value={content}
      onChange={handleChange}
      placeholder="Start typing..."
      rows="20"
      cols="100"
    />
  );
};

export default Editor;
