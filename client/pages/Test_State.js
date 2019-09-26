import React, { Component } from 'react';
import { Input } from 'reactstrap'

class Test_State extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataDis: [],
            dataWar: [],
            dataVil:[],
            province: null,
            district:null,
            ward:null,
            village:null
        }
    }
    handle_province = (e) => {
        this.setState({province:e.target.value}, ()=>{
                this.getDistrict(this.state.province);
        })
    }
    handle_district = (e) => {
        this.setState({district:e.target.value}, ()=>{
            this.getWard(this.state.district)
        })
    }
    handle_ward = (e) => {
        this.setState({ward:e.target.value}, ()=>{
            this.getVillage(this.state.ward)
        })
    }
    handle_village = (e) => {
        this.setState({village:e.target.value})
    }
    getDistrict = (city) => {
            fetch('http://localhost:3000/district/'+city)
            .then(res => res.json())
            .then(dataDis => {
                this.setState({dataDis:dataDis[0].Districts});
            })
        
    }
    getWard = (district) => {
        // this.setState({dataWar: this.state.dataDis[district].wards})
            fetch('http://localhost:3000/ward/'+district)
            .then(res => res.json())
            .then(dataWar => this.setState({dataWar:dataWar[0].Wards}))
        
    }
    getVillage = (ward) => {
        // this.setState({dataWar: this.state.dataDis[district].wards})
            fetch('http://localhost:3000/village/'+ward)
            .then(res => res.json())
            .then(dataVil => this.setState({dataVil:dataVil[0].Villages}))
        
    }

    componentDidMount() {
        fetch('http://localhost:3000/province')
            .then(res => res.json())
            .then(data => this.setState({ data}));
    }
    render() {
        const {data,dataDis,dataWar,dataVil} = this.state
        return (
            <div>
                <Input type="select" name="province" onChange={this.handle_province}>
                    <option>--Choose city--</option>
                    {data.map((item, key) => (
                        <option key={key} value={item.provinceid}>{item.name}</option>                
                    ))}
                </Input>
                <Input type="select" name="district" onChange={this.handle_district}>
                    <option>--Choose district--</option>
                    {dataDis.map((item, key) => (
                        <option key={key} value={item.districtid}>{item.name}</option>                
                    ))}
                </Input>
                <Input type="select" name="ward" onChange={this.handle_ward}>
                    <option>--Choose ward--</option>
                    {dataWar.map((item, key) => (
                        <option key={key} value={item.wardid}>{item.name}</option>                
                    ))}
                </Input>
                <Input type="select" name="village" onChange={this.handle_village}>
                    <option>--Choose village--</option>
                    {dataVil.map((item, key) => (
                        <option key={key} value={item.villageid}>{item.name}</option>                
                    ))}
                </Input>
            </div>
        );
    }
}

export default Test_State;