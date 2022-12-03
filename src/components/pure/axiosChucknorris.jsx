import React, { useEffect, useState } from 'react';
import getJokes from '../../services/chuckAxiosService';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import { style } from '@mui/system';


const AxiosChucknorris = () => {

    const [newJokes, setNewJokes] = useState(null);
    const [like, setLikes] = useState(0);
    const [disLike, setDisLike] = useState(0);

    const bien = like;
    const mal = disLike;

    let si = true; 


    useEffect(() => {
        obtainsJokesChuck()
    }, []);


    const obtainsJokesChuck = () => {
        getJokes()
            .then((response) => {
                console.log(response);
                setNewJokes(response.data.value)
            })
            .catch((error) => alert(`error al obtener el chiste ${error}`))

    }

    const newLikes = () => {
        setLikes(like + 1)

    }

    const newDisLikes = () => {
        setDisLike(disLike + 1)
    }





    const bull = (
        <Box
            component="span"
            sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
            •
        </Box>
    );


    return (
        <div>

            <Card sx={{ maxWidth: 400, maxLength: 400 }}>
                <CardContent>
                    <Typography variant="h5" component="div">
                        New Jokes of Chucknorris
                    </Typography>
                    <Typography sx={{ mt: 3.5, fontSize: 16 }} variant="body2">
                        {newJokes}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Stack direction="row" spacing={10}>
                        <Button onClick={obtainsJokesChuck} variant="contained" endIcon={<SendIcon />}>
                            Send
                        </Button>


                        <Stack direction="row" spacing={2}>
                            <IconButton  onClick={newLikes} color="primary" aria-label="delete">
                                <ThumbUpAltIcon />
                                <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                                    {like}
                                </Typography>
                            </IconButton>

                            <IconButton onClick={newDisLikes} color="inherit" aria-label="delete">
                                <ThumbDownAltIcon />
                                <Typography sx={{ mb: 1.5, fontSize: 14 }} color="text.secondary">
                                    {disLike}
                                </Typography>
                            </IconButton>
                        </Stack>

                    </Stack>
                </CardActions>
            </Card>



        </div>
    );
}

export default AxiosChucknorris;
