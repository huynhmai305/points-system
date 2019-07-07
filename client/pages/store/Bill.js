import React, { Component } from 'react';
import BillStore from '../../components/store/Bill'

class Bill extends Component {
    render() {
        return (
            <div>
                <BillStore/>
            </div>
        );
    }
}

export default Bill;