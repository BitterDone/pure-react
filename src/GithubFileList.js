import React from 'react';
import { faFolder, faFileCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Time } from './tweet-component';

const commonIconStyles = () => ({
    minWidth: '5%',
})
const getIconFromType = file => {
    switch(file.type) {
        case 'folder':
            return (<FontAwesomeIcon icon={faFolder} style={{...commonIconStyles(), color: 'blue' }} />)
        case 'file':
        default:
            return (<FontAwesomeIcon icon={faFileCode} style={{...commonIconStyles(), color: 'gray' }} />)
    }
}
const buildSingleFileRow = file => (<div key={file.id} style={{
    display: 'flex',
    padding: 5,
    borderBottom: '1px solid gray',
    alignItems: 'center',
}}>
    {getIconFromType(file)}
    <div style={{
        minWidth: '20%',
        color: 'blue',
    }}>{file.name}</div>
    <div style={{
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        color: 'gray',
    }}>{file.latestCommit.message}</div>
    <div style={{
        minWidth: '20%',
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'gray',
    }}><Time time={file.updated_at} /></div>
</div>)

const GithubFileList = ({fileList}) => (<div style={{
    border: '1px solid gray',
    borderBottom: '0px',
}}>
    {fileList.map(file => buildSingleFileRow(file))}
</div>)

export default GithubFileList;
