
import { useState } from 'react';
import './PlayButton.css';
import { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

function PlayButton({ children, onPlay, onPause }) {
    const [playing, setPlaying] = useState(false);
    function handleClick(e) {
        e.stopPropagation()

        if (playing) {
            onPause()
        } else {
            onPlay()
        }
        setPlaying(!playing)




    }

    const themeContext = useContext(ThemeContext)
    return (
        <button className={themeContext} onClick={handleClick}>{children}:  {playing ? '⏸️' : '⏯️'}</button>
    )

}

export default PlayButton;