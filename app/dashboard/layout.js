import "../globals.css";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Navbar } from "@/components/dashboard/Navbar";

export const metadata = {
	title: "Scavenger Hunt",
	description: "Learn about the countless blockchain ecosystems",
};

export default function DashboardLayout({ children }) {
	return (
		<main className="bg-[#060B1C]">
			<Navbar />
			<div className="flex h-screen overflow-hidden">
				<Sidebar />
				<div className="md:ml-60 overflow-y-auto">
					<main className="text-white px-5">{children}</main>
				</div>
			</div>
		</main>
	);
}
