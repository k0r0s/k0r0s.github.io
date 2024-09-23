---
layout: post
title: "On emancipating AI and the looming Orwellian wave"
category: blog
author: Ortega y Gasset
---
_The algorithmic Ministry of Truth and the subtle spread of Newspeak_

### The Last Milestone on AI

Recientemente, el 13 de Septiembre se publicó el modelo _OpenAI o1-preview_[^1] (el anticipado _Project Strawberry_/_Q*_) como el principio de una nueva serie de modelos capaces de "_razonar_" y resolver problemas difíciles:

> We've developed a new series of AI models designed to spend more time thinking before they respond. They can reason through complex tasks and solve harder problems than previous models in science, coding, and math.

Afirman que rinde similar a doctorandos en tareas complejas en ámbitos de física, química y biología; y ha aumentado significativamente en lo que ha sido el mayor defecto de estos modelos, el razonamiento lógico/matemático avanzado: 

> In a qualifying exam for the International Mathematics Olympiad (IMO), GPT-4o correctly solved only 13% of problems, while the reasoning model scored 83%. Their coding abilities were evaluated in contests and reached the 89th percentile in Codeforces competitions.

Asimismo en el campeonato de programación competitiva de _Codeforces_ el modelo _o1-ioi_ basado en o1 superó con creces tanto a GPT-4o como al modelo base, superando el 93% de los participantes. 

Y aunque el controvertido "buen resultado" de _Strawberry/o1_ en el benchmark de _AgentClinic-MedQA_[^2][^3] para diagnóstico médico no signifique la disposición de su utilidad para casos reales en una clínica, muestra el salto cualitativo respecto a los modelos anteriores en la habilidad para contemplar problemas complejos con varios matices.

_Muchos (como siempre) ya se han precipitado en expresar las ramificaciones y consecuencias de lo que supondrá el modelo para los empleos en diagnóstico médico y consejería legal[^4]; y no solo eso sino que para todo el ámbito de la ciencia e ingeniería._

### On the nature of AI models.

Esta reflexión personal sobre la naturaleza de los modelos de inteligencia artificial procede principalmente de la idea sobre la _centralidad de la información_ de Paul Mason y precursoramente _la centralidad del conocimiento_ de Peter Drucker, que expone la principalidad del conocimiento como recurso en la sociedad contemporánea. Mason en sus libros _"Why It’s Kicking of Everywhere"_ y _"Postcapitalism: A Guide to Our Future"_ manifiesta la absurdidad de la propiedad privada intelectual y cómo la audacia de esta creencia colectiva en la propiedad eterna evocan la ruptura de la pared entre especulación y realidad que provocó la crisis financiera mundial.

Mason delinea el concepto de "info-bienes" (_information goods_), -bienes basados en el conocimiento- y cómo estos operan sobre el principio de no-rivalidad; "Si yo tengo este lápiz, ustedees no lo tienen, es una cuestión física. Si yo tengo un PDF del libro de Mason, eso no impide que ustetes lo tengan." [Mark Fisher en su clase de Deseo Postcapitalista]. Así se extiende al software en palabras de Paul M. Romer: 

> The third and most fundamental premise is that instructions for working with raw materials are inherently different from otheir economic goods. Once the cost of creating a new set of instructions has been incurred, the instructions can be used over and over again at no additional cost. Developing new and better instructions is equivalent to incurring a
fixed cost. This property is taken to be the defining characteristic of technology.[^5]

A esto, el info-capitalismo responde delcarando ilegal copiar ciertos tipos de datos; "con el info-capitalismo, la única forma en que una industria puede funcionar es el monopolio". Se diseñan artefactos/procedimientos legales respaldados por la justicia estatal como formulas de patente, derechos de autor y marcas registradas para contrarrestar la naturaleza intrinseca de no-rivalidad de los info-bienes. Adicionalmente, se debe entender con lo anterior que el coste de diseñar y programar nuevo software es un coste **fijo**, que a diferencia de una fábrica que produce coches, a parte del coste de diseño original, cada nueva unidad incluye el coste de la fabricación y materias primas. Según Mason, esto introduce entonces este nuevo principio que es contradictorio con el capitalismo. Una ley básica de la economía -capitalista- es que todo es escaso, pero se evidencia que no es necesariamente así.

