# Diferencias Regionales: BMI Calculator por Idioma

**Fecha:** 2026-01-02
**Propósito:** Documentar las adaptaciones necesarias del BMI Calculator para cada mercado/idioma

---

## 🌍 Resumen Ejecutivo

Después de analizar competidores top en los 12 idiomas, se identificaron **diferencias críticas** que requieren adaptación del componente:

### Diferencias Críticas:

1. **🔴 UMBRALES DE BMI ASIÁTICOS** (Hindi, potencialmente otros)
2. **🟡 Sistema de unidades preferido** (métrico vs imperial)
3. **🟡 Features específicos por región** (age-adjusted, gender-adjusted, tracking)
4. **🟢 Estilo visual y presentación** (gráficos, gauges, curvas)

---

## 📊 Diferencias por Idioma/Región

### 1. Español (es) - España y Latinoamérica

**Mercado:** España, México, Argentina, Colombia, Chile, resto LATAM

**Competidores Analizados:**
- CalculoIMC.com (líder español)
- Calculatek.com
- Calculator.net (versión español)

**Características Clave:**
- ✅ Sistema métrico (cm, kg) - **ÚNICO Y PREFERIDO**
- ✅ 8 categorías WHO (más detalle que 4)
- ✅ Terminología OMS (Organización Mundial de la Salud)
- ✅ Enlaces a calculadoras relacionadas
- ⚠️ Calculadores básicos (pocos elementos visuales avanzados)

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES', // 8 categorías detalladas
  ageAdjustment: false, // No común en mercado español
  visualGauge: true, // Agregar para diferenciación
  terminology: 'OMS' // No WHO
}
```

---

### 2. English (en) - EE.UU., UK, Internacional

**Mercado:** Estados Unidos, Reino Unido, Canadá, Australia, internacional

**Competidores Analizados:**
- Calculator.net (LÍDER GLOBAL)
- NHLBI/NIH (gubernamental US)
- CDC (gubernamental US)
- NHS (gubernamental UK)

**Características Clave:**
- ✅ Sistema dual: **Imperial (default US)** + Metric (UK/internacional)
- ✅ Visual BMI gauge/scale (característico líder)
- ✅ Save/track functionality
- ✅ Age differentiation (adults vs children/teens)
- ✅ BMI Prime, Ponderal Index
- ✅ Extensive educational content
- ✅ Health risk information detallada

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'imperial', // US market preference
  preferredHeight: 'ft-in', // 5'9" format
  preferredWeight: 'lbs',
  altUnit: 'metric', // Easy toggle
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: true, // Importante para US market
  childCalculator: true, // CDC percentiles para <20 años
  visualGauge: true, // CRÍTICO - todos los líderes lo tienen
  saveResults: true, // Feature diferenciadora
  healthRisks: true, // Común en sites US
  terminology: 'WHO'
}
```

**Nota:** En UK prefieren métrico pero muchos usan stones para peso (1 stone = 14 lbs = 6.35 kg). Considerar agregar en futuro.

---

### 3. Português (pt) - Brasil y Portugal

**Mercado:** Brasil (principal), Portugal

**Competidores Analizados:**
- TuaSaude.com (Brasil, líder)
- Yazio.com (portugués)
- Dieta.ai

**Características Clave:**
- ✅ Sistema métrico exclusivo (cm, kg)
- ✅ Calculadora de "peso ideal" integrada
- ✅ Referencia a Ministério da Saúde (Brasil)
- ✅ Contenido educativo extenso en portugués brasileño
- ✅ Enfoque en salud preventiva

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: false,
  idealWeightCalculator: true, // Popular en Brasil
  visualGauge: true,
  terminology: 'OMS',
  healthAuthority: 'Ministério da Saúde' // Brasil
}
```

---

### 4. Français (fr) - Francia y países francófonos

**Mercado:** Francia, Bélgica, Suiza, Canadá francés, África francófona

**Competidores Analizados:**
- IMC.fr (líder francés)
- Yazio.com (francés)
- SmartBMICalculator.com (francés)

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ **VISUAL CORPULENCE CURVE** (gráfico dinámico) - ÚNICO
- ✅ **Tracking histórico con datepicker**
- ✅ Calculadora niños/adolescentes separada
- ✅ Social sharing integrado (WhatsApp, Facebook, LinkedIn)
- ✅ Terminología: "Indice de Masse Corporelle"
- ✅ Multiple obesity classifications en curva

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: true, // Age-specific ranges
  visualCurve: true, // FEATURE ÚNICA - curva de corpulencia
  historicalTracking: true, // Con datepicker
  childCalculator: true,
  socialSharing: true,
  terminology: 'OMS',
  visualStyle: 'gradient_curve' // Estilo visual único francés
}
```

