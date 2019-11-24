import SweetAlert from 'react-bootstrap-sweetalert'
const Alert = (props) => {
  return (
    <SweetAlert 
      success 
      title={props.title}
      onConfirm={this.onConfirm}
      onCancel={this.onCancel}
      confirmBtnBsStyle="success"
    />
  )
} 
export default Alert
