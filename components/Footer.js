import React , { useState } from 'react';
import Image from 'next/image';


export default function Footer(props){

	// above two state hooks are just for reference they must be removed whn a button is setup to
	//change the theme of the site and all the thing at then will be handled by the props

	const [lightMode , setLightMode] = useState("bg-white text-black");
	const [darkMode , setDarkMode] = useState("bg-black text-white");
	const [look , setLook] = useState(lightMode);

    return (
			<>
			
				<div className="box-border  w-screen h-489 flex flex-col items-center px-10.5 py-0 gap-6.25 absolute left: calc(50% - 1549.5px) bottom-5  border-t-1 border-solid border-primary">
				

					<section className=" w-screen flex-col flex lg:flex-row  sm:flex-col items-center my-8">
						<div className="flex w-screen lg:flex-row sm:flex sm:justify-center sm:flex-row sm:my-3 sm:w-screen  items-center justify-center ml-7 mx-4 py-1.75 lg:w-8 h-22.5 bg-slate-100  self-stretch grow">
							{/* 1/3 */}

							<Image
								src="/../public/icons/footer-phone-vector.png"
								alt="myIcon"
								width={40}
								height={40}
							/>
							{/* icon */}

							<div className=" flex flex-col px-2">
								<div className="w-66.75 h-5 font-fontBold font-semibold text-xs leading-5 flex text-black flex-row  order-none self-stretch grow-0">
									{/* head */}
									THE TRIALSHOPPY APP
								</div>

								<div className="w-66.75 h-4.5 font-fontRegular font-normal text-xs leading-5 flex items-center text-primary flex-none order-1 self-stretch  grow-0">
									{/* body */}
									Seamless on-the-go shopping
								</div>

								<a
									href="#"
									className=" w-28.75 font-fontRegular font-normal text-xs leading-5 flex sm:underline lg:underline items-center no-underline text-black flex-none order-1 grow-0">
									{/* link */}
									Download now
								</a>
							</div>
						</div>

						<div className="flex w-screen lg:flex-row sm:flex sm:justify-center sm:flex-row sm:my-3 sm:w-screen  items-center justify-center ml-7 mx-4 py-1.75 lg:w-8 h-22.5 bg-slate-100  self-stretch grow">
							{/* 1/3 */}

							<Image
								src="/../public/icons/footer-group-vector.png"
								alt="myIcon"
								width={45}
								height={45}
							/>

							<div className=" flex flex-col px-4">
								<div className="w-66.75 h-5  font-fontBold font-semibold text-xs leading-5 flex text-black flex-none order-none self-stretch grow-0">
									{/* head */}
									TS REFERRAL PROGRAM
								</div>

								<div className="w-66.75 h-4.5 font-fontRegular font-normal text-xs leading-5 flex items-center text-primary flex-none order-1 self-stretch  grow-0">
									{/* body */}
									Refer a friend: Give ₹250, get ₹250
								</div>

								<a
									href="#"
									className=" w-28.75 font-fontRegular font-normal text-xs leading-5 flex  sm:underline lg:underline items-center no-underline text-black flex-none order-1 grow-0">
									{/* link */}
									Find out more
								</a>
							</div>
						</div>
						<div className="flex w-screen lg:flex-row sm:flex sm:justify-center sm:flex-row sm:my-3 sm:w-screen  items-center justify-center ml-7 mx-4 py-1.75 lg:w-8 h-22.5 bg-slate-100  self-stretch grow">
							{/* 1/3 */}

							<Image
								src="/../public/icons/footer-truck-vector.png"
								alt="myIcon"
								width={45}
								height={45}
							/>

							<div className=" flex  flex-col lg:flex-col sm:flex-col px-4 ">
								<div className="w-66.75 h-5  font-fontBold font-semibold text-xs leading-5 flex text-black flex-none order-none self-stretch grow-0">
									{/* head */}
									FAST, SAFE, CONVENIENT DELIVERY
								</div>

								<div className="w-66.75 h-4.5 font-fontRegular font-normal text-xs leading-5 flex items-center text-primary flex-none order-1 self-stretch  grow-0">
									{/* body */}
									On all orders
								</div>

								<a
									href="#"
									className=" w-28.75 font-fontRegular flex font-normal text-xs leading-5  sm:underline lg:underline   items-center no-underline text-black flex-none order-1 grow-0">
									{/* link */}
									Find out more
								</a>
							</div>
						</div>
					</section>

					<section className=" w-screen flex-col items-center lg:flex lg:flex-row sm:flex-col sm:justify-center sm:items-center  lg:items-start">
						<div className="lg:px-10 sm:text-center sm:py-4 py-3 lg:py-0">
							<p className=" w-47.5 h-5 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex  text-black flex-none order-none self-stretch grow-0">
								ONLINE SHOPPING
							</p>

							<div className="pt-2 sm:text-center ">
								<p className="w-34 h-3 flex justify-center items-center font-fontRegular sm:flex sm:justify-center lg:justify-start text-xs leading-5 text-primary self-stretch grow-0">
									Men
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Women
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Kids
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Electronics
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Jewellery
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Furnitures
								</p>
							</div>
						</div>

						<div className=" lg:px-10 sm:py-4 py-3 lg:py-0">
							<p className="w-47.5 h-5 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex  text-black flex-none order-none self-stretch grow-0">
								NEAR BY SHOPS
							</p>

							<div className="pt-2">
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Near By Fashion
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Near By Jewellery
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Near By Electronics
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Near By Furniture
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Near By All Shops
								</p>
							</div>
						</div>
						<div className="  lg:px-8 py-3 sm:py-4 lg:py-0">
							<p className="w-47.5 h-3 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex lg:justify-center lg:items-center lg:pr-7 text-black flex-none order-none self-stretch grow-0">
								HELP & INFO
							</p>

							<div className="pt-2 ">
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Track An Order
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Contact Us
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									FAQs
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Privacy Policy
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Cookie Policy
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Shipping Policy
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Terms & Conditions
								</p>
							</div>
						</div>
						<div className=" lg:px-10 sm:py-4 py-3 lg:py-0">
							<p className="w-47.5 h-5 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex  text-black flex-none order-none self-stretch grow-0">
								Trialshoppy FOR BUSINESS
							</p>

							<div className="pt-2">
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Become A Seller
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									How To Sell
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Advertise on Trialshoppy
								</p>
								<p className="w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-start lg:py-3 text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									Business Support
								</p>
							</div>
						</div>

						<section className="lg:px-10 lg:w-1/5 py-3 sm:py-4 lg:py-0">
							<div>
								<p className="w-47.5 h-5 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex  text-black flex-none order-none self-stretch grow-0">
									EMAIL US
								</p>

								<p className=" w-34 h-4 flex justify-center items-center  font-fontRegular sm:flex sm:justify-center lg:justify-center text-xs leading-5  text-primary  flex-none order-none self-stretch grow-0">
									customercare@trialshoppy.com
								</p>
							</div>

							<div>
								<p className="sm:w-47.5 h-3 py-4 flex justify-center items-center font-bold sm:h-6 font-fontdBold sm:font-fontBold sm:text-centertext -sm leading-6 lg:flex  text-black flex-none order-none self-stretch grow-0">
									KEEP IN TOUCH
								</p>

								<section className="lg:flex w-screen lg:w-3/5 lg:justify-start flex justify-center items-center lg:py-3 lg:ml-5 lg:px-4 sm:flex sm:justify-center sm:items-center sm:py-3">
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
								</section>
							</div>
						</section>
					</section>

					<section className="flex flex-col w-screen items-center sm:flex lg:flex-row sm:flex-col sm:justify-center sm:items-center sm:w-screen ">
						<section className="w-screen flex flex-col items-center m-auto lg:flex lg:items-start lg:justify-start lg:mx-7 lg:justify-self-center lg:w-2/4 lg:h-3.025 lg:mr-5 sm:mx-2 font-fontBold font-bold text-xs leading-5 sm:w-screen sm:text-center  text-primary  order-none self-stretch grow-0">
							<p className="sm:flex lg:ml-16 sm:justify-center sm:items-center lg:py-2 ">
								TRIALSHOOPY ACCEPTS
							</p>

							<section className="flex flex-row lg:ml-16 px-3 sm:flex sm:justify-center sm:items-center lg:justify-self-start">
								<section>
									<Image
										src="/public/icons/footer-bhim-upi-vector.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
								</section>

								<section>
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
								</section>

								<section>
									<Image
										src="/public/icons/footer_phone_icon.png"
										alt="myIcon"
										width={23}
										height={23}
									/>
								</section>
							</section>
						</section>

						<section className="lg:w-2/4 w-screen flex flex-row justify-center items-center px-2 sm:w-screen h-4.5 lg:relative  lg:left-10 lg:pl-5 sm:text-center sm:flex sm:justify-center sm:items-center font-fontRegular font-normal text-xs leading-4  lg:items-center text-right text-primary flex-none order-none self-stretch grow-0">
							© 2023 www.trialshoppy.com. All rights reserved.
						</section>
					</section>
				</div>
				{/* </div> */}
			</>
		);
}