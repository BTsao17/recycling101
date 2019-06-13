import React, { Component } from 'react'
import axios from 'axios'
import { Row, Col, Form, Select, Button } from 'antd'
import config from '../configs/config'
const baseURL = `http://${config.host}:${config.port}`
const FormItem = Form.Item
const Option = Select.Option

class SearchInputs extends Component {
    state = {
        cityList: [],
        categoryList: []
    }

    componentDidMount() {
        axios.get(`${baseURL}/categorylist`)
            .then((response) => {
                this.setState({
                    categoryList: response.data
                })
            })
            .catch((err) => { console.log(err) })

        axios.get(`${baseURL}/citylist`)
            .then((response) => {
                this.setState({
                    cityList: response.data
                })
            })
            .catch((err) => { console.log(err) })
    }

    render() {
        const { cityList, categoryList } = this.state
        const { itemList } = this.props

        const sortCityList = cityList.sort()
        const cities = sortCityList.map((city, i) => {
            return (
                <Option key={i} label='city' value={city}>{city}</Option>
            )
        })

        const sortCategoryList = categoryList.sort()
        const categories = sortCategoryList.map((category, i) => {
            return (
                <Option key={i} label='category' value={category}>{category}</Option>
            )
        })

        const sortItemList = itemList.sort()
        const items = sortItemList.map((item, i) => {
            return (
                <Option key={i} label='item' value={item}>{item}</Option>
            )
        })

        return (
            <Row>
                <Col xs={2} sm={4} md={5} lg={6} xl={7} />
                <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                    <div className='searchInput-padding'>
                        <h5 className='title-font'>Need to Recycle a Product? Search for a location below!</h5>
                        <Form
                            onSubmit={(e) => this.props.goToSearchResults(e)}
                        >
                            <FormItem label='Choose your location'>
                                <Select onChange={(value, option) => this.props.updateState(value, option)}>
                                    {cities}
                                </Select>
                            </FormItem>
                            <FormItem label='What are you recycling?'>
                                <Select onChange={(value, option) => this.props.updateCategoryState(value, option)}>
                                    {categories}
                                </Select>
                            </FormItem>
                            <FormItem label='Choose a specific item'>
                                <Select onChange={(value, option) => this.props.updateState(value, option)}>
                                    {items}
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

export default SearchInputs