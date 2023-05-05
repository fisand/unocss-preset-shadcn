import type { FC } from 'react';
import { useState, useEffect } from 'react';

const MenuToggle: FC = () => {
	const [sidebarShown, setSidebarShown] = useState(false);

	useEffect(() => {
		const body = document.querySelector('body')!;
		if (sidebarShown) {
			body.classList.add('mobile-sidebar-toggle');
		} else {
			body.classList.remove('mobile-sidebar-toggle');
		}
	}, [sidebarShown]);

	return (
		<button
			type="button"
			aria-pressed={sidebarShown ? 'true' : 'false'}
			id="menu-toggle"
			onClick={() => setSidebarShown(!sidebarShown)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M4 6h16M4 12h16M4 18h16"
				/>
			</svg>
			<span className="sr-only">Toggle sidebar</span>
		</button>
	);
};

export default MenuToggle;
