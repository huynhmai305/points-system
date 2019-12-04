import Swal from 'sweetalert2'

export default function ConfirmDelete(props) {
  Swal.fire({
    title: 'Bạn có chắc muốn xóa không?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Hủy',
    confirmButtonText: 'Xóa'
  }).then((result) => {
    {props.delete}
    if (result.value) {
      Swal.fire(
        'Xóa thành công!',
        '',
        'success'
      )
    }
  })
}
