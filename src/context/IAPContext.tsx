import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import {
  purchaseUpdatedListener,
  purchaseErrorListener,
  type ProductPurchase,
  type PurchaseError,
} from 'react-native-iap';
import { IAPService, SKUS } from '../services/IAPService';
import { useApp } from './AppContext';
import type { Subscription } from 'react-native-iap';

interface IAPContextValue {
  products: Subscription[];
  loading: boolean;
  purchasing: boolean;
  error: string | null;
  purchase: (productId: string) => Promise<void>;
  restore: () => Promise<boolean>;
}

const IAPContext = createContext<IAPContextValue | null>(null);

export function IAPProvider({ children }: { children: React.ReactNode }) {
  const { dispatch } = useApp();
  const [products, setProducts] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let purchaseListener: ReturnType<typeof purchaseUpdatedListener>;
    let errorListener: ReturnType<typeof purchaseErrorListener>;

    const setup = async () => {
      const hasPro = await IAPService.init();
      if (hasPro) dispatch({ type: 'SET_PRO', value: true });

      const subs = await IAPService.getProducts();
      setProducts(subs);
      setLoading(false);

      purchaseListener = purchaseUpdatedListener(async (purchase: ProductPurchase) => {
        if (SKUS.includes(purchase.productId)) {
          await IAPService.finish(purchase);
          dispatch({ type: 'SET_PRO', value: true });
        }
        setPurchasing(false);
      });

      errorListener = purchaseErrorListener((err: PurchaseError) => {
        if (err.code !== 'E_USER_CANCELLED') {
          setError(err.message ?? 'Error al procesar el pago');
        }
        setPurchasing(false);
      });
    };

    setup();

    return () => {
      purchaseListener?.remove();
      errorListener?.remove();
      IAPService.close();
    };
  }, []);

  const purchase = async (productId: string) => {
    setError(null);
    setPurchasing(true);
    try {
      await IAPService.purchase(productId);
    } catch (e: any) {
      if (e?.code !== 'E_USER_CANCELLED') {
        setError(e?.message ?? 'Error al procesar el pago');
      }
      setPurchasing(false);
    }
  };

  const restore = async () => {
    setError(null);
    const hasPro = await IAPService.restore();
    if (hasPro) dispatch({ type: 'SET_PRO', value: true });
    return hasPro;
  };

  return (
    <IAPContext.Provider value={{ products, loading, purchasing, error, purchase, restore }}>
      {children}
    </IAPContext.Provider>
  );
}

export function useIAP() {
  const ctx = useContext(IAPContext);
  if (!ctx) throw new Error('useIAP must be used within IAPProvider');
  return ctx;
}
