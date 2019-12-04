import Swal from 'sweetalert2'

export default function AlertSuccess(props) {
  const {title} = props
  return(
    Swal.fire({title},"", "success")
  )
}
