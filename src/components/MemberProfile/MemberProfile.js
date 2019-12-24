import React, { Component } from 'react';
import N46Members from "../../data/N46Members";
import './MemberProfile.css';

class MemberProfile extends Component {

    constructor(props){
        super(props);
        this.state = {
            colorOn: [false, false],
            colorClassName: ["", ""],
        };
    }

    colorClick(which) {
        const { colorOn } = this.state;
        if (colorOn[which]) {
            this.colorClose();
            return;
        }
        this.colorOpen(which);
    }

    colorOpen(which) {
        const newColorOn = [false, false];
        const newColorClassName = ["", ""];
        newColorOn[which] = true;
        newColorClassName[which] = 'open';
        this.setState({
            colorOn: [...newColorOn],
            colorClassName: [...newColorClassName],
        });
    }

    colorClose() {
        this.setState({
            colorOn: [false, false],
            colorClassName: ["", ""],
        })
    }

    render() {
        const { colorOn, colorClassName } = this.state;
        const personalData = N46Members.find(member=>member.id === this.props.match.params.memberid);
        if (personalData) {
            let picString = "./img/" + personalData.id + "_prof.jpg";
            let smallTitle = personalData.graduated?"期生已卒業":"期生";
            const color0 = personalData.color[0];
            const color1 = personalData.color[1];
            const color0bg = personalData.color[0] + ' colorbg up ' + colorClassName[0];
            const color1bg = personalData.color[1] + ' colorbg down ' + colorClassName[1];
            return (
                <>
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

                    </div>
                    <div className="callColor">
                        <div className={color0bg} />
                        <div className={color1bg} />
                        <button className={color0} onClick={()=>this.colorClick(0)}>
                            <span className="fontRegular">
                                {colorOn[0] ? "x" : personalData.colorName[0]}
                            </span>
                        </button>
                        <button className={color1} onClick={()=>this.colorClick(1)}>
                            <span className="fontRegular">
                                {colorOn[1] ? "x" : personalData.colorName[1]}
                            </span>
                        </button>
                    </div>
                </>
            );
        }

        return <h2 style={{color: "LightGray"}}>不存在您檢索的目標:<br /> {this.props.match.params.memberid} </h2>;
    }
};

  export default MemberProfile;