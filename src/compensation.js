import React from 'react'
import Navbar from './Navbar'
import {Link }from 'react-router-dom'
import Footer from './footer'

const Compensation = () => {
  return (
    <div class="text-center">
        <Navbar/>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header class="masthead mb-auto">
    <div class="inner">
      
    </div>
  </header>

  <main role="main" class="inner cover">
    <h1 class="cover-heading">Compensation Plan.</h1>
    <p class="lead">Coming up soon...</p>
    <p class="lead">
      <Link to='/employee'  class="btn btn-lg btn-outline-success">Payroll details</Link>&nbsp;
      <a href="#" class="btn btn-lg btn-outline-success">Payroll cycle</a>&nbsp;
      <Link to='/review'  class="btn btn-lg btn-outline-success">Revies and Approvals</Link>&nbsp;
    </p>
  </main>

  <footer class="mastfoot mt-auto">
   
  </footer>
</div>

</div>
  )
}

export default Compensation
