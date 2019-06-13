import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import axios from 'axios'
import config from '../configs/config'
const baseURL = `http://${config.host}:${config.port}`

class SearchResults extends Component {
    state = {
        results: [],
        size: 'small'
    }

    componentDidMount() {
        const { city, category, item } = this.props
        axios.post(`${baseURL}/search`, { city, category, item })
            .then((response) => {
                this.setState({
                    results: response.data
                }
                )
            })
    }

    render() {
        const { city, item } = this.props
        const { results } = this.state

        const result = results.map((result) => {
            return (
                <li key={result.id}>
                    <div>
                        <h6 className='searchResults_list_header-margin'>{result.name}</h6>
                        <div>Phone: {result.phone}</div>
                        <div>Address: {result.address}
                            <span className='mapButton'>
                                <Button size={this.state.size}>
                                    <a href={result.maplink} target='_blank' rel='noopener noreferrer'>Map</a>
                                </Button>
                            </span>
                        </div>
                        <div>Website: <a href={result.website} target='_blank' rel='noopener noreferrer'>{result.website}</a></div>
                        <div>Hours: {result.hours}</div>
                        <div>Notes: {result.note}</div>
                    </div>
                </li>
            )
        })

        return (
            <div>
                <Row>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                    <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                        <div className='searchResults-padding'>
                            <h4 className='title-font'>Results for "{item}" in "{city}"</h4>
                        </div>
                        <div className='searchResults_list-padding'>
                            <ol className='list-font'>{result}</ol>
                            <div className='searchResults_button'>
                                <Button type='primary'><Link to='/search'>Search Again</Link></Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                </Row>
            </div>
        )
    }
}

export default SearchResults