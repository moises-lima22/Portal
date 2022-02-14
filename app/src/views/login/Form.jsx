import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Button from '@mui/material/Button';



export default function FormLogin() {
    return (
        <>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        e-mail
                    </InputLabel>
                    <Input
                        type="email" id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="input-with-icon-adornment">
                        senha
                    </InputLabel>
                    <Input
                        type="password" id="input-with-icon-adornment"
                        startAdornment={
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        }
                    />
                </FormControl>

            <Button variant="contained"> Olá Mundo</Button>
            </Box>
        </>
    );
}
