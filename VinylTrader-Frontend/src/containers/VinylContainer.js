import React, { Component } from 'react'
import VinylCard from '../components/VinylCard'
import AddVinylButton from '../components/AddVinylButton'
import LogOutButton from '../components/LogOutButton'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px"
    }
});

const url = 'http://localhost:3000/vinylsbyuser/'

export default class VinylContainer extends Component {

    componentDidUpdate(prevprops){
          if (prevprops.user.user_id != this.props.user.user_id)
          {fetch(url + this.props.user.user_id)
            .then(response => response.json())
            .then((vinyls) => 
              console.log(vinyls)
              (this.props.setVinyls(vinyls))
            )
            .catch((error) => {
              console.error(error);
            })}
      }


    
    render() {
        console.log(this.props)
        
        return (
            
            <div>
                Your Vinyls
                <LogOutButton></LogOutButton>
                <AddVinylButton handleSubmit={this.props.handleSubmit}></AddVinylButton>
                <Grid container spacing={4} className = {useStyles.gridContainer}>
                    <Grid item md={4}>
                    {this.props.vinyls.map(
                        vinyl => <VinylCard key={vinyl.id} vinyl={vinyl} deleteVinyl={this.props.deleteVinyl}/>)}
                    </Grid>
                </Grid>
                
                
                
            </div>
        )
    }
}

// {
//     this.props.vinyls.map((vinyl, index) =>
//             <div className={'vinylcard'}>
//                 <VinylCard 
//                     vinyl={vinyl}
//                     key={index}
//                 />
//                 </div>
//              )
            
// }
