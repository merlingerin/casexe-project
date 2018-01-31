import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Navigation } from './Navigation/Navigation';
import Registration from './Registration/Registration';
import HeaderSlider from './HeaderSlider/HeaderSlider';

import { changeLang, toggleModal } from '../../actions/';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navigation 
          vocabulary={this.props.lang.vocabulary}
          currentLang={this.props.lang.current_lang}
          changeLang={this.props.changeLang}
        />
        <Registration 
          vocabulary={this.props.lang.vocabulary}
          isOpenModal={this.props.modal.isOpenModal}
          toggleModal={this.props.toggleModal} 
        />
        <HeaderSlider />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  lang: state.lang,
  modal: state.modal
})

const mapDispatchToProps = {
  changeLang,
  toggleModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);