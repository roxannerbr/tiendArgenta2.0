import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Lista from './Lista.jsx';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
//import { styled } from '@mui/material/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (

      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  
function CreacionProducto() {

        const [categorias, setCategorias] = useState([])
        const [loading,setLoading] = useState(true)
        const [value, setValue] = useState(1);
        const [secondary, setSecondary] = useState(false);

        useEffect(() => {
          setLoading(true)
          fetch("http://localhost:3012/api/categorias")
          .then((response) => response.json())
          .then((valores) => {
            /* console.log(valores) */
            setCategorias(valores.data);

            setTimeout(() => {
          setLoading(false)
        }, 2000)
      })
      .catch(error => console.log(error))
  }, [loading])
        
        console.log(categorias)
       
        const handleChange = (event, newValue) => {
          setValue(newValue);
        }

  return (

    <div className='crearProd'>
        
    <Box sx={{ width: '100%' }} >
    
      <Box>       
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Cotillón" />
        <Tab label="Coleccionables" />
        <Tab label="Mujer" />
        <Tab label="Hombre" />
        <Tab label="Infantil" />
      </Tabs>      
      </Box>

      {/* espacio check para mostrar o no descrp sec */}
      <FormControlLabel
                control={
                  <Checkbox
                    checked={secondary}
                    onChange={(event) => setSecondary(event.target.checked)}
                  />
                }
                label="Mostrar descripcion" 
              />
    
      <TabPanel value={value} index={0}>
        <h1>COTILLÓN</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>          
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.Cotillon.map(producto =>              
                <Lista
                imagen={producto.imagen}
                titulo={producto.titulo}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )}     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>COLECCIONABLES</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
            <p>Cargando...</p>
            :
          categorias.Coleccionables.map(producto=>              
                <Lista
                imagen={producto.imagen}
                titulo={producto.titulo}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h1>MUJER</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.IndumentariaMujer.map(producto =>              
                <Lista
                imagen={producto.imagen}
                titulo={producto.titulo}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h1>HOMBRE</h1>
        <NavLink to={'/admin/crear/producto'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.IndumentariaHombre.map(producto=>              
                <Lista
                imagen={producto.imagen}
                titulo={producto.titulo}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={4}>
        <h1>INFANTIL</h1>
        <NavLink to={'/admin/crear/producto'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
        {
        loading ? 
              <p>Cargando...</p>
              :
          categorias.IndumentariaInfantil.map(producto=>              
                <Lista
                imagen={producto.imagen}
                titulo={producto.titulo}
                stock={producto.stock}
                precio={producto.precio}
                descuento={producto.descuento}
                descripcion={producto.descripcion}
                categoria={producto.categoriasId}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>
    
    </Box>
    </div>
  )
}

export default CreacionProducto