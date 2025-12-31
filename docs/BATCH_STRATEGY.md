# Estrategia de Batches para Calculadoras

Este documento explica la estrategia de batches utilizada para la creación sistemática de contenido MDX para las 36 calculadoras del proyecto en 12 idiomas.

---

## 📋 Índice

1. [¿Qué son los Batches?](#qué-son-los-batches)
2. [¿Por qué usar Batches?](#por-qué-usar-batches)
3. [Estado Actual](#estado-actual)
4. [Batches Completados](#batches-completados)
5. [Batches Pendientes](#batches-pendientes)
6. [Proceso para Completar un Batch](#proceso-para-completar-un-batch)
7. [Mejores Prácticas](#mejores-prácticas)

---

## ¿Qué son los Batches?

Los **batches** son agrupaciones lógicas de calculadoras que se crean juntas en un solo ciclo de trabajo. Cada batch agrupa calculadoras relacionadas temáticamente para facilitar la creación de contenido coherente y optimizado.

**Estructura de un Batch:**
- N calculadoras relacionadas
- 12 idiomas por calculadora
- Total: N × 12 archivos MDX

**Ejemplo:** Batch 5 = 6 calculadoras × 12 idiomas = 72 archivos MDX

---

## ¿Por qué usar Batches?

### Ventajas de la Estrategia de Batches

1. **Organización temática**
   - Las calculadoras relacionadas se crean juntas
   - Facilita la investigación SEO (keywords similares)
   - Contenido más coherente y completo

2. **Control de calidad**
   - Revisión y testing por grupo
   - Commit atómico por batch
   - Fácil rollback si hay problemas

3. **Eficiencia en creación**
   - Uso de agentes paralelos (1 por idioma)
   - Contexto compartido entre calculadoras similares
   - Reutilización de investigación SEO

4. **Trazabilidad**
   - Commits claros con scope definido
   - Fácil identificar qué se agregó en cada batch
   - Histórico de progreso claro

5. **Escalabilidad**
   - 36 calculadoras × 12 idiomas = 432 archivos
   - Dividir en batches hace el trabajo manejable
   - Permite trabajo incremental

---

## Estado Actual

### Progreso General

**Total:** 29/36 calculadoras completadas (80.6%)

**Archivos MDX creados:** 348 archivos (29 calculadoras × 12 idiomas)

**Batches completados:** 5 de 6

---

## Batches Completados

### ✅ Batches 1-3 (17 calculadoras)

**Commit:** `e7dc870` - feat: agregado contenido MDX para calculadoras (Batches 1-3)

**Fecha:** Diciembre 2024

**Calculadoras:** 17 calculadoras de salud y fitness
- army-body-fat
- bmi
- bmr
- body-fat
- body-frame
- body-type
- bsa
- calorie
- carbohydrate
- fat-intake
- healthy-weight
- ideal-weight
- lean-body-mass
- macro
- protein
- tdee
- waist-hip

**Total archivos:** 204 archivos MDX (17 × 12)

**Características:**
- Primera implementación masiva de contenido MDX
- Estableció el patrón de optimización SEO
- Incluye las calculadoras más populares (BMI, BMR, TDEE)

---

### ✅ Batch 4 (6 calculadoras)

**Commit:** `d23200b` - feat: agregado contenido MDX para calculadoras (Batch 4)

**Fecha:** Diciembre 2024

**Calculadoras:** 6 calculadoras variadas
- age - Calculadora de edad
- gfr - Tasa de filtración glomerular
- heart-rate - Frecuencia cardíaca
- one-rep-max - 1RM (fuerza)
- pace - Ritmo de carrera
- percentage - Porcentaje

**Total archivos:** 72 archivos MDX (6 × 12)

**Características:**
- Primera corrección masiva de escapado de caracteres `<` y `>`
- Estableció estándares de validación MDX
- Mix de categorías (salud, fitness, matemáticas)

---

### ✅ Batch 5 (6 calculadoras) - **RECIÉN COMPLETADO**

**Commit:** `11b01d3` - feat: agregado contenido MDX para calculadoras (Batch 5)

**Fecha:** Diciembre 31, 2024

**Calculadoras:** 6 calculadoras de embarazo y fertilidad
- pregnancy - Calculadora de embarazo
- due-date - Fecha probable de parto
- ovulation - Calculadora de ovulación
- period - Período menstrual
- pregnancy-conception - Fecha de concepción
- pregnancy-weight-gain - Aumento de peso en embarazo

**Total archivos:** 72 archivos MDX (6 × 12)

**Estadísticas:**
- **179,241 palabras** totales
- Promedio: 2,489 palabras/archivo
- Rango: 1,680 - 5,451 palabras
- 12 agentes paralelos utilizados (uno por idioma)

**Características especiales:**
- Contenido más extenso de todos los batches
- Enfoque temático: embarazo y fertilidad
- Referencias médicas especializadas (OMS, ACOG, IOM)
- Localización cultural avanzada (ej: Asian BMI thresholds para Hindi)
- Uso intensivo de la guía CALCULATOR_OPTIMIZATION_GUIDE.md

**Optimización:**
- Investigación SEO específica por idioma
- 10-15 keywords localizadas por archivo
- Meta descriptions optimizadas (145-155 caracteres)
- Títulos con "Gratis/Free" + "2025"

**Verificación:**
- ✅ Tests E2E: 41/41 passed
- ✅ Build: 516 páginas generadas
- ✅ 508 caracteres `<` y `>` escapados correctamente

---

## Batches Pendientes

### ⏳ Batch 6 (7 calculadoras) - **SIGUIENTE**

**Calculadoras restantes:**
1. `bac` - Blood Alcohol Content (alcoholemia)
2. `blood-type` - Tipo de sangre
3. `calories-burned` - Calorías quemadas
4. `date` - Calculadora de fechas
5. `sleep` - Calculadora de sueño
6. `tip` - Calculadora de propinas
7. `weight-watchers` - Puntos Weight Watchers

**Enfoque temático:** Salud y Estilo de Vida

**Total archivos a crear:** 84 archivos MDX (7 × 12)

**Después del Batch 6:**
- ✅ 36/36 calculadoras completadas (100%)
- ✅ 432 archivos MDX totales
- ✅ Proyecto MDX completo

---

## Proceso para Completar un Batch

### Fase 1: Planificación (5-10 min)

1. **Definir calculadoras del batch** (agrupar temáticamente)
2. **Verificar que existan componentes** en `src/components/calculators/`
3. **Verificar rutas configuradas** en `src/config/routes.ts`
4. **Verificar IDs en** `src/config/calculators.ts`

### Fase 2: Creación de Contenido (variable)

**Opción A: Agentes en Paralelo (Recomendado)**

Lanzar 12 agentes Task en paralelo, uno por idioma:

```javascript
// Un mensaje con 12 Task tool calls
Task(subagent_type: "general-purpose",
     description: "Batch N - Spanish",
     prompt: "Create N calculators in Spanish following CALCULATOR_OPTIMIZATION_GUIDE.md...")

Task(subagent_type: "general-purpose",
     description: "Batch N - English",
     prompt: "Create N calculators in English following CALCULATOR_OPTIMIZATION_GUIDE.md...")

// ... (repetir para los 12 idiomas)
```

**Ventajas:**
- Máxima velocidad (12 agentes trabajando simultáneamente)
- Cada agente se especializa en un idioma
- Terminología médica consistente por idioma

**Opción B: Secuencial (Para batches pequeños)**

Crear archivos idioma por idioma o calculadora por calculadora.

**Ventajas:**
- Mayor control
- Útil para debugging

### Fase 3: Validación (10-15 min)

1. **Verificar cantidad de archivos**
   ```bash
   # Debe ser: N calculadoras × 12 idiomas
   find src/content/calculators -type f \( -name "calc1.mdx" -o -name "calc2.mdx" ... \) | wc -l
   ```

2. **Validar contenido**
   ```bash
   # Verificar frontmatter, imports, componentes
   node /tmp/validate-batch.js
   ```

3. **Verificar palabras**
   ```bash
   # Asegurar >1000 palabras por archivo
   wc -w src/content/calculators/*/{calculadoras}.mdx
   ```

4. **Escapar caracteres especiales**
   - Usar Task agent para escapar `<` y `>` en todos los archivos
   - Patrón: `<` → `{'<'}`, `>` → `{'>'}`

### Fase 4: Testing (5-10 min)

1. **Tests E2E**
   ```bash
   npm test
   # Verificar que todos pasen
   ```

2. **Build de producción**
   ```bash
   npm run build
   # Verificar 0 errores
   # Verificar cantidad de páginas generadas
   ```

### Fase 5: Commit (5 min)

```bash
# Agregar solo archivos del batch
git add src/content/calculators/*/{calc1,calc2,...}.mdx

# Commit con formato estándar
git commit -m "feat: agregado contenido MDX para calculadoras (Batch N)

Batch N: [Tema del Batch]
- N calculadoras: calc1, calc2, calc3...
- 12 idiomas: es, en, pt, fr, hi, de, it, pl, nl, tr, sv, ru
- Total: N×12 archivos MDX

Características:
- XX,XXX palabras totales (promedio X,XXX palabras/archivo)
- Optimizado según CALCULATOR_OPTIMIZATION_GUIDE.md
- Keywords localizadas (10-15 por archivo)
- Contenido comprehensive (1,500-3,000 palabras)
- FAQs (6-8 por calculadora)

Verificación:
✓ Tests E2E: XX/XX passed
✓ Build: XXX páginas generadas
✓ Schema validation: 100%

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Mejores Prácticas

### 1. Agrupación Temática

**✅ Hacer:**
- Agrupar calculadoras relacionadas (ej: todas de embarazo)
- Batches de 5-7 calculadoras (60-84 archivos)
- Mantener coherencia temática

**❌ Evitar:**
- Mezclar categorías sin relación
- Batches demasiado grandes (>10 calculadoras)
- Batches de 1 calculadora (ineficiente)

### 2. Uso de Agentes Paralelos

**✅ Hacer:**
- Lanzar los 12 agentes en UN SOLO mensaje
- Especificar `model: "sonnet"` para mejor calidad
- Dar instrucciones claras con referencia a CALCULATOR_OPTIMIZATION_GUIDE.md

**❌ Evitar:**
- Lanzar agentes secuencialmente (lento)
- Usar `model: "haiku"` para contenido extenso
- Instrucciones vagas

### 3. Validación Exhaustiva

**✅ Hacer:**
- Validar ANTES de tests y build
- Corregir caracteres `<` y `>` con agente especializado
- Verificar schema, imports, componentes

**❌ Evitar:**
- Saltar directo a tests sin validación
- Corregir manualmente (propenso a errores)
- Asumir que todo está bien

### 4. Commits Atómicos

**✅ Hacer:**
- Un commit por batch
- Mensaje descriptivo con estadísticas
- Solo incluir archivos del batch

**❌ Evitar:**
- Mezclar batches en un commit
- Incluir archivos no relacionados
- Mensajes genéricos

### 5. Documentación

**✅ Hacer:**
- Documentar problemas encontrados
- Actualizar esta guía si cambia el proceso
- Registrar estadísticas por batch

**❌ Evitar:**
- Saltarse la documentación
- Perder información de lecciones aprendidas

---

## Plantilla de Prompt para Agentes

```markdown
Create N optimized MDX files for Batch X calculators in [LANGUAGE] ([code]).

**CRITICAL: Follow the CALCULATOR_OPTIMIZATION_GUIDE.md methodology at docs/CALCULATOR_OPTIMIZATION_GUIDE.md**

**Calculators to create:**
1. calculator-id-1 - Description
2. calculator-id-2 - Description
...

**Requirements per the guide:**
1. **Research-based SEO:**
   - Title: "[Keyword] [Gratis/Free] - [Secondary] Online 2025"
   - Meta description: 145-155 characters with benefits
   - 10-15 researched keywords in [language]

2. **Content length:** 1500-3000 words per file minimum

3. **Structure:** Follow guide template with calculator after brief intro, FAQs (6-8), tables, comprehensive content

4. **Component imports:** [CalculatorName]Calculator from '@/components/calculators/'

5. **Medical accuracy:** Use WHO/[local authority] terminology, include disclaimers

**Files:** src/content/calculators/[code]/[calculator-id].mdx
**Canonical:** /[lang-prefix]/[localized-path]/[id]/

**Report back:** Total words per file, keywords used.
```

---

## Historial de Cambios

### v1.0 - Diciembre 31, 2024
- Creación inicial del documento
- Documentación de Batches 1-5
- Definición de Batch 6 pendiente
- Proceso estándar establecido

---

**Última actualización:** Diciembre 31, 2024
**Estado:** Batch 5 completado, Batch 6 pendiente
**Progreso:** 29/36 calculadoras (80.6%)
