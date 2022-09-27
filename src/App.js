import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// Uncomment untuk memuat daftar kontak
import contactsJSON from './data/contacts.json';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import { useState } from 'react';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContact] = useState(contactsJSON);

  const addContact = (contact) => {
    setContact([...contacts, contact]);
  }

  // console.log(contact)
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Header />
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <ContactForm addContact={addContact} />
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Contact data={contacts} />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};


export default App;
