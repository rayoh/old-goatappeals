import React, {Component} from 'react';
import Grid from "@material-ui/core/Grid";

class Success extends Component {
    render() {
        return (
            <Grid item>
                <h1 style={{textAlign: "center", color: "#00e676"}}>¡Tu apelación ha sido subida! Será revisada por los moderadores lo antes posible</h1>
                <h4>Espere un tiempo para que revisen tu apelación. Abusar de este sistema puede resultar en sanción.</h4>
            </Grid>
        );
    }
}

export default Success;
