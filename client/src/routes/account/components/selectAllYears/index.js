import React from 'react';
import {
    Input,
    Label,
} from 'reactstrap';
import style from './style.scss';



const SelectAllYears = (props, error = null, inline = false) => {

    return (
        <div>
            <Input type="checkbox"
                onClick={(event) => {
                let selectAll = [];
                props.yearLevs.map(yr => selectAll.push(yr.value));
                event.target.checked
                      ? props.allYears("yearLevels", selectAll)
                      : props.allYears("yearLevels", [])
                }} />
            <Label>Select all years</Label>
        </div>

    )
}

export default SelectAllYears;