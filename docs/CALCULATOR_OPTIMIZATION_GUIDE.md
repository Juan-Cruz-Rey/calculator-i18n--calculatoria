# Guía de Optimización de Calculadoras - Metodología SEO y UX

Este documento describe la metodología completa para crear calculadoras optimizadas para SEO y experiencia de usuario en todos los idiomas soportados por el proyecto.

## Tabla de Contenidos

1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Metodología de Investigación](#metodología-de-investigación)
3. [Análisis Competitivo](#análisis-competitivo)
4. [Estructura de Archivos MDX](#estructura-de-archivos-mdx)
5. [Optimización SEO](#optimización-seo)
6. [Posicionamiento de la Calculadora](#posicionamiento-de-la-calculadora)
7. [Prevención de Duplicación](#prevención-de-duplicación)
8. [Comportamiento Mobile](#comportamiento-mobile)
9. [Contenido por Idioma](#contenido-por-idioma)
10. [Proceso Paso a Paso](#proceso-paso-a-paso)
11. [Checklist de Calidad](#checklist-de-calidad)

---

## Resumen Ejecutivo

La metodología consiste en **investigar los top 3-5 resultados de búsqueda en cada idioma**, analizar su estructura, keywords, y comportamiento UX, para luego crear contenido optimizado que combine las mejores prácticas observadas.

**Principios Clave:**
- ✅ Investigación de competidores por idioma
- ✅ Calculadora primero (patrón ganador)
- ✅ Una sola instancia de la calculadora (NUNCA duplicar)
- ✅ Contenido comprehensive y profesional
- ✅ SEO optimizado con keywords locales
- ✅ Responsive y mobile-first

---

## Metodología de Investigación

### 1. Búsqueda por Idioma

Para cada idioma, realizar búsquedas específicas usando términos nativos:

| Idioma | Términos de Búsqueda | Ejemplos |
|--------|----------------------|----------|
| Español (es) | "calculadora [nombre]", "[nombre] gratis", "[nombre] online" | "calculadora IMC", "IMC gratis online" |
| English (en) | "[name] calculator", "free [name] calculator", "[name] online" | "BMI calculator", "free BMI calculator online" |
| Português (pt) | "calculadora [nome]", "[nome] grátis", "[nome] online" | "calculadora IMC", "IMC grátis" |
| Français (fr) | "calculateur [nom]", "calculatrice [nom]", "[nom] gratuit" | "calculateur IMC", "IMC gratuit" |
| Deutsch (de) | "[name] rechner", "[name] berechnen", "[name] kostenlos" | "BMI rechner", "BMI berechnen kostenlos" |
| Italiano (it) | "calcolatore [nome]", "calcola [nome]", "[nome] gratis" | "calcolatore IMC", "IMC gratis" |
| Polski (pl) | "kalkulator [nazwa]", "[nazwa] darmowy", "oblicz [nazwa]" | "kalkulator BMI", "BMI darmowy" |
| Nederlands (nl) | "[naam] calculator", "[naam] berekenen", "[naam] gratis" | "BMI calculator", "BMI berekenen" |
| हिन्दी (hi) | "[name] calculator", "[name] कैलकुलेटर" | "BMI calculator", "BMI कैलकुलेटर" |
| Türkçe (tr) | "[isim] hesaplama", "[isim] hesaplayıcı", "[isim] ücretsiz" | "BMI hesaplama", "BMI ücretsiz" |
| Svenska (sv) | "[namn] kalkylator", "räkna [namn]", "[namn] gratis" | "BMI kalkylator", "räkna BMI" |
| Русский (ru) | "калькулятор [название]", "[название] бесплатно", "расчет [название]" | "калькулятор ИМТ", "ИМТ бесплатно" |

### 2. Herramientas de Búsqueda

Usar **ambos** motores de búsqueda para mejor cobertura:
- **Google**: Mayor volumen, resultados globales
- **Bing**: Importante en mercados específicos

### 3. Análisis de Resultados Top

Para cada idioma, analizar los **top 3-5 resultados**:

#### a) Estructura de Página
```markdown
- ¿Calculadora primero o contenido primero?
- ¿Qué secciones tiene?
- ¿Qué información incluye?
- ¿Tiene tablas/gráficos?
- ¿Incluye FAQs?
```

#### b) SEO Elements
```markdown
- Title tag (¿incluye año? ¿keywords específicas?)
- Meta description (longitud, beneficios mencionados)
- Keywords principales identificadas
- Headings structure (H1, H2, H3)
```

#### c) UX Elements
```markdown
- Ubicación de la calculadora
- Diseño del formulario
- Presentación de resultados
- Call-to-actions
- Secciones complementarias
```

---

## Análisis Competitivo

### Patrón Identificado: Calculadora Primero vs Contenido Primero

Tras analizar cientos de páginas competidoras, se identificaron dos patrones principales:

#### Patrón A: Calculadora Primero (Recomendado ✅)
**Ejemplos:** Calculator.net, WebMD, AARP, Harvard Health

```
1. Título de la página
2. Calculadora interactiva (inmediatamente visible)
3. Resultado instantáneo
4. Contenido educativo después
```

**Ventajas:**
- ⚡ Usuarios obtienen valor inmediato
- 📱 Mejor para mobile (above the fold)
- 🎯 Mayor engagement
- ⭐ Patrón de sitios top-ranking

#### Patrón B: Contenido Primero
**Ejemplos:** CDC, NHLBI, NHS

```
1. Título de la página
2. Texto introductorio/explicativo
3. Calculadora más abajo
4. Más contenido educativo
```

**Ventajas:**
- 📚 Educativo primero
- 🏥 Apropiado para instituciones gubernamentales/médicas
- 📖 Mejor para contenido académico

### ✅ Decisión Final: Patrón A (Calculadora Primero)

**Razón:** Los sitios con mayor tráfico y engagement usan este patrón. Los usuarios buscan acción inmediata, no teoría.

---

## Estructura de Archivos MDX

### Ubicación del Archivo

```
src/content/calculators/{idioma}/{calculator-id}.mdx
```

**Ejemplos:**
```
src/content/calculators/es/bmi.mdx
src/content/calculators/en/bmi.mdx
src/content/calculators/fr/bmi.mdx
src/content/calculators/de/bmi.mdx
```

### Template Base

```mdx
---
title: [Título Optimizado con Año 2025 y Keywords]
metaDescription: [155 caracteres max, benefit-focused, keywords naturales]
keywords: [keyword1, keyword2, keyword3, ...]
canonical: /[idioma-prefix]/[folder]/[slug]/
---

import [CalculatorName]Calculator from '@/components/calculators/[CalculatorName]Calculator.astro';

# [Título Principal H1]

[Párrafo introductorio breve - 1-2 oraciones]

## [Sección Explicativa Breve]

[Contenido relevante pero conciso]

<[CalculatorName]Calculator lang="[idioma]" />

## [Secciones de Contenido Comprehensive]

[Resto del contenido educativo, tablas, FAQs, etc.]
```

---

## Optimización SEO

### 1. Title Tag

**Fórmula Ganadora:**
```
[Keyword Principal] [Gratis/Free] - [Keyword Secundario] [Online/En Línea] 2025
```

**Ejemplos por Idioma:**

| Idioma | Title Tag |
|--------|-----------|
| Español | "Calculadora de IMC Gratis - Índice de Masa Corporal Online 2025" |
| English | "Free BMI Calculator - Body Mass Index Calculator Online 2025" |
| Deutsch | "BMI Rechner Kostenlos - Body Mass Index Online 2025" |
| Français | "Calculateur IMC Gratuit - Indice de Masse Corporelle en Ligne 2025" |
| Italiano | "Calcolatore IMC Gratis - Indice di Massa Corporea Online 2025" |
| Português | "Calculadora de IMC Grátis - Índice de Massa Corporal Online 2025" |

**Elementos Clave:**
- ✅ Keyword principal al inicio
- ✅ "Gratis/Free/Kostenlos" (alta conversión)
- ✅ "Online/En línea" (intent de búsqueda)
- ✅ Año actual (frescura, confianza)
- ✅ 50-60 caracteres ideal

### 2. Meta Description

**Fórmula:**
```
[Keyword] 100% [gratis/free] y [precisa/accurate]. [Verbo de acción] tu [resultado] en segundos. [Beneficio 1], [Beneficio 2], [Beneficio 3]. [Sistema métrico e imperial].
```

**Ejemplo Español:**
```
Calculadora de IMC 100% gratuita y precisa. Calcula tu índice de masa corporal en segundos. Conoce tu peso ideal, categoría OMS y rango saludable. Sistema métrico e imperial.
```

**Longitud:** 145-155 caracteres

**Elementos Clave:**
- ✅ Keyword principal en primeras palabras
- ✅ Beneficio claro ("100% gratuita")
- ✅ Acción rápida ("en segundos")
- ✅ Múltiples beneficios listados
- ✅ Call-to-action implícito

### 3. Keywords

**Estructura de Keywords:**

```yaml
keywords: [
  # Primary keyword (exact match)
  calculadora IMC,

  # Primary variations
  IMC gratis,
  calculadora índice masa corporal,
  IMC online,

  # Long-tail keywords
  calcular IMC,
  calculadora de IMC gratis,
  índice de masa corporal,

  # Related concepts
  peso ideal,
  peso saludable,

  # Health categories
  obesidad,
  sobrepeso,
  bajo peso,

  # Tools/formats
  tabla IMC,
  IMC calculadora online
]
```

**Cantidad Recomendada:** 10-15 keywords

### 4. Canonical URL

**Formato:**
```
/[lang-prefix]/[folder-translated]/[slug-translated]/
```

**Ejemplos:**
- Español (default): `/calculadoras/imc/`
- English: `/calculators/bmi/`
- Deutsch: `/de/rechner/bmi/`
- Français: `/fr/calculatrices/imc/`

---

## Posicionamiento de la Calculadora

### Regla de Oro: Calculadora después de breve introducción

**La calculadora se posiciona manualmente en el MDX** insertando el componente donde desees que aparezca. El patrón recomendado es:
1. H1 con título principal
2. Breve introducción (1-2 párrafos)
3. Sección "¿Qué es...?" con definición concisa
4. **Componente de calculadora** `<CalculatorComponent lang="xx" />`
5. Resto del contenido educativo

### Estructura de Contenido

```markdown
# Título Principal (H1)

[Introducción muy breve - 1-2 párrafos]

## ¿Qué es [el concepto]? (H2)

[Definición concisa - 2-3 párrafos]

### Fórmula de Cálculo (H3)

[Fórmula matemática + ejemplo]

<CalculatorComponent lang="xx" />

## Categorías/Resultados (H2)

[Tabla de interpretación de resultados]

## Por qué es importante (H2)

[Beneficios y aplicaciones]

## Limitaciones (H2)

[Advertencias y contexto]

## Consejos Prácticos (H2)

[Tips accionables]

## Preguntas Frecuentes (H2)

[6-8 FAQs relevantes]

## Conclusión (H2)

[Resumen + disclaimer + CTA]
```

### ¿Por Qué Esta Estructura Funciona?

1. **SEO:** H1 con keyword → Breve contexto → Calculadora → Contenido profundo
2. **UX:** Valor inmediato (calculadora) → Educación (contenido)
3. **Mobile:** Above the fold es la calculadora (no texto largo)
4. **Engagement:** Usuario interactúa primero, lee después

---

## Prevención de Duplicación

### ⚠️ CRÍTICO: Una Calculadora, Una Vez

**Regla simple:** Incluye el componente de calculadora **solo una vez** en tu archivo MDX.

**Correcto:**
```mdx
---
title: Calculadora de IMC...
metaDescription: ...
keywords: [...]
canonical: /calculadoras/imc/
---

import BMICalculator from '@/components/calculators/BMICalculator.astro';

# Título

[Introducción breve]

## ¿Qué es el IMC?

[Definición]

<BMICalculator lang="es" />  <!-- ✅ Una sola vez -->

## Categorías del IMC

[Más contenido...]
```

**Incorrecto:**
```mdx
<BMICalculator lang="es" />  <!-- Primera vez -->

[... contenido ...]

<BMICalculator lang="es" />  <!-- ❌ Segunda vez - DUPLICADO -->
```

### Verificación

**Antes de hacer commit:**
1. Abrir la página en el navegador (`npm run dev`)
2. Inspeccionar elemento (F12)
3. Buscar el componente de calculadora en el DOM
4. **Debe aparecer solo una vez**

**Comando de verificación en DevTools Console:**
```bash
document.querySelectorAll('.calculator').length
// Debe retornar: 1 (no 2, no 0)
```

---

## Comportamiento Mobile

### Patrón Mobile-First Observado

**Sitios Top-Ranking (Calculator.net, WebMD, etc.):**

En **viewport mobile (< 768px)**:
```
[Header/Logo]
▼
[Calculadora - Above the fold]
▼
[Scroll para más contenido]
```

**No** muestran párrafos largos antes de la calculadora en mobile.

### Implementación en Nuestro Proyecto

Ya implementado automáticamente en `BaseLayout.astro` con CSS responsive:

```css
/* Mobile: Calculadora ocupa toda la pantalla inicial */
@media (max-width: 768px) {
  .calculator-wrapper {
    margin-top: 1rem;
    /* Otros estilos responsive */
  }
}
```

Al posicionar la calculadora temprano en el MDX (después de breve introducción), aparece above-the-fold en mobile, permitiendo a los usuarios interactuar inmediatamente.

### Testing Mobile

**Herramientas:**
1. Chrome DevTools → Device Toolbar
2. Responsive Design Mode (Firefox)
3. Real device testing (iOS Safari, Android Chrome)

**Verificar:**
- ✅ Calculadora visible sin scroll
- ✅ Inputs accesibles y táctiles
- ✅ Botones de tamaño adecuado (min 44px)
- ✅ Resultados legibles
- ✅ No hay horizontal scroll

---

## Contenido por Idioma

### Investigación Específica por Idioma

**NO traducir literalmente.** Cada idioma requiere:

1. **Keywords Locales**
   - Investigar búsquedas en ese idioma
   - Identificar variaciones regionales (ES-ES vs ES-MX vs ES-AR)

2. **Terminología Médica/Técnica**
   - Usar términos oficiales (OMS/WHO)
   - Verificar siglas (IMC vs BMI)

3. **Contexto Cultural**
   - Ejemplos relevantes (comidas locales, unidades de medida)
   - Referencias a autoridades sanitarias locales

4. **Estadísticas Locales**
   - Datos de prevalencia del país/región
   - Estudios en ese idioma

### Ejemplos de Diferencias Importantes

#### Español vs Portugués (Aparentemente Similares)

**Español:**
- IMC = Índice de Masa Corporal
- "Bajo peso" / "Sobrepeso" / "Obesidad"
- Referencias: OMS, Fundación Española del Corazón

**Português:**
- IMC = Índice de Massa Corporal
- "Baixo peso" / "Magreza" / "Sobrepeso" / "Obesidade"
- Referencias: OMS, Sociedade Brasileira de Endocrinologia
- Usa coma decimal: 1,75 (no 1.75)

#### Hindi (Caso Especial)

**Particularidades:**
- Búsquedas mixtas: Inglés + Hindi
- Title: Bilingual "Free BMI Calculator - बॉडी मास इंडेक्स कैलकुलेटर"
- Meta description: Principalmente inglés (mayor búsqueda)
- Contenido: Devanagari completo
- **Asian BMI thresholds** diferentes:
  - Normal: 18.5-22.9 (vs 18.5-24.9 Western)
  - Overweight: 23-24.9 (vs 25-29.9)
  - Obese: ≥25 (vs ≥30)

### Recursos de Investigación

| Idioma | Sitios Médicos de Referencia |
|--------|------------------------------|
| ES | Fundación Española del Corazón, SemFYC, MedlinePlus Español |
| EN | CDC, NIH/NHLBI, Mayo Clinic, Harvard Health |
| PT | Tua Saúde, Sociedade Brasileira de Endocrinologia |
| FR | Ameli.fr, Santé Publique France |
| DE | Robert Koch Institut, Deutsche Gesellschaft für Ernährung |
| IT | Istituto Superiore di Sanità, Ministero della Salute |
| NL | Voedingscentrum, Hartstichting |
| PL | Narodowy Fundusz Zdrowia, GUS |
| HI | ICMR, NIN (National Institute of Nutrition) |
| TR | Türkiye Sağlık Bakanlığı |
| SV | Folkhälsomyndigheten, Livsmedelsverket |
| RU | Минздрав России, ВОЗ |

---

## Proceso Paso a Paso

### Para Cada Nueva Calculadora

#### Paso 1: Investigación (30-45 min por idioma)

**A. Buscar en Google y Bing:**
```
[calculator name] + [language keywords]
Ejemplo: "calculadora calorías gratis online"
```

**B. Analizar Top 3-5 Resultados:**

Crear documento temporal:
```markdown
## Español (es)

### Resultados Top:
1. calculator.net - Title: "..." Description: "..." Structure: Calc first
2. tuasaude.com - Title: "..." Description: "..." Structure: Content first
3. fundacion.com - Title: "..." Description: "..." Structure: Mixed

### Keywords Identificadas:
- calculadora calorías
- calorías diarias
- necesidades calóricas
- [...]

### Estructura Ganadora:
- Calculadora primero ✅
- Secciones: [lista]
- FAQs: Sí
- Tablas: Sí (tipos de actividad)

### Insights:
- Enfatizan "gratis" en title
- Incluyen año 2024/2025
- Mencionan déficit/superávit calórico
- [...]
```

**C. Herramientas de Apoyo:**

```bash
# WebFetch para analizar estructura
WebFetch(url, "Analiza estructura: ¿calculadora primero? Secciones principales, keywords")

# WebSearch para tendencias
WebSearch("calculadora calorías 2025")
```

#### Paso 2: Crear Frontmatter (10 min)

```yaml
---
title: [Optimizado según investigación]
metaDescription: [155 chars, keywords naturales]
keywords: [10-15 keywords del análisis]
canonical: /[path-correcto]/
---
```

**Validaciones:**
- ✅ Title < 60 caracteres
- ✅ Meta description 145-155 caracteres
- ✅ Canonical correcto según `src/config/routes.ts`

#### Paso 3: Estructura de Contenido (60-90 min)

**Template:**
```mdx
import [Name]Calculator from '@/components/calculators/[Name]Calculator.astro';

# [H1 - Title sin año]

[Intro 1-2 párrafos: qué es, para qué sirve]

## [Concepto Principal]

[Definición + contexto histórico si relevante]

### [Subsección: Fórmula/Cálculo]

[Fórmula matemática + ejemplo práctico]

<[Name]Calculator lang="[xx]" />

## [Categorías/Interpretación de Resultados]

| Categoría | Rango | Descripción |
|-----------|-------|-------------|
| ... | ... | ... |

## [Importancia/Aplicaciones]

[Por qué es útil conocer este valor]

## [Limitaciones]

[Advertencias, casos especiales]

## [Consejos Prácticos]

### [Subsección 1]
[Tips accionables]

### [Subsección 2]
[Más consejos]

## [Métricas Relacionadas]

[Otros cálculos complementarios]

## Preguntas Frecuentes

### ¿[Pregunta 1]?
[Respuesta detallada]

### ¿[Pregunta 2]?
[Respuesta detallada]

[... 6-8 FAQs total]

## Conclusión

[Resumen + disclaimer médico + CTA]

**Nota:** [Disclaimer sobre consultar profesional]
```

#### Paso 4: Localización Cultural (20-30 min)

**Adaptar:**
- ✅ Ejemplos con comidas/nombres locales
- ✅ Unidades de medida regionales
- ✅ Referencias a autoridades sanitarias del país
- ✅ Estadísticas nacionales/regionales
- ✅ Terminología médica oficial
- ✅ Formato de números (. vs ,)

**Ejemplo Español:**
```markdown
Por ejemplo, si pesas 70 kg y mides 1,75 m...
Fuente: Organización Mundial de la Salud (OMS)
```

**Ejemplo Alemán:**
```markdown
Zum Beispiel, wenn Sie 70 kg wiegen und 1,75 m groß sind...
Quelle: Weltgesundheitsorganisation (WHO)
```

#### Paso 5: Revisión SEO (15 min)

**Checklist:**
- ✅ Keyword principal en H1
- ✅ Keyword en primeras 100 palabras
- ✅ Keywords distribuidas naturalmente
- ✅ Headings jerárquicos (H1 → H2 → H3)
- ✅ Internal links relevantes (si aplica)
- ✅ Alt text en imágenes (si hay)
- ✅ Longitud adecuada (1500-3000 palabras)

#### Paso 6: Testing (15 min)

**A. Visual:**
```bash
npm run dev
# Abrir http://localhost:4324/[lang]/[folder]/[slug]/
```

**Verificar:**
- ✅ Calculadora aparece UNA vez
- ✅ Posición correcta (primero)
- ✅ Mobile responsive
- ✅ Sin errores de consola
- ✅ Traducciones correctas

**B. Functional:**
- ✅ Calculadora funciona
- ✅ Validaciones de inputs
- ✅ Resultados correctos
- ✅ Unidades métricas/imperiales

**C. SEO:**
```bash
# Inspeccionar elemento
# Ver <head>:
<title>...</title>
<meta name="description" content="...">
<link rel="canonical" href="...">
```

#### Paso 7: Commit (5 min)

```bash
git add src/content/calculators/[lang]/[calculator].mdx
git commit -m "feat(calculators): add optimized [Calculator] for [Language]

- Research-based SEO optimization
- Calculator-first UX pattern
- Comprehensive [XX]-language content
- Cultural localization
- [X] keywords targeted
- ~[XXXX] words

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Checklist de Calidad

### Pre-Publicación

Antes de considerar terminada una calculadora en un idioma:

#### ✅ SEO

- [ ] Title optimizado < 60 chars
- [ ] Meta description 145-155 chars
- [ ] 10-15 keywords relevantes
- [ ] Canonical URL correcto
- [ ] H1 único con keyword principal
- [ ] Estructura de headings lógica (H1→H2→H3)
- [ ] Keywords distribuidas naturalmente
- [ ] Longitud 1500-3000 palabras

#### ✅ UX

- [ ] Calculadora renderizada solo UNA vez en el MDX
- [ ] Componente posicionado después de breve introducción
- [ ] Intro breve antes de calculadora (1-2 párrafos)
- [ ] Contenido educativo después de calculadora
- [ ] FAQs incluidas (6-8 preguntas)
- [ ] Conclusión con disclaimer
- [ ] CTA claro

#### ✅ Técnico

- [ ] Import correcto del componente
- [ ] `lang` prop con código correcto
- [ ] Frontmatter válido (YAML)
- [ ] Sin errores de build
- [ ] Sin warnings de Astro Check
- [ ] Path correcto en `routes.ts`

#### ✅ Contenido

- [ ] Traducción nativa (no literal)
- [ ] Terminología médica correcta
- [ ] Ejemplos culturalmente relevantes
- [ ] Referencias a autoridades locales
- [ ] Estadísticas regionales (si hay)
- [ ] Formato numérico local (. vs ,)
- [ ] Disclaimer médico incluido

#### ✅ Mobile

- [ ] Calculadora visible above-the-fold
- [ ] Inputs táctiles (min 44px)
- [ ] Sin horizontal scroll
- [ ] Legible sin zoom
- [ ] Performance aceptable

#### ✅ Localización

- [ ] Keywords investigadas en idioma nativo
- [ ] Análisis de competidores en ese idioma
- [ ] Terminología oficial verificada
- [ ] Ejemplos con unidades locales
- [ ] Nombres/comidas/contexto local

### Post-Publicación

- [ ] URL accesible sin errores
- [ ] Calculadora funcional en producción
- [ ] Tests E2E pasando
- [ ] Lighthouse score > 90
- [ ] Validación HTML sin errores
- [ ] Hreflang correctos
- [ ] Sitemap actualizado

---

## Troubleshooting Común

### Problema: Calculadora aparece DOS veces

**Causa:** Incluiste el componente dos veces en el MDX:
```mdx
<BMICalculator lang="es" />  <!-- Primera vez -->
...
<BMICalculator lang="es" />  <!-- Segunda vez ❌ -->
```

**Solución:** Elimina una de las instancias. El componente debe aparecer **solo una vez** en el archivo MDX.

### Problema: Calculadora no aparece

**Causa 1:** Olvidaste importar el componente
```mdx
---
title: ...
---

<!-- ❌ Falta el import -->

<BMICalculator lang="es" />  <!-- Error: componente no importado -->
```

**Solución:**
```mdx
---
title: ...
---

import BMICalculator from '@/components/calculators/BMICalculator.astro';  ✅

<BMICalculator lang="es" />
```

**Causa 2:** No incluiste el componente en el MDX

**Solución:** Añade el componente donde desees que aparezca:
```mdx
<CalculatorComponent lang="xx" />
```

### Problema: 404 al acceder a la URL

**Causa:** Ruta no configurada en `src/config/routes.ts`

**Solución:**
```typescript
// src/config/routes.ts
export const routes: RouteMap = {
  es: {
    'calculator-id': 'slug-espanol',
  },
  en: {
    'calculator-id': 'slug-english',
  },
  // ...
}
```

### Problema: Build falla con error de MDX

**Causa:** Sintaxis MDX inválida (usualmente JSX dentro de Markdown)

**Solución:**
```mdx
<!-- Mal -->
<Calculator lang=es />

<!-- Bien -->
<Calculator lang="es" />
```

### Problema: Keywords no rankean

**Causas comunes:**
- Keywords en inglés para página en español
- Keywords no investigadas (inventadas)
- Keyword stuffing (densidad >3%)
- Falta de contenido comprehensive

**Solución:**
1. Investigar keywords reales en Google Trends
2. Analizar competidores top 5
3. Usar keywords naturalmente
4. Añadir más contenido de valor

---

## Ejemplos Reales de Aplicación

### Ejemplo 1: Calculadora BMI en Español

**Investigación:**
```
Búsqueda: "calculadora IMC"
Top 3:
1. calculator.net (IMC primero)
2. tuasaude.com (contenido primero)
3. fundación del corazón (IMC primero)

Patrón ganador: IMC primero ✅
Keywords: calculadora IMC, IMC gratis, índice masa corporal, peso ideal
```

**Resultado:**
```yaml
---
title: Calculadora de IMC Gratis - Índice de Masa Corporal Online 2025
metaDescription: Calculadora de IMC 100% gratuita y precisa. Calcula tu índice de masa corporal en segundos. Conoce tu peso ideal, categoría OMS y rango saludable. Sistema métrico e imperial.
keywords: calculadora IMC, IMC gratis, índice de masa corporal, peso ideal, peso saludable, obesidad, sobrepeso, bajo peso, calculadora índice masa corporal, IMC online, calcular IMC
canonical: /calculadoras/imc/
---
```

### Ejemplo 2: BMI Calculator en Hindi

**Investigación:**
```
Búsqueda: "BMI calculator" (indios buscan en inglés)
Insight: Asian BMI thresholds diferentes
Normal: 18.5-22.9 (vs 18.5-24.9)
Obesity: ≥25 (vs ≥30)

Keywords: Mix inglés/hindi
Title: Bilingual para capturar ambas audiencias
```

**Resultado:**
```yaml
---
title: Free BMI Calculator - बॉडी मास इंडेक्स कैलकुलेटर Online 2025
metaDescription: Free BMI calculator for Indians. Calculate your body mass index with Asian-Indian thresholds. Know your healthy weight, WHO category and ideal range.
keywords: BMI calculator, बॉडी मास इंडेक्स, BMI कैलकुलेटर, स्वस्थ वजन, Indian BMI calculator, Asian Indian BMI
canonical: /hi/calculators/bmi/
---
```

**Contenido adaptado:**
```markdown
## भारतीयों के लिए BMI श्रेणियां

| BMI Range | Category | Health Risk |
|-----------|----------|-------------|
| < 18.5 | कम वजन | ... |
| 18.5 - 22.9 | सामान्य वजन | ... |  <!-- Asian threshold -->
| 23.0 - 24.9 | अधिक वजन | ... |    <!-- Asian threshold -->
| ≥ 25.0 | मोटापा | ... |           <!-- Asian threshold -->
```

---

## Métricas de Éxito

### KPIs a Monitorear

**SEO:**
- Ranking para keyword principal (objetivo: Top 10)
- Impresiones en Google Search Console
- CTR desde SERP
- Backlinks ganados

**UX:**
- Bounce rate (objetivo: <50%)
- Tiempo en página (objetivo: >2 min)
- Interacciones con calculadora
- Scroll depth

**Conversión:**
- Usuarios que completan cálculo
- Clicks en CTAs
- Shares sociales
- Retorno de usuarios

---

## Recursos Adicionales

### Herramientas SEO

- **Google Search Console**: Monitorear performance
- **Google Trends**: Investigar keywords
- **AnswerThePublic**: Ideas de FAQs
- **Ubersuggest**: Análisis de competidores

### Validadores

- **W3C Markup Validator**: HTML válido
- **Schema.org Validator**: Structured data
- **PageSpeed Insights**: Performance
- **Mobile-Friendly Test**: Mobile UX

### Referencias

- [WHO BMI Standards](https://www.who.int/health-topics/obesity)
- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Astro Documentation](https://docs.astro.build/)

---

## Conclusión

Esta metodología garantiza:
- ✅ SEO optimizado por idioma
- ✅ UX centrada en el usuario
- ✅ Contenido cultural y médicamente preciso
- ✅ Escalabilidad (fácil replicar para nuevas calculadoras)
- ✅ Mantenibilidad (estructura consistente)

**Para cada nueva calculadora:**
1. Investigar (30-45 min/idioma)
2. Crear frontmatter optimizado (10 min)
3. Escribir contenido comprehensive (60-90 min)
4. Localizar culturalmente (20-30 min)
5. Revisar SEO (15 min)
6. Testing (15 min)
7. Commit (5 min)

**Total: ~2.5-3 horas por idioma** (mejora con práctica)

---

**Última actualización:** Diciembre 2025
**Versión:** 1.0
**Idiomas cubiertos:** 12 (es, en, pt, fr, de, it, pl, nl, hi, tr, sv, ru)
**Calculadoras implementadas:** BMI (100% completo en 12 idiomas)
