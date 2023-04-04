import { ButtonBase } from '@mui/material'
import './style.css'

type MenuItemProps = {
    icon: React.ReactNode
    text:string
}

export function MenuItem({icon,text}:MenuItemProps){
    return (
        <>
        <ButtonBase sx={{
            /* width:'100px',
            height:'100px',
            borderRadius:'8px',
            border: '0',
            backgroundColor:'#764ba2', */
            
            
                /* width: '100px',
                height: '100px',
                borderRadius:'8px',
                border: '0',
                backgroundColor:'#764ba2',
                color: 'white',
                display: 'flex',
                flex-direction: 'column',
                flex
                gap: '4px',
                align-items: 'center',
                justify-content: 'center',
                text-decoration: 'none', */
            
        }}>{icon}{text}</ButtonBase>
        </>
    )
}