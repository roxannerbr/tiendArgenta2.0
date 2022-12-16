import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
//import { styled } from '@mui/material/styles';
  

function Lista(props) {

  /* const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
  })); */
     
  return (
    
          <List className='lista'>
              
                <ListItem
                  secondaryAction={
                    /* icono tacho basura */
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  {/* imagen ilustrativa */}
                  <ListItemAvatar>
                    <Avatar>
                    <img src={`/productos/${props.imagen}`} />
                    </Avatar>
                  </ListItemAvatar>
                  {/* texto descriptivo */}
                  <ListItemText
                    primary={props.nombre}                    
                  />
                  {/* descrpcion secundaria */}
                   {<ListItemText
                    primary={props.titulo}
                    secondary={props.secondary ? props.descripcion : null}
                  />}
                </ListItem>,
              
            </List>
            
           
  )
}

export default Lista