**Feature Destacada:** La curva de corpulencia visual es muy valorada en mercado francés.

---

### 5. हिन्दी Hindi (hi) - India

**Mercado:** India (1.4 billones de personas)

**Competidores Analizados:**
- Amar Ujala (Hindi news)
- Calculator.net (versión inglés para India)
- ICICI Prudential Life

**Características Clave:**
- 🔴 **ASIAN BMI THRESHOLDS** (CRÍTICO)
  - Normal: 18.5-22.9 (vs 18.5-24.9 WHO global)
  - Overweight: 23.0-24.9 (vs 25.0-29.9 WHO)
  - Obese: ≥25.0 (vs ≥30.0 WHO)
- ✅ Sistema métrico (cm, kg) - ÚNICO
- ✅ Imperial secundario (muchos indios usan feet/inches para altura)
- ✅ Referencia a ICMR (Indian Council of Medical Research)
- ✅ Nota sobre composición corporal asiática diferente
- ✅ Mixing: Hindi + English (muchos términos médicos en inglés)

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm', // Pero ofrecer ft-in
  preferredWeight: 'kg',
  categories: 'ASIAN_BMI_CATEGORIES', // ⚠️ UMBRALES DIFERENTES
  asianThresholds: true, // CRÍTICO
  ageAdjustment: false,
  visualGauge: true,
  disclaimer: 'ASIAN_SPECIFIC', // Explicar diferencias asiáticas
  terminology: 'WHO', // Términos médicos en inglés
  healthAuthority: 'ICMR',
  languageMix: 'hindi_english' // Términos médicos bilingües
}
```

**ASIAN BMI CATEGORIES (Hindi):**
```javascript
const ASIAN_BMI_CATEGORIES = {
  'underweight': { min: 0, max: 18.5 }, // Same
  'normal': { min: 18.5, max: 22.9 }, // ⚠️ Lower than WHO (24.9)
  'overweight': { min: 23.0, max: 24.9 }, // ⚠️ Lower than WHO (25.0-29.9)
  'obese': { min: 25.0, max: 99 } // ⚠️ Lower than WHO (30.0+)
};
```

**Razón Médica:** Los asiáticos tienen mayor grasa corporal, grasa visceral y riesgo metabólico a BMI más bajos que caucásicos. Consenso de 100+ expertos médicos indios (2009).

---

### 6. Deutsch (de) - Alemania, Austria, Suiza

**Mercado:** Alemania, Austria, Suiza alemana

**Competidores Analizados:**
- BMI-Rechner.net (líder alemán)
- Die Techniker (seguro salud)
- Kalorientabelle.net

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ **Age-specific optimal BMI ranges** (único)
- ✅ **Gender-differentiated thresholds**
- ✅ **Amputation adjustment** (feature única alemana)
- ✅ Calculadora pediátrica separada (8-18 años con percentiles)
- ✅ European diet systems integrados (Atkins, LOGI, Mediterranean)
- ✅ Comprehensive medical disclaimers
- ✅ Reference to WHO + German health authorities

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: true, // Age-specific ranges
  genderAdjustment: true, // Different thresholds M/F
  amputationAdjustment: false, // Feature única pero complejo
  childCalculator: true, // 8-18 con percentiles
  visualGauge: true,
  medicalDisclaimer: 'EXTENSIVE', // Alemanes valoran precisión médica
  terminology: 'WHO',
  healthAuthority: 'Robert Koch Institut, DGE'
}
```

**Nota:** Mercado alemán valora precision médica, disclaimers extensos y calculadoras específicas por edad.

---

### 7. Italiano (it) - Italia

**Mercado:** Italia, Suiza italiana, San Marino

