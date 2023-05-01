import React, { Component } from "react";
import img1 from './images/carwash.jpg';
import img2 from './images/oil.jpg';
import img3 from './images/services.jpg';

const PackageDetails = () => {

    return (
        <React.Fragment>
            <div className={'content-block'}>
                <h1>Package</h1>
                <div class="row">
                    <div class="col-4">
                        <div id="list-example" class="list-group">
                            <a class="list-group-item list-group-item-action" href="#list-item-1"><h5>Package 01</h5></a>
                            <a class="list-group-item list-group-item-action" href="#list-item-2"><h5>Package 02</h5></a>
                            <a class="list-group-item list-group-item-action" href="#list-item-3"><h5>Package 03</h5></a>

                        </div>
                    </div>
                    <div class="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
                            <h4 id="list-item-1">Package 01</h4>
                            <div className="ig1">
                                <img src={img1} alt=""/>
                            </div>
                            <p><strong>This is the first package that we gonning to provide according to company.</strong>
                            in this package customer will only get car wash including thr both internal and extrnal washing. 
                            A car wash is a facility used to clean the exterior, and in some cases the interior of cars. Car washes can be self-service, full-service (with attendants who wash the vehicle), 
                            or fully automated (possibly connected to a filling station).
                            </p>
                            <p>
                                Price:1000/=
                            </p>
                            <p>
                                Time:30 min
                            </p>

                            <h6>Steps to a Great Wash</h6>
                            
                            <p>Step 1: Spray down the whole car.</p>
                            <p>Step 2: Clean the wheel wells and tires. </p>
                            <p>Step 3: Starting on the top begin washing your car.</p>
                            <p>Step 4: Towel dry your car working in long sweeping motions that follow the contours of the car body.</p>
                            <p>Step 5: Treat special areas as needed.</p>
                            
                            
                            <h4 id="list-item-2">Package 02</h4>
                            <div>
                                <img src={img2} alt=""/>
                            </div>
                            <p><strong>This is the second package that we gonning to provide according to company.</strong> 
                            in this package only provids the oil changing of the car. An oil change is the process of removing and replacing the viscous fluid- otherwise known as oil- that runs through an internal combustion engine (aka the type of engine in a vehicle). The parts inside the engine move incredibly fast, which 
                            generates both friction and heat
                            </p>
                            <p>
                                Price:3500/=
                            </p>
                            <p>
                                Time:45 min
                            </p>

                            
                            <h6>Steps for changing your oil</h6>
                            
                            <p>Step 1:Check the type and amount of oil needed.</p>
                            <p>Step 2:Get together your filter, wrenches, and other supplies.</p>
                            <p>Step 3:Prepare your vehicle.</p>
                            <p>Step 4:Locate the oil filter and drain plug.</p>
                            <p>Step 5:Drain the oil.</p>
                            <p>Step 6:Tighten the drain plug.</p>
                            <p>Step 7:Change the oil filter.</p>
                            <p>Step 8:Add the new oil.</p>

                            <h4 id="list-item-3">Package 03</h4>
                            <div>
                                <img src={img3} alt=""/>
                            </div>
                            <p><strong>This is the third package that we gonning to provide according to company..</strong>  A car service is when you take your car to a garage for a routine check up. A mechanic will look at your car's condition and check parts for wear and tear, like brakes, oil, filters and engine belt. 
                            It's common for the garage to replace your oil filter as part of the service. </p>

                            <p>
                                Price:4000/=
                            </p>
                            <p>
                                Time:70 min
                            </p>

                            <h5>Maintenance tasks commonly carried out during a motor vehicle service include</h5>

                            <p>Change the engine oil.</p>
                            <p>Replace the oil filter.</p>
                            <p>Replace the air filter.</p>
                            <p>Replace the fuel filter.</p>
                            <p>Replace the cabin or a/c filter.</p>
                            <p>Replace the spark plugs.</p>
                            <p>Check level and refill brake fluid/clutch fluid.</p>


                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>

    )
}

export default PackageDetails