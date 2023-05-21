import React, {useState} from 'react'
import { Button } from '@mui/material';
import LineIcon from '../../components/lineicon';
import './home.css';
import { Link } from 'react-router-dom';

const generateRandomState = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

const Home = () => {
    const loginWithLine = () => {
        const randomState = generateRandomState(5);
        window.location.href=`https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1661123199&redirect_uri=${window.location.origin}/redirect&state=${randomState}&scope=profile%20openid%20email`;
    }
    return (
        <div className='home'>
            <div className="content">
                <div className="title">
                    <a>AI<br />自叙伝<br />くん</a>
                </div>
                <Button className='linebutton' onClick={loginWithLine} variant='contained' startIcon={<LineIcon />} component={Link}>
                    <div style={{ width: '214px' }}>
                        LINEでログイン
                    </div>
                </Button>
            </div>
            <div className='footer'>
                <a>サービス利用規約<br />プライバシーポリシー</a>
            </div>
        </div>
    );
}

export default Home;