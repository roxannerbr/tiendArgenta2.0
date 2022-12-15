import React,{useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Lista from './Lista.jsx';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
//import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



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

  
function Admin() {

        const [productos, setProductos] = useState([]) 
        const [categorias, setCategorias] = useState([]) 
        const [loading,setLoading] = useState(false)
        const [value, setValue] = useState(1);
        const [secondary, setSecondary] = useState(false);

        useEffect(() => {
          setLoading(true)
          fetch("http://localhost:3012/api/productos")
          .then((response) => response.json())
          .then((valores) => {
            setCategorias(valores.result);
            setLoading(false)
          })
          .catch(error => console.log(error))
        }, [loading])
        
        console.log(categorias)
       
        const handleChange = (event, newValue) => {
          setValue(newValue);
        }

        function createData(name, titulo, precio, descuento, stock) {
          return { name, titulo, precio, descuento, stock };
        }
        
              const rows = [
                
          createData(),
          createData(),
          createData(),
          createData(),
          createData(),
        ];
     
  return (

    <div>
        
    <Box sx={{ width: '100%' }} >

      <Box>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Cotillón" />
        <Tab label="Coleccionables" />
        <Tab label="Indumentaria" />
        <Tab label="Novedades" />
        <Tab label="prueba" />

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
          {categorias.map(productos=>              
                <Lista
                imagen={productos.imagen}
                titulo={productos.titulo}
                categoria="productos"
                descripcion={productos.descripcion}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={1}>
        <h1>COLECCIONABLES</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
          {categorias.map(productos=>              
                <Lista
                imagen={productos.imagen}
                titulo={productos.titulo}
                categoria="productos"
                descripcion={productos.descripcion}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={2}>
        <h1>INDUMENTARIA</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
          {categorias.map(productos=>              
                <Lista
                imagen={productos.imagen}
                titulo={productos.titulo}
                categoria="productos"
                descripcion={productos.descripcion}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      <TabPanel value={value} index={3}>
        <h1>NOVEDADES</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>
        <div>
          {categorias.map(novedades=>              
                <Lista
                imagen={novedades.imagen}
                titulo={novedades.titulo}
                categoria="novedades"
                descripcion={novedades.descripcion}
                secondary={secondary}
                setSecondary={setSecondary}
                />  
          )   }     
        </div>      
      </TabPanel>

      {/* prueba */}

      <TabPanel value={value} index={4}>
        <h1>PRUEBA</h1>
        <NavLink to={'/admin/crear/productos'}>
        <Button variant="contained" color="success">crear producto</Button>
        </NavLink>     

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>cotillon</TableCell>
            <TableCell align="right">titulo</TableCell>
            <TableCell align="right">precio</TableCell>
            <TableCell align="right">descuento</TableCell>
            <TableCell align="right">stock</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.titulo}</TableCell>
              <TableCell align="right">{row.precio}</TableCell>
              <TableCell align="right">{row.descuento}</TableCell>
              <TableCell align="right">{row.stock}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </TabPanel>

    </Box>
    </div>
  )
}

export default Admin
