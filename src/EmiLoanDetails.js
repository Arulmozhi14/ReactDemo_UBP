import React,{Component} from 'react'
import Date from '../src/date'

class EMILoanDetails extends Component {
    render ()
    {
       return (<div>
           <h1>Loan Details</h1>
        <form>
         <li style={{ marginBottom:25}}>   
  <label >
    Loan Amount:
    <input type="text" name="name" />
  </label>
  </li>
  <li style={{ marginBottom:25}}>
  <label >
    Loan Amount:
    <Date></Date>
  </label>
 
  </li >
  <li style={{ marginBottom:25}}>
  <label>
    Interest Rate:
    <input type="text" name="name" />
  </label></li>
  <li style={{ marginBottom:25}}>
  <label>
    No of Months:
    <input type="text" name="name" />
  </label></li>
  <li style={{ marginBottom:25}}>
  <label>
    Total Amount:
    <input type="text" name="name" />
  </label>
  </li>
   
  <input type="submit" value="Submit" />
</form>

       </div>) 
           
        
        
    }
}

export default EMILoanDetails