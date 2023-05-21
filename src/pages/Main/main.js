import React, { useState, useEffect, useRef } from 'react'
import { Button } from '@mui/material';
import './main.css';
import { Avatar, TextField } from "@mui/material";
import NoteIcon from '../../components/noteicon';
import BackIcon from '../../components/backicon';
import useToken from '../hooks/useToken';
import axios from "axios";
import CloudUpdateIcon from '../../components/cloudupdate';

const Main = () => {

    const [textData, setTextData] = useState();
    const { token } = useToken();
    const [isEdit, setIsEdit] = useState(false);
    const textFieldRef = useRef(null);

    // eslint-disable-next-line
    useEffect(() => {
        axios.get("https://linebotserver.vercel.app/bio/getBiography", { params: { sub: token[3] } }).then((result) => {
            if (result.status === 200) {
                setTextData(result.data.msg);
            }
        })
    }, []);

    const handleEdit = () => {

        if (isEdit) {
            axios.post('https://linebotserver.vercel.app/bio/updateBiography', { sub: token[3], bio: textData })
                .then((response) => {
                    if (response.status === 200) {
                        console.log("!");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        setIsEdit(!isEdit);
    }

    const handleChanged = (e) => {
        setTextData(e.target.value);
    }

    const handleClickDelete = () => {
        const textField = textFieldRef.current;

        if (textField.selectionStart !== textField.selectionEnd) {
            // If there is selected text, delete the selected portion
            const start = textField.selectionStart;
            const end = textField.selectionEnd;
            const value = textField.value;

            const newValue = value.slice(0, start) + value.slice(end);
            textField.value = newValue;
            textField.selectionStart = start;
            textField.selectionEnd = start;
        } else if (textField.selectionStart > 0) {
            // If no text is selected but the cursor is not at the beginning, delete the character to the left of the cursor
            const start = textField.selectionStart - 1;
            const value = textField.value;

            const newValue = value.slice(0, start) + value.slice(start + 1);
            textField.value = newValue;
            textField.selectionStart = start;
            textField.selectionEnd = start;
        }
        textField.focus();
        setTextData(textField.value);
    }

    const refreshBio = () => {
        axios.get("https://linebotserver.vercel.app/bio/getBiography", { params: { sub: token[3] } }).then((result) => {
            if (result.status === 200) {
                setTextData(result.data.msg);
            }
        })
    }

    return (
        <div className='main'>
            <div className='caption'>AI自叙伝くん</div>
            <div className='title'>
                <Avatar
                    src={token[5]}
                    sx={{ width: '50px', height: '50px' }}
                />
                <div className='headingText'>{token[4]}の自叙伝</div>
            </div>
            <div className='lastUpdatedWraper'>
                <div className='lastUpdated'>最終更新：2023/5/10</div>
            </div>
            <div className='buttonGroup'>
                <Button sx={{ color: "gray" }} onClick={handleEdit}>
                    <NoteIcon />&nbsp;
                </Button>
                <Button sx={{ color: "gray" }} onClick={refreshBio}>
                    <CloudUpdateIcon />&nbsp;
                </Button>
                <Button disabled={!isEdit} sx={{ color: "gray" }} onClick={handleClickDelete}>
                    <BackIcon />&nbsp;
                </Button>
            </div>
            <div className='textArea'>
                {
                    isEdit === false ?
                        <p style={{ whiteSpace: 'pre-line', paddingLeft: '1rem', paddingRight: '1rem' }}>
                            {textData}
                        </p>
                        :
                        <TextField
                            id="bio-editable"
                            label=""
                            fullWidth
                            multiline
                            variant="outlined"
                            value={textData}
                            inputRef={textFieldRef}
                            sx={{ backgroundColor: 'white' }}
                            onChange={(e) => handleChanged(e)}
                        />
                }
            </div>
        </div>
    );
}

export default Main;