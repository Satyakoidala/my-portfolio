import React, { useState, useEffect, useCallback, useRef } from "react";
import cn from "classnames";
import { Container } from "../core";
import "./carousel.scss";

const Carousel = ({
	slides = [],
	autoPlay = false,
	interval = 5000,
	showDots = false,
	title,
	legend,
	pauseOnHover = false,
	renderSlide,
	className,
}) => {
	const [isPlaying, setIsPlaying] = useState(autoPlay);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);
	const [showArrows, setShowArrows] = useState(false);
	const [canScrollLeft, setCanScrollLeft] = useState(false);
	const [canScrollRight, setCanScrollRight] = useState(false);

	const carouselRef = useRef(null);
	const slidesRef = useRef(null);

	const checkScrollability = useCallback(() => {
		if (!carouselRef.current || !slidesRef.current) return;

		const container = carouselRef.current;
		const content = slidesRef.current;
		const { scrollLeft, clientWidth: containerWidth } = container;
		const { scrollWidth } = content;

		// Can scroll left if we're not at the start
		const canScrollLeftNow = Math.round(scrollLeft) > 0;

		// Can scroll right if we haven't reached the end
		// Adding small buffer (1px) to account for floating point precision
		const canScrollRightNow =
			Math.round(scrollLeft + containerWidth) < scrollWidth - 1;

		setCanScrollLeft(canScrollLeftNow);
		setCanScrollRight(canScrollRightNow);
	}, []);

	// Check scrollability on mount and when content changes
	useEffect(() => {
		checkScrollability();
		// Add resize observer to handle dynamic content changes
		const resizeObserver = new ResizeObserver(checkScrollability);
		if (slidesRef.current) {
			resizeObserver.observe(slidesRef.current);
		}
		return () => resizeObserver.disconnect();
	}, [checkScrollability, slides]);

	const scroll = useCallback((direction) => {
		if (!carouselRef.current || !slidesRef.current) return;

		const container = carouselRef.current;
		const slideElements = Array.from(slidesRef.current.children);
		const slideWidth = 280; // Match the fixed width from CSS
		const gap = 24; // 1.5rem = 24px

		// Calculate current scroll position in terms of slides
		const currentIndex = Math.round(
			container.scrollLeft / (slideWidth + gap)
		);

		// Calculate target index
		const targetIndex =
			direction === "next"
				? Math.min(currentIndex + 1, slideElements.length - 1)
				: Math.max(0, currentIndex - 1);

		// Calculate exact scroll position
		const targetPosition = targetIndex * (slideWidth + gap);

		container.scrollTo({
			left: targetPosition,
			behavior: "smooth",
		});
	}, []);

	// Auto-play functionality
	useEffect(() => {
		if (!isPlaying) return;

		const timer = setInterval(() => {
			scroll("next");
		}, interval);

		// eslint-disable-next-line consistent-return
		return () => clearInterval(timer);
	}, [isPlaying, interval, scroll]);

	// Handle scroll events to update arrow visibility
	useEffect(() => {
		const handleScroll = () => {
			checkScrollability();
		};

		if (carouselRef.current) {
			carouselRef.current.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (carouselRef.current) {
				carouselRef.current.removeEventListener("scroll", handleScroll);
			}
		};
	}, [checkScrollability]);

	// Touch events handling
	const handleTouchStart = (e) => {
		setTouchStart(e.touches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.touches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (!touchStart || !touchEnd) return;

		const distance = touchStart - touchEnd;
		const isLeftSwipe = distance > 50;
		const isRightSwipe = distance < -50;

		if (isLeftSwipe) {
			scroll("next");
		} else if (isRightSwipe) {
			scroll("prev");
		}

		setTouchStart(0);
		setTouchEnd(0);
	};

	// Keyboard navigation
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === "ArrowLeft") {
				scroll("prev");
			} else if (e.key === "ArrowRight") {
				scroll("next");
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [scroll]);

	return (
		<Container
			classes={["carousel-container", className]}
			role="region"
			aria-label={title || "Content carousel"}
			onMouseEnter={() => {
				setShowArrows(true);
				if (pauseOnHover) setIsPlaying(false);
			}}
			onMouseLeave={() => {
				setShowArrows(false);
				if (pauseOnHover && autoPlay) setIsPlaying(true);
			}}
			noPadding
		>
			<div className="carousel-wrapper">
				{(title || legend) && (
					<div className="carousel-header">
						{title && <h3 className="carousel-title">{title}</h3>}
						{legend && <p className="carousel-legend">{legend}</p>}
					</div>
				)}

				<div className="carousel-content">
					<div
						className="carousel-inner"
						ref={carouselRef}
						onTouchStart={handleTouchStart}
						onTouchMove={handleTouchMove}
						onTouchEnd={handleTouchEnd}
					>
						<div className="carousel-slides" ref={slidesRef}>
							{slides.map((slide, index) => (
								<div
									key={index}
									className="carousel-slide"
									role="group"
									aria-roledescription="slide"
									aria-label={`${index + 1} of ${
										slides.length
									}`}
								>
									{renderSlide
										? renderSlide(slide, index)
										: slide}
								</div>
							))}
						</div>
					</div>

					{(canScrollLeft || canScrollRight) && (
						<>
							<button
								type="button"
								className={cn(
									"carousel-arrow carousel-arrow-prev",
									{
										visible: showArrows && canScrollLeft,
									}
								)}
								onClick={() => scroll("prev")}
								disabled={!canScrollLeft}
								aria-label="Previous slides"
							>
								<span className="arrow-icon" aria-hidden="true">
									&#9668;
								</span>
							</button>
							<button
								type="button"
								className={cn(
									"carousel-arrow carousel-arrow-next",
									{
										visible: showArrows && canScrollRight,
									}
								)}
								onClick={() => scroll("next")}
								disabled={!canScrollRight}
								aria-label="Next slides"
							>
								<span className="arrow-icon" aria-hidden="true">
									&#9658;
								</span>
							</button>
						</>
					)}
				</div>

				{showDots && slides.length > 1 && (
					<div
						className="carousel-dots"
						role="tablist"
						aria-label="Select a slide group to show"
					>
						{slides.map((_, index) => (
							<button
								type="button"
								key={index}
								className="carousel-dot"
								onClick={() => {
									const scrollAmount =
										carouselRef.current.offsetWidth * index;
									carouselRef.current.scrollTo({
										left: scrollAmount,
										behavior: "smooth",
									});
								}}
								aria-label={`Go to slide group ${index + 1}`}
								role="tab"
							/>
						))}
					</div>
				)}
			</div>
		</Container>
	);
};

export default Carousel;
