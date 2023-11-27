import { toast } from 'react-toastify'

const showMessage = (msg, status) => {
  if (status === 'error') {
    toast.error(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
      autoClose: 1500,
    })
  } else {
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
      theme: 'colored',
      autoClose: 1500,
    })
  }
}

export default showMessage
