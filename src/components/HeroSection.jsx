function HeroSection(){
	return (
		<>
			<div className="flex flex-col justify-center items-center gap-[48px] font-poppins desktop:flex-row desktop:justify-between py-10 px-4 desktop:pt-[60px] desktop:px-[120px] desktop:pb-[80px]">
				<div className="gap-10 desktop:gap-6 w-[343px] h-[184px] flex flex-col gap-[16px] items-center desktop:w-[347px] desktop:h-[276px]">
					<h2 className="text-headline-2 text-center desktop:text-headline-1 desktop:text-right">Stay Informed, Stay Inspired</h2>
					<h2 className="body-1 text-brown-400 text-center desktop:text-right">Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.</h2>
				</div>
				<div className="relative rounded-[16px] overflow-hidden">
					<img src="https://res.cloudinary.com/dcbpjtd1r/image/upload/v1728449784/my-blog-post/xgfy0xnvyemkklcqodkg.jpg" className="w-[343px] h-[470px] desktop:w-[386px] desktop:h-[529px] object-cover"/>
  				<div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(190,187,177,0.25),rgba(190,187,177,0.25))]"></div>
				</div>
				<div className="flex flex-col gap-3 desktop:w-[347px] desktop:h-[284px]">
					<div className=" flex flex-col gap-2">
						<span className="text-body-3 text-brown-400">-Author</span>	
						<h3 className="text-headline-3 text-brown-500">Thompson P.</h3>
					</div>
					<div className="text-body-1 text-brown-400">
						<span>I am a pet enthusiast and freelance writer who specializes in animal behavior and care. With a deep love for cats, I enjoy sharing insights on feline companionship and wellness.<br></br><br></br></span>	
						<span>When i’m not writing, I spends time volunteering at my local animal shelter, helping cats find loving homes.</span>
					</div>	
				</div>			
			</div>
		</>
	)
}

export default HeroSection