import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Button } from 'antd'
import axios from 'axios'
import config from '../configs/config'
const baseURL = `http://${config.host}:${config.port}`

class ProgramDetails extends Component { 
    state = {
        results: []
    }

    componentDidMount() {
        const city = this.props.match.params.city
        axios.get(`${baseURL}/curbsideprgm/${city}`)
            .then((response) => {
                this.setState({
                    results: response.data
                })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        const { results } = this.state

        const list = results.map((object, i) => {
            const category = object.category
            const itemList = object.items.sort()
            const item = itemList.map((x, i) => {
                return <li key={i}>{x}</li>
            })
            return (
                <tr key={i}>
                    <td>{category}</td>
                    <td><ul>{item}</ul></td>
                </tr>
            )
        })

        return (
            <div>
                <Row>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                    <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                        <div className='details-padding'>
                            <h3 className='title-font'>{this.props.match.params.city}</h3>
                            <p className='details_p-fontstyle'>The Blue Box and Blue Cart recycling programs make it easy to recycle newsprint, paper products,
                                plastic and glass containers, and tin and aluminium cans. These recyclable items are not
                                permitted in your garbage as they are banned at the landfill. The chart below indicates what is
                                acceptable.
                             </p>
                            <table className='table'>
                                <tbody className='table-font'>
                                    {list}
                                </tbody>
                            </table>
                            <Button type='primary'><Link to='/curbsideprgm'>Back</Link></Button>
                        </div>
                    </Col>
                    <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                </Row>
            </div>
        )
    }
}

export default ProgramDetails