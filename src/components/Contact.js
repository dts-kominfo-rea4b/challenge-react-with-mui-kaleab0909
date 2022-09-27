// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <div className='contact'>
            {
                <div className='box'>

                    <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
                        {
                            data.map((list, index) => {
                                return (
                                    <React.Fragment key={index}>
                                        <ListItem >
                                            <ListItemAvatar>
                                                <Avatar sx={{ width: 70, height: 70, mr: 3 }} alt="User" src={list.photo} />
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={list.name}
                                                secondary={
                                                    <div>
                                                        <div>{list.phone}</div>
                                                        <div>{list.email}</div>
                                                    </div>
                                                }
                                            />
                                        </ListItem>
                                        <Divider />
                                    </React.Fragment>

                                )
                            })
                        }
                    </List>
                    {/* <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline' }}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            Ali Connors
                                        </Typography>
                                        {" — I'll be in your neighborhood doing errands this…"}
                                    </React.Fragment>
                                }
                            />

                        </ListItem>
                        <Divider variant="inset" component="li" /> */}

                </div>
            }
        </div >
    );
};

export default Contact;
