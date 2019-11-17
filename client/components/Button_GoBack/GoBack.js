import {Button} from 'reactstrap'
import Router from 'next/router'

const GoBack = (props) => {
    return (
        <div>
            {/* <Button color="dark" onClick={() => Router.back()}>Trở về</Button> */}
            <button className="btn3d back btn-lg text-light" color="info" onClick={() => Router.push({pathname: props.path})}>Trở về</button>
        </div>
    );
    
}

export default GoBack;
