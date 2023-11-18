export const hexToRgb = (hex: string, alpha?: number): string => {
    const r = hex.slice(1, 3);
    const g = hex.slice(3, 5);
    const b = hex.slice(5, 7);

    const rgb = `${parseInt(r, 16)}, ${parseInt(g, 16)}, ${parseInt(b, 16)}`;

    return typeof alpha === 'number' ? `rgba(${rgb}, ${alpha})` : `rgb(${rgb})`;
}