**Competidores Analizados:**
- Calcolo-IMC.it (líder)
- SmartBMICalculator.com (italiano)
- Naturhouse.it
- XLSMedical.it (comercial)

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Age-specific adjustment (similar alemán)
- ✅ Gender consideration
- ✅ Integration con planes de dieta
- ✅ Visual results con colores
- ✅ Referencias a Ministero della Salute, ISS

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: true,
  genderAdjustment: true,
  visualGauge: true,
  dietPlans: false, // Algunos sites comerciales lo tienen
  terminology: 'OMS',
  healthAuthority: 'Ministero della Salute, ISS'
}
```

---

### 8. Polski (pl) - Polonia

**Mercado:** Polonia

**Competidores Analizados:**
- ObliczBMI.pl (líder)
- WygodnaDieta.pl
- Diety.nfz.gov.pl (gubernamental - NFZ)

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Comparison tables (hombres, mujeres, niños)
- ✅ Energy requirements calculator integrado (algunos sites)
- ✅ Disease risk estimation (NFZ site)
- ✅ Reference to NFZ (National Health Fund)

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: false,
  genderComparison: true, // Tablas comparativas M/F
  visualGauge: true,
  terminology: 'WHO',
  healthAuthority: 'NFZ (Narodowy Fundusz Zdrowia)'
}
```

---

### 9. Nederlands (nl) - Países Bajos, Bélgica flamenca

**Mercado:** Países Bajos, Bélgica (Flandes)

**Competidores Analizados:**
- Vitalys.nl
- Vitakruid.nl
- CalculatingHub.com (holandés)

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Simple, directo, sin adornos
- ✅ Healthy BMI range 18.5-25 para adultos 19-69
- ✅ Referencias a RIVM, Voedingscentrum

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_STANDARD_4', // Más simple que otros europeos
  ageAdjustment: false,
  visualGauge: true,
  uiStyle: 'minimalist', // Preferencia holandesa
  terminology: 'WHO',
  healthAuthority: 'RIVM, Voedingscentrum'
}
```

**Nota:** Mercado holandés prefiere interfaces minimalistas, directas, sin complejidad innecesaria.

---

### 10. Türkçe (tr) - Turquía

**Mercado:** Turquía

**Competidores Analizados:**
- Hesaplama.net
- MACFit.com (gym chain)
- Fitlimon.com
- Kalcule.com
- AĞIRSAĞLAM.com

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Terminología: "Vücut Kitle İndeksi" (VKİ)
- ✅ Integration con fitness (MACFit)
- ✅ Referencias a cardiovascular health
- ✅ Referencia a Türkiye Sağlık Bakanlığı

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: false,
  fitnessIntegration: false, // Algunos lo tienen
  visualGauge: true,
  terminology: 'WHO',
  localTerminology: 'VKİ', // Abbreviation turca
  healthAuthority: 'Türkiye Sağlık Bakanlığı'
}
```

---

### 11. Svenska (sv) - Suecia

**Mercado:** Suecia

