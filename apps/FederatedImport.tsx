import React from "react";

export default async function federatedImport(imp: Promise<any>, failReturnType = <></>) {
	try {
		const module = await imp;
		return module?.default || failReturnType;
	} catch (error) {
		console.error(error);
		return failReturnType;
	}
}
