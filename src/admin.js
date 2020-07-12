import React from 'react'
import {Link }from 'react-router-dom'
import Navbar from './Navbar'

const Admin = () => {
    return (
        <div className=''>
            <div className='text-center'>
            <Navbar />
            </div>
            <div class="">

                <div class="row">
                    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
                        <div class="sidebar-sticky">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">
                                        <span data-feather="home"></span>
              Dashboard <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <Link to='/employee' class="nav-link" href="#">
                                        <span data-feather="file"></span>
              Employee Details
            </Link>
                                </li>
                                <li class="nav-item">
                                    <Link to='/review' class="nav-link" href="#">
                                        <span data-feather="shopping-cart"></span>
              Reviews & Approvals
            </Link>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        <span data-feather="users"></span>
              PaySlips
            </a>
                                </li>
                                
                            </ul>

                            
                        </div>
                    </nav>
                     
                    <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 class="h2">Dashboard</h1>
                            <div class="btn-toolbar mb-2 mb-md-0">
                                <div class="btn-group mr-2">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <span data-feather="calendar"></span>
            This week
          </button>
                            </div>
                        </div>

                        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Admin
