# Estado de Optimización de Calculadoras por Idioma

Este documento rastrea el estado de optimización de cada calculadora basándose en análisis de competidores en los 12 idiomas soportados.

**Última actualización:** 2026-01-02

---

## Metodología de Optimización

Para cada calculadora:
1. **Investigación por idioma** - Buscar top 3 competidores en cada idioma
2. **Análisis de features** - Identificar funcionalidades que ofrecen
3. **Adaptación del componente** - Mejorar nuestro componente según necesidades del mercado
4. **Testing** - Verificar que funcione correctamente
5. **Documentación** - Registrar cambios realizados

---

## Leyenda de Estado

- ⬜ **Pendiente** - No optimizado
- 🔄 **En Proceso** - Análisis iniciado
- ✅ **Completo** - Optimizado para todos los idiomas
- ⚠️ **Necesita Revisión** - Optimizado pero requiere cambios

---

## Inventario de Calculadoras (36 Total)

### Categoría: Salud y Fitness (17 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 1 | `bmi` | BMICalculator.astro | ✅ | 12/12 | Alta | ✅ COMPLETO (2026-01-02) - 3 threshold systems (WHO_8, WHO_4, ASIAN), BMI Gauge, regional config |
| 2 | `bmr` | BMRCalculator.astro | ⬜ | 0/12 | Alta | Muy buscada |
| 3 | `body-fat` | BodyFatCalculator.astro | ⬜ | 0/12 | Media | - |
| 4 | `tdee` | TDEECalculator.astro | ⬜ | 0/12 | Alta | Relacionada con BMR |
| 5 | `calorie` | CalorieCalculator.astro | ⬜ | 0/12 | Alta | Popular para dietas |
| 6 | `protein` | ProteinCalculator.astro | ⬜ | 0/12 | Media | - |
| 7 | `carbohydrate` | CarbohydrateCalculator.astro | ⬜ | 0/12 | Media | - |
| 8 | `fat-intake` | FatIntakeCalculator.astro | ⬜ | 0/12 | Baja | - |
| 9 | `macro` | MacroCalculator.astro | ⬜ | 0/12 | Alta | Popular en fitness |
| 10 | `ideal-weight` | IdealWeightCalculator.astro | ⬜ | 0/12 | Alta | Muy buscada |
| 11 | `healthy-weight` | HealthyWeightCalculator.astro | ⬜ | 0/12 | Media | Similar a ideal-weight |
| 12 | `army-body-fat` | ArmyBodyFatCalculator.astro | ⬜ | 0/12 | Baja | Nicho específico |
| 13 | `lean-body-mass` | LeanBodyMassCalculator.astro | ⬜ | 0/12 | Baja | - |
| 14 | `bsa` | BSACalculator.astro | ⬜ | 0/12 | Baja | Médico/científico |
| 15 | `heart-rate` | HeartRateCalculator.astro | ⬜ | 0/12 | Media | Fitness |
| 16 | `gfr` | GFRCalculator.astro | ⬜ | 0/12 | Baja | Médico especializado |
| 17 | `waist-hip` | WaistHipCalculator.astro | ⬜ | 0/12 | Media | Indicador de salud |

### Categoría: Análisis Corporal (3 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 18 | `body-frame` | BodyFrameCalculator.astro | ⬜ | 0/12 | Baja | - |
| 19 | `body-type` | BodyTypeCalculator.astro | ⬜ | 0/12 | Media | Popular en fitness |
| 20 | `blood-type` | BloodTypeCalculator.astro | ⬜ | 0/12 | Baja | Informativo |

### Categoría: Embarazo (5 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 21 | `pregnancy` | PregnancyCalculator.astro | ⬜ | 0/12 | Alta | Muy buscada |
| 22 | `due-date` | DueDateCalculator.astro | ⬜ | 0/12 | Alta | Muy popular |
| 23 | `pregnancy-conception` | PregnancyConceptionCalculator.astro | ⬜ | 0/12 | Media | - |
| 24 | `pregnancy-weight-gain` | PregnancyWeightGainCalculator.astro | ⬜ | 0/12 | Media | - |
| 25 | `ovulation` | OvulationCalculator.astro | ⬜ | 0/12 | Alta | Planificación familiar |
| 26 | `period` | PeriodCalculator.astro | ⬜ | 0/12 | Alta | Muy buscada |

### Categoría: Ejercicio (3 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 27 | `calories-burned` | CaloriesBurnedCalculator.astro | ⬜ | 0/12 | Alta | Popular en fitness |
| 28 | `one-rep-max` | OneRepMaxCalculator.astro | ⬜ | 0/12 | Media | Gimnasio/pesas |
| 29 | `pace` | PaceCalculator.astro | ⬜ | 0/12 | Media | Running/ciclismo |

