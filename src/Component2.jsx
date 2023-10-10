import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import image from './image/Capture.PNG'
import ListIcon from '@mui/icons-material/List';

const Component2 = () => {

const [show, setShow] = useState(false)

    return (
        <>
        <div className='NavTab'>
            <span onClick={()=>setShow(!show)}><ListIcon/></span>
        </div>
        <div className={show ? '' : 'menu-link'}>
            <ul>
                <li>Home</li>
                <li>Analytic</li>
                <li>Shop</li>
                <li>Profile</li>
            </ul>
        </div>
            <div className='comp2main'>
                <div className='comp2mainchild1 me-3'>
                    <img src="https://lens-storage.storage.googleapis.com/png/0e7883023f3142fd9bdba78e201fafb1" alt="error" />
                    <span className='span3'>3</span>
                </div>
                <div>
                    <h3>Good Evening Team!</h3>
                    <p>Have an in-depth look at all the metrics within your dashboard.</p>
                </div>
                <div className='ColumnNone3'>
                    <span className='searchIcon'><SearchIcon /></span>
                </div>
            </div>
            <div className='comp2main2'>
                <div>
                    <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JtNjczLWVsZW1lbnQtbm4tMDg3LWEteC5qcGc.jpg" alt="" />
                    <ul style={{ listStyle: 'none', padding: '0px', lineHeight: '25px' }}>
                        <li><span style={{ color: '#cccfd3' }}>Monthly Revenue</span></li>
                        <li>$3.500 <span style={{ background: 'white', color: 'black', padding: '3px', borderRadius: '19px' }}>+2.4%</span></li>
                        <li><span style={{ color: '#cccfd3' }}>Previous month</span> $1.7k</li>
                    </ul>
                </div>
                <div>
                    <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JtNjczLWVsZW1lbnQtbm4tMDg3LWEteC5qcGc.jpg" alt="" />
                    <ul style={{ listStyle: 'none', padding: '0px', lineHeight: '25px' }}>
                        <li><span style={{ color: '#cccfd3' }}>Monthly Sales</span></li>
                        <li>$6.750 <span style={{ background: 'white', color: 'black', padding: '3px', borderRadius: '19px' }}>+1.4%</span></li>
                        <li><span style={{ color: '#cccfd3' }}>Previous month</span> $3.1k</li>
                    </ul>
                </div>
                <div>
                    <img src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA3L3JtNjczLWVsZW1lbnQtbm4tMDg3LWEteC5qcGc.jpg" alt="" />
                    <ul style={{ listStyle: 'none', padding: '0px', lineHeight: '25px' }}>
                        <li><span style={{ color: '#cccfd3' }}>Total Profit</span></li>
                        <li>$10.900 <span style={{ background: 'white', color: 'black', padding: '3px', borderRadius: '19px' }}>+4.3%</span></li>
                        <li><span style={{ color: '#cccfd3' }}>Previous month</span> $8.9k</li>
                    </ul>
                </div>
            </div>
            <div className='comp2main3'>
                <div style={{ marginRight: '50px' }}>
                    <h4>Total Sales & Cost</h4>
                    <p><span style={{ color: 'rgb(125 127 129)' }}>Last 60 days</span></p>
                    <p><span style={{ fontSize: '35px', marginRight: '10px' }}>$956.82k</span><span style={{ background: '#64df646e', color: 'black', padding: '3px', borderRadius: '19px' }}>+5.4%</span></p>
                    <p><span style={{ color: 'green' }}>+8.20k</span><span style={{ color: 'rgb(125 127 129)' }}>vs prev.60 days</span></p>
                </div>
                <div className='chartGraphNone'>
                    <div style={{ display: 'flex' }}>
                        <p>Analytic <span style={{ color: 'green' }}>+5.4%</span></p>
                        <span>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Month
                                </button>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div>
                        </span>
                    </div>
                    <div className='listItem' style={{ display: 'flex' }}>
                        <ul style={{ lineHeight: '40px', marginRight: '10px' }}>
                            <li>60</li>
                            <li>40</li>
                            <li>20</li>
                        </ul>
                        <ul className='chartGraph'>
                            <li className='li1'>1</li>
                        </ul>
                        <ul className='chartGraph'>
                            <li className='li2'>2</li>
                        </ul>
                        <ul className='chartGraph'>
                            <li className='li3'>3</li>
                        </ul>
                        <ul className='chartGraph'>
                            <li className='li4'>4</li>
                        </ul>
                        <ul className='chartGraph'>
                            <li className='li5'>5</li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{ position: 'absolute', marginTop: '-83px', listStyle: 'none', display: 'flex' }}>
                            <li style={{ marginRight: '50px' }}>1-10Aug</li>
                            <li style={{ marginRight: '50px' }}>11-20Aug</li>
                            <li>21-30Aug</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <div style={{ display: 'flex' }}>
                    <h2>Transation history</h2>
                    <span className='ColumeNone2' >
                        <div class="dropdown">
                            <button class="btn dropDown1 btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <span style={{ marginRight: '3px' }}><CalendarTodayOutlinedIcon /></span>Month
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
                <div style={{ marginTop: '10px', display: 'flex', flexWrap:'wrap' }}>
                    <span style={{ marginRight: '30px',margin:'10px' }}>
                        <div class="dropdown-center">
                            <button class="btn bttn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Recepient
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                <li><a class="dropdown-item" href="#">Action three</a></li>
                            </ul>
                        </div>
                    </span>
                    <span style={{ marginRight: '30px',margin:'10px'}}>
                        <div class="dropdown-center">
                            <button class="btn bttn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Amount
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                <li><a class="dropdown-item" href="#">Action three</a></li>
                            </ul>
                        </div>
                    </span>
                    <span style={{margin:'10px'}}>
                        <div class="dropdown-center">
                            <button class="btn bttn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Status
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Action two</a></li>
                                <li><a class="dropdown-item" href="#">Action three</a></li>
                            </ul>
                        </div>
                    </span>
                </div>
            </div>
            <div>
                <table class="table LineHeightTAb" style={{ lineHeight: '60px' }}>
                    <thead>
                        <tr>
                            <th scope="col">Customer</th>
                            <th className='ColumeNone1' scope="col">Status</th>
                            <th className='ColumeNone2'  scope="col">Date</th>
                            <th className='ColumnNone3' scope="col">Invoice</th>
                            <th className='ColumnNone34' scope="col">People</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row" style={{ display: 'flex' }}>
                                <img src="https://lens-storage.storage.googleapis.com/png/0e7883023f3142fd9bdba78e201fafb1" alt="" />
                                <ul style={{ listStyle: 'none', padding: '0px' }}>
                                    <li><h4>Flyod Jhontosan</h4></li>
                                    <li style={{ marginTop: '-20px' }}>jhontosan@gmail.com</li>
                                </ul>
                            </td>
                            <td className='ColumeNone1'><span style={{ padding: '3px 7px 3px 24px', borderRadius: '13px', background: '#e6e3e3' }}><span className='dot1'>.</span>Succsess</span></td>
                            <td className='ColumeNone2' >Nov02,2021</td>
                            <td className='ColumnNone3'>$100,00</td>
                            <td className='ColumnNone34'>
                                <img style={{ height: '30px' }} src={image} alt="" />
                            </td>
                        </tr>
                        <tr>
                            <td scope="row" style={{ display: 'flex' }}>
                                <img src="https://lens-storage.storage.googleapis.com/png/0e7883023f3142fd9bdba78e201fafb1" alt="" />
                                <ul style={{ listStyle: 'none', padding: '0px' }}>
                                    <li><h4>Flyod Jhontosan</h4></li>
                                    <li style={{ marginTop: '-20px' }}>jhontosan@gmail.com</li>
                                </ul>
                            </td>
                            <td className='ColumeNone1'><span style={{ padding: '3px 7px 3px 24px', borderRadius: '13px', background: '#e6e3e3' }}><span className='dot2'>.</span>Pending</span></td>
                            <td className='ColumeNone2' >Nov02,2021</td>
                            <td className='ColumnNone3'>$100,00</td>
                            <td className='ColumnNone34'>
                                <img style={{ height: '30px' }} src={image} alt="" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Component2
