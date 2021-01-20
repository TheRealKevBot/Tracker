import React from 'react'

export default function UserInfo(props) {
    console.log(props.user.AccountName)

    const yeah = props.user["Pulse-313465297"]

    return (
        <div>
            <h2>Username: {props.user.AccountName}</h2> 
            <h3> Clickies: {props.user.Clicks}</h3>
            <h4> Clackies: {props.user.Keys}</h4>
            <h5> Up Time: {props.user.UptimeLong}</h5>
        </div>
    )
}
