import React from "react";
import {useNetworkState} from "react-use";
import "./index.scss";

const Network: React.FC = () => {
    const {online} = useNetworkState();

    const handleRefresh = () => {
        location.reload();
    };

    return (
        <>
            {!online && (
                <div className="network-wrap">
                    <div className={"network"}>
                        <div className="container">
                            无网络连接，请尝试刷新页面。
                            <div className="refresh" onClick={handleRefresh}>
                                刷新页面
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Network;
