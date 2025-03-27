"use client";

import React, { useState, useRef, useEffect } from "react";
import StepCard from "./StepCard";

export default function WelcomeSection({ steps, username }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const carouselRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkIfMobile = () => {
			setIsMobile(window.innerWidth < 768);
		};
		checkIfMobile();
		window.addEventListener("resize", checkIfMobile);
		return () => window.removeEventListener("resize", checkIfMobile);
	}, []);

	const goToPrev = () => {
		if (currentIndex > 0) {
			setCurrentIndex(currentIndex - 1);
		}
	};

	const goToNext = () => {
		if (currentIndex < steps.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	useEffect(() => {
		if (carouselRef.current && isMobile) {
			carouselRef.current.scrollTo({
				left: currentIndex * carouselRef.current.offsetWidth,
				behavior: "smooth",
			});
		}
	}, [currentIndex, isMobile]);

	return (
		<div className="rounded-3xl bg-gradient-to-r from-[#803FAF] to-[#E049A0] p-10">
			<div className="mb-6">
				<h2 className="text-2xl font-bold mb-2 font-spaceGrotesk">
					<span className="px-2 py-1 rounded">Hi {username},</span> Welcome!
				</h2>
				<p className="text-purple-100 font-spaceGrotesk">We see you have not joined any challenge so far. Here is a quick reminder of how the system works</p>
			</div>

			{/* Desktop view */}
			<div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-10">
				{steps.map((step) => (
					<StepCard
						key={step.number}
						step={step}
					/>
				))}
			</div>

			{/* Mobile carousel */}
			<div className="md:hidden relative">
				<div
					ref={carouselRef}
					className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
					style={{
						scrollbarWidth: "none",
						msOverflowStyle: "none",
						WebkitOverflowScrolling: "touch",
						"::-webkit-scrollbar": {
							display: "none",
						},
					}}>
					{steps.map((step, index) => (
						<div
							key={step.number}
							className="min-w-full snap-center flex justify-center">
							<StepCard step={step} />
						</div>
					))}
				</div>

				{/* Navigation buttons */}
				<div className="flex justify-center mt-4">

					{/* Dots indicator */}
					<div className="flex space-x-2 items-center">
						{steps.map((_, index) => (
							<div
								key={index}
								className={`h-2 w-2 rounded-full ${currentIndex === index ? "bg-white" : "bg-white/50"}`}
								onClick={() => setCurrentIndex(index)}
							/>
						))}
					</div>

				</div>

			</div>
		</div>
	);
}
