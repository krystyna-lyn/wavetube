import {Link} from 'react-router-dom';
import {Stack} from '@mui/material';

import {logo} from '../utils/constants'

const Navbar = () => 
 (
    <Stack direction="row"
     alignItems="center"
    sx={{position: 'sticky', backgroundColor: '#000',
    top: '0',justifyContent: 'space-between'}} >

      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt='logo' height={45}/>
     
      </Link>
    </Stack>
  )


export default Navbar