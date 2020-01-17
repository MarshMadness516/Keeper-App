import React, {useState} from "react";
import { addSyntheticTrailingComment } from "typescript";

function CreateArea(props) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setNote(prevValue => {
            if (name === 'title') {
                return {
                    title: value,
                    content: prevValue.content
                }
            } else if (name === 'content') {
                return {
                    title: prevValue.title,
                    content: value
                }
            }
        });
    }

    return (
        <div>
        <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title}/>
            <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={note.content}/>
            <button onClick={(event) => {
                props.onAdd(note);
                event.preventDefault();
            }}>Add</button>
        </form>
        </div>
    );
}

export default CreateArea;