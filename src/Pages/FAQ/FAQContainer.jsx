import React, { useState } from 'react';
import FAQPresenter from './FAQPresenter';

const FAQContainer = () => {


    // variable
    const loremIpsum = `'대통령·국무총리·국무위원·행정각부의 장·헌법재판소 재판관·법관·중앙선거관리위원회 위원·감사원장·감사위원 기타 법률이 정한 공무원이 그 직무집행에 있어서 헌법이나 법률을 위배한 때에는 국회는 탄핵의 소추를 의결할 수 있다. 헌법재판소 재판관은 탄핵 또는 금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 언론·출판은 타인의 명예나 권리 또는 공중도덕이나 사회윤리를 침해하여서는 아니된다. 언론·출판이 타인의 명예나 권리를 침해한 때에는 피해자는 이에 대한 피해의 배상을 청구할 수 있다. 모든 국민은 종교의 자유를 가진다. 모든 국민은 사생활의 비밀과 자유를 침해받지 아니한다.
    
    행정권은 대통령을 수반으로 하는 정부에 속한다. 대통령은 조약을 체결·비준하고, 외교사절을 신임·접수 또는 파견하며, 선전포고와 강화를 한다. 대한민국은 국제평화의 유지에 노력하고 침략적 전쟁을 부인한다. 국가는 과학기술의 혁신과 정보 및 인력의 개발을 통하여 국민경제의 발전에 노력하여야 한다. 대통령은 전시·사변 또는 이에 준하는 국가비상사태에 있어서 병력으로써 군사상의 필요에 응하거나 공공의 안녕질서를 유지할 필요가 있을 때에는 법률이 정하는 바에 의하여 계엄을 선포할 수 있다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기 위하여 국민경제자문회의를 둘 수 있다.
    
    명령·규칙 또는 처분이 헌법이나 법률에 위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로 심사할 권한을 가진다. 대통령이 제1항의 기간내에 공포나 재의의 요구를 하지 아니한 때에도 그 법률안은 법률로서 확정된다. 체포·구속·압수 또는 수색을 할 때에는 적법한 절차에 따라 검사의 신청에 의하여 법관이 발부한 영장을 제시하여야 한다. 다만, 현행범인인 경우와 장기 3년 이상의 형에 해당하는 죄를 범하고 도피 또는 증거인멸의 염려가 있을 때에는 사후에 영장을 청구할 수 있다. 국회의원은 그 지위를 남용하여 국가·공공단체 또는 기업체와의 계약이나 그 처분에 의하여 재산상의 권리·이익 또는 직위를 취득하거나 타인을 위하여 그 취득을 알선할 수 없다.'`
    
    const tabList = [
        { id: 't1', label: '전체' },
        { id: 't2', label: '현행법령' },
        { id: 't3', label: '법률용어' },
        { id: 't4', label: '환경/복지' },
    ];

    // function
    const changeTab = (to) => {
        setTab(to)
    }

    const showDetail = (bowID) => {
        if (selectedCol == '') setSelectedCol(bowID)
        else setSelectedCol('')
    }


    // state
    const [tab, setTab] = useState('t1');
    const [selectedCol, setSelectedCol] = useState('')

    const [bow, setBow] = useState([
        {
            index: 1023,
            views: 1098,
            type: '환경/복지',
            headline: '진정·고소 제기 이후에도 체불임금을 지급받지 못한 경우 권리구제 절차',
            summary: '근로자의 임금을 체불한 사업주가 근로기준법 위반으로 형사상 처벌을 받는다고 하더라도 민사소송 등을 통해 체불임금을 지급받을 수 있습니다.',
            content: loremIpsum
        }, {
            index: 2488,
            views: 792,
            type: '법률용어',
            headline: '2차전지 또는 배터리',
            summary: '화학반응에 따라 전기에너지를 저장하고 내보낼 수 있는 재충전이 가능한 전기화학시스템을 갖는 전지 또는 배터리를 말한다.',
            content: loremIpsum
        }, {
            index: 873,
            views: 543,
            type: '현행법령',
            headline: '고용산재보험신고법',
            summary: '제1조(목적) 이 법은 「고용보험 및 산업재해보상보험의 보험료징수 등에 관한 법률」에 따른 보험관계 성립신고와 「고용보험법」에 따른 피보험자격 취득신고의 비율이 낮은...',
            content: loremIpsum
        }, {
            index: 2176,
            views: 277,
            type: '법률용어',
            headline: '4대보험',
            summary: ' 「국민연금법」에 따른 국민연금, 「국민건강보험법」에 따른 국민건강보험(「노인장기요양보험법」에 따른 장기요양보험을 포함한다), 「고용보험법」에 따른 고용보험, 「산업재해보상보험법」에 따른 산업재해보상보험을 말한다. ',
            content: loremIpsum
        },   
    ])

    // result
    return (
        <FAQPresenter tab={tab}
                      tabList={tabList}
                      changeTab={changeTab}
                      bow={bow}
                      selectedCol={selectedCol}
                      showDetail={showDetail} />
    );
};

export default FAQContainer;