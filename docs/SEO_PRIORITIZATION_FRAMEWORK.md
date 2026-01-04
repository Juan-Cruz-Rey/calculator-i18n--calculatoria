# SEO Prioritization Framework - Calculadoras Multi-Idioma

**Objetivo:** Identificar y priorizar las URLs de calculadoras con **baja competencia** pero **suficiente volumen de búsqueda** para ganar autoridad rápidamente.

**Estrategia:** Low-Hanging Fruit → Topical Authority → Competitive Keywords

---

## Índice

1. [Framework de Evaluación](#framework-de-evaluación)
2. [Herramientas Recomendadas](#herramientas-recomendadas)
3. [Fórmula de Priorización](#fórmula-de-priorización)
4. [Proceso Paso a Paso](#proceso-paso-a-paso)
5. [Template de Evaluación](#template-de-evaluación)
6. [Lista Priorizada por Idioma](#lista-priorizada-por-idioma)
7. [Plan de Acción](#plan-de-acción)

---

## Framework de Evaluación

### Métricas Clave

| Métrica | Rango | Interpretación | Fuente |
|---------|-------|----------------|--------|
| **Keyword Difficulty (KD)** | 0-100 | < 30 = Fácil<br>30-69 = Media<br>> 70 = Difícil | SEMrush, Ahrefs, Ubersuggest |
| **Search Volume (SV)** | Mensual | < 100 = Muy bajo<br>100-1,000 = Bajo<br>1,000-10,000 = Medio<br>> 10,000 = Alto | Google Keyword Planner, SEMrush |
| **Competition (Comp)** | 0-1 | < 0.3 = Baja<br>0.3-0.7 = Media<br>> 0.7 = Alta | Google Ads, Ubersuggest |
| **CPC** | $ | Indica valor comercial | Google Keyword Planner |

### Zonas de Oportunidad

```
Alta Prioridad (QUICK WINS):
├─ KD: 0-29
├─ SV: 1,000-10,000
├─ Comp: < 0.3
└─ Ranking esperado: 3-6 meses

Prioridad Media (BUILD AUTHORITY):
├─ KD: 30-49
├─ SV: 500-5,000
├─ Comp: 0.3-0.5
└─ Ranking esperado: 6-12 meses

Baja Prioridad (LONG-TERM):
├─ KD: 50+
├─ SV: > 10,000
├─ Comp: > 0.5
└─ Ranking esperado: 12-24 meses
```

---

## Herramientas Recomendadas

### Gratuitas (10-25 búsquedas/día)

**1. Google Keyword Planner** ⭐ RECOMENDADO
- **Pros:** Datos directos de Google, multi-país, gratis con cuenta Google Ads
- **Contras:** Rangos amplios en vez de números exactos sin campaña activa
- **URL:** https://ads.google.com/home/tools/keyword-planner/
- **Uso:** Volumen de búsqueda + competencia + CPC por país

**2. Ubersuggest (Neil Patel)**
- **Pros:** 3 búsquedas gratis/día, KD% + SV + ideas
- **Contras:** Límite diario bajo
- **URL:** https://neilpatel.com/ubersuggest/
- **Uso:** Keyword difficulty + volumen + variaciones

**3. Google Trends**
- **Pros:** Ilimitado, comparación por país/idioma, datos de tendencia
- **Contras:** Datos relativos (no absolutos)
- **URL:** https://trends.google.com/trends/
- **Uso:** Comparar popularidad relativa por país

**4. SEMrush Free (10/día)**
- **Pros:** KD% preciso, datos de competidores
- **Contras:** Límite de 10 búsquedas/día
- **URL:** https://www.semrush.com/analytics/keywordmagic/
- **Uso:** Keyword difficulty + SERP analysis

**5. SearchVolume.io**
- **Pros:** Búsqueda en bulk (hasta 800 keywords gratis), 40 idiomas
- **Contras:** Solo volumen (no KD)
- **URL:** https://searchvolume.io/
- **Uso:** Obtener volúmenes en masa por idioma

### De Pago (Recomendadas si presupuesto permite)

**Ahrefs** ($99/mes) - Mejor para keyword difficulty
**SEMrush** ($119/mes) - Mejor para análisis competitivo multi-país
**Mangools KWFinder** ($29/mes) - Mejor relación calidad-precio

---

## Fórmula de Priorización

### Opportunity Score (OS)

```
OS = (SV / (KD + 1)) × Multiplier

Donde:
- SV = Search Volume mensual
- KD = Keyword Difficulty (0-100)
- +1 evita división por cero
- Multiplier = ajustes adicionales

Multipliers:
× 1.5 si CPC > $1 (alto valor comercial)
× 1.3 si trending up en Google Trends
× 1.2 si idioma de alta prioridad (es, en, pt)
× 0.8 si idioma de baja prioridad (sv, ru)
× 0.5 si ya tienes contenido competidor fuerte
```

### Ejemplo Práctico

**Calculadora BMI en Español:**
- SV: 3,600/mes
- KD: 25
- CPC: $0.80
- Trending: Estable
- Idioma: Alta prioridad (es)

```
OS = (3,600 / (25 + 1)) × 1.2 = 138.46 × 1.2 = 166.15
```

**Interpretación:**
- OS > 150 = **Alta prioridad** (enviar a GSC inmediatamente)
- OS 50-150 = Prioridad media
- OS < 50 = Baja prioridad

---

## Proceso Paso a Paso

### Fase 1: Recolección de Datos (1-2 días)

**Paso 1:** Lista de Keywords Base

Para cada una de las 36 calculadoras, identifica la keyword principal en cada idioma:

```
Ejemplos:
es: "calculadora imc", "calculadora tmb", "calculadora de calorías"
en: "bmi calculator", "bmr calculator", "calorie calculator"
pt: "calculadora imc", "calculadora tmb", "calculadora de calorias"
fr: "calculateur imc", "calculateur mb", "calculateur de calories"
de: "bmi rechner", "grundumsatz rechner", "kalorienrechner"
it: "calcolatore imc", "calcolatore mb", "calcolatore calorie"
pl: "kalkulator bmi", "kalkulator ppm", "kalkulator kalorii"
nl: "bmi calculator", "bmr calculator", "calorieën calculator"
tr: "vki hesaplama", "bmh hesaplama", "kalori hesaplama"
sv: "bmi kalkylator", "bmr kalkylator", "kalorikalkylator"
ru: "калькулятор имт", "калькулятор бмо", "калькулятор калорий"
hi: "bmi calculator", "bmr calculator", "calorie calculator"
```

**Paso 2:** Bulk Export con SearchVolume.io

1. Crea un archivo .txt con todas las keywords (36 calculadoras × 12 idiomas = 432 keywords)
2. Sube a https://searchvolume.io/
3. Selecciona cada país (ES, US, BR, FR, IN, DE, IT, PL, NL, TR, SE, RU)
4. Exporta CSV con volúmenes

**Paso 3:** Enriquecer con Keyword Difficulty

Usando las 10 búsquedas diarias gratuitas de SEMrush:
1. Prioriza keywords con mayor volumen (del paso 2)
2. Obtén KD% para top 50-100 keywords
3. Completa el resto con Ubersuggest (3/día) en días siguientes

**Paso 4:** Análisis de Tendencias

En Google Trends, compara:
1. Las 5 calculadoras principales por idioma
2. Identifica cuáles están en tendencia alcista
3. Anota multiplier × 1.3 para trending keywords

### Fase 2: Cálculo de Opportunity Score (1 día)

Crea una hoja de cálculo con:

| Calculator | Lang | Keyword | SV | KD | Comp | CPC | Multipliers | OS | Priority |
|------------|------|---------|----|----|------|-----|-------------|-------|----------|
| bmi | es | calculadora imc | 3,600 | 25 | 0.2 | $0.80 | × 1.2 | 166.15 | Alta |
| bmr | es | calculadora tmb | 1,200 | 18 | 0.15 | $0.50 | × 1.2 | 75.79 | Media |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

**Fórmula en Google Sheets:**
```
=((SV / (KD + 1)) * PRODUCT(Multipliers))
```

### Fase 3: Priorización Final (Medio día)

Ordena por OS descendente y agrupa:

**Tier 1 (Enviar a GSC primero):**
- OS > 150
- Objetivo: 50-100 URLs
- Timeline: Semanas 1-2

**Tier 2 (Enviar después):**
- OS 50-150
- Objetivo: 100-200 URLs
- Timeline: Semanas 3-6

**Tier 3 (Long-term):**
- OS < 50
- Objetivo: Resto
- Timeline: Meses 2-6

---

## Template de Evaluación

### Hoja de Cálculo - Columnas Requeridas

```
A: calculator_id (bmi, bmr, etc.)
B: language (es, en, pt, etc.)
C: keyword_primary (keyword principal)
D: keyword_variations (variaciones separadas por comas)
E: search_volume_monthly
F: keyword_difficulty
G: competition (0-1)
H: cpc
I: trend (up/stable/down)
J: multiplier_commercial (1.5 si CPC > $1, 1.0 si no)
K: multiplier_trend (1.3 si up, 1.0 si stable, 0.8 si down)
L: multiplier_language (1.2 alta, 1.0 media, 0.8 baja)
M: opportunity_score = (E / (F + 1)) × J × K × L
N: priority_tier (IF M>150, "Tier 1", IF M>50, "Tier 2", "Tier 3"))
O: url (/es/calculadoras/imc, etc.)
P: current_indexed (yes/no - check en GSC)
Q: submit_date (fecha de envío a GSC)
R: ranking_date (fecha cuando rankea)
S: notes
```

### Google Sheets Template

**Descarga plantilla:** [Crear nueva hoja de cálculo]

Fórmulas:
```
M2: =(E2/(F2+1))*J2*K2*L2
N2: =IF(M2>150,"Tier 1",IF(M2>50,"Tier 2","Tier 3"))
```

---

## Lista Priorizada por Idioma

### Calculadoras por Categoría de Salud

**Basado en industria Health & Wellness:**
- Ratio fácil:difícil: **12:1**
- 44% keywords con KD < 30
- Oportunidad: **ALTA**

### Predicciones de Prioridad (Basadas en Investigación de Mercado)

#### Top 10 Oportunidades Probables (a validar con datos)

| # | Calculator | Language | Reasoning | Est. KD | Est. SV |
|---|------------|----------|-----------|---------|---------|
| 1 | **pregnancy** | pt | Brasil - alto interés en embarazo, menos competencia | 20-25 | 2,000-5,000 |
| 2 | **bmr** | pl | Polen - PPM terminology única, menos competidores | 18-22 | 1,500-3,000 |
| 3 | **calorie** | hi | India - mercado emergente, creciente interés fitness | 22-28 | 3,000-8,000 |
| 4 | **body-fat** | es | España/LatAm - interés alto, calculadoras simples dominan | 25-30 | 1,200-2,500 |
| 5 | **ideal-weight** | de | Alemania - mercado grande, keywords específicas | 20-25 | 1,800-4,000 |
| 6 | **ovulation** | fr | Francia - planificación familiar popular | 18-23 | 1,000-2,000 |
| 7 | **tdee** | nl | Holanda - fitness-conscious, menos saturado | 22-27 | 800-1,500 |
| 8 | **bmi** | tr | Turquía - mercado creciente, menos competencia internacional | 24-29 | 2,500-6,000 |
| 9 | **macro** | it | Italia - tendencia fitness nutrition | 26-31 | 1,200-2,800 |
| 10 | **gfr** | sv | Suecia - health-conscious, nicho médico | 15-20 | 500-1,200 |

**Nota:** Estas son predicciones. DEBES validar con herramientas reales.

### Por Idioma - Prioridad General

**Alta Prioridad (atacar primero):**
1. **Español (es)** - Mercado masivo (España + 20 países LatAm), buena ratio oportunidad
2. **Portugués (pt)** - Brasil es gigante desatendido, menos competencia que inglés
3. **Hindi (hi)** - India emergente, millones de usuarios nuevos online

**Media Prioridad:**
4. **Alemán (de)** - Mercado grande, buena economía, health-conscious
5. **Polaco (pl)** - Terminología única (PPM), menos saturación
6. **Francés (fr)** - Francia + países francófonos, buen volumen
7. **Italiano (it)** - Mercado fitness fuerte

**Baja Prioridad (long-term):**
8. **Inglés (en)** - ALTA competencia, pero necesario para autoridad
9. **Holandés (nl)** - Mercado pequeño pero quality traffic
10. **Turco (tr)** - Creciendo, menos datos disponibles
11. **Sueco (sv)** - Mercado pequeño, nicho
12. **Ruso (ru)** - Geopolítica compleja, monetización difícil

---

## Plan de Acción

### Semana 1: Setup & Data Collection

**Día 1-2: Preparación**
- [ ] Crear Google Ads account (para Keyword Planner)
- [ ] Registrarse en Ubersuggest (3 búsquedas/día gratis)
- [ ] Registrarse en SEMrush Free (10 búsquedas/día)
- [ ] Preparar lista de 432 keywords (36 calc × 12 lang)
- [ ] Crear Google Sheet con template

**Día 3-5: Bulk Research**
- [ ] SearchVolume.io: Obtener volúmenes para todas las keywords
- [ ] Google Trends: Comparar top 50 keywords por país
- [ ] Google Keyword Planner: Volúmenes + CPC por grupo de keywords

**Día 6-7: Keyword Difficulty**
- [ ] SEMrush Free: Top 70 keywords (10/día × 7 días)
- [ ] Ubersuggest: 21 keywords adicionales (3/día × 7 días)
- [ ] Estimar KD para resto basado en competidores SERP

### Semana 2: Analysis & Prioritization

**Día 8-9: Cálculo de Opportunity Scores**
- [ ] Aplicar fórmula OS a todas las keywords
- [ ] Asignar multipliers (comercial, trend, language)
- [ ] Clasificar en Tiers 1, 2, 3

**Día 10-12: Validación Manual**
- [ ] Top 50 keywords: Verificar SERP manualmente
- [ ] Identificar featured snippets, PAA, imágenes
- [ ] Ajustar OS basado en SERP features

**Día 13-14: Priorización Final**
- [ ] Generar lista Tier 1 (50-100 URLs)
- [ ] Organizar por idioma y categoría
- [ ] Crear calendario de envío a GSC

### Semana 3+: Submission to Google Search Console

**Tier 1: Días 15-21 (Quick Wins)**
- [ ] Enviar 10-15 URLs/día a GSC via URL Inspection
- [ ] Verificar que estén indexadas
- [ ] Monitorear posiciones iniciales

**Tier 2: Días 22-42**
- [ ] Enviar 10 URLs/día
- [ ] Priorizar keywords con SV > 500
- [ ] Build internal links desde Tier 1

**Tier 3: Días 43+**
- [ ] Enviar resto gradualmente
- [ ] Focus en long-tail variations
- [ ] Monitor resultados Tier 1 y ajustar estrategia

---

## Métricas de Éxito

### KPIs a Monitorear (Google Search Console)

**Semanas 1-4:**
- [ ] Impresiones: Aumento del 50%+
- [ ] Clicks: Aumento del 20%+
- [ ] Posición promedio: Mejora de 10+ posiciones

**Meses 2-3:**
- [ ] Top 10 rankings: 30%+ de keywords Tier 1
- [ ] Top 20 rankings: 60%+ de keywords Tier 1
- [ ] CTR promedio: > 3%

**Meses 4-6:**
- [ ] Top 3 rankings: 15%+ de keywords Tier 1
- [ ] Featured snippets: 5+ capturados
- [ ] Autoridad de dominio: Incremento mensurable

### Google Sheets - Dashboard de Tracking

Añadir columnas:
```
T: impressions_week1
U: clicks_week1
V: avg_position_week1
W: impressions_week4
X: clicks_week4
Y: avg_position_week4
Z: ranking_improvement = V - Y
AA: status (not_indexed / indexed / ranking / top20 / top10 / top3)
```

---

## Herramientas de Automatización

### Scripts Útiles

**1. Bulk URL Submission to GSC (Python)**
```python
# Requiere: pip install google-api-python-client
# Envía URLs en batch a Google Search Console
```

**2. Keyword Research Automation**
```python
# Integra con APIs de SEMrush, Ahrefs
# Automatiza recolección de KD + SV
```

**3. Ranking Tracker**
```python
# Scrape Google Search para posiciones
# Actualiza Google Sheets automáticamente
```

### Servicios de Indexación (Opcional)

- **IndexNow** (Gratis) - Bing + Yandex indexing
- **Google Indexing API** (Gratis, limitado a JobPosting/BroadcastEvent)
- **IndexMeNow** ($29/mes) - 10,000 URLs/mes
- **Indexification** ($39/mes) - 200 URLs/día

---

## Casos de Uso Específicos

### Ejemplo: Priorizar BMR Calculator

**Paso 1: Investigar keyword en cada idioma**

| Lang | Keyword | SV | KD | Comp | CPC |
|------|---------|----|----|------|-----|
| es | calculadora tmb | 1,200 | 18 | 0.15 | $0.50 |
| en | bmr calculator | 8,100 | 42 | 0.45 | $1.20 |
| pt | calculadora tmb | 900 | 20 | 0.18 | $0.40 |
| fr | calculateur mb | 600 | 25 | 0.22 | $0.60 |
| hi | bmr calculator | 2,400 | 28 | 0.25 | $0.30 |
| de | grundumsatz rechner | 1,500 | 22 | 0.20 | $0.70 |
| it | calcolatore mb | 480 | 26 | 0.24 | $0.55 |
| pl | kalkulator ppm | 720 | 19 | 0.16 | $0.45 |
| nl | bmr calculator | 390 | 24 | 0.21 | $0.65 |
| tr | bmh hesaplama | 1,100 | 27 | 0.23 | $0.35 |
| sv | bmr kalkylator | 210 | 21 | 0.19 | $0.50 |
| ru | калькулятор бмо | 850 | 23 | 0.20 | $0.25 |

**Paso 2: Calcular OS**

| Lang | OS Calculation | OS | Tier |
|------|----------------|-----|------|
| es | (1,200/(18+1)) × 1.2 = 75.79 | 75.79 | Tier 2 |
| en | (8,100/(42+1)) × 1.5 = 282.56 | 282.56 | Tier 1 |
| pt | (900/(20+1)) × 1.2 = 51.43 | 51.43 | Tier 2 |
| pl | (720/(19+1)) × 1.2 = 43.20 | 43.20 | Tier 3 |
| hi | (2,400/(28+1)) × 1.2 = 99.31 | 99.31 | Tier 2 |
| de | (1,500/(22+1)) × 1.0 = 65.22 | 65.22 | Tier 2 |

**Paso 3: Priorización**

Orden de envío a GSC para BMR:
1. **en** (OS 282.56) - Tier 1, enviar semana 1
2. **hi** (OS 99.31) - Tier 2, enviar semana 2
3. **es** (OS 75.79) - Tier 2, enviar semana 2
4. **de** (OS 65.22) - Tier 2, enviar semana 3
5. **pt** (OS 51.43) - Tier 2, enviar semana 3
6. **pl** (OS 43.20) - Tier 3, enviar semana 4+

---

## Recursos Adicionales

### Lecturas Recomendadas

- [Google Search Central - Submit URLs](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl)
- [SEMrush Keyword Difficulty Guide](https://www.semrush.com/blog/keyword-difficulty/)
- [Ahrefs Keyword Difficulty](https://ahrefs.com/blog/keyword-difficulty/)

### Comunidades

- r/SEO en Reddit
- SEO signals lab (slack)
- Traffic Think Tank

### Cursos

- Ahrefs Academy (Gratis)
- SEMrush Academy (Gratis)
- Google SEO Fundamentals (Gratis)

---

## Conclusión

**Estrategia Recomendada:**

1. **Días 1-7:** Recolectar datos de 432 keywords usando herramientas gratuitas
2. **Días 8-14:** Calcular Opportunity Scores y clasificar en Tiers
3. **Días 15-21:** Enviar Tier 1 (50-100 URLs) a Google Search Console
4. **Días 22-42:** Enviar Tier 2 (100-200 URLs)
5. **Días 43+:** Monitorear resultados, ajustar y enviar Tier 3

**Objetivo Principal:** Rankear en Top 10 para **30-50 keywords de baja competencia** en los primeros 3-6 meses, estableciendo autoridad topical antes de atacar keywords más competitivas.

**Mantra SEO:** "Better to rank #1 for 50 niche keywords than #50 for 1 competitive keyword."

---

**Última Actualización:** Enero 2026
**Versión:** 1.0
**Status:** ✅ Ready to Execute
