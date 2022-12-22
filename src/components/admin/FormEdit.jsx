import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SendIcon from '@mui/icons-material/Send';


export default function FormEdit(){
  
  return (    
    <Stack className="crear-editar"
      component="form"
      sx={{
        width: '98%', 
        margin: '10px',
        display: 'flex',
        bgcolor:'var(--cyan);'
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >

<div className="adminTop"><h1>Editar producto</h1><div className="btncrear">
                <a href="/admin/listar">
                    <button type="button" className="btn crear"><i className="fas fa-arrow-circle-left"></i></button>
                </a>
            </div>
            </div>  
            <form action="/admin/crear" method="post" enctype="multipart/form-data">    
    <div className="agregar">
    
    <Box sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Categoria
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'categoria',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Cotillon</option>
          <option value={2}>Coleccionables</option>
          <option value={3}>Hombre</option>
          <option value={4}>Mujer</option>          
          <option value={5}>Infantil</option>             
        </NativeSelect>
      </FormControl>
    </Box>

    <Box sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Subcategoria
        </InputLabel>
        <NativeSelect
          defaultValue={0}
          inputProps={{
            name: 'subCategoria',
            id: 'uncontrolled-native',
          }}
        >
          <option value={1}>Camisetas</option>
          <option value={2}>Pantalones</option>
          <option value={3}>Accesorios</option>
          <option value={4}>Otros</option>     
        </NativeSelect>
      </FormControl>
    </Box>

    <TextField sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)'}}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Titulo"
        variant="filled"
      />
    <TextField sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Precio"
        variant="filled"
      />
      <TextField sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Descuento"
        variant="filled"
      />
      <TextField sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Stock"
        variant="filled"
      />
      <TextField sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }}
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Descripcion"
        variant="filled"
      />
      <Stack sx={{ width: '98%', margin: '10px', bgcolor:'var(--celesteClaro)' }} direction="row" alignItems="center" spacing={2}>
      <IconButton color="primary" aria-label="upload picture" component="label">
        <input hidden accept="image/jpg,png" type="file" />
        <PhotoCamera />
      </IconButton>
    </Stack>
    </div>
    </form>

    <Button sx={{width: '25%', bgcolor: 'var(--dorado)'}} variant="contained" endIcon={<SendIcon />}>
        Aceptar cambios
      </Button>
      
    </Stack> 
  )}