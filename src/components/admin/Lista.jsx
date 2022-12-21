import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import Swal from 'sweetalert2'
//import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material/styles';
  
const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
})); 

function Lista(props) {

  /* const navigate = useNavigate(); */

  const handleDelete = () => {
    Swal.fire({
        title: '¿Estas seguro de querer eliminar este producto?',
        text: "Esta accion es Irreversible",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Elimina todo!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:3012/productos/admin/destroy/${props.id}?categoria=${props.categoria}`)
            .then(productoEliminado => {
                Swal.fire(
                    'Producto eliminado!',
                    `${props.nombre}.`,
                    'success'
                )
                window.location.reload(true);
            })
        }
    })
}
     
  return (
    <Demo>
          <List className='lista'>
              
                <ListItem
                  secondaryAction={
                    /* icono tacho basura */
                    <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  {/* imagen ilustrativa */}
                  <ListItemAvatar>
                    <Avatar alt="" src={`/assets/productos/Col-pelota.png`}/>
                    {/* {`/images/productos/${props.categoria}/${props.imagen}`} */}
                  </ListItemAvatar>
                  {/* descrpcion secundaria */}
                   {<ListItemText
                    primary={props.titulo}
                    secondary={props.secondary ? props.descripcion : null}
                  />}
                </ListItem>,
              
            </List>
            </Demo>
            
           
  )
}

export default Lista