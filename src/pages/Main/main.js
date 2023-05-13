import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import LineIcon from '../../components/lineicon';
import './main.css';
import { Link } from 'react-router-dom'
import { Avatar } from "@mui/material";
import AvatarImage from "../../resources/avatar.png";
import NoteIcon from '../../components/noteicon';
import BackIcon from '../../components/backicon';

const Main = () => {

    const [textData, setTextData] = useState();

    useEffect(() => {
        setTextData(`タイトル: 『舞台裏の光：小竹しのぶ自叙伝』

        【序章：最初の一歩】
        子供時代の思い出、初めて舞台に立った感動。私の 人生が幕を開けた瞬間。

        【第一章：若き日の輝き】 
        苦労と共に続いた初期のキャリア。その困難を乗り 越えて得た成功の感触。
        
        【第二章：スターダムへの道】 
        注目を浴び、時には挫折を経験。それでも、私は進 み続けた。

        【第三章：私の舞台、私の映画】 
        役者としての成長と発展。小竹しのぶの名が世界に 知られるようになるまで。 

        【第四章：続く旅】
        私が経験した試練と歓喜。これまでの人生の道のり を振り返る。

        【終章：これからの幕開け】
        これからの人生に対する私の考えと希望。過去の経 験から導き出される未来へのメッセージ。

        
        【終章：これからの幕開け】
        これからの人生に対する私の考えと希望。過去の経 験から導き出される未来へのメッセージ。
        
        【終章：これからの幕開け】
        これからの人生に対する私の考えと希望。過去の経 験から導き出される未来へのメッセージ。
        
        【終章：これからの幕開け】
        これからの人生に対する私の考えと希望。過去の経 験から導き出される未来へのメッセージ。
    `);
    }, []);

    return (
        <div className='main'>
            <div className='caption'>LINE de AI自叙伝</div>
            <div className='title'>
                <Avatar
                    src={AvatarImage}
                    sx={{ width: '50px', height: '50px' }}
                />
                <div className='headingText'>小竹しのぶさんの自叙伝</div>
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