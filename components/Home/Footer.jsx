export default function Footer() {
	return(
		<div className='footer'>
			<div className='col-12 row'>
				<div className='col-lg-6 col-xs-12 footerImageContainer'>
					<h4>
						Downloadable:
					</h4>
					<div className='footerImageWrapper'>
						<img className='footerImage' src='https://i.ibb.co/W2Kx26f/gg.png' />
						<img className='footerImage' src='https://i.ibb.co/xz9n7Vk/ios.png' />
					</div>
				</div>
				<div className='col-lg-6 col-xs-12 footerImageContainer'>
					<h4>
						Supported payment:
					</h4>
					<div className="footerImageWrapper footerPaymentWrapper">
						<img className='footerImage' src='https://logos-download.com/wp-content/uploads/2017/03/BCA_logo_Bank_Central_Asia.png' />
						<img className='footerImage' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/BANK_BRI_logo.svg/2560px-BANK_BRI_logo.svg.png' />
						<img className='footerImage' src='https://i.pinimg.com/originals/fa/b0/31/fab0316777f1e21b9bfbbe888872df29.png' />
					</div>
				</div>
			</div>
		</div>
	)
}