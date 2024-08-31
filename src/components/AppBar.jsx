import logo from "../assets/logo.svg";

function AppBar() {
	return (
		<div className="border-[#25262B] bg-black border-b-2 fixed text-white h-16 w-screen flex items-center justify-center">
			<div>
				<img
					src={logo}
					alt="logo"
					className="h-10"
				/>
			</div>
		</div>
	);
}

export default AppBar;
