import Error from './error.gif'

const ErrorMessage = () => {
	return (
		<img src={Error} alt='error' style={{
			display: "block",
			width: "250px",
			objectFit: "contain",
			margin:"0 auto"
		}} />
	)
 }
export default ErrorMessage;