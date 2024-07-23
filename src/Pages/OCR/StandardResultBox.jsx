import React from 'react';
import GBox from '../../Componentts/GBox/GBox';
import { Divider } from '@mui/material';

const StandardResultBox = ({ missingItems }) => {
    const titleMapping = {
        '근로개시일': '근로계약기간',
        '근무장소': '근무장소',
        '업무내용': '업무내용',
        '소정근로시간': '소정근로시간',
        '근무일_휴일': '근무일/휴일',
        '임금': '임금',
        '연차유급휴가': '연차유급휴가',
        '사회보험_적용여부': '사회보험 적용여부',
        '근로계약서_교부': '근로계약서 교부',
        '성실한_이행의무': '성실한 이행 의무',
        '기타': '기타',
        '날짜': '날짜',
        '사업주': '사업주',
        '근로자': '근로자'
    };

    const missingItemsSet = new Set(missingItems.map(item => titleMapping[item]));

    const renderItem = (title, content) => (
        <li key={title}>
            <div className='title' style={{ color: missingItemsSet.has(title) ? 'red' : 'black' }}>
                {title}
            </div>
            {missingItemsSet.has(title) && <p style={{ color: 'red' }}>해당 항목이 누락되었습니다.</p>}
            <ul>{content}</ul>
        </li>
    );

    return (
        <GBox className="ocr-result" style={{ textAlign: 'left' }}>
            <h3>근로계약서 검토 결과</h3>
            <Divider />
            {missingItems.length === 0 && (
                <p style={{ fontWeight: 'bold', color: 'blue' }}>근로계약서에 모든 항목이 포함되어 있습니다.</p>
            )}
            <ol>
                {renderItem('근로계약기간', (
                    <>
                        <li>노사가 협의하여 결정하는 일을 하기로 한 기간을 의미합니다.</li>
                        <li>※ 근로계약기간을 정하지 않는 경우에는 “근로개시일”만 기재합니다.</li>
                    </>
                ))}
                {renderItem('근무장소', (
                    <li>일을 수행하기 위한 장소를 명기합니다.</li>
                ))}
                {renderItem('업무내용', (
                    <li>어떤 일을 할지에 대한 내용을 기재합니다.</li>
                ))}
                {renderItem('소정근로시간', (
                    <>
                        <li>노사가 법정근로시간 내(하루 8시간, 주 40시간)에서 하루에 몇 시간을 일할지 정한 시간을 기재합니다.</li>
                        <li>휴게시간은 4시간 근무 시 30분, 8시간 근무 시 1시간 이상을 주도록 소정근로시간 내에서 기재합니다.</li>
                    </>
                ))}
                {renderItem('근무일/휴일', (
                    <li>일주일 중 어떤 날에 근무할지를 명기하며, 주 중 근무하기로 한 날을 만근하였을 경우 부여하는 유급휴일(주휴일)을 어느 요일로 할지 결정하여 명기합니다.</li>
                ))}
                {renderItem('임금', (
                    <>
                        <li>월(일, 시간)급: 임금을 시간급으로 정할지, 주급으로 정할지, 월급으로 정할지 결정하여 그 금액을 명기합니다.</li>
                        <li>상여금: 상여금이 있으면 그 내용 및 금액에 대해 기재합니다.</li>
                        <li>기타급여(제수당 등): 가족수당, 자격증 수당 등 지급하기로 한 수당이 있으면 해당 내용을 기재합니다.</li>
                        <li>임금지급일: 임금을 매월 언제 지급할 것인지에 대해 기재합니다.</li>
                        <li>
                            지급방법: 근로자에게 직접 지급(    ), 근로자 명의 예금통장에 입금(    )
                            <ul>
                                <li>임금을 계좌로 지급할 것인지 등에 대해 노사 간 협의 후 기재합니다.</li>
                            </ul>
                        </li>
                    </>
                ))}
                {renderItem('연차유급휴가', (
                    <>
                        <li>연차유급휴가는 근로기준법에서 정하는 바에 따라 부여해야 합니다.</li>
                        <li>1년간 총 소정근로일의 80% 이상 출근한 근로자에게 15일 부여, 1년 초과 매 2년마다 1일씩 가산, 한도 25일</li>
                        <li>1년 미만 또는 1년간 80% 미만 출근한 근로자에게는 1개월 개근 시 1일 부여합니다.</li>
                    </>
                ))}
                {renderItem('사회보험 적용여부', (
                    <li>사회보험 적용에 대한 해당 내용을 기재합니다.</li>
                ))}
                {renderItem('근로계약서 교부', (
                    <>
                        <li>사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자의 교부 요구와 관계없이 근로자에게 교부해야 합니다. (근로기준법 제17조 이행)</li>
                        <li>근로기준법 제17조에 따라 근로계약 체결 시 근로자에게 교부하여야 함을 알려주는 내용입니다.</li>
                    </>
                ))}
                {renderItem('성실한 이행 의무', (
                    <li>사업주와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 합니다.</li>
                ))}
                {renderItem('기타', (
                    <li>이 계약에 정함이 없는 사항은 근로기준법령에 의함을 명시합니다.</li>
                ))}
                {renderItem('날짜', (
                    <li>계약 날짜를 명시합니다.</li>
                ))}
                {renderItem('사업주', (
                    <li>사업체명, 전화번호, 주소, 대표자를 명시하며, 서명을 해야 합니다.</li>
                ))}
                {renderItem('근로자', (
                    <li>근로자 성명, 연락처, 주소를 명시하며, 서명을 해야 합니다.</li>
                ))}
            </ol>
        </GBox>
    );
};

export default StandardResultBox;
