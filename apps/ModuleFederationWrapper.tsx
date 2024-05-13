import React from 'react';
import { Component, ErrorInfo, ReactElement, Suspense } from 'react';

interface Props {
	children?: ReactElement;
	onError?: ReactElement;
}

interface State {
	hasError: boolean;
}

class ModuleFederationWrapper extends Component<Props, State> {
	public state: State = { hasError: false };

	public static getDerivedStateFromError(_: Error): State {
		return { hasError: true };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error('Error caught by ErrorBoundary', error, errorInfo);
	}

	public render(): JSX.Element {
		if (this.state.hasError) {
			return this.props.onError ? this.props.onError : <h1>Something went wrong.</h1>;
		}

		return (
			<Suspense fallback={<div>Loading...</div>}>
				{this.props.children}
			</Suspense>
		);
	}
}

export default ModuleFederationWrapper;
