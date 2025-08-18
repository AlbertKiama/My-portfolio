import React from 'react';

export function Footer() {
	return (
		<footer className="mt-12 border-t">
			<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
				<p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Albert Kariuki. All rights reserved.</p>
				<ul className="flex items-center gap-4 text-sm text-muted-foreground">
					<li><a href="#" className="hover:underline">Twitter</a></li>
					<li><a href="#" className="hover:underline">GitHub</a></li>
					<li><a href="#" className="hover:underline">LinkedIn</a></li>
				</ul>
			</div>
		</footer>
	);
}