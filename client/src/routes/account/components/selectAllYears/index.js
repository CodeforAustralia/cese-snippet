import React from 'react';
import {
    Input,
    Label,
} from 'reactstrap';
import style from './style.scss'

// const checkboxStyle = {
//     marginTop: '0.3rem',
//     boxSizing: 'border-box',
//     padding: '0'
// }



const SelectAllYears = (props, error=null, inline=false) => {

    return (
        <div className={`custom-control custom-checkbox ${inline && style.isInline}`}>
            <Input type="checkbox"
                onClick={(event) => {
                let selectAll = [];
                props.yearLevs.map(yr => selectAll.push(yr.value));
                event.target.checked
                      ? props.allYears("yearLevels", selectAll)
                      : props.allYears("yearLevels", [])
                }} />
            <Label>Select all levels</Label>
        </div>
    )
}

export default SelectAllYears;