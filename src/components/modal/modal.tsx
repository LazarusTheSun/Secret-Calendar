import React, { useEffect, useState } from "react";

import ModalDesktop from "../modalDesktop/modalDesktop";
import ModalMobile from "../modalMobile/modalMobile";
import { useGetDeviceType } from "../../hooks/useGetDeviceType";
import { IModal } from "./modal.types";

const Modal = ({
    isOpen,
    onClose,
}: IModal) => {
    const device = useGetDeviceType();

    if (!isOpen) {
        return null;
    }

    return device === "desktop" ? (
        <ModalDesktop onClose={onClose} />
    ) : (
        <ModalMobile onClose={onClose} />
    )
};

export default Modal;