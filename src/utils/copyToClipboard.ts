export const copyToClipboard = async (stringToCopy: string) => {
    if (navigator.clipboard) {
        await navigator.clipboard.writeText(stringToCopy);
    } else {
        copyToClipboardFallback(stringToCopy);
    }
}

const copyToClipboardFallback = (stringToCopy: string) => {
    
    const bodyNode = document.querySelector("body");

    const textarea = document.createElement("textarea");
    textarea.value = stringToCopy;
    textarea.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 1px;
        height: 1px;
        font-size: 1px;
    `;

    bodyNode?.appendChild(textarea);

    textarea.focus();
    textarea.select();

    document.execCommand("copy");

    bodyNode?.removeChild(textarea);
}