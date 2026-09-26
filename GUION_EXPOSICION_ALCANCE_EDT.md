# Guion de exposición: Alcance y EDT del proyecto Roma Bag's

**Duración estimada:** 10 a 12 minutos  
**Tema:** Gestión del alcance y Estructura de Desglose del Trabajo (EDT)

---

## 1. Introducción

Buenos días. En esta parte de la exposición voy a presentar el **alcance del proyecto** y la **Estructura de Desglose del Trabajo**, también conocida como EDT.

Primero, recordemos brevemente el problema que buscamos resolver. Actualmente, Roma Bag's gestiona su información operativa y comercial de manera fragmentada y poco estandarizada. Esto dificulta el control oportuno del inventario, las ventas y los despachos. Como evidencia, el diagnóstico muestra que el **70,8 % de los registros de despacho revisados de 2026 carece de información financiera o logística completa**.

Frente a este problema, el objetivo central del proyecto es **integrar y estandarizar la información operativa y comercial mediante reglas de datos, un piloto controlado y Odoo Community, de manera que la empresa cuente con datos confiables al cierre del proyecto**.

---

## 2. Alcance del proyecto

Cuando hablamos del alcance, definimos con precisión **qué trabajo realizará el proyecto y qué resultados entregará**. Esto también nos permite evitar que se agreguen funciones no planificadas durante la ejecución.

El proyecto se desarrollará entre el **21 de septiembre de 2026 y el 26 de abril de 2027**, con una duración de **149 días hábiles**.

### ¿Qué incluye el proyecto?

El alcance incluye, en primer lugar, el **diagnóstico del proceso actual**, o AS-IS, y el diseño del proceso futuro, o TO-BE. Con esto identificaremos cómo se administra actualmente la información y cómo deberá funcionar después de la mejora.

También incluye la verificación de la **conectividad en los dos talleres**, la implementación de una **base piloto temporal** y la definición del gobierno de datos. Esto último comprende responsables, reglas de calidad, permisos, respaldos y procedimientos para el uso correcto de la información.

Después se realizará la limpieza y conciliación de los datos existentes, así como la implementación de **Odoo Community** para gestionar inventario, ventas y despachos. Los datos del piloto serán migrados de manera controlada y sin eliminar los archivos originales.

Además, el proyecto considera pruebas técnicas y pruebas de aceptación con los usuarios de Ventas, Producción y Gerencia. Finalmente, se elaborarán reportes gerenciales, se capacitará al personal, se pondrá Odoo en producción, se monitoreará su uso y se transferirá el control al Comité de Datos.

En resumen, no se entregará solamente un software. También se entregarán **datos depurados, procesos definidos, usuarios capacitados, controles de seguridad y responsables para mantener la solución**.

### ¿Qué no incluye el proyecto?

Es igualmente importante señalar las exclusiones. El proyecto **no incluye** la recuperación de registros perdidos del año 2024, porque no existe información suficiente para reconstruirlos de forma confiable.

Tampoco incluye contabilidad formal, facturación electrónica, integración con SUNAT, comercio electrónico, automatización de maquinaria ni mantenimiento evolutivo después del cierre.

Estas exclusiones mantienen el proyecto enfocado en su propósito principal: integrar y mejorar la gestión de la información operativa y comercial de Roma Bag's.

---

## 3. Criterios de aceptación del alcance

Para verificar que el alcance se cumpla, se han establecido **tres puntos de control o gates**.

El **Gate 1, llamado Cimentar**, se realizará el **17 de noviembre de 2026**. En este punto deberán estar verificados la conectividad, los responsables de datos, el diccionario de datos, el procedimiento de venta, stock y despacho, la política de respaldo, el catálogo depurado y el piloto con consulta móvil.

