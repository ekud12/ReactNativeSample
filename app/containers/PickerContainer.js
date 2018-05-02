import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Picker from '../components/Picker';

const mapStateToProps = state => ({
    chosenAct: state
});

const mapDispatchToProps = dispatch => ({
    ask: () => {
        dispatch({ type: 'ASK_FOR_DELIVERY' });
    },
    offer: () => {
        dispatch({ type: 'OFFER_DELIVERY' });
    },
    reset: () => {
        dispatch({ type: 'RESET' });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Picker);