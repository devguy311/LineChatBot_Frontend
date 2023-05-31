import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import './main.css';
import { Avatar, TextField } from "@mui/material";
import NoteIcon from '../../components/noteicon';
import BackIcon from '../../components/backicon';
import useToken from '../hooks/useToken';
import useUndoableState from '../hooks/useUndoableState';
import axios from "axios";

import CloudUpdateIcon from '../../components/cloudupdate';

const Main = () => {
    const { token } = useToken();
    const [isEdit, setIsEdit] = useState(false);

    const {
        state: doc,
        setState: setDoc,
        resetState: resetDoc,
        index: docStateIndex,
        lastIndex: docStateLastIndex,
        goBack: undoDoc,
        goForward: redoDoc
    } = useUndoableState({ text: "" }, 500);

    const canUndo = docStateIndex > 0;

    // eslint-disable-next-line
    useEffect(() => {
        axios.get("https://linebotserver-two.vercel.app/bio/getBiography", { params: { sub: token[3] } }).then((result) => {
            if (result.status === 200) {
                setDoc({ text: result.data.msg });
            }
        })
    }, []);

    const handleEdit = () => {

        if (isEdit) {
            axios.post('https://linebotserver-two.vercel.app/bio/updateBiography', { sub: token[3], bio: doc.text })
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

    const refreshBio = () => {
        axios.get("https://linebotserver-two.vercel.app/bio/getBiography", { params: { sub: token[3] } }).then((result) => {
            if (result.status === 200) {
                setDoc({ text: result.data.msg });
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
                <Button disabled={!canUndo} sx={{ color: "gray" }} onClick={() => undoDoc()}>
                    <BackIcon />&nbsp;
                </Button>
            </div>
            <div className='textArea'>
                {
                    isEdit === false ?
                        <p style={{ whiteSpace: 'pre-line', paddingLeft: '1rem', paddingRight: '1rem' }}>
                            {doc.text}
                        </p>
                        :
                        <TextField
                            id="bio-editable"
                            label=""
                            fullWidth
                            multiline
                            variant="outlined"
                            value={doc.text}
                            sx={{ backgroundColor: 'white' }}
                            onChange={(e) => setDoc({ text: e.target.value })}
                        />
                }
            </div>
        </div>
    );
}

export default Main;