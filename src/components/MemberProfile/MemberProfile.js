import React from 'react';
import N46Members from "../../data/N46Members";
import './MemberProfile.css';

const MemberProfile = ({match}) => {
    let personalData = N46Members.find(member=>member.id === match.params.memberid);

    if (personalData) {
        let picString = "./img/" + personalData.id + "_prof.jpg";
        let smallTitle = personalData.graduated?"期生已卒業":"期生";
        let color0 = "circle " + personalData.color[0];
        let color1 = "circle " + personalData.color[1];
        return (
            <div className='box'>
            <img src={picString} style={{width: "300px"}}/>
            <div className="title">
                <h5>{personalData.grade}{smallTitle}</h5>
                <h1 className="fontRegular">{personalData.name}</h1>
            </div>
            <ul className="fontThin">
                <li>誕生日：{personalData.birthday}</li>
                <li>出生地：{personalData.country}</li>
                <li>軍団：{personalData.gundan}</li>
            </ul>
    
            <div className="callColor">
                <button className={color0}><span className="fontRegular">{personalData.colorName[0]}</span></button>
                <button className={color1}><span className="fontRegular">{personalData.colorName[1]}</span></button>
            </div>
            
            </div>
        );
    }

    return <h2 style={{color: "LightGray"}}>不存在您檢索的目標:<br /> {match.params.memberid} </h2>;
  };

  export default MemberProfile;