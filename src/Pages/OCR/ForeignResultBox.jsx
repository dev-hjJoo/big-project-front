import React from 'react';
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';

const ForeignResultBox = ({ missingItems }) => {
    const titleMapping = {
        '사용자': 'Employer',
        '취업자': 'Employee',
        '근로계약기간': 'Employment Contract Period',
        '취업장소': 'Workplace',
        '업무내용': 'Job Description',
        '근무시간': 'Working Hours',
        '휴게시간': 'Rest Periods',
        '휴일': 'Holidays',
        '임금': 'Wages',
        '임금지급일': 'Payment Date',
        '지급방법': 'Payment Method',
        '숙식제공': 'Provision of Meals and Accommodation',
        '근로기준법': 'Labor Standards Act',
        '날짜': 'Date',
        '사용자_서명': 'Employer Signature',
        '취업자_서명': 'Employee Signature'
    };

    const missingItemsSet = new Set(missingItems.map(item => titleMapping[item]));

    const renderItem = (title, content) => (
        <li key={title}>
            <div className='title' style={{ color: missingItemsSet.has(title) ? 'red' : 'black' }}>
                {title}
            </div>
            {missingItemsSet.has(title) && <p style={{ color: 'red' }}>This item is missing.</p>}
            <ul>{content}</ul>
        </li>
    );

    return (
        <GBox className="ocr-result" style={{ textAlign: 'left' }}>
            <h3>Review Results of Foreign Worker Employment Contract</h3>
            <Divider />
            <ol>
                {renderItem('Employment Contract Period', (
                    <>
                        <li>This refers to the period agreed upon by the employer and employee.</li>
                        <li>※ For new (or re-) entrants, the employment contract period starts from the date of entry.<br />
                            (However, according to Article 18-4 of the Act, if re-entering after 3 months of exit, the contract takes effect from the date work starts after re-entry.)
                        </li>
                    </>
                ))}
                {renderItem('Workplace', (
                    <li>Specify the place where the work will be performed.</li>
                ))}
                {renderItem('Job Description', (
                    <li>Describe the nature of the work to be performed.</li>
                ))}
                {renderItem('Working Hours', (
                    <>
                        <li>※ For domestic workers and personal caregivers, this can be omitted.</li>
                        <li>※ According to Article 63 of the Labor Standards Act, regulations on working hours, rest periods, and holidays do not apply to agriculture, forestry, livestock, sericulture, and fisheries industries.</li>
                    </>
                ))}
                {renderItem('Rest Periods', null)}
                {renderItem('Holidays', (
                    <li>※ In pursuant to the Article 63 of the Labor Standards Act, working hours, recess hours, off-days are not applied to agriculture, forestry, livestock breeding, silk-raising farming and marine product businesses.</li>
                ))}
                {renderItem('Wages', null)}
                {renderItem('Payment Date', (
                    <li>Specify the date when wages will be paid each month.</li>
                ))}
                {renderItem('Payment Method', (
                    <li>Wages and benefits will be paid to the worker or deposited to the bank account of the worker. The employer will not retain the bank book and the seal of the worker.</li>
                ))}
                {renderItem('Provision of Meals and Accommodation', (
                    <li>※ The scope of meals and accommodation provided and the level of costs borne by the worker will be separately decided through agreement between the employer and the worker after entry.</li>
                ))}
                {renderItem('Labor Standards Act', (
                    <li>※ The terms and conditions of the labor contract for workers in domestic help and nursing can be freely decided through the agreement between an employer and a worker.</li>
                ))}
                {renderItem('Others', (
                    <li>Specify that matters not stipulated in this contract are subject to the Labor Standards Act.</li>
                ))}
                {renderItem('Date', (
                    <li>Specify the contract date.</li>
                ))}
                {renderItem('Employer Signature', (
                    <li>Specify the business name, phone number, address, and representative, and ensure a signature is provided.</li>
                ))}
                {renderItem('Employee Signature', (
                    <li>Specify the employee's name, contact information, and address, and ensure a signature is provided.</li>
                ))}
            </ol>
        </GBox>
    );
};

export default ForeignResultBox;