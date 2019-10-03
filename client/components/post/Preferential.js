import React, { Component } from 'react';

class Preferential extends Component {
    render() {
        return (
            <div>
                <div className="_list_store  _list_store_detail">
                    <div className=" item_box  box_img">
                        <div className="box_pr">
                            <div className="gift"> Đi 4 tính tiền 3</div>
                            <div className="time_gift">
                                <i className="fa fa-clock-o" aria-hidden="true" />
                                <span>7 ngày</span>
                            </div>
                            <a className="block-img im_detail" href="#">
                                <img className="with100 lazy" src="https://thucthan.com/media/2018/06/bun-dau-mam-tom/cach-lam-bun-dau-mam-tom.jpg" alt="" data-pagespeed-url-hash={1859759222} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{display: 'inline-block'}} />
                            </a>
                            <div className="clearfix" />
                        </div>
                    </div>
                    <div className="item_box item-hover-show-text-info campain">
                        <a href="#">
                            <div className="box_1" style={{height: '50px', overflow: 'hidden'}}>
                                <div className="thum-content-text ">
                                    Chỉ 20k/suất bún đậu - Áp dụng từ 3-10/10
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="deal_footer">
                        <div className="caption " style={{height: '60px', overflow: 'hidden'}}>
                            <a href="#" title>
                                <span className="title_caption ">Độc quyền</span>
                                <span className="_title_caption">ĐI 4 TRẢ TIỀN 3 - ĂN BÚN ĐẬU PHÊ PHA</span>
                            </a>
                        </div>
                        <div className=" box _info_res ">
                            <div className="info_res row">
                                <div className="col-md-10 col-xs-10 col-sm-10 pd8">
                                    <div className="use-info pull-left">
                                        <a className="u-logo">
                                            <img className="with100 lazy" src="https://storage.googleapis.com/senpoint-media-release/static/common/img/logo_image/74fc4dc223d03e93b6cd62fc593388bd.jpg" data-pagespeed-url-hash={1859759222} onload="pagespeed.CriticalImages.checkImageForCriticality(this);" style={{display: 'inline-block'}} />
                                        </a>
                                    </div>
                                    <div className=" info_store ">
                                        <div className="name_store no_margin" style={{height: '16px', overflow: 'hidden'}}>
                                            <a><h5>Bún đậu Cố Hương</h5></a>
                                        </div>
                                        <div className="font_defaul address" style={{height: '18px', overflow: 'hidden'}}>
                                            107 E4 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng,...
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 col-xs-2 col-sm-2 pd10 text-center point ">
                                    <i class="fa fa-heart-o" aria-hidden="true"></i>
                                    <span className="number_count" />
                                </div>
                                <div className="clearfix" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Preferential;