/* import { Button } from "../../components/Button"; */
import { Button, FormControl, TextField } from '@mui/material';
import { Title } from "../../components/Title";
import { BaseLayout } from '../../layout/BaseLayout';

export function Login() {
    return (
        <BaseLayout appBarTitle="Login">
            
                <Title text='Login' />
            
                <FormControl>
                    <input type="email" name="email" placeholder="" />
                    <input type="password" name="senha" placeholder="Senha" />
                    <TextField id="outlined-basic" label="E-mail" InputAdornment=""/>
                    <TextField  type="email" label="E-mail" variant="outlined" sx={{
                        
                        marginTop:'10px',
                    }}/>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" sx={{
                        background: 'white',
                        color: 'white',
                        marginTop:'10px',
                    }} />
                    
                    <Button variant='contained' color='primary' sx={{
                        background: 'white',
                        color: 'black',
                        marginTop:'10px',
                    }}>Detalhes</Button>



               </FormControl>

               {/* <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <OutlinedInput
            id="outlined-adornment-weight"
            value={values.weight}
            onChange={handleChange('weight')}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="outlined-weight-helper-text"
            inputProps={{
              'aria-label': 'weight',
            }}
            labelWidth={0}
          />
          <FormHelperText id="outlined-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl> */}

        </BaseLayout>
    )
}