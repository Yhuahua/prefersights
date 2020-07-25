import React, { ReactComponentElement, useEffect, useState } from 'react';
import ReactDOM from 'react-dom'
import Sights from './Sights'
import './scss/Sights.scss'

type UserInfo = {
    entityid: string
};

const SightSeeing : React.FC<UserInfo> = (user:UserInfo) => {

    const [entityId, setEntityId] = useState<string>(user.entityid);
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
        <span>{entityId}</span>

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
    const root = document.getElementById('root');

    if(root != null) {
        const props = Object.assign({}, root.dataset);
        ReactDOM.render(<SightSeeing entityid={props.entityid || 'll'} />, root);
    }
}