**Competidores Analizados:**
- BMIRäknare.se (líder sueco)
- MyProtein.com (sueco)
- Mayormente sites internacionales en inglés

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Privacy-focused (información nunca guardada/enviada - nota explícita)
- ✅ Simple, clean interface
- ✅ Referencias a Folkhälsomyndigheten

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_STANDARD_4',
  ageAdjustment: false,
  privacyNote: true, // ⚠️ IMPORTANTE - explicar que no guardamos datos
  visualGauge: true,
  uiStyle: 'minimalist',
  terminology: 'WHO',
  healthAuthority: 'Folkhälsomyndigheten'
}
```

**Nota:** Suecos valoran mucho la privacidad. Incluir nota clara de que no almacenamos datos.

---

### 12. Русский (ru) - Rusia y países ex-soviéticos

**Mercado:** Rusia, Kazajistán, Bielorrusia, otros

**Competidores Analizados:**
- Clinic-Cvetkov.ru (clínica bariátrica)
- Calcus.ru (2.5M cálculos)
- Calc.by
- Doctor-Anna.ru

**Características Clave:**
- ✅ Sistema métrico exclusivo
- ✅ Gender consideration (некоторые sites)
- ✅ Decimal precision (calculadoras permiten decimales)
- ✅ WHO recommendations explícitas
- ✅ Medical clinic branding común (vs. sites generales)
- ✅ Referencias a ВОЗ (WHO en ruso), Минздрав России

**Adaptaciones Necesarias:**
```javascript
{
  defaultUnit: 'metric',
  preferredHeight: 'cm',
  preferredWeight: 'kg',
  categories: 'WHO_8_CATEGORIES',
  ageAdjustment: false,
  genderInput: true,
  decimalPrecision: true, // Permitir 170.5 cm, 68.3 kg
  visualGauge: true,
  terminology: 'ВОЗ', // WHO en cirílico
  healthAuthority: 'ВОЗ, Минздрав России'
}
```

---

## 🎯 Resumen de Adaptaciones Críticas

### Por Prioridad:

#### 🔴 CRÍTICO - Debe implementarse:

1. **Asian BMI Thresholds (Hindi)**
   - Umbrales diferentes: Normal hasta 22.9, Overweight 23-24.9, Obese ≥25
   - Disclaimer explicando diferencias
   - Basado en consenso médico indio

2. **Unidades por defecto**
   - **Imperial default:** English (US)
   - **Métrico default:** Todos los demás

3. **8 Categorías WHO vs 4**
   - Implementar 8 categorías detalladas
   - Opcional: mode "simple" con 4 categorías

#### 🟡 IMPORTANTE - Debería implementarse:

4. **Visual Gauge/Curve**
   - Gauge semicircular (estilo Calculator.net, BMI-Rechner.net)
   - Curva de corpulencia (estilo francés IMC.fr)
   - Indicador visual de posición

5. **Age Adjustment**
   - Ranges específicos por edad (Francés, Alemán, Italiano)
   - Opcional pero valorado en mercados europeos

6. **Gender Consideration**
   - Thresholds ligeramente diferentes M/F (Alemán, Italiano)
   - Input de género ya existe

#### 🟢 DESEABLE - Nice to have:

7. **Historical Tracking** (Francés)
8. **Social Sharing** (Francés)
9. **Privacy Note** (Sueco)
10. **Child Calculator** (Francés, Alemán, Inglés)

---

## 📐 Matriz de Features por Idioma

| Feature | es | en | pt | fr | hi | de | it | pl | nl | tr | sv | ru |
|---------|----|----|----|----|----|----|----|----|----|----|----|----|
| Métrico default | ✅ | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Imperial default | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Asian thresholds | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| 8 Categories | ✅ | ✅ | ✅ | ✅ | ❌* | ✅ | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| Visual Gauge | 🟡 | ✅ | 🟡 | ✅ | 🟡 | ✅ | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 | 🟡 |
| Age adjustment | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Gender diff | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | 🟡 |
| Historical track | ❌ | 🟡 | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Social sharing | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Privacy note | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Child calc | ❌ | ✅ | ❌ | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |

**Leyenda:**
- ✅ Feature presente/esperada en mercado
- 🟡 Feature deseable pero no crítica
- ❌ Feature no común en mercado
- *Hindi usa categorías asiáticas diferentes (4 categorías pero umbrales distintos)

---

## 💻 Implementación Técnica

### Configuración por Idioma

```typescript
// src/config/bmi-regional.ts

export interface BMIRegionalConfig {
  defaultUnit: 'metric' | 'imperial';
  thresholds: 'WHO_STANDARD' | 'ASIAN';
  categories: 4 | 8;
  ageAdjustment: boolean;
  genderAdjustment: boolean;
  visualStyle: 'gauge' | 'curve' | 'both';
  features: {
    historicalTracking?: boolean;
    socialSharing?: boolean;
    privacyNote?: boolean;
    childCalculator?: boolean;
  };
  healthAuthority: string;
  terminology: 'WHO' | 'OMS' | 'ВОЗ' | 'VKİ' | string;
}

export const BMI_REGIONAL_CONFIG: Record<Locale, BMIRegionalConfig> = {
  es: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'OMS',
    terminology: 'OMS',
  },
  en: {
    defaultUnit: 'imperial',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {
      childCalculator: true,
    },
    healthAuthority: 'WHO, CDC, NIH',
    terminology: 'WHO',
  },
  hi: {
    defaultUnit: 'metric',
    thresholds: 'ASIAN', // ⚠️ CRÍTICO
    categories: 4, // Pero con umbrales diferentes
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {},
    healthAuthority: 'ICMR, WHO',
    terminology: 'WHO',
  },
  fr: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: false,
    visualStyle: 'curve', // Feature única francesa
    features: {
      historicalTracking: true,
      socialSharing: true,
      childCalculator: true,
    },
    healthAuthority: 'OMS',
    terminology: 'OMS',
  },
  de: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 8,
    ageAdjustment: true,
    genderAdjustment: true,
    visualStyle: 'gauge',
    features: {
      childCalculator: true,
    },
    healthAuthority: 'WHO, Robert Koch Institut',
    terminology: 'WHO',
  },
  sv: {
    defaultUnit: 'metric',
    thresholds: 'WHO_STANDARD',
    categories: 4,
    ageAdjustment: false,
    genderAdjustment: false,
    visualStyle: 'gauge',
    features: {
      privacyNote: true, // ⚠️ Importante para suecos
    },
    healthAuthority: 'WHO, Folkhälsomyndigheten',
    terminology: 'WHO',
  },
  // ... resto de idiomas
};
```

### Umbrales BMI

```typescript
// src/utils/calculators/bmi-thresholds.ts

