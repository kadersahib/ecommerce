import { Alert, AlertTitle } from '@mui/material'

const RazorPayment = () => {
  return (
    <div className='h-96 flex justify-center items-center'>
        <Alert severity="warning" variant='filled' style={{ maxWidth: "400px" }}>
            <AlertTitle>Razor Payment Unavailable</AlertTitle>
            Razor payment is unavailable. Please use another payment method.
        </Alert>
    </div>
  )
}

export default RazorPayment;