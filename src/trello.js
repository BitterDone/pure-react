import React, { useState } from 'react';
import { faFolder, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buildSingleFileRow = file => (<div key={file.id} style={{
    backgroundColor: 'white',
    display: 'flex',
    margin: 8,
    padding: 5,
    border: '1px solid white',
    borderRadius: 6,
    alignItems: 'center',
}}>{file.message}
</div>)

const Column = ({list}) => (<div>
    {list.map(file => buildSingleFileRow(file))}
</div>)

const updateTaskList = (event, tempTask, setTempTask, taskList, setTaskList) => {
    // console.log(event.charCode) // 13
    // console.log(event.which)    // 13
    // console.log(event.key)      // Enter
    // console.log(event.keyCode)  // 0 always
    // console.log(event.code)     // undef always
    if (!event) return;
    if (event.which !== 13) return

    const nextId = taskList[taskList.length - 1].id + 1

    const updatedTaskList = [
        ...taskList,
        { id: nextId, message: tempTask }
    ]
    setTaskList(updatedTaskList)
    setTempTask('')
}

const Trello = ({fileList}) => {
    const testData = [
        { id: 0, message: 'Initial commit' },
        { id: 1, message: 'Initial commit' },
        { id: 2, message: 'Added a readme' },
        { id: 3, message: 'super long to test overflow hidden with ellipses when it cuts off' },
    ]
    const [taskList, setTaskList] = useState(testData)
    const [tempTask, setTempTask] = useState('')

    return (<div style={{
        border: '1px solid gray',
        backgroundColor: 'lightgray',
        width: 250,
        display: 'flex',
        flexDirection: 'column',
        padding: 3,
    }}>
        Phone Features
        <Column list={taskList} />
        <input type="search"
            style={{
                margin: 8,
                backgroundColor: 'lightgray',
                border: '0px solid white',
            }}
            placeholder="Add a card..."
            onChange={event => setTempTask(event.target.value)}
            onKeyPress={event => updateTaskList(event, tempTask, setTempTask, taskList, setTaskList)}
        />
    </div>)
}

export default Trello;
