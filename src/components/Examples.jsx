import { useState } from "react";
import examples from "../examples_info";

export default function Examples() {
  const [content, setContent] = useState();
  function onClickHandle(e) {
    console.log(examples[e].title);
    setContent(examples[e]);
  }
  return (
    <>
      <br />
      <h2>Examples:</h2>
      <hr />
      <button onClick={() => onClickHandle("if_else")} className="btn">
        if-else
      </button>
      <button onClick={() => onClickHandle("for")} className="btn">
        for
      </button>
      <button onClick={() => onClickHandle("for_each")} className="btn">
        for each
      </button>
      <button onClick={() => onClickHandle("while")} className="btn">
        while
      </button>
      <div className="codeexample">
        {/* {!content ?  <p>Please select button</p> : <p>done</p>} */}
        {!content ? (
          <p>Please select button</p>
        ) : (
          <>
            <h3>{content.title}</h3>
            <p>{content.desc}</p>
            <pre className="codedisplaybox">
              <code>{content.code}</code>
            </pre>
          </>
        )}
      </div>
    </>
  );
}
