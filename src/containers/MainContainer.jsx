import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect }  from 'react-redux';
import { Spin, Icon } from 'antd';

import { LoginPageContainer } from './LoginPageContainer';
import { Market } from './Market';
import { CartContainer } from './CartContainer';
import { getProducts } from '../actions/index';
import '../assets/css/Main.css';

const antIcon = <Icon type="loading" style={{ fontSize: 64 }} spin />;

class Main extends Component {
    componentDidMount() {
        this.props.getProducts();
        console.log('match', this.props )
    }

    render() {
        const { isLoading } = this.props;
        if(isLoading) {
            return <Spin indicator={antIcon} />
        } 

        return(
            <div className="content">
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/login" />)} />
                    <Route exact path='/login' component={LoginPageContainer} />
                    <Route path='/market' component={Market} />    
                    <Route path='/cart' component={CartContainer} />
                </Switch>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    isLoading: state.loading.isLoading,
    loadingFail: state.loading.loadingFail
});

const mapDispatchToProps = {
    getProducts
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;