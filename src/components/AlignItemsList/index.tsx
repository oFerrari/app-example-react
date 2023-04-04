import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import * as React from 'react';
import {Contact} from "../../types/index"

type ContactCardProps = {
    contactData: Contact,
}

export function AlignItemsList({contactData}:ContactCardProps){
    const { name, email, picture } = contactData;
    return (
<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop:'20px', borderRadius: '10px',}}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={picture.medium} />
        </ListItemAvatar>
        <ListItemText
          primary={`${name.first} ${name.last}`} 
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {email}
              </Typography>
              <Button variant='contained' color='error' sx={{
                display:'flex',
                        background: '#764ba2',
                        color: 'white',
                        marginTop:'5px',
                        justifyContent:'center',
                        alignItems:'center'
                    }}>Detalhes</Button>
            </React.Fragment>
          }
        />
      </ListItem> {/* adicionando o elemento de fechamento para o ListItem */}
    </List>
  );
}