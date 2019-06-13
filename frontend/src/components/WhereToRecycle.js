import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { SearchInputs, SearchResults } from './'
import { Row, Col, Modal } from 'antd'
import axios from 'axios'
import config from '../configs/config'
const baseURL = `http://${config.host}:${config.port}`

class WhereToRecycle extends Component {
    state = {
        city: '',
        category: '',
        item: '',
        itemList: []
    }

    updateState = (value, option) => {
        this.setState({
            [option.props.label]: value
        })
    }

    updateCategoryState = (value, option) => {
        this.setState({
            [option.props.label]: value
        }, () => this.getItemList())
    }

    getItemList = () => {
        axios.get(`${baseURL}/search/${this.state.category}`)
            .then((response) => {
                this.setState({
                    itemList: response.data
                })
            })
            .catch((err) => { console.log(err) })
    }

    goToSearchResults = (e) => {
        e.preventDefault()
        if (this.state.city.length !== 0 && this.state.category.length !== 0 && this.state.item.length !== 0) {
            this.props.history.push(this.props.match.url + '/results')
        } else {
            Modal.info({
                title: 'Oops, you forgot something...',
                content: "Please make your selections!"
            })
        }
    }

    render() {
        const { match } = this.props
        return (
            <div>
                <Row>
                    <Col>
                        <div className='text-center title-background'>
                            <h1 className='title-font animated fadeInDown'>Where Else to Recycle?</h1>
                        </div>
                    </Col>
                </Row>
                <Switch>
                    <Route path={match.path} exact
                        render={(routeProps) =>
                            <SearchInputs {...routeProps}
                                updateState={this.updateState}
                                updateCategoryState={this.updateCategoryState}
                                itemList={this.state.itemList}
                                goToSearchResults={this.goToSearchResults}
                            />
                        }
                    />
                    <Route path={match.path + '/results'}
                        render={(routeProps) =>
                            <SearchResults {...routeProps}
                                city={this.state.city}
                                category={this.state.category}
                                item={this.state.item}
                            />
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default WhereToRecycle