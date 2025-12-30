declare type MacbookStoreType = {
    selectedColor: string;
    setSelectedColor: (color: string) => void;

    scale: number;
    setScale: (newScale: number) => void;

    textture: string;
    setTextture: (newTexture: string) => void;

    reset: () => void;
}

declare type ModelSwitcherType = {
    scale: number;
    isMobile: boolean;
}