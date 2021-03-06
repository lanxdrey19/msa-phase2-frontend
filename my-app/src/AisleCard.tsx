import React from 'react';
import { Grid, Typography, Card, CardActionArea,CardContent,CardMedia, Button,CardActions, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import { FacebookShareButton, FacebookIcon} from 'react-share'
import './AisleCard.css';



function AisleCard(props : any) {
    
    return (
        <Grid 
        container
        direction="row"
        justify="center"
        alignItems="center"
        
        
        >

        
        
        <Grid item xs = {12} md = {6} className="aisle-card">
            <Card className="cardRoot">
                <CardActionArea>
                
                
                <CardContent>
                    <Typography align="center" gutterBottom variant="h5" component="h2">
                    #{props.aisleID}
                    <br></br>
                    {props.aisleName}
                    <br></br>
                    
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    
                    Sections:
                    
                    {props.sections.map((sections : any ,key : any) => (
                        <span key={key}>
                            <br></br>
                            {sections.sectionName + " "}
                            
                        </span>
                    ))}
                    

                    
                        
                    <br></br>
                    <br></br>
                    
                    
                    </Typography>
                    
                </CardContent>
            
                </CardActionArea>
                <FacebookShareButton
                url="https://realtimeaislemsa2020p2.azurewebsites.net/"
                quote="Look at what's in your favorite aisle!"
                hashtag="#RealTimeAisle">
                    <br></br>
                    Share to
                    <br></br>
                    
                <FacebookIcon size={32} round />
            </FacebookShareButton>
                
            </Card>
            
            
        </Grid>
        
        </Grid>
    ) 
}

export default AisleCard;