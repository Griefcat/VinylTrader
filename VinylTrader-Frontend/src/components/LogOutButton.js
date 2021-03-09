import React from 'react'
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

export default function LogOutButton() {

    // const handleLogout = () => {
    //     this.setState({loggedIn: false})
    //   };

    const history = useHistory()

    return (
        <div>
            <Button onClick = {()=> history.push('/')}variant="contained" color="primary" type="button">
        Logout
      </Button>
        </div>
    )
}
