import React, { Component } from 'react';
import ListStore from '../post/Store_Post/ListStore_Blank'

class Client extends Component {
    render() {
        return (
            <section  id="client">
                <div className="container mb-3">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading text-uppercase">Cửa hàng</h2>
                            <h3 className="section-subheading text-muted">Các cửa hàng tích hợp chương trình tích điểm Mcoin</h3>
                        </div>
                    </div>
                    <ListStore type="all"/>
                </div>
            </section>
        );
    }
}

export default Client;
