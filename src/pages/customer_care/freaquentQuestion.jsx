import react from "react";
import React, { useState } from "react";
import "./freaquentQuestion.scss"
import { Button } from 'devextreme-react';
//import  {downloadFileAtURL} from './src/pages/customer_care/faq_pdf.pdf';


const FAQ_PDF_URL = 'http://localhost:3000/#/customer_care/freaquentQuestion/faq_pdf.pdf'

function FreaquentQuestionPage({ faq, index }) {
    const [faqs, setfaqs] = useState([
        {
            question: 'How Often Should I Get an Oil Change?',
            answer: 'The general belief is that a driver\'s oil should be changed every 3,000 to 7,000 miles, or every three months. You can, however, always consult your owner\'s manual for the suggested oil change interval for your individual make and model. Many of today\'s newer vehicles will even notify you when they need service. Remember that an oil change is necessary since it lubricates the internal cogs and gears under the hood. Without it, oil might clog and prevent your vehicle from running properly.',
            open: true

        },
        {
            question: 'How Often Should I Check My Vehicle\'s Fluid Levels?',
            answer: 'Aside from engine oil, numerous other fluids are essential to the health of your car. Transmission fluid, brake fluid, engine coolant, and power-steering fluid are a few examples. Their levels are influenced not only by how frequently you drive but also by high temperatures. As a result, experts recommend monitoring them at the same time as your oil change or every month or two.',
            open: false
        },
        {
            question: 'How Often Should I Change My Air Filter?',
            answer: 'In most cases, a vehicle has two filters. The first is for the engine, and the second is for the cabin. A clogged filter can obstruct airflow, restricting the engine\'s capacity to expel hot air and preventing clean air from passing through. The frequency with which you should change it varies, but the standard timeframe is around 30,000 miles, which is why checking it regularly is the best approach to deciding when it needs to be replaced. Fortunately, replacing a filter is a simple procedure.',
            open: false
        },
        {
            question: 'When Should I Replace My Car Battery?',
            answer: 'The average battery is expected to last three to five years, but factors like as hot and cold climates might affect its longevity, so keep an eye out for signals that your battery power is dwindling. If your headlights and dashboard lights are starting to fade, or if your car is having trouble starting, these are signs that your battery needs to be replaced.',
            open: false
        },
        {
            question: 'When Should I Replace My Brake Pads?',
            answer: 'On average, brake pads begin to wear out at 20,000 to 30,000 miles, however, this figure is subject to a variety of circumstances. Knowing what symptoms to look for can thus help you determine when your brake pads need to be replaced. If your car is taking longer to stop or you hear a high-pitched screaming or grinding noise when braking, a checkup is essential. Running with worn brake pads will eventually compromise the rotors, which can be an expensive repair, so being proactive will not only keep you safe but will also save you money.',
            open: false
        },
        {
            question: 'When Should I Get a Tire Rotation?',
            answer: 'Tires suffer the most wear and tear as the primary point of contact with the pavement. This is especially true if you use your car for off-roading or use a two-wheel drive system that places the majority of the work on a single pair of wheels. As a result, getting your tires rotated every six months or 6,000 to 8,000 miles is a smart rule to follow. This will guarantee that your tires wear evenly.',
            open: false
        },
        {
            question: 'How Much Air Pressure Should I Put into My Tires?',
            answer: 'The amount of pressure required by a tire is determined by its kind and the vehicle. The recommended air pressure is listed on the door jamb, the sidewall of the tires, or in your owner\'s handbook. Too much pressure might make manoeuvring your car difficult, while too little pressure can result in a blowout. You can always consult with a product expert to decide which pressure levels are best for you.',
            open: false
        },
        {
            question: 'Do you offer any discounts?',
            answer: 'Yes! We offer discounts for our loyal/registered customers. There may be other temporary discounts. For further details, please check the Package Details page or contact any of our service agents.',
            open: false
        },
        {
            question: 'Can I request a refund?',
            answer: 'Sure, you will be welcome to request your refund within 14 days via the Ticketing System. For further details, please check the Package Details page or contact any of our service agents.',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))

        const downloadFileAtURL = (url) => {
            fetch(url).then(response => response.blob()).then(blob => {
                const blobURL = window.URL.createObjectURL(new Blob([blob]))
                const fileName = url.split("/").pop();
                const aTag = document.createElement("a");
                aTag.href = blobURL;
                aTag.setAttribute("download", fileName);
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
            })
        };

    }

    const downloadFileAtURL = () => { }

    return (
        <div className={'content-block'}>
            <h1>Freaquently Asked Question Page</h1>
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
                <div
                    className={"faq" + (faq.open ? 'open' : '')}
                    key={index}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="faq-question">
                        {faq.question}
                    </div>
                    <div className="faq-answer">
                        {faq.answer}
                    </div>
                </div>

            </div>
            <div className="button">
                <Button onClick={() => { downloadFileAtURL(FAQ_PDF_URL) }}>Download FAQ Page</Button>
            </div>
        </div>


    );
}

