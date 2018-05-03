import React from 'react';

const SelectAllYears = (props) => {
    const styles = {
        display: 'inline-block',
    }

    return (
        <div style={styles}>
            <input type="checkbox" className="form-check form-check-inline" onClick={(event) => {
                const selectAll = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
                event.target.checked
                      ? props.allYears("yearLevels", selectAll)
                      : props.allYears("yearLevels", [])
                }} />
            <label className="form-check-label">Select all years</label>
        </div>

    )
}

export default SelectAllYears;