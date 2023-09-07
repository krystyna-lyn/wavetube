import {Stack} from '@mui/material';
import { categories } from '../utils/constants';

const SelectedCategory = 'New';

const Sidebar = () => 
 (
    <Stack direction="row"
    sx={{
        overflowY: 'auto',
        height: {sx: 'auto', md:'95%'},
        flexDirection: {md: 'column'}
    }}
    >

{categories.map((category=>(
    <button 
    className='category-btn' style={{ background:
    category.name === SelectedCategory && '#FC1503', color:'#fff' }}
    key={category.name}
    >
        <span>{category.item}</span>
        <span>{category.name}</span>
    </button>
))
)
}

    </Stack>
  )


export default Sidebar