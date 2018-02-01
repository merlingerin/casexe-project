import React from 'react';
import './LangSelect.css';

const LangSelect = (props) => {

    const _renderFlag = () => {
        if( props.currentLang === 'EN' ) {
            return (
                    <i className="lang__flag"><img src={require('../../../assets/images/icons/us-flag.png')} alt=""/></i>
            )
        } else {
            return (
                    <i className="lang__flag"><img src={require('../../../assets/images/icons/ru-flag.png')} alt=""/></i>            
  
            )
        }
        
    }

    return (
        <div className="header__lang">
            { _renderFlag() }
            <select 
                    onChange={(event) => props.changeLang(event.target.value)}
                    defaultValue={props.currentLang}
                    name="lang-select" 
                    id="lang-select" 
                    className="lang__lang-select"
                >
                    <option  value="EN">English</option>
                    <option  value="RU">Russian</option>
            </select>
        </div>
    )
}

export default LangSelect;