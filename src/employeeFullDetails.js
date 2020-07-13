import React, { useState, useEffect } from 'react'
import pictureURL from './assets/Abiola.jpeg'



const EmployeeFullDetails = (props) => {
    const [details, setDetails] = useState('')

    const total = (props.details && parseInt(props.details.item.salary) + parseInt(props.details.item.housing )+ parseInt(props.details.item.pension))

    // useEffect(() => {
    //     if(props.details !== '')
    //     setDetails(props.details)
    //   console.log('Props found is ', details)
    // }, [''])
   
    return (
        <div className='text-center'>
          
          <nav>
                                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a class="nav-item nav-link active" id="nav-employee-tab" data-toggle="tab" href="#nav-employee" role="tab" aria-controls="nav-employee" aria-selected="true">Profile</a>
                                    <a class="nav-item nav-link" id="nav-salary-tab" data-toggle="tab" href="#nav-salary" role="tab" aria-controls="nav-salary" aria-selected="false">Salary Details</a>
                                    <a class="nav-item nav-link" id="nav-compensation-tab" data-toggle="tab" href="#nav-compensation" role="tab" aria-controls="nav-compensation" aria-selected="false">Compensation Plans</a>
                                </div>
                            </nav>
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="nav-employee" role="tabpanel" aria-labelledby="nav-employee-tab"> <div class="container">
    <p>Click on the name row to see details below</p>
    <div class="row mt-4">
        <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="well well-sm">
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <img src={props.details && props.details.item.image} alt="" class="img-rounded rounded-circle img-responsive" width='150' />
                    </div>
                    <div class="col-sm-6 col-md-8">
                        <h4>
                        {props.details && props.details.item.firstname} &nbsp;<span>{props.details && props.details.item.lastname}</span></h4>
                        <small><cite title="San Francisco, USA">{props.details && props.details.item.address} <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
                     <p>
                            <i class="glyphicon glyphicon-envelope"></i>{props.details && props.details.item.email}
                            <br />
                            <i class="glyphicon glyphicon-gift"></i>{props.details && props.details.item.dob}</p> 
                       
                        <div class="btn-group">
                            {props.details &&   <button type="button" class="btn btn-primary">
                                Update Info
                            </button> }
                          
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
                                <div class="tab-pane fade" id="nav-salary" role="tabpanel" aria-labelledby="nav-salary-tab"><div class="col-md-6 text-left">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 mt-4  shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        <h4>
                        {props.details && props.details.item.firstname} &nbsp;<span>{props.details && props.details.item.lastname}</span></h4>
                        <small><cite title="San Francisco, USA">{props.details && props.details.item.address} <i class="glyphicon glyphicon-map-marker">
                        </i></cite></small>
          <strong class="d-inline-block mb-2 text-success">Basic Salary: <span class='text-secondary'>{props.details && props.details.item.salary}</span></strong>
          <strong class="d-inline-block mb-2 text-success">Housing Allowance: <span class='text-secondary'>{props.details && props.details.item.housing}</span></strong>
          <strong class="d-inline-block mb-2 text-success">Pension: <span class='text-secondary'>{props.details && props.details.item.pension}</span></strong>
          <strong class="d-inline-block mb-2 text-success">Total: <span class='text-secondary'>{total}</span></strong>
       
          
        </div>
        
      </div>
    </div></div>
                                <div class="tab-pane fade" id="nav-compensation" role="tabpanel" aria-labelledby="nav-compensation-tab">  <div class="row mb-2 mt-4">
    <div class="col-md-6 text-left">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-success">Start Date: <span class='text-secondary'>19:02:2012</span></strong>
          <strong class="d-inline-block mb-2 text-success">Plan: <span class='text-secondary'>Health Insurance Plan</span></strong>
          <strong class="d-inline-block mb-2 text-success">Provider: <span class='text-secondary'>AIG</span></strong>
          <strong class="d-inline-block mb-2 text-success">Policy coverage: <span class='text-secondary'>Employee</span></strong>
          <strong class="d-inline-block mb-2 text-success">Compensation amount: <span class='text-secondary'>#20000</span></strong>
       
          
        </div>
        
      </div>
    </div>
  </div>
</div>
                            </div>
        </div>
    )
}

export default EmployeeFullDetails


