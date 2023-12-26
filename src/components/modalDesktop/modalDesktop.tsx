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
    StyledQr
} from "./modalDesktop.styled";
import CloseIcon from '../../images/icons/common/close.svg';
import qr from '../../images/common/qr.png';

const ModalDesktop = ({
    onClose,
} : {
    onClose: () => void;
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const modalRef = useRef<HTMLDivElement | null>(null);

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
            <StyledContainer>
                <StyledIconCloseButton type="button" onClick={handleClose}>
                    <CloseIcon />
                </StyledIconCloseButton>
                <StyledContent>
                    <StyledTitle>Промокод скопирован</StyledTitle>
                    <StyledDescription>Скачай наше приложение по QR коду ниже, чтобы воспользоваться промокодом и получить скидку 15%</StyledDescription>
                    <StyledQr>
                        <img src={qr} alt="qr-код мобильное приложение secret-kitchen" />
                    </StyledQr>
                    <StyledCloseButton onClick={handleClose}>Закрыть</StyledCloseButton>
                </StyledContent>
            </StyledContainer>
        </StyledModal>
    )
};

export default ModalDesktop;