import { NextPage } from "next";
import dynamic from "next/dynamic";
import CustomSuspense from "../components/custom-suspense";

const TestBox = dynamic(() => import("../components/test-box"), {
	suspense: true,
});

const HomePage: NextPage = () => {
	return (
		<CustomSuspense>
			<TestBox />
		</CustomSuspense>
	);
};

export default HomePage;
