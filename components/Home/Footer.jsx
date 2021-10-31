export default function Footer() {
	return(
		<div className='footer'>
			<div className='col-12 row'>
				<div className='col-lg-6 col-xs-12 footerImageContainer'>
					<h4>
						Downloadable:
					</h4>
					<div className='footerImageWrapper'>
						<img className='footerImage' src='/img/googleplay.png' />
						<img className='footerImage' src='/img/ios.png' />
					</div>
				</div>
				<div className='col-lg-6 col-xs-12 footerImageContainer'>
					<h4>
						Supported payment:
					</h4>
					<div className="footerImageWrapper footerPaymentWrapper">
						<img className='footerImage' src='/img/bca.png' />
						<img className='footerImage' src='/img/bri.png' />
						<img className='footerImage' src='/img/mandiri.png' />
					</div>
				</div>
			</div>
		</div>
	)
}