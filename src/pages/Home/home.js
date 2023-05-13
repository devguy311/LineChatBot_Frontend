import React from 'react'
import { Button } from '@mui/material';
import LineIcon from '../../components/lineicon';
import './home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <div className="content">
                <div className="title">
                    <a>LINE<br />de<br />AI自叙伝</a>
                </div>
                <Button className='linebutton' variant='contained' startIcon={<LineIcon />} to='/main' component={Link}>
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