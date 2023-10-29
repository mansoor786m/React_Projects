import React from 'react'

export default function Alert(props) {



    return (
        <div class="alert alert-primary w-50 mx-auto" role="alert">
           <strong>{props.alert.type}</strong>: {props.alert.msg}
        </div>
    )
}