El **Gate 2, llamado Integrar**, se realizará el **8 de marzo de 2027**. Para aprobarlo, Odoo deberá estar configurado en un entorno de pruebas, con los datos conciliados, los permisos y el flujo operativo verificados, las pruebas de aceptación firmadas y ningún defecto crítico pendiente. También deberá estar aprobado el plan para la salida a producción.

El **Gate 3, correspondiente a la conformidad y el cierre**, se realizará el **21 de abril de 2027**. En esta etapa, Odoo ya deberá funcionar como fuente oficial, los reportes deberán haber sido comprobados con información real y se deberán completar la capacitación, la auditoría de calidad, la transferencia de responsabilidades y el informe final. El cierre administrativo terminará el 26 de abril.

Por lo tanto, el alcance no se considerará cumplido solo porque Odoo esté instalado, sino cuando los entregables hayan sido **probados, validados y aceptados por los responsables**.

---

## 4. Estructura de Desglose del Trabajo — EDT

Una vez definido el alcance, este se organiza mediante la **Estructura de Desglose del Trabajo**.

La EDT descompone el proyecto en entregables cada vez más específicos y manejables. En nuestro caso, está orientada a **entregables**, no a una simple lista de tareas. Su último nivel está formado por paquetes de trabajo con un resultado verificable, actividades relacionadas y un responsable definido.

La EDT contiene **cinco ramas principales y diecisiete paquetes de trabajo**, los cuales cubren el cien por ciento del alcance y se relacionan con las 92 actividades e hitos del cronograma.

### Rama 1.1: Dirección y planificación

La primera rama corresponde a la **dirección y planificación**. Incluye dos paquetes: el primero produce el acta del proyecto, la asignación de responsables y las líneas base aprobadas; el segundo comprende el seguimiento, los informes y el control de cambios.

Esta rama es transversal, porque permite dirigir y controlar el proyecto desde el inicio hasta el cierre.

### Rama 1.2: Diagnóstico AS-IS y diseño TO-BE

La segunda rama corresponde al **diagnóstico**. Primero se documenta el proceso actual y se auditan las fuentes de información. Después se diseña el proceso futuro y se validan los diez requisitos del proyecto.

El resultado será una visión clara de la situación inicial, del funcionamiento esperado y de la trazabilidad entre cada necesidad y su entregable.

### Rama 1.3: Cimentar

La tercera rama se denomina **Cimentar**. Su propósito es preparar las condiciones necesarias antes de implementar Odoo.

Esta rama comprende cuatro paquetes: conectividad operativa; gobierno y calidad de datos; un piloto centralizado y controlado; y la aprobación del Gate 1.

Entre sus resultados se encuentran la red probada en ambos talleres, los responsables y reglas de datos definidos, el catálogo depurado, la política de respaldo aprobada y una consulta móvil de stock validada. El piloto será temporal y servirá para comprobar la captura centralizada antes de migrar a Odoo.

### Rama 1.4: Integrar

La cuarta rama se denomina **Integrar** y concentra la implementación de Odoo.

Contiene cinco paquetes: la preparación del servidor y del entorno de prueba; la configuración de roles y permisos; la conciliación del catálogo y la migración de datos; la configuración del flujo de venta, stock y despacho; y las pruebas de aceptación del sistema.

El principal resultado será un Odoo probado con información conciliada, permisos verificados y un flujo operativo validado por Ventas, Producción y Gerencia. Esta rama finaliza con el Gate 2 y con la condición de no mantener defectos críticos abiertos.

### Rama 1.5: Optimizar y cerrar

La quinta rama es **Optimizar y cerrar**. Incluye cuatro paquetes: reportes y controles de calidad; manuales y capacitación; salida a producción; y conformidad y cierre.

En esta etapa se configurarán los indicadores y reportes gerenciales, se capacitará a cada usuario según su rol y se realizará la migración final. Después de la salida en vivo, Odoo se convertirá en la fuente oficial y se bloqueará la captura en el piloto para evitar dos versiones diferentes de la información.

