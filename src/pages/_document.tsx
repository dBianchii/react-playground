import NavBar from "@/components/NavBar"
import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body className="bg-gray-800 text-white">
				<NavBar />
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
