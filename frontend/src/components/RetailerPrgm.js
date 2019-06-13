import React from 'react'
import { Row, Col } from 'antd'

const RetailerPrgm = () => (
    <div>
        <Row>
            <Col>
                <div className='text-center title-background'>
                    <h1 className='title-font animated fadeInDown'>Retailer Take Back Program</h1>
                </div>
            </Col>
        </Row>
        <Row>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
            <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                <p className='retailer_p-padding retailer_p-fontstyle'>
                    To help reduce our environmental impact, many retailers have begun to offer voluntary
                    recycling programs for a variety of materials. See the list below for items that you
                    can help keep out of our landfills!
                        </p>
            </Col>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
        </Row>
        <Row>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
            <Col xs={10} sm={8} md={7} lg={6} xl={5}>
                <ul className='retailer_list-fontstyle'>
                    <li><a href='#alkaline'>Alkaline Batteries</a></li>
                    <li><a href='#automative'>Automative Batteries</a></li>
                    <li><a href='#fluorescent'>Compact Fluorescent Bulb</a></li>
                    <li><a href='#CDs'>CDs</a></li>
                    <li><a href='#electronics'>Electronics</a></li>
                </ul>
            </Col>
            <Col xs={10} sm={8} md={7} lg={6} xl={5}>
                <ul className='retailer_list-fontstyle'>
                    <li><a href='#packaging'>Packaging</a></li>
                    <li><a href='#plasticBags'>Plastic Bags</a></li>
                    <li><a href='#smallApp'>Small Appliances</a></li>
                    <li><a href='#telecommunication'>Telecommunications Equipment</a></li>
                    <li><a href='#tires'>Tires</a></li>
                </ul>
            </Col>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
        </Row>
        <Row>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
            <Col xs={20} sm={16} md={14} lg={12} xl={10}>
                <div className='retailer_category-style'>
                    <h5 id='alkaline' className='anchor-padding'>Alkaline Batteries</h5>
                    <p>
                        As of July 1st, 2010, consumers may recycle all household batteries (alkaline
                        and/or rechargeable) at nearly 1,500 collection locations across the province.
                        To find a drop-off location for batteries near you, visit the RCBC Recyclepedia
                        or call the Recycling Hotline at 604-RECYCLE (732-9253) or 1-800-667-4321.
                            </p>
                    <div>
                        Retailers who collect alkaline batteries for free recycling include:
                                <ul>
                            <li>
                                <a href='https://www.bestbuy.ca/en-CA/electronics-recycling.aspx?cmp=vrd-hc8184'
                                    target='_blank' rel='noopener noreferrer'
                                >Best Buy
                                        </a>
                            </li>
                            <li>
                                <a href='https://greendeal.ca/recycling'
                                    target='_blank' rel='noopener noreferrer'
                                >London Drugs
                                        </a>
                            </li>
                            <li>
                                <a href='https://www.staples.ca/sbdca/en_CA/cre/marketing/staples_soul/index.html'
                                    target='_blank' rel='noopener noreferrer'
                                >Staples
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='automative' className='anchor-padding'>Automative Batteries</h5>
                    <p>
                        Automotive (lead-acid) batteries are recycled as part of a provincially
                        regulated recycling program. Retailers are encouraged by the Ministry of
                        Environment to accept at least one used battery in return for each retail
                        battery sold. This take-back program is voluntary, but a majority of retailers
                        are accepting used batteries. Contact your local automotive battery retailer to
                        inquire.
                            </p>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='fluorescent' className='anchor-padding'>Compact Fluorescent (CFL) Bulbs</h5>
                    <p>
                        CFLs contain small amounts of mercury vapor and must be handled and disposed of
                        cautiously. CFL bulbs and fluorescent light tubes are now accepted through a
                        province-wide recycling program and can be dropped-off for free at
                        participating retailers. Please see 
                                <span>
                            <a
                                href='https://www.lightrecycle.ca/consumers/british-columbia/accepted-products/'
                                target='_blank' rel='noopener noreferrer'
                            >&nbsp;www.lightrecycle.ca&nbsp;
                                    </a>
                        </span>
                         to find a convenient location.
                            </p>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='CDs' className='anchor-padding'>CDs</h5>
                    <p>
                        Compact discs (cds) and DVDs can be recycled through the Greentec bin
                        collection system at all Best Buy locations.
                            </p>
                    <div>
                        For more information and to find your nearest location:
                                <ul>
                            <li>
                                <a href='https://www.bestbuy.ca/en-CA/electronics-recycling.aspx?cmp=vrd-hc8184'
                                    target='_blank' rel='noopener noreferrer'
                                >Best Buy
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='electronics' className='anchor-padding'>Electronics</h5>
                    <p>
                        Household electronics such as cameras, mp3 players and DVD players can be
                        returned to specific retailers for recycling.
                            </p>
                    <div>
                        For the details and restrictions on each collection program, please visit the
                        following retailer's websites for more information:
                                <ul>
                            <li>
                                <a href='https://greendeal.ca/recycling'
                                    target='_blank' rel='noopener noreferrer'
                                >London Drugs
                                        </a>
                                - any electronics originally purchased at London Drugs, including home
                                audio/visual equipment (VCR/DVD players, stereos etc.)
                                    </li>
                            <li>
                                <a href='https://www.bestbuy.ca/en-CA/electronics-recycling.aspx?cmp=vrd-hc8184'
                                    target='_blank' rel='noopener noreferrer'
                                >Best Buy
                                        </a>
                                - portable audio/video devices and cell phones
                                    </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='packaging' className='anchor-padding'>Packaging</h5>
                    <p>
                        Various retailers have taken a proactive approach towards recycling product
                        packaging and offer collection services for specific materials.
                            </p>
                    <div>
                        For more information and to find your nearest location:
                                <ul>
                            <li>
                                <a href='https://greendeal.ca/recycling'
                                    target='_blank' rel='noopener noreferrer'
                                >London Drugs
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='plasticBags' className='anchor-padding'>Plastic Bags</h5>
                    <p>
                        Several retail outlets, including London Drugs, Safeway, Save-On-Foods and
                        Wal-Mart, offer a collection system for recycling plastic shopping bags.
                            </p>
                    <div>
                        To find participating retailers near you:
                                <ul>
                            <li>
                                <a href='https://www.plasticfilmrecycling.org/recycling-bags-and-wraps/find-drop-off-location/'
                                    target='_blank' rel='noopener noreferrer'
                                >www.plasticfilmrecycling.org
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='smallApp' className='anchor-padding'>Small Appliances</h5>
                    <p>
                        London Drugs is an industry leader when it comes to responsible recycling.
                        They will take-back electronics and appliances purchased at their stores,
                        including small appliances such as toasters and coffee makers, as well as
                        any electronics or packaging materials.
                            </p>
                    <div>
                        For more information and to find your nearest location:
                                <ul>
                            <li>
                                <a href='https://greendeal.ca/recycling'
                                    target='_blank' rel='noopener noreferrer'
                                >London Drugs
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='retailer_category-style'>
                    <h5 id='telecommunication' className='anchor-padding'>Telecommunications Equipment</h5>
                    <p>
                        Telecommunication equipment such as corded and cordless phones can be returned
                        to specific retailers for recycling.
                            </p>
                    <div>
                        For the details and restrictions on each collection program, please visit
                        the following retailer's websites for more information:
                                <ul>
                            <li>
                                <a
                                    href='https://www.telus.com/en/about/policies-and-disclosures/environmental-responsibility/return-and-recycle-program'
                                    target='_blank' rel='noopener noreferrer'
                                >Telus
                                        </a>
                                – modems, set top boxes, remote controls, corded phones, cordless phones
                                including the battery, and cell phones.
                                    </li>
                        </ul>
                    </div>
                </div>
                <div className='retailer_category-style'>
                    <h5 id='tires' className='anchor-padding'>Tires</h5>
                    <p>
                        There is a province-wide recycling program for passenger car and
                        truck tires run by Tire Stewardship BC; a non-profit organization
                        formed to manage the scrap tire recycling program on behalf of tire
                        retailers in BC. The program collects an Advance Disposal Fee, commonly
                        referred to as an eco fee, on the sale of every new tire. Most tire retailers
                        will accept up to 4 off-rim tires per visit for free.
                            </p>
                    <div>
                        To find participating retailers near you:
                                <ul>
                            <li>
                                <a href='http://www.tsbc.ca/pickupdropoff.php'
                                    target='_blank' rel='noopener noreferrer'
                                >Tire Stewardship BC
                                        </a>
                            </li>
                        </ul>
                        For more information about provincial stewardship regulations:
                                <ul>
                            <li>
                                <a
                                    href='https://www2.gov.bc.ca/gov/content/environment/waste-management/recycling/product-stewardship/tires'
                                    target='_blank' rel='noopener noreferrer'
                                >BC Product Stewardship - Tires
                                        </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </Col>
            <Col xs={2} sm={4} md={5} lg={6} xl={7} />
        </Row>
    </div>
)

export default RetailerPrgm