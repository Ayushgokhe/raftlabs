import React from 'react'
import './App.css'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const App = () => {
  return (
    // <div className='backkgrd'>
    //   <div className='container'>
    //     <div className='content1'>
    //       <Component1/>
    //     </div>
    //     <div className='content2'>
    //       <Component2/>
    //     </div>
    //     <div className='content3'></div>
    //   </div>
    // </div>
    <div className='backkgrd'>
      <div className='container'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} sx={{ marginTop: '5px' }}>
            <Grid item xs={2} sx={{ borderRight: '1px solid' }}>
              <Component1 />
            </Grid>
            <Grid item xs={7}>
              <Component2 />
            </Grid>
            <Grid item xs={3}>
              <Component3 />
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default App
