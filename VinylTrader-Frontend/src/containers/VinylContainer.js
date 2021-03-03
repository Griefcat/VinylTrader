import React, { Component } from 'react'
import VinylCard from '../components/VinylCard'
import AddVinylButton from '../components/AddVinylButton'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"


const useStyles = makeStyles({
    gridContainer: {
        paddingLeft: "20px",
        paddingRight: "20px"
    }
});

export default class VinylContainer extends Component {
    
    render() {
        console.log(this.props)
        
        return (
            
            <div>
                Your Vinyls
                <AddVinylButton></AddVinylButton>
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
