# Instrucciones: Setup de Google Sheets para SEO Keyword Research

## Paso 1: Importar el CSV limpio

1. **Abre Google Sheets:** https://sheets.google.com
2. **Crea nueva hoja** (en blanco)
3. **Archivo → Importar**
4. **Subir → Seleccionar archivo:** `docs/seo-keyword-research-clean.csv`
5. **Configuración de importación:**
   - Tipo de separador: **Coma**
   - Convertir texto a números y fechas: **Sí** ✓
   - Click **Importar datos**

✅ Ahora tienes las columnas A-S con 48 ejemplos de keywords

---

## Paso 2: Añadir las Fórmulas (Copiar y Pegar)

### Fórmula 1: Opportunity Score (Columna M)

**Celda M2** - Copia y pega exactamente esto:

```
=IF(E2<>"",IF(F2<>"",(E2/(F2+1))*J2*K2*L2,""),"")
```

**Después:**
1. Click en la celda M2
2. Agarra el cuadrito azul en la esquina inferior derecha
3. Arrastra hacia abajo hasta M49 (última fila con datos)

**Qué hace:** Calcula `(Volumen / (Dificultad + 1)) × Multiplicadores`

---

### Fórmula 2: Priority Tier (Columna N)

**Celda N2** - Copia y pega:

```
=IF(M2<>"",IF(M2>150,"Tier 1",IF(M2>50,"Tier 2","Tier 3")),"")
```

**Después:**
1. Click en N2
2. Arrastra hacia abajo hasta N49

**Qué hace:** Clasifica automáticamente:
- OS > 150 = "Tier 1" (Alta prioridad)
- OS 50-150 = "Tier 2" (Media)
- OS < 50 = "Tier 3" (Baja)

---

## Paso 3: Formatear para Mejor Visualización

### Congelar Primera Fila (Headers)

1. Click en fila **2** (primera fila de datos)
2. **Ver → Congelar → 1 fila**

✅ Ahora los encabezados siempre están visibles al scrollear

---

### Formatear Columnas Numéricas

**Columna E (Search Volume):**
1. Selecciona E2:E49
2. **Formato → Número → Número**
3. 0 decimales

**Columna F (Keyword Difficulty):**
1. Selecciona F2:F49
2. **Formato → Número → Número**
3. 0 decimales

**Columna G (Competition):**
1. Selecciona G2:G49
2. **Formato → Número → Número**
3. 2 decimales

**Columna H (CPC):**
1. Selecciona H2:H49
2. **Formato → Número → Moneda**
3. $ USD

**Columna M (Opportunity Score):**
1. Selecciona M2:M49
2. **Formato → Número → Número**
3. 2 decimales

---

### Color Coding para Priority Tiers

