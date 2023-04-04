import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { RiEyeCloseLine, RiEyeLine } from 'react-icons/ri';


export default function InputAdornments() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
}

return (
  <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    <div>
      
      <FormControl variant="outlined" sx={{
                        background: 'white',
                        color: 'black',
                        marginTop:'10px',
                        borderColor: 'red'
                    }}>
                      
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <RiEyeCloseLine /> : <RiEyeLine />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  </Box>
);
}