Finalmente, se monitoreará la operación real, se auditará la calidad de los datos y se transferirán los procedimientos y responsabilidades al Comité de Datos. Con la conformidad de Gerencia se aprobará el Gate 3 y se cerrará el proyecto.

---

## 5. Relación entre alcance, EDT y cronograma

Es importante no confundir estos tres elementos.

El **alcance** indica qué se entregará y cuáles son los límites del proyecto. La **EDT** organiza esos entregables en paquetes de trabajo controlables. Finalmente, el **cronograma** detalla las actividades, fechas y dependencias necesarias para producir cada paquete.

Por ejemplo, el paquete de la EDT llamado *Piloto centralizado controlado* es un entregable. Para producirlo, el cronograma contiene actividades como diseñar el modelo de datos, desplegar la base, configurar la consulta móvil y ejecutar la prueba de captura. De esta manera, cada actividad tiene una razón de existir y puede trazarse hasta un entregable del alcance.

Esta relación también permite aplicar la **regla del cien por ciento**: todo el trabajo requerido está representado en la EDT y no se incorporan trabajos que estén fuera del alcance aprobado.

---

## 6. Cierre

Para concluir, el alcance del proyecto busca que Roma Bag's pase de una gestión fragmentada a una gestión integrada, trazable y confiable de sus datos operativos y comerciales.

La EDT convierte ese objetivo en cinco ramas y diecisiete paquetes de trabajo verificables: **dirigir, diagnosticar, cimentar, integrar, y finalmente optimizar y cerrar**.

Gracias a esta estructura, podemos saber con claridad qué se va a entregar, quién será responsable, cómo se comprobará cada resultado y en qué momento será aceptado. Así se reduce la ambigüedad, se controla el crecimiento no autorizado del alcance y se facilita el seguimiento del proyecto.

Con esto finalizo la explicación del alcance y la EDT. Muchas gracias.

---

## Recordatorio rápido para la exposición

- **Problema:** información operativa y comercial fragmentada.
- **Dato clave:** 70,8 % de los registros de despacho revisados está incompleto.
- **Objetivo:** integrar y estandarizar la información con reglas de datos, piloto y Odoo Community.
- **Duración:** 21/09/2026 al 26/04/2027; 149 días hábiles.
- **EDT:** 5 ramas, 17 paquetes de trabajo y cobertura de 92 actividades e hitos.
- **Ramas:** Dirección, Diagnóstico, Cimentar, Integrar, Optimizar y cerrar.
- **Gates:** 17/11/2026, 08/03/2027 y 21/04/2027.
- **Idea de cierre:** instalar Odoo no es suficiente; los entregables deben estar probados, aceptados y transferidos.

## Posibles preguntas y respuestas

### ¿Por qué el piloto no se mantiene después de implementar Odoo?

Porque su función es temporal: permite validar la captura centralizada y preparar los datos. Después de la salida en vivo se bloquea para evitar que existan dos fuentes oficiales con información diferente.

### ¿Por qué la recuperación de los datos de 2024 está fuera del alcance?

Porque los registros perdidos no pueden reconstruirse con confiabilidad. El proyecto sí preserva y depura la información disponible, pero no promete recuperar datos que ya no existen.

### ¿Cuál es la diferencia entre un paquete de trabajo y una actividad?

El paquete de trabajo representa un entregable verificable de la EDT. Las actividades son las acciones del cronograma necesarias para producir ese entregable.

### ¿Cómo se evita que el alcance crezca sin control?

Mediante la línea base del alcance, las exclusiones expresas, la trazabilidad de requisitos y el registro formal de cambios. Cualquier variación que afecte el alcance debe ser evaluada y autorizada por la Gerencia.

### ¿Cuándo se considera terminado el proyecto?

Cuando los entregables han sido validados, Odoo funciona como fuente oficial, se completan la capacitación y la transferencia, Gerencia firma la conformidad y se realiza el cierre administrativo.
