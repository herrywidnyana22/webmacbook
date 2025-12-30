import { create } from 'zustand'
import { SCALE_DESKTOP } from '../lib/constants'

const useMacbookStore = create<MacbookStoreType>((set) => ({
    selectedColor: '#2e2c2e',
    setSelectedColor: (color: string) => set({ selectedColor: color }),

    scale: SCALE_DESKTOP,
    setScale: (newScale: number) => set({ scale: newScale }),

    textture: '/videos/feature-1.mp4',
    setTextture: (newTexture: string) => set({ textture: newTexture }),

    reset: () => set({ 
        selectedColor: '#2e2c2e', 
        scale: SCALE_DESKTOP,
        textture: '/videos/feature-1.mp4'
    }),
}))

export default useMacbookStore