import { useEffect, useState } from "react";

export const useGetDeviceType = () => {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const deviceSetter = () => {
            const agent = window.navigator.userAgent;

            if (/Android/.test(agent) && device !== "android") {
                setDevice("android");
            }

            if (/Macintosh|iPhone|iPad/.test(agent) && device !== "ios") {
                setDevice("ios");
            }
        };

        deviceSetter();
        window.addEventListener("resize", deviceSetter);

        return () => {
            deviceSetter();
            document.removeEventListener("DOMContentLoaded", deviceSetter);
        }
    }, []);

    return device;
}