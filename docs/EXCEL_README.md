# SEO Keyword Research - Excel File Guide

## 📦 Archivos Disponibles

### ✅ **seo-keyword-research-v2.xlsx** (RECOMENDADO)
- **12 KB** - Versión más reciente
- **10 filas con datos de EJEMPLO** para que veas las fórmulas funcionando
- **38 filas vacías** listas para llenar
- **Fórmulas incluidas** en columnas M y N
- **Formato condicional** (colores verde/amarillo/gris para Tiers)
- **Formato numérico** aplicado a todas las columnas

### seo-keyword-research.xlsx
- Versión anterior sin datos de ejemplo
- Todas las filas vacías

---

## 🎯 Estructura del Excel

### Columnas A-D: Información Básica
- **A - calculator_id**: ID de la calculadora (bmi, bmr, pregnancy, etc.)
- **B - language**: Código de idioma (es, en, pt, fr, hi, de, it, pl, nl, tr, sv, ru)
- **C - keyword_primary**: Keyword principal
- **D - keyword_variations**: Variaciones separadas por `|`

### Columnas E-H: Datos de Investigación (TÚ LOS LLENAS)
- **E - search_volume_monthly**: Volumen de búsqueda mensual (de SearchVolume.io)
- **F - keyword_difficulty**: Dificultad 0-100 (de SEMrush o Ubersuggest)
- **G - competition**: Competencia 0-1 (opcional, de Google Keyword Planner)
- **H - cpc**: Cost per click en $ (opcional, de Google Keyword Planner)

### Columnas I-L: Multipliers (PRE-CONFIGURADOS)
- **I - trend**: Tendencia (up/stable/down) - puedes ajustar
- **J - multiplier_commercial**: 1.0 o 1.5 (basado en CPC)
- **K - multiplier_trend**: 0.8, 1.0 o 1.3 (basado en tendencia)
- **L - multiplier_language**: 0.8, 1.0 o 1.2 (por prioridad de idioma)

### Columnas M-N: Resultados (CALCULADOS AUTOMÁTICAMENTE)
- **M - opportunity_score**: Score calculado por fórmula
- **N - priority_tier**: "Tier 1", "Tier 2" o "Tier 3" (con colores)

### Columnas O-S: Tracking
- **O - url**: URL de la página
- **P - current_indexed**: yes/no (si está indexada en Google)
- **Q - submit_date**: Fecha de envío a GSC
- **R - ranking_date**: Fecha cuando apareció en top 20
- **S - notes**: Tus notas

---

## 📊 Datos de Ejemplo (Filas 2-11)

Las primeras 10 filas contienen **datos reales de ejemplo** para que veas cómo funcionan las fórmulas:

| Calc | Lang | Keyword | SV | KD | OS | Tier | Nota |
|------|------|---------|----|----|-----|------|------|
| bmi | es | calculadora imc | 3,600 | 25 | 166.15 | Tier 1 | Ejemplo con datos reales |
| bmi | en | bmi calculator | 8,100 | 42 | 282.56 | Tier 1 | Alto volumen, alta competencia |
| pregnancy | pt | calculadora de gravidez | 2,400 | 18 | 151.58 | Tier 1 | Alta oportunidad Brasil |
| bmr | pl | kalkulator ppm | 1,800 | 20 | 111.43 | Tier 2 | Mercado polaco emergente |
| calorie | hi | calorie calculator | 5,000 | 28 | 271.03 | Tier 1 | India fitness boom |

**Observa cómo:**
- ✅ La columna M (Opportunity Score) se calcula automáticamente
- ✅ La columna N (Priority Tier) se asigna automáticamente con colores
- ✅ Los números tienen formato correcto (separadores de miles, decimales, $)

---

## 🚀 Cómo Usar Este Excel

### Paso 1: Abre el Archivo
- **En Excel**: Doble click en `seo-keyword-research-v2.xlsx`
- **En Google Sheets**: Archivo → Importar → Subir archivo

### Paso 2: Observa los Ejemplos (Filas 2-11)
- Revisa cómo funcionan las fórmulas en las primeras 10 filas
- Verifica que columna M muestre números como 166.15, 282.56, etc.
- Verifica que columna N muestre Tier 1/2/3 con colores verde/amarillo/gris

### Paso 3: Llena tus Datos (Filas 12+)
Solo necesitas llenar **2 columnas**:
- **Columna E**: Search Volume (de SearchVolume.io)
- **Columna F**: Keyword Difficulty (de SEMrush/Ubersuggest)

Las columnas M y N se calculan **automáticamente**.

### Paso 4: Prioriza con Filtros
1. Selecciona toda la tabla (A1:S49)
2. Datos → Filtros
3. Filtra columna N para ver solo "Tier 1"
4. Ordena por columna M (Opportunity Score) descendente

### Paso 5: Exporta URLs para GSC
1. Filtra Tier 1
2. Copia columna O (urls)
3. Envía a Google Search Console

---

## 🔧 Las Fórmulas (Ya Incluidas)

### Columna M - Opportunity Score
```
=IF(E2<>"",IF(F2<>"",(E2/(F2+1))*J2*K2*L2,""),"")
```

