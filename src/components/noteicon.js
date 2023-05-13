import React from 'react';
import Note from '../resources/icon-note.png';
import '../pages/Home/home.css';

const NoteIcon = () => {
    return (
        <img src={Note} style={{width: '30px', height: '30px'}}/>
    );
};

export default NoteIcon;