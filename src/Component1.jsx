import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LeaderboardOutlinedIcon from '@mui/icons-material/LeaderboardOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';

const Component1 = () => {
    return (
        <>
            <div className='mb-3'>
                <h3><span className='spanimg'><img src="https://devildogtech.com/wp-content/uploads/2022/10/overseerr.png" alt="" /></span>Omoi</h3>
            </div>
            <div class="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <button class="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className='me-3'><HomeOutlinedIcon /></span>Home</button>
                <button class="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"><span className='me-3'><LeaderboardOutlinedIcon /></span>Analytic</button>
                <button class="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"><span className='me-3'><ExploreOutlinedIcon /></span>Explore</button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span className='me-3'><LocalMallOutlinedIcon /></span>Shop</button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span className='me-3'><TextsmsOutlinedIcon /></span>Index</button>
                <br />
                <p>Tools</p>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span className='me-3'><SettingsOutlinedIcon /></span>Setting</button>
                <button class="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"><span className='me-3'>< HelpOutlineOutlinedIcon /></span>Help</button>
                <br />
                <p>Project</p>
                <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className='me-3'><FolderOpenOutlinedIcon /></span>Amazon</button>
                <button class="nav-link" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"><span className='me-3'><FolderOpenOutlinedIcon /></span>Invinity HQ</button>
            </div>
        </>
    )
}

export default Component1
