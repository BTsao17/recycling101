import React from 'react'
import { Row, Col, Collapse} from 'antd'
const Panel = Collapse.Panel

const Home = () => (
    <div>
        <Row>
            <Col>
                <div className='text-center title-background'>
                    <h1 className='title-font animated fadeInDown'>Welcome to Recycling 101!</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
            <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                <main className='main-padding'>
                    <h2 className='text-center main_header-padding main_header-fontstyle'>Why Recycle?</h2>
                    <Collapse bordered={false} defaultActiveKey={['1']}>
                        <Panel header='Recycling conserves resources' key='1'>
                            <p className='main_p-fontstyle'>
                                When we recycle, used materials are converted into new products, reducing the
                                need to consume natural resources. If used materials are not recycled, new
                                products are made by extracting fresh, raw material from the Earth, through
                                mining and forestry.
                            </p>
                            <p className='main_p-fontstyle'>
                                Recycling helps conserve important raw materials and
                                protects natural habitats for the future.
                            </p>
                        </Panel>
                        <Panel header='Recycling saves energy' key='2'>
                            <p className='main_p-fontstyle'>
                                Using recycled materials in the manufacturing process uses considerably
                                less energy than that required for producing new products from raw
                                materials – even when comparing all associated costs, like transport.
                            </p>
                            <p className='main_p-fontstyle'>
                                Plus there are extra energy savings because more energy is required to
                                extract, refine, transport and process raw materials ready for industry
                                compared with providing industry-ready materials.
                            </p>
                        </Panel>
                        <Panel header='Recycling helps protect the environment' key='3'>
                            <p className='main_p-fontstyle'>
                                Recycling reduces the need for extracting (mining, quarrying and logging),
                                refining and processing raw materials all of which create substantial
                                air and water pollution.
                            </p>
                            <p className='main_p-fontstyle'>
                                As recycling saves energy it also reduces greenhouse gas emissions,
                                which helps to tackle climate change.
                             </p>
                        </Panel>
                        <Panel header='Recycling reduces landfill' key='4'>
                            <p className='main_p-fontstyle'>
                                When we recycle, recyclable materials are reprocessed into new products,
                                and as a result the amount of rubbish sent to landfill sites reduces.
                            </p>
                        </Panel>
                    </Collapse>
                </main>
            </Col>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
        </Row>
    </div>
)

export default Home