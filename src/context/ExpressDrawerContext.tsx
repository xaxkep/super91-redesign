import React, { createContext, useContext, useState } from 'react';
import type { Product, QuantityTier, SpecOption } from '../data/mockCatalog';

export interface PreflightReport {
  dpi: number;
  bleedMm: number;
  colorMode: 'CMYK' | 'RGB';
  isCompliant: boolean;
  warnings: string[];
}

export interface ExpressOrderState {
  isOpen: boolean;
  product: Product | null;
  selectedTier: QuantityTier | null;
  selectedPaper: SpecOption | null;
  selectedFinish: SpecOption | null;
  artworkName: string | null;
  artworkSizeMb: number | null;
  preflightReport: PreflightReport | null;
  isPreflightModalOpen: boolean;
  cartCount: number;
  pincode: string;
}

interface ExpressDrawerContextType extends ExpressOrderState {
  openDrawer: (
    product: Product,
    selectedTier?: QuantityTier,
    selectedPaper?: SpecOption,
    selectedFinish?: SpecOption
  ) => void;
  closeDrawer: () => void;
  setSelectedTier: (tier: QuantityTier) => void;
  setSelectedPaper: (paper: SpecOption) => void;
  setSelectedFinish: (finish: SpecOption) => void;
  setArtwork: (fileName: string, sizeMb: number) => void;
  clearArtwork: () => void;
  openPreflightModal: () => void;
  closePreflightModal: () => void;
  setPreflightReport: (report: PreflightReport | null) => void;
  setPincode: (pin: string) => void;
  incrementCart: () => void;
}

const ExpressDrawerContext = createContext<ExpressDrawerContextType | undefined>(undefined);

export const ExpressDrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedTier, setSelectedTier] = useState<QuantityTier | null>(null);
  const [selectedPaper, setSelectedPaper] = useState<SpecOption | null>(null);
  const [selectedFinish, setSelectedFinish] = useState<SpecOption | null>(null);
  const [artworkName, setArtworkName] = useState<string | null>(null);
  const [artworkSizeMb, setArtworkSizeMb] = useState<number | null>(null);
  const [preflightReport, setPreflightReport] = useState<PreflightReport | null>(null);
  const [isPreflightModalOpen, setIsPreflightModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2); // Initial demo items
  const [pincode, setPincode] = useState('400001'); // Mumbai default

  const openDrawer = (
    prod: Product,
    tier?: QuantityTier,
    paper?: SpecOption,
    fin?: SpecOption
  ) => {
    setProduct(prod);
    setSelectedTier(tier || prod.quantityTiers[1] || prod.quantityTiers[0]);
    setSelectedPaper(paper || prod.paperStocks[0]);
    setSelectedFinish(fin || prod.finishes[0]);
    setIsOpen(true);
  };

  const closeDrawer = () => setIsOpen(false);

  const setArtwork = (fileName: string, sizeMb: number) => {
    setArtworkName(fileName);
    setArtworkSizeMb(sizeMb);
    // Simulate smart preflight analysis
    const hasRGB = fileName.toLowerCase().endsWith('.png') || fileName.toLowerCase().includes('rgb');
    setPreflightReport({
      dpi: 300,
      bleedMm: 3.0,
      colorMode: hasRGB ? 'RGB' : 'CMYK',
      isCompliant: true,
      warnings: hasRGB ? ['RGB color mode detected. Auto-converting to CMYK with deltaE < 1.2 tolerance.'] : [],
    });
  };

  const clearArtwork = () => {
    setArtworkName(null);
    setArtworkSizeMb(null);
    setPreflightReport(null);
  };

  const openPreflightModal = () => setIsPreflightModalOpen(true);
  const closePreflightModal = () => setIsPreflightModalOpen(false);
  const incrementCart = () => setCartCount((prev) => prev + 1);

  return (
    <ExpressDrawerContext.Provider
      value={{
        isOpen,
        product,
        selectedTier,
        selectedPaper,
        selectedFinish,
        artworkName,
        artworkSizeMb,
        preflightReport,
        isPreflightModalOpen,
        cartCount,
        pincode,
        openDrawer,
        closeDrawer,
        setSelectedTier,
        setSelectedPaper,
        setSelectedFinish,
        setArtwork,
        clearArtwork,
        openPreflightModal,
        closePreflightModal,
        setPreflightReport,
        setPincode,
        incrementCart,
      }}
    >
      {children}
    </ExpressDrawerContext.Provider>
  );
};

export const useExpressDrawer = (): ExpressDrawerContextType => {
  const context = useContext(ExpressDrawerContext);
  if (!context) {
    throw new Error('useExpressDrawer must be used within an ExpressDrawerProvider');
  }
  return context;
};
