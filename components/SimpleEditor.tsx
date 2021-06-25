import React, { useState, useEffect, KeyboardEventHandler } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import "./SimpleEditor.css"

const CodeEditor:React.FC<{code:string, language:'js'}> = (props) => {
  const [code, setCode] = useState(props.code);
  const [prismFix, setPrismFix] = useState(false)

  const handleKeyDown:KeyboardEventHandler<HTMLTextAreaElement> = (evt) => {
    let value = code;
    if(!evt.currentTarget) {
        return 
    }
    const target = evt.currentTarget

    setPrismFix(evt.key === "Enter" && target.selectionStart === value.length);
    
  };

  useEffect(() => {
    Prism.highlightAll();
  }, [props.language, code]);

  return (
    <>
    <div className="code-edit-container">
      <textarea
        className="code-input"
        value={code}
        spellCheck="false"
        onChange={(evt) => setCode(evt.target.value)}
        onKeyDown={handleKeyDown}
      />
      <pre className={`code-output${prismFix? ' code-prism-fix' :''}`}>
        <code className={`language-${props.language}`}>{code}</code>
      </pre>
    </div>
    </>
  );
};

export default CodeEditor;