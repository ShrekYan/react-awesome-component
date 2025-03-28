import React, {useEffect} from "react";
import type {FallbackProps} from "react-error-boundary";
import {ErrorBoundary as ErrorBoundaryComponent} from "react-error-boundary";
import errorBodyImage from "./images/bg-errorBody.jpg";
import errorText from "./images/bg-errorText.png";
import "./index.scss"; // 修改为普通 CSS 导入

const ErrorFallback: React.FC<FallbackProps> = ({error}) => {
    useEffect(() => {
        console.log(error);
    }, [error]);

    return (
        <div className="errorBoundary-container">
            <div className="errorBoundary-content">
                <img src={errorBodyImage} width="100%" height="100%" alt="Error visualization"/>
                <img src={errorText} width="100%" height="100%" alt="Error message"/>
            </div>
        </div>
    );
};

const ErrorBoundary: React.FC<{ children: React.ReactElement | React.ReactElement[] }> = ({
                                                                                              children
                                                                                          }) => {
    useEffect(() => {
        const handleError = (event: ErrorEvent) => console.log(event);
        const handleRejection = (event: PromiseRejectionEvent) => console.log(event);

        window.addEventListener("error", handleError);
        window.addEventListener("unhandledrejection", handleRejection);

        return () => {
            window.removeEventListener("error", handleError);
            window.removeEventListener("unhandledrejection", handleRejection);
        };
    }, []);

    return (
        <ErrorBoundaryComponent FallbackComponent={ErrorFallback}>
            {children}
        </ErrorBoundaryComponent>
    );
};

export default ErrorBoundary;