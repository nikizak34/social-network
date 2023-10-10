import React, {ChangeEvent, useEffect, useState} from 'react';
import {Input} from "@material-ui/core";


type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div style={{textAlign: "right", fontStyle: "italic"}}>
            <span><b>Status: </b></span>
            {!editMode
                ?
                <span onDoubleClick={() => setEditMode(true)}>{status || 'No status'}</span>
                :
                <Input onChange={onStatusChange}
                       autoFocus
                       onBlur={deactivateEditMode}
                       value={status}/>}
        </div>

    );
}


