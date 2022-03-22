import React from "react";
import Text from "./styled/Text";
import Card from "./styled/Card";
import MetamaskConnectButton from "./MetamaskConnectButton";

const Header = () => {
    return (
        <>
            <Card
                style={{
                    justifyContent: "space-between",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Text t3>NFT Login</Text>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                    }}
                >
                    <MetamaskConnectButton />
                </div>
            </Card>
        </>
    );
};

export default Header;
