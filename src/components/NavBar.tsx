import Link from "next/link"

export default function NavBar() {
	const links = [
		{
			href: "/useEffect",
			text: "useEffect",
		},
		{
			href: "/",
			text: "Home",
		},
	]

	return (
		<nav className="flex flex-row items-center justify-between py-4 px-8 bg-gray-900">
			<div className="flex flex-row items-center">
				<div className="flex flex-col">
					<h1 className="text-3xl text-white">
						<span className="text-red-400">Next.Js</span> Playground
					</h1>
					<h4 className="text-lg text-white mt-1">
						by <span className="text-red-400">Gabriel Bianchi</span>
					</h4>
				</div>
			</div>
			<div className="flex flex-row items-center">
				{links.map((link) => (
					<Link href={link.href} key={link.href} className="text-white text-xl mx-4 hover:text-red-400">
						{link.text}
					</Link>
				))}
			</div>
		</nav>
	)
}
