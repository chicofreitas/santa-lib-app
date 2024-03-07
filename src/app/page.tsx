import React from "react";
import CustomNavbar from "@/components/CustomNavbar";
import Image from "next/image";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<>
			<CustomNavbar />
			
			<Slider 
				title="Top 10"
			/>

			<Slider 
				title="Favoritos"
			/>
			
			<Footer />
		</>
	);
}
