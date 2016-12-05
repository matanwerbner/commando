import React from 'react';
import './commandLine.scss';

export default ({ command }) => {
    return <div className="commandLineInner">
        <div>
        { command }
        </div>
    </div>
}