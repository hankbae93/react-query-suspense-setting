import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchHello } from "../queries";

const TestBox = () => {
	const { data, isFetching, refetch } = useQuery(["hello"], fetchHello, {
		suspense: true,
	});

	return <div>{data?.name}</div>;
};

export default TestBox;
