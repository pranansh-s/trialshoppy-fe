import Image from 'next/image';
import {AiFillCaretDown} from 'react-icons/ai';
import ProgressBar from '@ramonak/react-progress-bar';
import VisitStoreCard from '../visitStoresCard_StoresOffersPage';
import { icons } from 'react-icons';

function RecomendedReviews(){

    return (
			<>
				<section className="w-full sm:flex justify-center p-2 ">
					<section className="flex flex-col sm:w-2/3 sm:p-2 py-5 border-y border-slate-400">
						<section className="flex flex-wrap px-2 justify-center sm:flex-row sm:justify-evenly sm:py-2 ">
							<span className="bg-gray-600 m-2 text-white font-fontMedium text-xs w-[6rem] flex justify-center items-center sm:h-7">
								<span className="text-lg pr-1 pb-1 font-fontMedium">+</span>{' '}
								Follow store
							</span>
							<span className="bg-white m-2 border border-gray-400  text-gray-600 font-fontMedium text-xs w-[8rem] flex flex-wrap justify-center items-center h-7">
								<span className="text-lg pr-1 pb-1 font-fontMedium">
									<Image
										width={10}
										height={10}
										src="/../public/icons/StoreReviewPageTop2.png"
										alt="writeAReiview"
										className="pt-1"
									/>
								</span>{' '}
								Add Photos
							</span>
							<span className="bg-white m-2 border border-gray-400  text-gray-600 font-fontMedium text-xs w-[8rem] flex flex-wrap justify-center items-center h-7">
								<span className="text-lg pr-1 pb-1 font-fontMedium">
									<Image
										width={10}
										height={10}
										src="/../public/icons/StoreReviewPageTop3.png"
										alt="writeAReiview"
										className="pt-1"
									/>
								</span>{' '}
								Write a Review
							</span>
							<span className="bg-white m-2 border border-gray-400  text-gray-600 font-fontMedium text-xs w-[8rem] flex flex-wrap justify-center items-center h-7">
								<span className="text-lg pr-1 pb-1 font-fontMedium">
									<Image
										width={10}
										height={10}
										src="/../public/icons/StoreReviewPageTop4.png"
										alt="writeAReiview"
										className="pt-1"
									/>
								</span>{' '}
								Share
							</span>
						</section>
						<section className="sm:w-full flex justify-evenly">
							<span className=" text-gray-400 sm:px-5 px-3 py-2 font-fontMedium ">
								Overview
							</span>
							<span className=" text-black border-b-2 px-5 py-2  border-black font-fontMedium ">
								Reviews
							</span>
							<span className="  text-gray-400 font-fontMedium px-3 py-2">
								Offers
							</span>
						</section>
						<section className="sm:w-full">
							<p className=" text-sm mx-4 p-4 font-fontBold">
								Recommended Reviews
							</p>
							<section className="flex flex-col sm:flex-row justify-center sm:h-auto  border sm:justify-between sm:w-full sm:px-4">
								<section className="flex sm:flex-row justify-center">
									<Image
										width={58}
										height={58}
										src="/../public/icons/StoreReviewPageEllipse 49.png"
										className="py-2 sm:py-10"
									/>
									<section className="sm:justify-self-start items-center justify-center py-2 sm:py-10 mx-2 ">
										<p className="font-fontMedium text-sm">Kunal Mishra</p>
										<p className="font-fontRegular text-xs">Delhi, India</p>
										<section className="flex ">
											<Image
												width={14}
												height={14}
												src="/../public/icons/StoreReiviewVectorprofileBelow1.png"
											/>
											<label className="font-fontMedium text-xs text-slate-500 px-1">
												5
											</label>
											<Image
												width={14}
												height={14}
												src="/../public/icons/StoreReiviewVectorprofileBelow2.png"
											/>
											<label className="font-fontMedium text-xs text-slate-500 px-1">
												9
											</label>
											<Image
												width={14}
												height={14}
												src="/../public/icons/StoreReiviewVectorprofileBelow3.png"
											/>
											<label className="font-fontMedium text-xs text-slate-500 px-1">
												0
											</label>
										</section>
									</section>
								</section>

								<section className="flex flex-col items-center justify-center	">
									<seciton className="flex sm:px-7">
										<Image
											width={23}
											height={23}
											src="/../public/icons/StoreReviewPageStar 1.png"
											className=" m-1"
										/>
										<Image
											width={23}
											height={23}
											src="/../public/icons/StoreReviewPageStar 1.png"
											className=" m-1"
										/>
										<Image
											width={23}
											height={23}
											src="/../public/icons/StoreReviewPageStar 1.png"
											className=" m-1"
										/>
										<Image
											width={23}
											height={23}
											src="/../public/icons/StoreReviewPageStar 1.png"
											className=" m-1"
										/>
										<Image
											width={23}
											height={23}
											src="/../public/icons/StoreReviewPageStar 1.png"
											className=" m-1"
										/>
									</seciton>
									<p className="sm:p-2 font-fontBold text-xs">
										Start your review of Sajal fashion store
									</p>
								</section>
							</section>
						</section>

						<section className="sm:w-full sm:py-3 border-y border-slate-400 ">
							<section className="flex justify-end p-4 ">
								<span className=" text-xs sm:mx-1 font-fontBold text-gray-400">
									Sort:
								</span>
								<span className="flex text-xs sm:mx-1 font-fontRegular">
									TS Sort
									<span className="sm:mx-1 flex items-center">
										<AiFillCaretDown />
									</span>
								</span>
								<span className=" text-xs sm:mx-1 font-fontBold text-gray-400">
									Filter By:
								</span>
								<span className="flex text-xs sm:mx-1 font-fontRegular">
									All Rating
									<span className="sm:mx-1 sm:py-1">
										<AiFillCaretDown />
									</span>
								</span>
							</section>

							<section className="flex flex-col sm:flex-row">
								<section className="sm:m-4 flex flex-col justify-center sm:justify-start sm:justify-self-end  items-center">
									<span className="font-fontMedium text-sm sm:m-5 ">
										Overall rating
									</span>
									<section className="flex sm:m-3">
										<span className="border w-[2rem] sm:w-[3rem] m-2 bg-green-700 text-white border-green-600 sm:text-lg rounded-lg text-center ">
											4.0
										</span>
										<seciton className="flex m-3">
											<Image
												width={19}
												height={19}
												src="/../public/icons/StoreReviewPageFilledStar 7.png"
												alt="starIcon"
											/>
											<Image
												width={23}
												height={19}
												src="/../public/icons/StoreReviewPageFilledStar 7.png"
												alt="starIcon"
											/>
											<Image
												width={23}
												height={19}
												src="/../public/icons/StoreReviewPageFilledStar 7.png"
												alt="starIcon"
											/>
											<Image
												width={23}
												height={19}
												src="/../public/icons/StoreReviewPageFilledStar 7.png"
												alt="starIcon"
											/>
											<Image
												width={23}
												height={19}
												src="/../public/icons/StoreReviewPageStar 1.png"
												alt="starIcon"
											/>
										</seciton>
									</section>
									<section className="sm:m-5">4554 Reviews</section>
								</section>

								<section className=" sm:ml-16 sm:py-7 sm:w-2/4 ">
									<section className="flex m-1">
										<label className="m-1 font-fontMedium text-xs">
											5 Stars
										</label>
										<ProgressBar
											height={10}
											completed={40}
											className="w-4/5 m-2"
											bgColor="grey"
											isLabelVisible={false}
										/>
									</section>

									<section className="flex m-1">
										<label className="m-1 font-fontMedium text-xs">
											4 Stars
										</label>
										<ProgressBar
											height={10}
											completed={40}
											className="w-4/5 m-2"
											bgColor="grey"
											isLabelVisible={false}
										/>
									</section>
									<section className="flex m-1">
										<label className="m-1 font-fontMedium text-xs">
											3 Stars
										</label>
										<ProgressBar
											height={10}
											completed={40}
											className="w-4/5 m-2"
											bgColor="grey"
											isLabelVisible={false}
										/>
									</section>
									<section className="flex m-1">
										<label className="m-1 font-fontMedium text-xs">
											2 Stars
										</label>
										<ProgressBar
											height={10}
											completed={40}
											className="w-4/5 m-2"
											bgColor="grey"
											isLabelVisible={false}
										/>
									</section>
									<section className="flex m-1">
										<label className="m-1 font-fontMedium text-xs">
											1 Stars
										</label>
										<ProgressBar
											height={10}
											completed={40}
											className="w-4/5 m-2"
											bgColor="grey"
											isLabelVisible={false}
										/>
									</section>
								</section>
							</section>
						</section>
					</section>

					<section className="sm:px-8 sm:m-1 sm:w-1/4 lg:w-3/7 md:w-2/6">
						<VisitStoreCard />
					</section>
				</section>
			</>
		);
}

export default RecomendedReviews;