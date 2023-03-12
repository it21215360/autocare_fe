import React from "react";
//import '../node_modules/bootstrap4/dist/css/bootstrap.min.css';
import { useState } from "react";

function Salary() {


    const [salary,setSalary] = useState();
    //var [tax,setTax] = useState();
    var [nsal,setNsal] = useState();
    var [allowance,setAllowance] = useState();
    var [deductions,setDeductions] = useState();

    const [COL,setCol]= useState();
    const [Insentive,setInsentive]=useState();
    var [EPF,SetEPF]=useState(salary *8/100);
    var [Tax,setTax]=useState();
    var [MedInsuarance,setMedInsuarance]=useState(300);
    var [welfare,setWelfare]= useState(200);
    
    function Calculation() {

        COL = 5000;
        Insentive = 15000;
        Tax = salary*8/100;
        EPF = salary*8/100;
        MedInsuarance = 300;
        welfare = 200;


        setTax(Tax);
        setCol(COL);
        setInsentive(Insentive);
        SetEPF(EPF);
        setMedInsuarance(MedInsuarance);
        setWelfare(welfare);

        //allowance = salary + COL + Insentive;
        allowance = salary + COL + Insentive;
        deductions = EPF+Tax+MedInsuarance+welfare;
        
      
        setAllowance(allowance);
        setDeductions(deductions);

        nsal = allowance - deductions;
        setNsal(nsal);

       // alert(salary);
     /* if(salary > 50000)
        {
            tax = salary * 10/100;

        }
        else if(salary > 30000)
        {
            tax = salary * 5/100;
        }
        else
        {
            tax = 0;
        }

        setTax(tax);

        nsal = salary - tax;
        setNsal(nsal);
*/
        

    }

    return(
        <>
            <div class="container">
                <h2>Salary Calculation Page</h2>

            
                <div class="form-group">
                    <label>Employee Name</label>
                    <input type="text" class="form-control" placeholder="Enter name"/>
                
                </div>
                <div class="form-group">
                    <label>Salary</label>
                    <input type="text" class="form-control" placeholder="Enter Salary"
                    
                    //calculating salary
                    
                    onChange={(event) => 
                    {
                        setSalary(event.target.value);
                    }}
                    
                    
                    />
                
                </div>

                <div class="form-group">
                    <label>Tax</label>
                    <input type="text" class="form-control" placeholder="Tax" value={ allowance }/>
                </div>

                <div class="form-group">
                    <label>Net Salary</label>
                    <input type="text" class="form-control" placeholder="Net Salary" value={nsal}/>
                
                </div>
                
        
        <button type="submit"  onClick={Calculation} class="btn btn-primary mt-4">Submit</button>
        </div>
  </>

    );
}

export default Salary