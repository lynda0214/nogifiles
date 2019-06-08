import React from 'react';
import { Link } from 'react-router-dom'; 
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }

    let memberData = props.data;

    let grade1Member = memberData.filter((member)=>member.grade===1&&!member.graduated);
    let grade2Member = memberData.filter((member)=>member.grade===2&&!member.graduated);
    let grade3Member = memberData.filter((member)=>member.grade===3&&!member.graduated);
    let grade4Member = memberData.filter((member)=>member.grade===4&&!member.graduated);
    let grade0Member = memberData.filter((member)=>member.graduated);

    let memberLinkFunc = (member, i) => <li key={i} className="fontThin"><Link to={member.id}>{member.name}</Link></li>;

    let g0MemberLink = grade0Member.map(memberLinkFunc); 
    let g1MemberLink = grade1Member.map(memberLinkFunc);  
    let g2MemberLink = grade2Member.map(memberLinkFunc);  
    let g3MemberLink = grade3Member.map(memberLinkFunc); 
    let g4MemberLink = grade4Member.map(memberLinkFunc);     

    return (
        <nav className={drawerClasses.join(" ")} >
            <ul>
                <h3>一期生</h3>
                {g1MemberLink}
                <h3>二期生</h3>
                {g2MemberLink}
                <h3>三期生</h3>
                {g3MemberLink}
                <h3>四期生</h3>
                {g4MemberLink}
                <h3>畢業生</h3>
                {g0MemberLink}
            </ul>
        </nav>
    );
};

export default sideDrawer;  