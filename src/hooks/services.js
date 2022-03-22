import { useAppContext } from "../AppContext";

export const useApi = () => {
    const { setIsAuthorized } = useAppContext();

    const initAuthorization = async (userAddr) => {
        const nftContractToCheck = "0x38240fa8521e0afc9e8d4c5e35acad1e8a57519c";
        const nftIdToCheck =
            "0x0000000000000000000000000000000000000000000000000000000000000002";
        const result = await fetch(
            "https://eth-rinkeby.alchemyapi.io/v2/demo/getNFTs/?owner=" +
                userAddr
        );
        const json = await result.json();
        let authorized = false;
        json.ownedNfts.forEach((nft) => {
            if (
                nft.contract.address === nftContractToCheck &&
                nft.id.tokenId === nftIdToCheck
            ) {
                authorized = true;
            }
        });

        setIsAuthorized(authorized);
    };

    return {
        initAuthorization,
    };
};
