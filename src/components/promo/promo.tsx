import React, { useState } from 'react';

import {
    StyledContent,
    StyledDescription,
    StyledDiscountDuration,
    StyledDiscountNote,
    StyledDiscountTitle,
    StyledDiscountValue,
    StyledFragment,
    StyledParagraph,
    StyledPromo,
    StyledPromoContent,
    StyledPromocode,
    StyledSection,
    StyledTitle,
} from './promo.styled';
import { DATA } from './promo.constants';
import Modal from '../modal/modal';
import { copyToClipboard } from '../../utils/copyToClipboard';

const Promo = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        setIsModalOpen(true);

        document.documentElement.classList.add("modal-opened");

        copyToClipboard(DATA.promocode);
    }

    return (
        <>
            <StyledSection>
                <StyledContent>
                    <StyledTitle>{DATA.title}</StyledTitle>
                    <StyledDescription>
                        {DATA.description.map(par => (
                            <StyledParagraph>{par}</StyledParagraph>
                        ))}
                    </StyledDescription>
                </StyledContent>
                <StyledPromo>
                    <StyledPromoContent>
                        <StyledDiscountValue>15%</StyledDiscountValue>
                        <StyledDiscountTitle>Скидка</StyledDiscountTitle>
                        <StyledDiscountNote>на заказ от 2024 ₽</StyledDiscountNote>
                        <StyledDiscountDuration>с <span>10</span> по <span>31</span> января</StyledDiscountDuration>
                        <StyledFragment>по промокоду</StyledFragment>
                        <StyledPromocode type="button" onClick={handleClick}>{DATA.promocode}</StyledPromocode>
                        <StyledFragment>в мобильном приложении</StyledFragment>
                    </StyledPromoContent>
                </StyledPromo>
            </StyledSection>
            <Modal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false)}} />
        </>
    )
}

export default Promo;