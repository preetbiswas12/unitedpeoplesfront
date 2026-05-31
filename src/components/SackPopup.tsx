"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { isBrowser } from "@/utils/env";

export default function SackPopup() {
	const [isVisible, setIsVisible] = useState(false);
	const [isDismissed, setIsDismissed] = useState<boolean>(false);

	useEffect(() => {
		if (!isBrowser) return;
		if (isDismissed) return;

		const dismissedFromStorage = sessionStorage.getItem("founder-popup-dismissed") === "true";
		if (dismissedFromStorage) {
			Promise.resolve().then(() => {
				setIsDismissed(true);
			});
			return;
		}

		const handleScroll = () => {
			if (window.scrollY > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isDismissed]);

	const handleDismiss = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		setIsDismissed(true);
		sessionStorage.setItem("founder-popup-dismissed", "true");
	};

	if (isDismissed || !isVisible) return null;

	return (
		<div className="fixed bottom-6 end-6 z-50 max-w-[360px] w-[calc(100vw-48px)] bg-blood text-paper border-[3px] border-ink shadow-[8px_8px_0_var(--color-ink)] p-5 animate-slideup select-none flex flex-col gap-3.5">
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<span className="w-2.5 h-2.5 rounded-full bg-gold animate-livepulse shrink-0" />
					<span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/90">
						Founder Spotlight
					</span>
				</div>
				<button
					onClick={handleDismiss}
					className="text-paper/70 hover:text-paper font-mono text-[14px] font-bold cursor-pointer transition-colors leading-none"
					aria-label="Dismiss alert"
				>
					✕
				</button>
			</div>

			<div className="flex flex-col gap-1.5">
				<h4 className="font-display text-[20px] leading-tight uppercase tracking-[-0.015em] text-paper">
					Meet the
					<br />
					Founder
				</h4>
				<p className="font-sans text-[12.5px] leading-normal text-paper/85 font-medium">
					Read the founder page for the face, the role, and the running note behind the movement.
				</p>
			</div>

			<Link
				href="/founder"
				className="w-full text-center bg-gold hover:bg-[#d9b237] text-ink font-condensed text-[13px] font-bold tracking-[0.15em] uppercase py-[10px] border-2 border-ink shadow-[3px_3px_0_var(--color-ink)] transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_var(--color-ink)]"
			>
				Open Founder Page ➔
			</Link>
		</div>
	);
}
