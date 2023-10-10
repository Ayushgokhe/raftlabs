import React from 'react'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import image from './image/Capture.PNG'
import EastIcon from '@mui/icons-material/East';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';

const Component3 = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <span style={{ marginTop: '7px' }}><NotificationsOutlinedIcon /></span>
        <div class="dropdown-center" style={{ marginLeft: '70px' }}>
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <span className='profileImg'><img src="https://lens-storage.storage.googleapis.com/png/0e7883023f3142fd9bdba78e201fafb1" alt="error" /></span>Jhontoson
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Action two</a></li>
            <li><a class="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '25px' }}>
        <p><span style={{ color: '#6a32dd' }}>Premium Access</span></p>
      </div>
      <div>
        <h1>Take Back Your Creative Control <span><img style={{ width: '85px' }} src={image} alt="" /></span></h1>
        <div class="dropdown-center">
          <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            The Professional Platform
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Action two</a></li>
            <li><a class="dropdown-item" href="#">Action three</a></li>
          </ul>
        </div>
      </div>
      <div className='slide1'>
        <h4 style={{ color: '#6a32dd' }}>Upgrade Now</h4>
        <span style={{ marginLeft: '60px', marginTop: '5px', color: '#6a32dd' }}><EastIcon /></span>
      </div>
      <br />
      <hr />
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <h4>October 2023</h4>
        <span className='spanArrowImg'><img src="https://www.freeiconspng.com/uploads/less-than-symbol-icon-9.png" alt="" />
          <img src="https://www.freeiconspng.com/thumbs/greater-than-sign-icon/greater-than-sign-icon-14.png" alt="" /></span>
      </div>
      <div className='monthCal' style={{margin:'20px 0px'}}>
        <ul>
          <li>Mon</li>
          <li>Tue</li>
          <li>Wed</li>
          <li>Thu</li>
          <li>Fri</li>
          <li>Sat</li>
          <li>Sun</li>
        </ul>
        <ul className='list123'>
          <li>11</li>
          <li>12</li>
          <li style={{ padding: '0px 4px', background: '#6a32dd', color: 'white', borderRadius: '30px' }}>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
        </ul>
      </div>
      <div style={{marginTop:'30px'}}>
        <table class="table" style={{fontSize:'11px', lineHeight:'30px'}}>
          <tbody>
            <tr>
              <td className='tableCompImg'>
                <img src="https://computronicsmultivision.com/wp-content/uploads/2021/12/1-12.jpg" alt="" />
              </td>
              <td className='tablePara'>
                <p><b>Meeting With Client</b></p>
                <p><VideocamOutlinedIcon/> Google Meet</p>
              </td>
              <td><QueryBuilderIcon/> 12pm</td>
            </tr>
            <tr>
              <td className='tableCompImg'>
                <img src="https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200" alt="" />
              </td>
              <td className='tablePara'>
                <p><b>Daily Report</b></p>
                <p><VideocamOutlinedIcon/> Google Meet</p>
              </td>
              <td><QueryBuilderIcon/> 3pm</td>
            </tr>
            <tr>
            <td className='tableCompImg'>
              <img src="https://play-lh.googleusercontent.com/_tslXR7zUXgzpiZI9t70ywHqWAxwMi8LLSfx8Ab4Mq4NUTHMjFNxVMwTM1G0Q-XNU80" alt="" />
            </td>
            <td className='tablePara'>
              <p><b>Daily Scrum Meeting</b></p>
              <p><VideocamOutlinedIcon/> Google Meet</p>
            </td>
              <td><QueryBuilderIcon/> 5pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Component3
