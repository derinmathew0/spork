import React, { useContext } from "react";
import { Card, CardContent, TextField, CardActions, Button, Grid } from "@material-ui/core";
import Context from "./Context";
import frontpageImg from "../assets/front.png";

export default function AddUser({ history }) {
    const ctx = useContext(Context);

    function handleSubmit(event) {
        //Make a network call somewhere
        event.preventDefault();
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit}>
                <Card square style={{ maxWidth: "100vh", marginLeft: "15%" }}>
                    <CardContent>
                        <Grid container direction="column">
                            <TextField label="Name" type="text" required />
                            <TextField label="Email" type="email" required />

                        </Grid>
                    </CardContent>
                    <CardActions style={{ float: 'right' }} >
                        <Button type="submit" variant="contained" color="secondary" >
                            Save
          </Button>
                    </CardActions>
                </Card>
                <img src={frontpageImg} alt="" className="front-page-img" />
            </form>
        </div>
    );
}
