import React from 'react';
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';

const ForeignResultBox = () => (
    <GBox className="ocr-result" style={{ textAlign: 'left' }}>
        <h3>Review Results of Foreign Worker Employment Contract</h3>
        <Divider />
        <ol>
            <li>
                <div className='title'>Employment Contract Period</div>
                <ul>
                    <li>This refers to the period agreed upon by the employer and employee.</li>
                    <li>※ For new (or re-) entrants, the employment contract period starts from the date of entry.<br />
                        (However, according to Article 18-4 of the Act, if re-entering after 3 months of exit, the contract takes effect from the date work starts after re-entry.)
                    </li>
                </ul>
            </li>
            <li>
                <div className='title'>Workplace</div>
                <ul>
                    <li>Specify the place where the work will be performed.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Job Description</div>
                <ul>
                    <li>Describe the nature of the work to be performed.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Working Hours</div>
                <ul>
                    <li>※ For domestic workers and personal caregivers, this can be omitted.</li>
                    <li>※ According to Article 63 of the Labor Standards Act, regulations on working hours, rest periods, and holidays do not apply to agriculture, forestry, livestock, sericulture, and fisheries industries.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Rest Periods</div>
            </li>
            <li>
                <div className='title'>Holidays</div>
                <ul>
                    <li>※ In pursuant to the Article 63 of the Labor Standards Act, working hours, recess hours, off-days are not applied to agriculture, forestry, livestock breeding, silk-raising farming and marine product businesses.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Wages</div>
            </li>
            <li>
                <div className='title'>Payment Date</div>
                <ul>
                    <li>Specify the date when wages will be paid each month.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Payment Method</div>
                <ul>
                    <li>Wages and benefits will be paid to the worker or deposited to the bank account of the worker. The employer will not retain the bank book and the seal of the worker.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Provision of Meals and Accommodation</div>
                <ul>
                    <li>※ The scope of meals and accommodation provided and the level of costs borne by the worker will be separately decided through agreement between the employer and the worker after entry.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Labor Standards Act</div>
                <ul>
                    <li>※ The terms and conditions of the labor contract for workers in domestic help and nursing can be freely decided through the agreement between an employer and a worker.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Others</div>
                <ul>
                    <li>Specify that matters not stipulated in this contract are subject to the Labor Standards Act.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Date</div>
                <ul>
                    <li>Specify the contract date.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Employer</div>
                <ul>
                    <li>Specify the business name, phone number, address, and representative, and ensure a signature is provided.</li>
                </ul>
            </li>
            <li>
                <div className='title'>Employee</div>
                <ul>
                    <li>Specify the employee's name, contact information, and address, and ensure a signature is provided.</li>
                </ul>
            </li>
        </ol>
    </GBox>
);

export default ForeignResultBox;
