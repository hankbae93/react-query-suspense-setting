import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const queryClientRef = useRef<QueryClient>();
	if (!queryClientRef.current) {
		queryClientRef.current = new QueryClient({
			defaultOptions: {
				queries: {
					suspense: true,
				},
			},
		});
	}

	return (
		<QueryClientProvider client={queryClientRef.current}>
			<Component {...pageProps} />
		</QueryClientProvider>
	);
}

export default MyApp;
