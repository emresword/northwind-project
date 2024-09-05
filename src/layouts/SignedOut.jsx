import React from 'react'
import { Button, MenuItem } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <MenuItem>
                <Button onClick={props.signIn} primary>Login</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Register</Button>
            </MenuItem>




        </div>
    )
}
