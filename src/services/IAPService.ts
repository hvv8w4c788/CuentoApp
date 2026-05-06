import {
  initConnection,
  endConnection,
  getSubscriptions,
  requestSubscription,
  getPurchaseHistory,
  finishTransaction,
  type ProductPurchase,
  type SubscriptionPurchase,
  type Subscription,
} from 'react-native-iap';
import { Platform } from 'react-native';

export const PRODUCT_IDS = {
  monthly: 'cuento_monthly',
  annual: 'cuento_annual',
};

export const SKUS = [PRODUCT_IDS.monthly, PRODUCT_IDS.annual];

export class IAPService {
  static async init(): Promise<boolean> {
    try {
      await initConnection();
      const history = await getPurchaseHistory();
      return history.some(p => SKUS.includes(p.productId));
    } catch {
      return false;
    }
  }

  static async getProducts(): Promise<Subscription[]> {
    try {
      return await getSubscriptions({ skus: SKUS });
    } catch {
      return [];
    }
  }

  static async purchase(productId: string): Promise<void> {
    if (Platform.OS === 'android') {
      await requestSubscription({ sku: productId, andDangerouslyFinishTransactionAutomaticallyIOS: false });
    } else {
      await requestSubscription({ sku: productId });
    }
  }

  static async finish(purchase: ProductPurchase | SubscriptionPurchase): Promise<void> {
    await finishTransaction({ purchase, isConsumable: false });
  }

  static async restore(): Promise<boolean> {
    try {
      const history = await getPurchaseHistory();
      return history.some(p => SKUS.includes(p.productId));
    } catch {
      return false;
    }
  }

  static async close(): Promise<void> {
    try {
      await endConnection();
    } catch {}
  }
}