export const WHO_STANDARD_8_CATEGORIES = {
  severeThinness: { min: 0, max: 16.0 },
  moderateThinness: { min: 16.0, max: 17.0 },
  mildThinness: { min: 17.0, max: 18.5 },
  normal: { min: 18.5, max: 25.0 },
  preObese: { min: 25.0, max: 30.0 },
  obeseI: { min: 30.0, max: 35.0 },
  obeseII: { min: 35.0, max: 40.0 },
  obeseIII: { min: 40.0, max: 999 },
};

export const ASIAN_BMI_CATEGORIES = {
  underweight: { min: 0, max: 18.5 },
  normal: { min: 18.5, max: 23.0 }, // ⚠️ DIFERENTE
  overweight: { min: 23.0, max: 25.0 }, // ⚠️ DIFERENTE
  obese: { min: 25.0, max: 999 }, // ⚠️ DIFERENTE
};
```

---

## 🎨 Mockups Visuales por Región

### Gauge Standard (EN, ES, DE, IT, PL, TR, RU)
```
┌──────────────────────────────┐
│      BMI Visual Gauge        │
│                              │
│    ┌────────────────────┐   │
│    │   Semicircle gauge │   │
│    │   with pointer     │   │
│    └────────────────────┘   │
│                              │
│   Your BMI: 22.5 (Normal)    │
└──────────────────────────────┘
```

### Corpulence Curve (FR)
```
┌──────────────────────────────┐
│   Courbe de Corpulence       │
│                              │
│  30 ┤     ●                  │
│  25 ┤   ●   (You)            │
│  20 ┤ ●                      │
│  15 ┤●                       │
│     └──────────────────      │
│       Age →                  │
└──────────────────────────────┘
```

### Asian Thresholds Visual (HI)
```
┌──────────────────────────────┐
│  Asian BMI Classification    │
│                              │
│  Underweight  │<18.5         │
│  Normal       │18.5 - 22.9   │
│  Overweight   │23.0 - 24.9   │
│  Obese        │≥25.0         │
│                              │
│  ⚠️ Note: Asian thresholds   │
│  are lower due to higher     │
│  body fat % at same BMI      │
└──────────────────────────────┘
```

---

## ✅ Checklist de Implementación

### Fase 1: Core Adaptations (CRÍTICO)
- [ ] Implementar configuración regional por idioma
- [ ] Asian BMI thresholds para Hindi
- [ ] Default units por idioma (imperial para EN, métrico resto)
- [ ] 8 categorías WHO (vs 4 actuales)
- [ ] Disclaimer específico asiático para Hindi
- [ ] Traducciones de 8 categorías para 12 idiomas

### Fase 2: Visual Enhancements
- [ ] Visual gauge semicircular (todos excepto FR)
- [ ] Visual corpulence curve (FR específico)
- [ ] Color coding mejorado para 8 categorías
- [ ] Animaciones suaves

### Fase 3: Advanced Features
- [ ] Age adjustment (EN, FR, DE, IT)
- [ ] Gender adjustment (DE, IT)
- [ ] Historical tracking (FR)
- [ ] Social sharing (FR)
- [ ] Privacy note (SV)
- [ ] Child calculator (EN, FR, DE)

### Fase 4: Testing
- [ ] Testing en 12 idiomas
- [ ] Verificar umbrales asiáticos (HI)
- [ ] Verificar unidades por defecto
- [ ] Verificar traducciones de categorías
- [ ] Accessibility testing
- [ ] Mobile responsive testing

---

## 📚 Referencias Médicas

### Asian BMI Thresholds
- **Source:** Indian Consensus Group (2009), 100+ medical experts
- **Publications:** PMC4555479, PMC5035251, PMC5903015
- **WHO Recognition:** WHO acknowledges ethnic-specific criteria
- **Reason:** Asians have higher body fat %, visceral fat, and metabolic risk at lower BMI than Caucasians

### WHO Standard Thresholds
- **Source:** World Health Organization
- **Application:** Global standard for Caucasian, African, European populations
- **Categories:** 8-tier classification from severe thinness to class III obesity

---

**Próximo paso:** Implementar componente adaptativo con estas configuraciones regionales.
