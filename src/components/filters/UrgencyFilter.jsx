import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { TaskContext } from '../../context/TaskContex';
import { useContext } from 'react';


export default function UrgencyFilter({handlePriorities, priorities}) {

  return (
    <ToggleButtonGroup
      value={priorities}
      onChange={handlePriorities}
      aria-label="text formatting"
    >
      <ToggleButton value="high priority" aria-label="highPriority">
        High Priority
      </ToggleButton>
      <ToggleButton value="medium priority" aria-label="mediumPriority">
        Medium Priority
      </ToggleButton>
      <ToggleButton value="low priority" aria-label="lowPriority">
        Low Priority
      </ToggleButton>
    </ToggleButtonGroup>
  );
}