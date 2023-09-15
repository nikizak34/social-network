import React, {ChangeEvent, useEffect, useState} from 'react';


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
    const onStatusChange=(e: ChangeEvent<HTMLInputElement>)=>{
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode
                ?
                <div>
                  <b>Status:</b>  <span onDoubleClick={() => setEditMode(true)}>{status || '---'}</span>
                </div>
                :
                <div>
                    <input onChange={onStatusChange}
                           autoFocus onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>

    );
}


