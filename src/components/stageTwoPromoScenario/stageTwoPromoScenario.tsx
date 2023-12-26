import React from "react";

import LayoutWrapper from "../layoutWrapper/layoutWrapper";
import Victors from "../victors/victors";
import Promo from "../promo/promo";

const StageTwoPromoScenario = () => {
    return (
        <>
            <Promo />
            <LayoutWrapper>
                <Victors />
            </LayoutWrapper>
        </>
    )
};

export default StageTwoPromoScenario;