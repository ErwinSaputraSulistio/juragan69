import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
	const [isSideMenuActive, switchSideMenu] = useState(false);
	return(
		<div>
			{/* NAVBAR */}
			<div className="row navbarCustom">
				{/* MOBILE NAVBAR */}
				<div className="col-2 hideThisInDesktop">
					<img 
						alt="hamMenu" 
						className="width100" 
						onClick={ () => { switchSideMenu(true) } }
						src="/img/hammenu.png"
					/>
				</div>
				{/* NAVBAR LOGO */}
				<div className="col-4 offset-3 col-sm-2 offset-sm-0">
					<img alt="navbarLogo" className="width100" src="/img/poker.png"/>
				</div>
				{/* DESKTOP NAVBAR */}
				<div className="desktopMenu col-sm-7 hideThisInMobile">
					<button type="button" className="btn btn-link width20">Top-up</button>
					<button type="button" className="btn btn-link width20">Settings</button>
					<button type="button" className="btn btn-link width20">Contact Us</button>
				</div>
				<div className="desktopAuth col-sm-3 hideThisInMobile">
					<button type="button" className="btn btn-secondary width44">Login</button>
					<button type="button" className="btn btn-light width44">Register</button>
				</div>
			</div>
			{/* SIDE NAVBAR (MOBILE) */}
			<div className={"sideNavbar " + (isSideMenuActive === true ? "sideNavbarEaseIn" : "sideNavbarEaseOut") + " hideThisInDesktop"}>
				<div className="insideSideNavbar">
					<div className="backArrow"><FontAwesomeIcon icon={faTimes} onClick={ () => { switchSideMenu(false) } }/></div>
					{/* SIDE NAVBAR LOGIN. */}
					<div className="sideNavbarAuth">
						<button type="button" className="btn btn-secondary width88">Login</button>
						<button type="button" className="btn btn-light width88">Register</button>
					</div>
					{/* SIDE NAVBAR MENU */}
					<div className="insideSideNavbarSelection">
						<span className="hoverThis">Deposit / Withdrawal</span>
						<span className="hoverThis">Settings</span>
						<span className="hoverThis">About Us</span>
					</div>
				</div>
			</div>
		</div>
	)
}