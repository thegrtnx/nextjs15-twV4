"use client";

import { ReactNode } from "react";
import { cn } from "./utils";
import { HeroUIProvider } from "@heroui/react";

export function MaxWidthWrapper({ className, children }: { className?: string; children: ReactNode }) {
	return (
		<main className={cn("", className)}>
			<HeroUIProvider>{children}</HeroUIProvider>
		</main>
	);
}
