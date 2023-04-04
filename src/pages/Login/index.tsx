/* import { Button } from "../../components/Button"; */
import { Button, FormControl, TextField } from '@mui/material';
import { Title } from "../../components/Title";
import { BaseLayout } from '../../layout/BaseLayout';
import InputAdornments from '../../components/InputAdornments';

export function Login() {
    return (
        <BaseLayout appBarTitle="Login">
            
                <Title text='Login' />
            
                <FormControl>
                    
                    <TextField id="outlined-basic" label="E-mail" variant="outlined" sx={{
                        background: 'white',
                        color: 'white',
                        marginTop:'10px',
                    }} />
                    
                    <InputAdornments></InputAdornments>

                    <Button variant='contained' color='primary' sx={{
                        background: 'white',
                        color: 'black',
                        marginTop:'10px',
                    }}>Detalhes</Button>

               </FormControl>

        </BaseLayout>
    )
}