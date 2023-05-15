import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import './main.css';
import { Link } from 'react-router-dom'
import { Avatar } from "@mui/material";
import NoteIcon from '../../components/noteicon';
import BackIcon from '../../components/backicon';
import useToken from '../hooks/useToken';
import axios from "axios";

const Main = () => {

    const [textData, setTextData] = useState();
    const {token, setToken} = useToken();

// eslint-disable-next-line
useEffect(() => {
  setTextData(`
    自叙伝執筆中です...
    まずは質問にすべて答えてください。
  `);

  axios.get("http://localhost:3000/bio/getBiography", { params: { sub: token[3] } }).then((result) => {
    if (result.status === 200){
      setTextData(result.data.msg);
    }
  })
}, []);

    return (
        <div className='main'>
            <div className='caption'>LINE de AI自叙伝</div>
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
                <Button sx={{ color: "gray" }}>
                    <NoteIcon />&nbsp;編集する
                </Button>
                <Button sx={{ color: "gray" }} to='/' component={Link}>
                    <BackIcon />&nbsp;戻す
                </Button>
            </div>
            <div className='textArea'>
                <p style={{ whiteSpace: 'pre-line' }}>
                    {textData}
                </p>
            </div>
        </div>
    );
}

export default Main;