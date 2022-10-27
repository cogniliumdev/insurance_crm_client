import { useState } from "react"

const SomeComponent = () => {
    const [text, setText] = useState("");

    const simpleStyle = {}
    const highlightStyle = {}


    return <>
        <button
            onClick={() => setText("button 1")}
            style={text == "button 1" ? highlightStyle : simpleStyle}
        >
            button 1
        </button>

        <button
            onClick={() => setText("button 2")}
            style={text == "button 2" ? highlightStyle : simpleStyle}
        >
            button 2
        </button>

        <button
            onClick={() => setText("button 3")}
            style={text == "button 3" ? highlightStyle : simpleStyle}
        >
            button 3
        </button>

    </>
}