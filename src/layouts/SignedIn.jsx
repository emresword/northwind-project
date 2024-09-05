import React from 'react'
import { Image,Dropdown, DropdownItem, DropdownMenu, MenuItem } from 'semantic-ui-react'

export default function SignedIn(props) {
    return (
        <div>
            <MenuItem>
                <Image avatar spaced="right" src="https://avatars.githubusercontent.com/u/122164861?v=4"/>
                   
                    <Dropdown pointing="top left" text="Emre">
                        <DropdownMenu>
                            <DropdownItem text ="My informations" icon="info"/>

                            <DropdownItem onClick={props.signOut} text ="exit" icon="sign-out"/>

                        </DropdownMenu>

                    </Dropdown>
                
            </MenuItem>
        </div>
    )
}
