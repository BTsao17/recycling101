import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ChooseCity, ProgramDetails } from './'
import { Row, Col, Modal } from 'antd'

class CurbsidePrgm extends Component {
    state = {
        city: '',
    }

    updateCity = (value, option) => {
        this.setState({
            [option.props.label]: value
        })
    }

    goToPrgmDetails = (e) => {
        e.preventDefault()
        if (this.state.city.length === 0) {
            Modal.info({
                title: 'Oops, you forgot something...',
                content: "Please choose a location!"
            })
        } else {
            this.props.history.push(this.props.match.url + `/${this.state.city}`)
            this.setState({
                city: ''
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
                            <h1 className='title-font animated fadeInDown'>Curbside Recycling Program</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                    <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                        <p className='curbside_p-padding curbside_p-fontstyle'>
                            Many municipalities across British Columbia offer curbside collection of
                            garbage, recycling and organics. Accepted materials and preparation guidelines
                            vary across municipal and regional boundaries. In some areas collection is
                            provided by the city, others by the regional district and some by private
                            collection companies.
                        </p>
                    </Col>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                </Row>
                <Switch>
                    <Route path={match.path} exact
                        render={() =>
                            <ChooseCity updateCity={this.updateCity}
                                goToPrgmDetails={this.goToPrgmDetails}
                            />
                        }
                    />
                    <Route path={match.path + '/:city'}
                        render={(routerProps) =>
                            <ProgramDetails {...routerProps} />
                        }
                    />
                </Switch>
            </div>
        )
    }
}

export default CurbsidePrgm