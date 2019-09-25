import React from 'react';
import { Card, CardImg, CardFooter, CardBody, CardTitle, Col } from 'reactstrap';

const CardComponent = (props) => {
    return (
        <Col xs="6" sm="3" md="3" lg="3">
            {/* <Card>
                <CardImg top width="100%" src={props.img} alt="Card image store" /> 
                <CardBody>
                    <CardTitle>{props.content}</CardTitle>
                </CardBody>
            </Card> */}
            <div className="_list_store home_list">
                <div className="thumbnail">
                    <div className="time_store">
                        <div>
                            <label /> 07:00 - 22:00
                        </div>
                    </div>
                    {/* <div className="put_by_point">
                        <span className="font_defaul number_top">Tích</span>
                        <div className="font_bold number_pt">
                            <span>15%</span>
                        </div>
                    </div> */}
                    <a className="block-img" href="#">
                        <img className=" with100 cou-pic lazy" style={{ height: '170px', display: 'block' }} src="/static/images/logo_FeelingTea.png" />
                    </a>
                    <div className="clearfix" />
                    <div className=" box__info_res">
                        <div className="_info_res">
                            <div className="logo_store">
                                <a className="u-logo">
                                    <img className="with100 lazy" src="https://storage.googleapis.com/senpoint-media-release/static/common/img/logo_image/1e7464af0556733556e94bc69b8847b8.png" data-pagespeed-url-hash={1859759222} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{ display: 'block' }} />
                                </a>
                            </div>
                            <div className="info_store">
                                <div className="name_store_list" style={{ height: '32px', overflow: 'hidden' }}>
                                    <a href="https://senpoint.vn/doi-tac-sen-point/ca-phe-ho-chi-minh/in-n-out-cafe-quan-1">
                                        <h5>Feeling Tea</h5>
                                    </a>
                                </div>
                                <div className="font_defaul address" style={{ height: '18px', overflow: 'hidden' }}>
                                    <i className=" fa fa-map-marker _location" aria-hidden="true" />
                                    27/5 Nguyễn Bỉnh Khiêm, Đa Kao, Quận 1, Hồ...
                                </div>
                                <div className="font_defaul address">
                                    <i className="  fa fa-tag _tag" aria-hidden="true" />
                                    <a href="https://senpoint.vn/doi-tac-sen-point/ca-phe">
                                        Trà sữa
            </a>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </div>

        </Col>
    );
};

export default CardComponent;