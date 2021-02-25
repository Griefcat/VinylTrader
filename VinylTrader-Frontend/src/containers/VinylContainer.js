import React, { Component } from 'react'
import VinylCard from '../components/VinylCard'
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from "@material-ui/core"


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });


export default class VinylContainer extends Component {
    
    render() {
        return (
            <div>
                <Grid container spacing={4}>
                    <Grid item >
                        <VinylCard/>
                    </Grid>
                    <Grid item >
                        <VinylCard/>
                    </Grid>
                    <Grid item >
                        <VinylCard/>
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
