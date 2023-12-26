import React, { useEffect, useRef, useState } from "react";

import { ANIMATIONS_TIMINGS } from "../../constants/animations";
import {
    StyledIconCloseButton,
    StyledContainer,
    StyledContent,
    StyledDescription,
    StyledModal,
    StyledTitle,
    StyledCloseButton,
    StyledLove,
    StyledFooter,
    StyledOrderLink,
} from "./modalMobile.styled";
import CloseIcon from '../../images/icons/common/close.svg';
import love from '../../images/icons/common/love.png'
import { useGetDeviceType } from "../../hooks/useGetDeviceType";

const ModalDesktop = ({
    onClose,
} : {
    onClose: () => void;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);
    const device = useGetDeviceType();

    let storeLink = '';

    if (device === "android") {
        storeLink = 'https://apps.apple.com/ru/app/secret-kitchen/id1580726480';
    }

    if (device === "android") {
        storeLink = 'https://play.google.com/store/apps/details?id=ru.secretkitchen.mobile';
    }

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleClose = (e: React.MouseEvent, a?: any) => {
        if ((a && a.current === e.target) || !a) {
            setIsVisible(false);

            setTimeout(() => {
                onClose();
                
                document.documentElement.classList.remove("modal-opened");
            }, ANIMATIONS_TIMINGS.baseOpacityTime);
        }
    }

    return (
        <StyledModal ref={modalRef} onClick={(e) => {handleClose(e, modalRef)}} isVisible={isVisible}>
            <StyledContainer isVisible={isVisible}>
                <StyledIconCloseButton type="button" onClick={handleClose}>
                    <CloseIcon />
                </StyledIconCloseButton>
                <StyledContent>
                    <StyledTitle>Промокод скопирован</StyledTitle>
                    <StyledLove>
                        <img src={love} alt="" />
                    </StyledLove>
                    <StyledDescription>Скачай наше приложение по QR коду ниже, чтобы воспользоваться промокодом и получить скидку 15%</StyledDescription>
                    <StyledFooter>
                        <StyledCloseButton onClick={handleClose}>Закрыть</StyledCloseButton>
                        <StyledOrderLink href={storeLink}>Сделать заказ</StyledOrderLink>
                    </StyledFooter>
                </StyledContent>
            </StyledContainer>
        </StyledModal>
    )
};

export default ModalDesktop;