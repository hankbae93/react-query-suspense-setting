import {
	Component,
	ComponentType,
	FunctionComponent,
	ReactElement,
	ReactNode,
	Suspense,
} from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";

interface Props {
	errorComponent?: (
		props: FallbackProps
	) => ReactElement<
		unknown,
		string | FunctionComponent<{}> | typeof Component
	> | null;
	loadingComponent?: ReactNode;
	children: ReactNode;
}

const CustomSuspense = ({
	errorComponent,
	loadingComponent,
	children,
}: Props) => {
	return (
		<ErrorBoundary
			fallbackRender={errorComponent || (() => <h1>There was an error!</h1>)}
		>
			<Suspense fallback={loadingComponent || <h1>Loading...</h1>}>
				{children}
			</Suspense>
		</ErrorBoundary>
	);
};

export default CustomSuspense;
