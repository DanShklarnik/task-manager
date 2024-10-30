import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import React from 'react';

const PriorityDropdown = ({ value, handleChange }) => {
    return (
        <FormControl variant="outlined" fullWidth>
            <InputLabel id="dropdown-label">How Urgent is the task?</InputLabel>
            <Select
                name = "priority"
                labelId="dropdown-label"
                value={value}
                onChange={handleChange}
                label="How Urgent is the task?"
            >
                <MenuItem value="high priority">High Priority</MenuItem>
                <MenuItem value="medium priority">Medium Priority</MenuItem>
                <MenuItem value="low priority">Low Priority</MenuItem>
            </Select>
        </FormControl>
    );
};

export default PriorityDropdown;