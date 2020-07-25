import React, {useState} from 'react'
import {NameList} from '../NameList'
import Combobox from 'react-widgets/lib/Combobox'

const Sights : React.FC = () => {

    const [im, setIM] = useState<string>('https://p2.bahamut.com.tw/S/2KU/17/336a1240a833a8fa514632401f19c6t5.JPG?w=300')

    const [options, setOptions] = useState<string[]>(['1','2','3','4','5'])

    return(

        <>
            <div className="sight">
                <table>
                    <tr><td><span>{NameList.sight_name}</span></td></tr>
                    <tr><td><img src={im}></img></td></tr>
                </table>
            </div>
        </>
    )
}

export default Sights;