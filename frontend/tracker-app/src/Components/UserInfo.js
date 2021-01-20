import React from 'react'

export default function UserInfo(props) {
    console.log(props.user.AccountName)

    const yeah = props.user["Pulse-313465297"]

    return (
        <div>
            <ul>
                <li>Username: {props.user.AccountName}</li>
                <li>Up Time: {props.user.UptimeLong}</li>
                <li>Clickies: {props.user.Clicks}</li>
                <li>Clackies: {props.user.Keys}</li>
                <li>Download: {props.user.Download}</li>
                <li>Upload: {props.user.Upload}</li>
                <li> Average Clickies: {props.user.AvClicksPerPulse}</li>
                <li>Average Clackies Per Pulse: {props.user.AvKeysPerPulse}</li>
                
            </ul>
        </div>
    )
}
