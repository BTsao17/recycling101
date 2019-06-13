import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Form, Select, Button } from 'antd'
import config from '../configs/config'
const baseURL = `http://${config.host}:${config.port}`
const FormItem = Form.Item
const Option = Select.Option

class ChooseCity extends Component {
    state = {
        cityList: []
    }

    componentDidMount() {
        axios.get(`${baseURL}/citylist`)
            .then((response) => {
                this.setState({
                    cityList: response.data
                })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        const { cityList } = this.state

        const cities = cityList.map((city, i) => {
            return (
                <Option label='city' key={i} value={city}>{city}</Option>
            )
        })

        return (
            <Row>
                <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                    <div>
                        <Form
                            onSubmit={(e) => this.props.goToPrgmDetails(e)}
                        >
                            <FormItem label='Choose Your Location'>
                                <Select onChange={(value, option) => this.props.updateCity(value, option)}>
                                    {cities}
                                </Select>
                            </FormItem>
                            <Button type='primary' htmlType='submit'>Submit</Button>
                        </Form>
                    </div>
                </Col>
                <Col xs={2} sm={4} md={5} lg={6} xl={7} />
            </Row>
        )
    }
}

export default ChooseCity