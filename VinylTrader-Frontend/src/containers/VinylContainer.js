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
          if (prevprops.user.id != this.props.user.id)
          {fetch(url + this.props.user.id)
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
                <LogOutButton></LogOutButton>
                <AddVinylButton handleSubmit={this.props.handleSubmit} user={this.props.user}></AddVinylButton>
                <div>
                Your Vinyl Collection
                </div>
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