Pero parece que la última ola mesiánica, _el advenimiento de la inteligencia artificial_, ha encontrado una nueva **forma de vincularse con la escasez**. Al hilo con la definición de antes, el desarrollo de modelos de IA se puede entender como "conjuntos de instrucciones que son capaces de generar sus propias instrucciones" y con esa lógica serían reproducibles para todos _ad infinitum_. Sin embargo, lo que sucede con los Large Language Models como GPT, Claude, Llama... o las IAs generativas como Midjourney, Dall-E, Sora... no es para nada como un PDF o una App; aunque un individuo tenga la arquitectura a entrenar no tiene los medios (``Datos y potencia de cálculo`` -**Data and Compute**-)  para hacerlo. Y así se vincula está tecnología informática de nuevo a lo material donde se aplica el principio de escasez. 


Es cierto que para ejecutar el _Software_ se requiere _Hardware_ y que eso ya erige una primera pared en accesibilidad y un vínculo material. Pero ese efecto es exagerado por órdenes de magnitud para esta tecnología (Si no es el sumo ejemplo del mercado). No solo es que ahora sea imposible para un individuo entrenar localmente un modelo así, sino que también resulta virtualmente imposible para pequeños grupos de investigación (el proceso local de inferencia también requeriría de un equipo fuera de lo ordinario con mucha memoria RAM y CPU clock alto).

La inclusión de funciones de activación no lineales y el algoritmo de retropropagación (_Backpropagation_) a las redes neuronales supusieron un punto de inflexión en el desarrollo del ámbito de inteligencia artificial y dieron de nuevo un empujón a un campo de la ingeniería informática que prometía mucho pero que en ese momento estaba pasando un periodo yermo de avances. No obstante, lo que sorprendió a todo el mundo (los LLMs y las IAs generativas), fruto también de nuevas técnicas como transformers y redes convolucionales, no hubieran podido alcanzar tal embergadura y resultados si no fuera por los miles de datos recopilados de internet producto de la dádiva humana. 


- _Tanto la arquitectura como los datos, ambos fruto del ingenio humano._

A mis ojos, la tecnología ha tomado la dirección obvia de crecimineto natural haciendo uso de la disponibilidad inmediata de las gargantuescas cantidades de datos en internet (tanto corpus de texto como imágenes y vídeos). ``¿Pero no hubiera sido de mayor rendimiento económico, intentar aplicar esta tecnología primero a trabajos repetitivos y aburridos en favor a la automatización total en lugar de producir un desplazamiento de empleos en los sectores intelectuales y cognitivos (arte audiovisuales/literario/consejería legal/medicina/software...)?`` 

La convicción actual -infocéntrica- de que "donde la mayor riqueza se genera es en la producción de conocimiento" da respuesta a la pregunta. No obstante, aunque la rentabilidad decreciente que muestran los negocios basados en IA frente las masivas cantidades de inversión no suponen un obstáculo para la fe ciega de Sam Altman, es posible que nos estemos acercando a una burbuja.[^8],[^9]

Con toda innovación tecnológica siempre se da una agilización y optimización de los procesos o una modernización de la técnica, y hasta relativamente hace poco la ola de creación de nuevas industrias y empleos seguía de cerca el bajón inicial del excedente de población y desempleo, pero después de una recesión la tendencia de _una "recuperación sin creación de empleo"_ (_jobless recoveries_) está más presente que nunca.

> term “jobless recovery” describes an economic recovery where output recovers—and even expands—yet employment growth remains anemic. While the effects of these prolonged recoveries are significant—from increased crime to a lifetime reduction in wages—they are not well understood.[^7] 

El caso de que después de una crisis el PIB del país se recupera -y hasta aumenta- mientras que el desempleo se mantiene.


