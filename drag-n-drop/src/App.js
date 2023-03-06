import React, { useState } from 'react';
import initiaData from './initial-data';
import Column from './Column';
import {DragDropContext} from 'react-beautiful-dnd';
import '@atlaskit/css-reset';

function App() {
    const [state, setState] = useState(initiaData);

    const onDragEnd = result => {

    }

    return (
        <>
        <DragDropContext
            onDragEnd={onDragEnd}>
        {
            state.columnOrder.map((columnId) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map(taskId => state.tasks[taskId]);

                return <Column key={column.id} column={column} tasks={tasks} />
            })

        }
        </DragDropContext>
        </>
    )
}

export default App;