**Tier 1 (Verde - Alta Prioridad):**
1. Selecciona columna N
2. **Formato → Formato condicional**
3. Regla: "El texto contiene" → "Tier 1"
4. Color de fondo: **Verde claro** (#d9ead3)
5. Color de texto: **Verde oscuro** (#38761d)

**Tier 2 (Amarillo - Media):**
1. Nueva regla
2. "El texto contiene" → "Tier 2"
3. Fondo: **Amarillo claro** (#fff2cc)
4. Texto: **Amarillo oscuro** (#bf9000)

**Tier 3 (Gris - Baja):**
1. Nueva regla
2. "El texto contiene" → "Tier 3"
3. Fondo: **Gris claro** (#efefef)
4. Texto: **Gris oscuro** (#666666)

---

## Paso 4: Crear Filtros para Analizar Datos

1. Selecciona toda la tabla (A1:S49)
2. **Datos → Crear un filtro**

✅ Ahora puedes filtrar por:
- Idioma (columna B)
- Calculadora (columna A)
- Priority Tier (columna N)
- Etc.

---

## Paso 5: Ordenar por Opportunity Score

1. Click en **cualquier celda con datos**
2. **Datos → Ordenar intervalo**
3. **Ordenar por:** Columna M (opportunity_score)
4. **Orden:** Z → A (mayor a menor)
5. **Los datos tienen fila de encabezado:** ✓ Sí

✅ Ahora ves las mejores oportunidades primero

---

## Paso 6: Añadir Tus Datos de Investigación

### Llenar Search Volume (Columna E)

**Fuente:** SearchVolume.io o Google Keyword Planner

**Ejemplo:**
```
E2: 3600 (para "calculadora imc" español)
E3: 8100 (para "bmi calculator" inglés)
E4: 2100 (para "calculadora imc" portugués)
...
```

### Llenar Keyword Difficulty (Columna F)

**Fuente:** SEMrush Free o Ubersuggest

**Ejemplo:**
```
F2: 25 (KD% para "calculadora imc")
F3: 42 (KD% para "bmi calculator")
F4: 22 (KD% para "calculadora imc" PT)
...
```

### Llenar Competition (Columna G) - Opcional

**Fuente:** Google Keyword Planner

**Valores:** 0.0 a 1.0
```
G2: 0.18 (baja competencia)
G3: 0.45 (media competencia)
G4: 0.15 (baja competencia)
...
```

### Llenar CPC (Columna H) - Opcional

**Fuente:** Google Keyword Planner

**Ejemplo:**
```
H2: 0.80
H3: 1.20
H4: 0.65
...
```

### Ajustar Trend (Columna I) - Opcional

**Fuente:** Google Trends

**Valores:**
- `up` = Tendencia alcista
- `stable` = Estable
- `down` = Bajando

**Ejemplo:**
```
I2: stable
I3: up
I4: stable
...
```

---

## Paso 7: Ajustar Multipliers (Si Necesario)

### Multiplier Commercial (Columna J)

**Regla automática:**
- Si CPC > $1.00 → **1.5** (alto valor comercial)
- Si CPC ≤ $1.00 → **1.0** (normal)

**Fórmula opcional para automatizar J2:**
```
=IF(H2>1,1.5,1)
```

### Multiplier Trend (Columna K)

**Regla automática:**
- Si trend = "up" → **1.3**
- Si trend = "stable" → **1.0**
- Si trend = "down" → **0.8**

**Fórmula opcional para automatizar K2:**
```
=IF(I2="up",1.3,IF(I2="down",0.8,1))
```

### Multiplier Language (Columna L)

**Ya pre-configurado:**
- es, en, pt, hi → **1.2** (alta prioridad)
- fr, de, it, pl, nl → **1.0** (media prioridad)
- tr, sv, ru → **0.8** (baja prioridad)

Ajusta según tu estrategia.

---

## Paso 8: Ver Tus Resultados

Una vez llenes las columnas E (SV) y F (KD), la columna M (Opportunity Score) se calcula **automáticamente**.

### Ejemplo con Datos Reales:

| Calc | Lang | Keyword | SV | KD | Mult | OS | Tier |
|------|------|---------|----|----|------|-----|------|
| bmi | es | calculadora imc | 3,600 | 25 | 1.2 | **166.15** | **Tier 1** ✅ |
| bmr | en | bmr calculator | 8,100 | 42 | 1.5 | **282.56** | **Tier 1** ✅ |
| pregnancy | pt | calculadora de gravidez | 2,400 | 18 | 1.2 | **151.58** | **Tier 1** ✅ |
| calorie | hi | calorie calculator | 5,000 | 28 | 1.2 | **206.90** | **Tier 1** ✅ |
| body-fat | es | calculadora grasa corporal | 1,200 | 32 | 1.2 | **43.64** | **Tier 3** |

---

## Paso 9: Filtrar y Exportar Tier 1 para GSC

### Filtrar Solo Tier 1:

1. Click en filtro de columna N (Priority Tier)
2. Deselecciona todo
3. Selecciona solo **Tier 1**
4. OK

### Copiar URLs:

1. Selecciona columna O (url) de filas visibles
2. Copiar (Ctrl+C / Cmd+C)
3. Pega en nuevo documento/lista

✅ Ahora tienes tu lista de URLs para enviar a Google Search Console

---

## Paso 10: Tracking de Progreso

### Marcar como Indexed:

Columna P: `yes` o `no`

### Fechas de Envío:

Columna Q: Fecha cuando enviaste a GSC (formato: DD/MM/YYYY)

### Fecha de Ranking:

Columna R: Cuando apareció en top 20 (formato: DD/MM/YYYY)

### Notas:

Columna S: Observaciones, por ejemplo:
- "Featured snippet capturado"
- "Competidor fuerte: calculator.net"
- "Necesita más backlinks"

---

## Ejemplo de Workflow Completo

### Día 1: Setup
- [ ] Importar CSV limpio
- [ ] Añadir fórmulas M2 y N2
- [ ] Arrastrar fórmulas hasta fila 49
- [ ] Formatear colores condicionales

### Día 2-7: Research con Herramientas Gratuitas

**SearchVolume.io (bulk 800 keywords):**
1. Copia columna C (keyword_primary) completa
2. Pega en https://searchvolume.io/
3. Selecciona países: ES, US, BR, FR, DE, IN
4. Export CSV
5. Copia volúmenes a columna E

**SEMrush Free (10/día × 7 días = 70 keywords):**
1. Ordena por volumen (columna E descendente)
2. Copia top 10 keywords
3. Busca en SEMrush Keyword Magic Tool
4. Anota KD% en columna F
5. Repite cada día

**Google Trends (validación):**
1. Compara top keywords por país
2. Marca tendencias en columna I

### Día 8: Análisis

1. Ordena por Opportunity Score (columna M)
2. Revisa top 50 manualmente en Google
3. Ajusta multipliers si es necesario
4. Filtra Tier 1

### Día 9+: Envío a GSC

1. Copia URLs de Tier 1 (columna O)
2. Envía 10-15 URLs/día a Google Search Console
3. Marca columna P como "yes"
4. Anota fecha en columna Q

---

## Fórmulas de Respaldo (Por Si Acaso)

### Opportunity Score (M2):
```
=IF(E2<>"",IF(F2<>"",(E2/(F2+1))*J2*K2*L2,""),"")
```

### Priority Tier (N2):
```
=IF(M2<>"",IF(M2>150,"Tier 1",IF(M2>50,"Tier 2","Tier 3")),"")
```

### Auto Multiplier Commercial (J2) - Opcional:
```
=IF(H2>1,1.5,1)
```

### Auto Multiplier Trend (K2) - Opcional:
```
=IF(I2="up",1.3,IF(I2="down",0.8,1))
```

---

## Atajos de Teclado Útiles

- **Ctrl/Cmd + C**: Copiar
- **Ctrl/Cmd + V**: Pegar
- **Ctrl/Cmd + D**: Rellenar hacia abajo
- **Ctrl/Cmd + F**: Buscar
- **Ctrl/Cmd + K**: Insertar link
- **Alt + Shift + 5**: Tachar texto

---

## Troubleshooting

### ❌ "La fórmula no calcula"
- Verifica que E y F tengan **números** (no texto)
- Cambia formato de E y F a "Número" no "Texto sin formato"

### ❌ "Aparece #DIV/0!"
- Normal si F está vacío
- La fórmula usa `(F+1)` para evitar división por cero
- Llena F con un número y desaparecerá

### ❌ "Los filtros no funcionan"
- Asegúrate de seleccionar toda la tabla (A1:S49)
- Datos → Crear un filtro
- Si ya existe, quita y vuelve a crear

### ❌ "Las fórmulas se pegaron como texto"
- No copies con comillas ("")
- Copia solo lo que está DENTRO de los backticks ```
- Pega directo en la celda (barra de fórmulas)

---

## Próximos Pasos

Una vez tengas tu hoja configurada:

1. **Lee:** `docs/SEO_PRIORITIZATION_FRAMEWORK.md` para la estrategia completa
2. **Investiga:** 20 keywords/día con herramientas gratuitas
3. **Calcula:** OS se actualiza automáticamente
4. **Prioriza:** Filtra Tier 1 y envía a GSC
5. **Monitorea:** Tracking en columnas P, Q, R

---

**¿Problemas?** Avísame y te ayudo a resolverlos.

**Última actualización:** Enero 2026
**Status:** ✅ Ready to Use
