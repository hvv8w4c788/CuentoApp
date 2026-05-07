import React, { useState } from 'react';
import {
  View, Text, StyleSheet, Pressable, SafeAreaView,
  ActivityIndicator, Alert, ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useIAP } from '../src/context/IAPContext';
import { PRODUCT_IDS } from '../src/services/IAPService';
import { Colors, Fonts, FontSizes, Spacing, Radii, Shadows } from '../src/theme';

const FEATURES = [
  { icon: '📚', text: 'Todas las historias (A1–B2 y futuras)' },
  { icon: '🔓', text: 'Acceso completo sin límites' },
  { icon: '🃏', text: 'Mazo de vocabulario ilimitado' },
  { icon: '🔊', text: 'Pronunciación con voz nativa' },
  { icon: '🔔', text: 'Recordatorios de racha diaria' },
];

export default function Paywall() {
  const router = useRouter();
  const { products, loading, purchasing, error, purchase, restore } = useIAP();
  const [selected, setSelected] = useState<'monthly' | 'annual'>('annual');

  const monthlyProduct = products.find(p => p.productId === PRODUCT_IDS.monthly) as any;
  const annualProduct = products.find(p => p.productId === PRODUCT_IDS.annual) as any;

  const monthlyPrice = monthlyProduct?.localizedPrice ?? monthlyProduct?.price ?? '$6.99';
  const annualPrice = annualProduct?.localizedPrice ?? annualProduct?.price ?? '$49.99';

  const handlePurchase = async () => {
    const id = selected === 'monthly' ? PRODUCT_IDS.monthly : PRODUCT_IDS.annual;
    await purchase(id);
  };

  const handleRestore = async () => {
    const ok = await restore();
    if (ok) {
      router.back();
    } else {
      Alert.alert('Sin compras anteriores', 'No encontramos una suscripción activa en tu cuenta.');
    }
  };

  return (
    <View style={styles.bg}>
      <SafeAreaView style={styles.safe}>
        {/* Close */}
        <Pressable onPress={() => router.back()} style={styles.closeBtn}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
          {/* Hero */}
          <Text style={styles.hero}>📚</Text>
          <Text style={styles.title}>Cuento Pro</Text>
          <Text style={styles.subtitle}>Aprende español con historias ilimitadas</Text>

          {/* Features */}
          <View style={styles.features}>
            {FEATURES.map((f, i) => (
              <View key={i} style={styles.featureRow}>
                <Text style={styles.featureIcon}>{f.icon}</Text>
                <Text style={styles.featureText}>{f.text}</Text>
              </View>
            ))}
          </View>

          {/* Plans */}
          <View style={styles.plans}>
            {/* Annual */}
            <Pressable
              onPress={() => setSelected('annual')}
              style={[styles.planCard, selected === 'annual' && styles.planCardSelected]}
            >
              <View style={styles.bestValueTag}>
                <Text style={styles.bestValueText}>Mejor valor</Text>
              </View>
              <Text style={styles.planTitle}>Anual</Text>
              <Text style={styles.planPrice}>{annualPrice}</Text>
              <Text style={styles.planNote}>por año · ahorra ~40%</Text>
            </Pressable>

            {/* Monthly */}
            <Pressable
              onPress={() => setSelected('monthly')}
              style={[styles.planCard, selected === 'monthly' && styles.planCardSelected]}
            >
              <Text style={styles.planTitle}>Mensual</Text>
              <Text style={styles.planPrice}>{monthlyPrice}</Text>
              <Text style={styles.planNote}>por mes</Text>
            </Pressable>
          </View>

          {error && <Text style={styles.errorText}>{error}</Text>}
        </ScrollView>

        {/* CTA */}
        <View style={styles.footer}>
          <Pressable
            style={[styles.cta, (purchasing || loading) && styles.ctaDisabled]}
            onPress={handlePurchase}
            disabled={purchasing || loading}
          >
            {purchasing ? (
              <ActivityIndicator color={Colors.forest} />
            ) : (
              <Text style={styles.ctaText}>Suscribirse</Text>
            )}
          </Pressable>

          <Pressable onPress={handleRestore} style={styles.restoreBtn}>
            <Text style={styles.restoreText}>Restaurar compras</Text>
          </Pressable>

          <Text style={styles.legal}>
            Se renueva automáticamente. Cancela cuando quieras desde tu cuenta de App Store / Google Play.
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: Colors.forest },
  safe: { flex: 1 },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: Spacing.xl,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: { color: Colors.cream, fontSize: FontSizes.md },
  scroll: { padding: Spacing.xl, paddingTop: Spacing['3xl'], gap: Spacing.xl },
  hero: { fontSize: 64, textAlign: 'center' },
  title: {
    fontFamily: Fonts.serifBold,
    fontSize: FontSizes['4xl'],
    color: Colors.amber,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.md,
    color: Colors.tealLight,
    textAlign: 'center',
  },
  features: { gap: Spacing.sm },
  featureRow: { flexDirection: 'row', alignItems: 'center', gap: Spacing.md },
  featureIcon: { fontSize: 22, width: 30 },
  featureText: { fontFamily: Fonts.sans, fontSize: FontSizes.md, color: Colors.cream, flex: 1 },
  plans: { flexDirection: 'row', gap: Spacing.md },
  planCard: {
    flex: 1,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.1)',
    backgroundColor: 'rgba(255,255,255,0.05)',
    gap: 4,
    alignItems: 'center',
  },
  planCardSelected: {
    borderColor: Colors.amber,
    backgroundColor: 'rgba(232,160,48,0.1)',
  },
  bestValueTag: {
    backgroundColor: Colors.amber,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
  },
  bestValueText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.xs, color: Colors.forest },
  planTitle: { fontFamily: Fonts.sansBold, fontSize: FontSizes.md, color: Colors.cream },
  planPrice: { fontFamily: Fonts.serifBold, fontSize: FontSizes.xl, color: Colors.amber },
  planNote: { fontFamily: Fonts.sans, fontSize: FontSizes.xs, color: Colors.tealLight, textAlign: 'center' },
  errorText: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.sm,
    color: Colors.bad,
    textAlign: 'center',
  },
  footer: { padding: Spacing.xl, gap: Spacing.sm },
  cta: {
    backgroundColor: Colors.amber,
    borderRadius: Radii.lg,
    padding: Spacing.lg,
    alignItems: 'center',
    ...Shadows.md,
  },
  ctaDisabled: { opacity: 0.5 },
  ctaText: { fontFamily: Fonts.sansBold, fontSize: FontSizes.lg, color: Colors.forest },
  restoreBtn: { alignItems: 'center', padding: Spacing.sm },
  restoreText: { fontFamily: Fonts.sans, fontSize: FontSizes.sm, color: Colors.tealLight },
  legal: {
    fontFamily: Fonts.sans,
    fontSize: FontSizes.xs,
    color: Colors.inkFaint,
    textAlign: 'center',
    lineHeight: 16,
  },
});