### Categoría: Salud General (2 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 30 | `bac` | BACCalculator.astro | ⬜ | 0/12 | Media | Alcohol |
| 31 | `sleep` | SleepCalculator.astro | ⬜ | 0/12 | Media | Ciclos de sueño |

### Categoría: Utilidades (3 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 32 | `age` | AgeCalculator.astro | ⬜ | 0/12 | Alta | Muy popular |
| 33 | `date` | DateCalculator.astro | ⬜ | 0/12 | Alta | Útil y popular |
| 34 | `percentage` | PercentageCalculator.astro | ⬜ | 0/12 | Alta | Muy buscada |

### Categoría: Nutrición/Dietas (2 calculadoras)

| # | ID | Componente | Estado | Idiomas Optimizados | Prioridad | Notas |
|---|-------|------------|--------|---------------------|-----------|-------|
| 35 | `tip` | TipCalculator.astro | ⬜ | 0/12 | Media | Útil en restaurantes |
| 36 | `weight-watchers` | WeightWatchersCalculator.astro | ⬜ | 0/12 | Media | Dieta específica |

---

## Progreso General

- **Total de calculadoras:** 36
- **Optimizadas:** 0 (0%)
- **En proceso:** 0 (0%)
- **Pendientes:** 36 (100%)

---

## Priorización Recomendada

### Batch 1 - ALTA PRIORIDAD (10 calculadoras)
Calculadoras más populares con mayor tráfico esperado:
1. BMI (más buscada en salud)
2. BMR
3. TDEE
4. Calorie
5. Macro
6. Ideal Weight
7. Age
8. Date
9. Percentage
10. Pregnancy/Due Date

### Batch 2 - MEDIA PRIORIDAD (15 calculadoras)
11-25. Resto de calculadoras con tráfico moderado

### Batch 3 - BAJA PRIORIDAD (11 calculadoras)
26-36. Calculadoras especializadas o de nicho

---

## Idiomas a Analizar (12 Total)

Para cada calculadora, analizar top 3 competidores en:

1. **Español (es)** - España, Latinoamérica
2. **English (en)** - US, UK, Internacional
3. **Português (pt)** - Brasil, Portugal
4. **Français (fr)** - Francia, países francófonos
5. **हिन्दी Hindi (hi)** - India
6. **Deutsch (de)** - Alemania, Austria, Suiza
7. **Italiano (it)** - Italia
8. **Polski (pl)** - Polonia
9. **Nederlands (nl)** - Países Bajos, Bélgica
10. **Türkçe (tr)** - Turquía
11. **Svenska (sv)** - Suecia
12. **Русский (ru)** - Rusia, países ex-soviéticos

---

## Template de Análisis por Calculadora

```markdown
## [Calculator Name] - Análisis de Optimización

### Investigación por Idioma

#### Español (es)
**Top 3 Competidores:**
1. [URL] - Features: ...
2. [URL] - Features: ...
3. [URL] - Features: ...

**Features comunes encontradas:**
- Feature 1
- Feature 2
- Feature 3

**Mejoras propuestas:**
- [ ] Mejora 1
- [ ] Mejora 2

#### English (en)
**Top 3 Competidores:**
...

[Repetir para los 12 idiomas]

### Resumen de Cambios Necesarios
- Componente: [Lista de cambios]
- Traducciones: [Ajustes necesarios]
- MDX: [Actualizaciones de contenido]

### Estado de Implementación
- [ ] Análisis completado
- [ ] Cambios en componente
- [ ] Cambios en traducciones
- [ ] Testing en 12 idiomas
- [ ] Documentación actualizada
```

---

## Proceso de Trabajo

### Fase 1: Análisis (Por calculadora)
1. Investigar top 3 en cada idioma (12 idiomas)
2. Documentar features encontradas
3. Identificar patrones comunes
4. Listar mejoras propuestas

### Fase 2: Implementación
1. Actualizar componente .astro
2. Actualizar utils .ts si necesario
3. Actualizar traducciones (12 archivos JSON)
4. Actualizar MDX si es relevante

### Fase 3: Validación
1. Testing manual en 12 idiomas
2. Tests E2E
3. Build verification
4. Documentar cambios

---

## Notas Generales

- Priorizar cambios que mejoren UX en todos los idiomas
- Adaptar unidades de medida según región (métrico/imperial)
- Considerar diferencias culturales en presentación de datos
- Mantener consistencia entre calculadoras similares
- Documentar decisiones de diseño importantes

---

**Siguiente Paso:** Comenzar con BMI Calculator (calculadora #1, prioridad ALTA)
