// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

const ContactForm = ({ addContact }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const [newContact, setNewContact] = useState({
        name: "",
        email: "",
        phone: "",
        photo: ""
    })
    const handleChange = (event) => {
        setNewContact({ ...newContact, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addContact(newContact);
        setNewContact({ name: "", phone: "", email: "", photo: "" });
        event.target.reset();
    };

    return (
        <div className="contact-form">
            <form onSubmit={handleSubmit}>
                <Box
                    sx={{
                        mr: 2,
                    }}
                >
                    <TextField required autoFocus sx={{ m: 1 }} fullWidth id="name" label="Name" variant="outlined"
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                    <TextField required sx={{ m: 1 }} fullWidth id="phone" label="Phone" variant="outlined"
                        type="number"
                        name="phone"
                        onChange={handleChange}
                    />
                    <TextField required sx={{ m: 1 }} fullWidth id="email" label="Email" variant="outlined"
                        type="email"
                        name="email"
                        onChange={handleChange}
                    />
                    <TextField required sx={{ m: 1 }} fullWidth id="photo" label="Photo URL" variant="outlined"
                        type="text"
                        name="photo"
                        onChange={handleChange}
                    />
                    <Button sx={{ ml: 1, mt: 1 }} variant="contained" type="submit">ADD NEW</Button>
                </Box>
            </form>
        </div >
    );
}

export default ContactForm;

// https://www.learnbestcoding.com/post/40/reactjs-form-submit