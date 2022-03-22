import React, { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { useApi } from "../../hooks/services";
import { useAppContext } from "../../AppContext";
import Text from "../../components/styled/Text";

const Home = () => {
    const { active, account } = useWeb3React();
    const { initAuthorization } = useApi();
    const { isAuthorized } = useAppContext();

    useEffect(() => {
        let mounted = true;
        mounted && account && initAuthorization(account);
        return () => {
            mounted = false;
        };
    }, [account]);

    return (
        <div
            style={{
                display: "flex",
                rowGap: 30,
                flexDirection: "column",
                textAlign: "center",
            }}
        >
            {active && isAuthorized && (
                <Text>
                    Congrats! you've logged in to this page using an NFT
                </Text>
            )}
            {active && !isAuthorized && (
                <Text>
                    You need NFT with contract
                    0x38240fa8521e0afc9e8d4c5e35acad1e8a57519c and id
                    0x0000000000000000000000000000000000000000000000000000000000000002
                    to be able to login
                </Text>
            )}
        </div>
    );
};

export default Home;
