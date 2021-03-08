import React from 'react'
import Button from '@material-ui/core/Button';

export default function LogOutButton() {

    // const handleLogout = () => {
    //     this.setState({loggedIn: false})
    //   };

    return (
        <div>
            <Button variant="contained" color="primary" type="button">
        Logout
      </Button>
        </div>
    )
}
