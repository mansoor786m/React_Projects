import React from 'react';
import './section.css';






export default function Section(props){
    return(
        <div className='section'>
            {props.children}
        </div>
    );
}