import React from 'react';
import { faFolder, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const buildSingleFileRow = file => (<div key={file.id} style={{
    display: 'flex',
    padding: 5,
    borderBottom: '1px solid gray',
    alignItems: 'center',
}}>{file.latestCommit.message}
</div>)

const Column = ({list}) => (<div>
    {list.map(file => buildSingleFileRow(file))}
</div>)

const Trello = ({fileList}) => (<div style={{
    border: '1px solid gray',
    display: 'flex',
    flexDirection: 'column',
    
}}>
    Phone Features
    <Column list={fileList} />
</div>)

export default Trello;
