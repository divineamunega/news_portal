import { useState, useEffect, useRef } from "react";

const Editor = ({ defaultValue }) => {
  const [content, setContent] = useState(defaultValue);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  return (
    <div>
      <p>Content</p>
      <textarea
        ref={textareaRef}
        value={content}
        name="content"
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write something..."
        className="w-full rounded border px-4 py-2 focus:outline-none"
        style={{ overflow: "hidden" }} // Ensures no scrollbar
      />
    </div>
  );
};

export default Editor;
