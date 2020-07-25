import React, {useState} from 'react'
import {NameList, ImgList} from '../NameList'
import Combobox from 'react-widgets/lib/Combobox'

const Sights : React.FC = () => {

    const [im, setIM] = useState<string>(ImgList.img_sample);

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