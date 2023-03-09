import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const CreateNote=(props)=>{

const [expend,setexpend]=useState(false);
     
    const [note,setNote]=useState({
        title:"",
        content:"",
    })
    const InputEvent=(event)=>{
        //const value=event.target.value;
        //yyconst name=event.target.name;

        const{name,value}=event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                [name]:value
                
            }
        })
        console.log(note);
    }
    const addEvent=()=>{
        props.passNote(note);
        setNote({
            title:"",
            content:"",
        })
    }
    const expendit=()=>{
        setexpend(true);
    }

    return (
        <>
            <div className="main_note">
                <form>
                {expend?
                    <input 
                    name="title"
                     type="text"
                      value={note.title} 
                      onChange={InputEvent}
                       placeholder="Title" 
                       autoComplete="off"/>:null}
                    <textarea 
                    name="content"
                     rows=" " 
                     value={note.content}
                      onChange={InputEvent} 
                      column="" 
                      placeholder="Write a note..." 
                      onClick={expendit}>
                    
                      </textarea>
                      {expend?
                    <Button onClick={addEvent}>
                            <AddIcon className="plus_sign"/>
                    </Button>:null}
                </form>

            </div>
        </>
    )

}
export default CreateNote;