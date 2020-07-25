import React, { ReactComponentElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Sights from './Sights'
import './scss/Sights.scss'

const SightSeeing : React.FC = () => {

    const [sights, setSights] = useState<React.ReactElement[]>([]);

    const getCount = ():number => {
        return 10;
    }

    function getSights() : React.ReactElement[] {
        let sights:React.ReactElement[] = [];
        const count = getCount();

        for(var i:number = 0; i< count ;i++){
            sights.push(React.createElement(Sights));
        }
        return sights;
    }

    useEffect(()=>{
        setSights(getSights())},
        []
    )
   
    return (
        <>
        <div className="container">
        <div className="portal">
            <ul className="sights">
                {sights}
            </ul>
        </div>
        </div>
        </>
    );
}

export default SightSeeing;

if (document.getElementById('root')) {
    ReactDOM.render(<SightSeeing />, document.getElementById('root'));
}