export default FreaquentQuestionPage

/*const FreaquentQuestionPage = () => {

    return(
        <React.Fragment>
            <div className = {'content-block'}>
                <h2>Freaquently Asked Question</h2>
                <h3>Service</h3>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                    <h2 class="accordion-header" id="questionOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            How Often Should I Get an Oil Change?
                            </button>
                        </h2>
                        <div id = "collapseOne" class="accordion-collapse collapse show" aria-labelledby="questionOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            The general belief is that a driver's oil should be changed every 3,000 to 7,000 miles, or every three months. You can, however, always consult your owner's manual for the suggested oil change interval for your individual make and model. Many of today's newer vehicles will even notify you when they need service. Remember that an oil change is necessary since it lubricates the internal cogs and gears under the hood. Without it, oil might clog and prevent your vehicle from running properly.
                            </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionTwo">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How Often Should I Check My Vehicle's Fluid Levels?
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="questionTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Aside from engine oil, numerous other fluids are essential to the health of your car. Transmission fluid, brake fluid, engine coolant, and power-steering fluid are a few examples. Their levels are influenced not only by how frequently you drive, but also by high temperatures. As a result, experts recommend monitoring them at the same time as your oil change or every month or two.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionThree">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How Often Should I Change My Air Filter?
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse show" aria-labelledby="questionThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            In most cases, a vehicle has two filters. The first is for the engine, and the second is for the cabin. A clogged filter can obstruct airflow, restricting the engine's capacity to expel hot air and preventing clean air from passing through. The frequency with which you should change it varies, but the standard timeframe is around 30,000 miles, which is why checking it on a regular basis is the best approach to decide when it needs to be replaced. Fortunately, replacing a filter is a simple procedure.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionFour">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            When Should I Replace My Brake Pads?
                            </button>
                            </h2>
                            <div id="collapseFour" class="accordion-collapse collapse show" aria-labelledby="questionFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            On average, brake pads begin to wear out at 20,000 to 30,000 miles, however this figure is subject to a variety of circumstances. Knowing what symptoms to look for can thus help you determine when your brake pads need to be replaced. If your car is taking longer to stop or you hear a high-pitched screaming or grinding noise when braking, a checkup is essential. Running with worn brake pads will eventually compromise the rotors, which can be an expensive repair, so being proactive will not only keep you safe but will also save you money.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionFive">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            When Should I Replace My Car Battery?
                            </button>
                            </h2>
                            <div id="collapseFive" class="accordion-collapse collapse show" aria-labelledby="questionFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The average battery is expected to last three to five years, but factors like as hot and cold climates might affect its longevity, so keep an eye out for signals that your battery power is dwindling. If your headlights and dashboard lights are starting to fade, or if your car is having trouble starting, these are signs that your battery needs to be replaced.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionSix">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            When Should I Get a Tire Rotation?
                            </button>
                            </h2>
                            <div id="collapseSix" class="accordion-collapse collapse show" aria-labelledby="questionSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Tires suffer the most wear and tear as the primary point of contact with the pavement. This is especially true if you use your car for off-roading or use a two-wheel drive system that places the majority of the work on a single pair of wheels. As a result, getting your tires rotated every six months or 6,000 to 8,000 miles is a smart rule to follow. This will guarantee that your tires wear evenly.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionSeven">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            How Much Air Pressure Should I Put into My Tires?
                            </button>
                            </h2>
                            <div id="collapseSeven" class="accordion-collapse collapse show" aria-labelledby="questionSeven" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The amount of pressure required by a tire is determined on its kind and the vehicle. The recommended air pressure is listed on the door jamb, the sidewall of the tires, or in your owner's handbook. Too much pressure might make maneuvering your car difficult, while too little pressure can result in a blow-out. You can always consult with a product expert to decide which pressure levels are best for you.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionEight">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                            Do you offer any discounts?
                            </button>
                            </h2>
                            <div id="collapseEight" class="accordion-collapse collapse show" aria-labelledby="questionEight" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Yes! We offer discounts for our loyal / registered customers. There may be other temporary discounts. For further details, please check the Package Details page or contact any of our service agents.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="questionNine">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                            Can I request a refund?
                            </button>
                            </h2>
                            <div id="collapseNine" class="accordion-collapse collapse show" aria-labelledby="questionNine" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Sure, you will be welcome to request your refund within 14 days via the Ticketing System. For further details, please check the Package Details page or contact any of our service agents.
                            </div>
                        </div>
                        </div>
                    </div>
                    <h2>For More Answers to Service Questions, Contact Autocare Service Center</h2>
                    <h3>Finally, the goal of vehicle maintenance is to protect not only your vehicle but also you and your passengers. That is why the Herb Chambers Company recommends you to familiarize yourself with the requirements of your specific make and model by perusing its guidebook. Otherwise, you can speak with a technician at one of our service facilities for further information and assistance with routine maintenance.</h3>
                </div>
            </div>

        </React.Fragment>

    )

}

export default FreaquentQuestionPage*/