import { Platform } from 'react-native';
import type { ProductPurchase, SubscriptionPurchase, Subscription } from 'react-native-iap';

// IAP is not available on web — lazy-load native module only on mobile
const iap = Platform.OS !== 'web'
  ? require('react-native-iap')
  : null;

export const PRODUCT_IDS = {
  monthly: 'verhaal_monthly',
  annual: 'verhaal_annual',
};

export const SKUS = [PRODUCT_IDS.monthly, PRODUCT_IDS.annual];

export class IAPService {
  static async init(): Promise<boolean> {
    if (!iap) return false;
    try {
      await iap.initConnection();
      const history = await iap.getPurchaseHistory();
      return history.some((p: ProductPurchase) => SKUS.includes(p.productId));
    } catch {
      return false;
    }
  }

  static async getProducts(): Promise<Subscription[]> {
    if (!iap) return [];
    try {
      return await iap.getSubscriptions({ skus: SKUS });
    } catch {
      return [];
    }
  }

  static async purchase(productId: string): Promise<void> {
    if (!iap) return;
    if (Platform.OS === 'android') {
      await iap.requestSubscription({ sku: productId, andDangerouslyFinishTransactionAutomaticallyIOS: false });
    } else {
      await iap.requestSubscription({ sku: productId });
    }
  }

  static async finish(purchase: ProductPurchase | SubscriptionPurchase): Promise<void> {
    if (!iap) return;
    await iap.finishTransaction({ purchase, isConsumable: false });
  }

  static async restore(): Promise<boolean> {
    if (!iap) return false;
    try {
      const history = await iap.getPurchaseHistory();
      return history.some((p: ProductPurchase) => SKUS.includes(p.productId));
    } catch {
      return false;
    }
  }

  static async close(): Promise<void> {
    if (!iap) return;
    try {
      await iap.endConnection();
    } catch {}
  }
}
