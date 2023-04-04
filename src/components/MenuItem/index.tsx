import { Box, ButtonBase } from '@mui/material'

type MenuItemProps = {
    icon: React.ReactNode
    text:string
}

export function MenuItem({icon,text}:MenuItemProps){
    return (
        <>
         
        <ButtonBase sx={{
            width:'100px',
            height:'100px',
            borderRadius:'8px',
            border: '0',
            backgroundColor:'#764ba2',
            color: 'white',
            display: 'flex',
            flexDirection:'column',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            
        }}>{icon}{text}</ButtonBase>
        
        </>
    )
}