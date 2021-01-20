import React from 'react'

export default function UserInfo(props) {
    console.log(props.user.AccountName)

    const yeah = props.user["Pulse-313465297"]

    return (
        <div>
            <ul>
                <li>Username: {props.user.AccountName}</li>
                <li>Country: {props.user.Country}</li>
                <li>Pulses: {props.user.Pulses}</li>
                <li>Last Pulse: {props.user.LastPulse}</li>
                <li>Up Time: {props.user.UptimeLong}</li>
                <li>Clickies: {props.user.Clicks}</li>
                <li>Average Clickies Per Second: {props.user.AvKPS}</li>
                <li>Average Clickies Per Pulse: {props.user.AvClicksPerPulse}</li>
                <li>Clackies: {props.user.Keys}</li>
                <li>Average Clackies Per Second: {props.user.AvKPS}</li>
                <li>Average Clackies Per Pulse: {props.user.AvKeysPerPulse}</li>
                <li>Download: {props.user.Download}</li>
                <li>Upload: {props.user.Upload}</li>                
            </ul>
        </div>
    )
}