Es más, autores que han escrito sobre el concepto de "_La paradoja de la productividad_" (Robert Solow, Erik Brynjolfsson, Daron Acemoglu & Pascual Restrepo) argumentan que existe un desfase temporal hasta la cosecha de los beneficios de la automatización de procesos y que se estima que la automatización actual no se ha traducido en aumentos proporcionales de la productividad.

Títular, noticia de última hora: Hasta ahora la automatización y robotización de la industria ha estado atizando el empleo de los trabajadores "_blue collar_", pero ahora -se nos acabó lo bueno, se nos acabó el chollo-,  ahora, es el turno del trabajador "_white collar_". 

Volviendo a la pregunta de antes, se puede ``argumentar`` que la industria siempre ha tenido una actitud reaccionaria ante este tipo de cambios: 
1. Desplazamiento de empleos y dificultad para adaptarse y adquirir nuevas abilidades para secotres que se abren con las nuevas tecnologías. 
2. Seguridad y privacidad de la industria pesada. Miedo a la evolución de los modelos. -> siguiente sección.

### What kind of singularity should we expect?

Hay posiciones antipódicas sobre el riesgo que supone la inteligencia artificial. Por un lado argumentando que la posibilidad de la singularidad y de la subyugación de la humanidad por inteligencias artificiales generales es inminente están autores como Roman Yampolskiy, y por el otro lado entre los autores que argumentan que esa posibillidad de sentiencia (al menos con la arquitectura y enfoque actual) es pura fantasía se encuentra Matteo Pasquinelli.

Más bien la singularidad que vendrá antes el la ``crisis del lenguaje`` [Eric Sadin].

-
---
{: data-content="work in progress"}

> Paul Mason: No creo que las relaciones sociales del capitalismo puedan sobrevivir al despliegue completo de la automatización, la inteligencia artificial y el potencial de las redes digitales. Esta tecnología se rebela contra la propiedad privada. Karl Marx lo dijo en la década de 1850.




En la misma línea, no se puede omitir el efecto abrumador que ha supuesto y que supondrá la última ola mesiánica: la _inteligencia artifical_ o más específicamente los _Large Language Models_ como [GPT-4, Claude, Cursor, Llama, ...]. En este ámbito Sadin hace un llamamiento a considerar una ``crisis de lenguaje`` de igual manera que se hace con la crisis ecológica.

¿Y con qué propósito? ¿El beneficio de la burguesía? ¿Otro giro de rueda y la perpetuación del sistema capitalista? No es que la burguesía este exenta de lo mencionado. 


### Eric Sadin buscar cita

Ya a ojos de Fisher se estaba dando una cancelación del futuro (en 2014 Ghosts of My Life), y la ola de IA no hace más que confirmarlo, con una generación de textos e imágenes generalista y reduccionista. (¿Porque generalista? Con la arquitectura actual de LLMs por lo menos la secuencia de palabras se dan por la que tiene más probabilidad de seguir la anterior. Diferencia con el funcionamiento de la mente humana que menciona Sadin citando a otro filosofo -buscar esto-) 

---
{: data-content="Referencias"}

[^1]: https://openai.com/index/introducing-openai-o1-preview/
[^2]: https://machine-learning-made-simple.medium.com/openai-is-lying-about-o-1s-medical-diagnostic-capabilities-e5f4b4036eb8
[^3]: El benchmark MedQA es un marco de evaluación diseñado para medir el rendimiento de modelos de IA, en particular LLMs en respuesta a preguntas médicas. Normalmente con preguntas tipo test provenientes de exámenes de certificación médica como el United States Medical Licensing Examination (USMLE), donde se requiere un conocimiento profundo del dominio para responder correctamente.
[^4]: https://x.com/DeryaTR_/status/1834630356286558336
[^5]: https://www.nber.org/system/files/working_papers/w3210/w3210.pdf
[^6]: https://www.sciencedirect.com/science/article/abs/pii/S0164070423000058
[^7]: https://mises.org/mises-wire/jobless-recovery-coming-europe
[^8]: https://www.theatlantic.com/technology/archive/2024/07/ai-companies-unprofitable/679278/
[^9]: https://www.theatlantic.com/technology/archive/2024/07/thrive-ai-health-huffington-altman-faith/678984/
