import { useState, useEffect, useContext } from "react";
import { ExercisesContext } from "../contexts/exercisesContext";

import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function useBaseRows(selectedExercises) {
  const [baseRows, setBaseRows] = useState([]);

  useEffect(() => {
    const filtered = selectedExercises.selected.filter((name) => name);
    const rows = filtered.map((name, index) => ({
      name,
      index,
      isRepsMode: true,
    }));
    setBaseRows(rows);
  }, [selectedExercises]);

  return { baseRows, setBaseRows };
}

function useManualRows() {
  const [manualRows, setManualRows] = useState([]);

  const addRow = () => {
    setManualRows((prev) => {
      return [
        ...prev,
        {
          id: prev.length,
          isRepsMode: true,
        },
      ];
    });
  };

  return { manualRows, addRow, setManualRows };
}

function WorkoutBuilder() {
  const selectedExercises = useContext(ExercisesContext);

  const { baseRows, setBaseRows } = useBaseRows(selectedExercises);
  const { manualRows, addRow, setManualRows } = useManualRows();

  const rows = [
    ...baseRows.map((row, index) => ({
      ...row,
      globalIndex: index,
    })),
    ...manualRows.map((row) => ({
      ...row,
      globalIndex: baseRows.length + manualRows.indexOf(row),
    })),
  ];

  function handleNumberInput(e) {
    e.preventDefault();
    const inputValue = e.target.value;
    const sanitizedValue = inputValue.replace(/[^0-9]/g, '');
    e.target.value = sanitizedValue;
  }
  

  function toggleMode(globalIndex) {
    if (globalIndex < baseRows.length) {
      // Index is within baseRows, update it
      setBaseRows((prevBaseRows) => {
        return prevBaseRows.map((row, index) => {
          if (index === globalIndex) {
            return {
              ...row,
              isRepsMode: !row.isRepsMode,
            };
          }
          return row;
        });
      });
    } else {
      // Index is within manualRows, subtract offset
      const manualIndex = globalIndex - baseRows.length;

      setManualRows((prevManualRows) => {
        return prevManualRows.map((row, index) => {
          if (index === manualIndex) {
            return {
              ...row,
              isRepsMode: !row.isRepsMode,
            };
          }
          return row;
        });
      });
    }
  }

  return (
    <Stack spacing={2}>
      {rows.map((row) => (
        <Stack key={`${row.name}-${row.id}`} direction="row" spacing={2}>
          <TextField label="Name" value={row.name} />

          {row.isRepsMode ? (
            <>
              <TextField
                label="Reps"
                type="number"
                onInput={handleNumberInput}
              
              />
              <TextField label="Sets" type="number"  onInput={handleNumberInput}/>
            </>
          ) : (
            <TextField label="Time" type="number" onInput={handleNumberInput}/>
          )}

          <Button
            onClick={() => {
              toggleMode(row.globalIndex);
            }}
          >
            Toggle Mode
          </Button>
        </Stack>
      ))}

      <Button onClick={addRow}>Add Row</Button>
    </Stack>
  );
}

export default WorkoutBuilder;
