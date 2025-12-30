import { create } from 'zustand'
import { MB16_SCALE } from '../lib/constants'

const useMacbookStore = create<MacbookStoreType>((set) => ({
    selectedColor: '#2e2c2e',
    setSelectedColor: (color: string) => set({ selectedColor: color }),

    scale: MB16_SCALE,
    setScale: (newScale: number) => set({ scale: newScale }),

    textture: '/videos/feature-1.mp4',
    setTextture: (newTexture: string) => set({ textture: newTexture }),

    reset: () => set({ 
        selectedColor: '#2e2c2e', 
        scale: MB16_SCALE,
        textture: '/videos/feature-1.mp4'
    }),
}))

export default useMacbookStore