**Qué hace:**
- Si E (SV) y F (KD) tienen valores → Calcula: `(SV / (KD + 1)) × Multiplicadores`
- Si están vacíos → Muestra vacío

**Ejemplo:**
- SV = 3,600
- KD = 25
- Multiplicadores = 1.0 × 1.0 × 1.2
- Resultado: (3,600 / 26) × 1.2 = **166.15**

### Columna N - Priority Tier
```
=IF(M2<>"",IF(M2>150,"Tier 1",IF(M2>50,"Tier 2","Tier 3")),"")
```

**Qué hace:**
- Si M > 150 → "Tier 1" (verde)
- Si M 50-150 → "Tier 2" (amarillo)
- Si M < 50 → "Tier 3" (gris)
- Si M vacío → Muestra vacío

---

## 🎨 Formato Condicional

Las celdas en columna N se colorean automáticamente:

- **Tier 1**: Verde claro (#D9EAD3) con texto verde oscuro (#38761D) ✅
- **Tier 2**: Amarillo claro (#FFF2CC) con texto amarillo oscuro (#BF9000) ⚠️
- **Tier 3**: Gris claro (#EFEFEF) con texto gris (#666666) ⏸️

---

## 📝 Herramientas Recomendadas

### Para Search Volume (Columna E)
1. **SearchVolume.io** - 800 keywords gratis en bulk
   - Copia toda la columna C
   - Pega en searchvolume.io
   - Selecciona países relevantes
   - Export → copia a columna E

### Para Keyword Difficulty (Columna F)
1. **SEMrush Free** - 10 keywords/día
2. **Ubersuggest** - 3 keywords/día
3. **Ahrefs Webmaster Tools** - Gratis con tu sitio

### Para CPC y Competition (Opcional)
1. **Google Keyword Planner** - Ilimitado con cuenta Google Ads

### Para Trends (Columna I)
1. **Google Trends** - Compara keywords y marca tendencias

---

## ⚠️ Troubleshooting

### "No veo las fórmulas calculadas"
- ✅ Verifica que llenaste columnas E y F
- ✅ Asegúrate que E y F tienen NÚMEROS (no texto)
- ✅ Las primeras 10 filas deberían mostrar resultados

### "Aparece #DIV/0!"
- Normal si F está vacío
- Llena F con un número y desaparecerá

### "Los colores no aparecen"
- Si estás en Google Sheets, el formato condicional se importa automáticamente
- Si no se ve, aplica manualmente: Formato → Formato condicional

### "El Excel se ve raro en Google Sheets"
- Google Sheets soporta el formato, pero puede verse ligeramente diferente
- Las fórmulas funcionan igual

---

## 📈 Interpretación de Resultados

### Opportunity Score (Columna M)

**> 200**: Oportunidad EXCELENTE
- Alto volumen, baja competencia
- Enviar a GSC inmediatamente
- Priorizar creación de contenido

**150-200**: Oportunidad MUY BUENA
- Buen balance volumen/competencia
- Tier 1 - Alta prioridad

**100-150**: Oportunidad BUENA
- Tier 2 - Media prioridad
- Considerar según recursos

**50-100**: Oportunidad MODERADA
- Tier 2/3 - Baja prioridad inicial
- Long-term play

**< 50**: Oportunidad BAJA
- Tier 3 - Muy baja prioridad
- Solo si es estratégico

### Priority Tier (Columna N)

**Tier 1 (Verde)**:
- Enviar a GSC en los próximos 7 días
- 10-15 URLs por día
- Monitorear semanalmente

**Tier 2 (Amarillo)**:
- Enviar después de Tier 1
- Siguiente 30 días
- Monitorear mensualmente

**Tier 3 (Gris)**:
- Long-term strategy
- Siguiente 60-90 días
- Evaluar si vale la pena

---

## 🎯 Estrategia de Uso

### Semana 1-2: Research
- [ ] Usa SearchVolume.io para obtener SV de las 48 keywords
- [ ] Usa SEMrush Free (10/día × 14 días = 140 checks) para KD
- [ ] Llena columnas E y F

### Semana 3: Análisis
- [ ] Ordena por Opportunity Score (columna M) descendente
- [ ] Revisa top 20 keywords manualmente en Google
- [ ] Ajusta multipliers si es necesario (columnas J, K, L)

### Semana 4: Acción
- [ ] Filtra Tier 1
- [ ] Copia URLs (columna O)
- [ ] Envía a Google Search Console (10-15/día)
- [ ] Marca columna P como "yes" y fecha en Q

### Mes 2+: Tracking
- [ ] Monitorea indexación en GSC
- [ ] Cuando aparezca en top 20, marca fecha en columna R
- [ ] Añade notas en columna S sobre competidores, snippets, etc.

---

## 📚 Archivos Relacionados

- **SEO_PRIORITIZATION_FRAMEWORK.md** - Estrategia completa y fundamentos
- **GOOGLE_SHEETS_SETUP.md** - Instrucciones paso a paso
- **FORMULAS_QUICK_REFERENCE.txt** - Referencia rápida de fórmulas

---

**¿Preguntas?** Consulta los otros documentos en `docs/` o pregúntame.

**Última actualización:** Enero 2026
**Versión:** 2.0
**Status:** ✅ Ready to Use
