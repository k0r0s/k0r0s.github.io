---
layout: post
title: "On Redeeming AI Reactionism"
category: blog
author: k0r0s
---
### The Last Milestone on AI

Recientemente, el 13 de Septiembre se publicó el modelo _OpenAI o1-preview_[^1] (el anticipado _Project Strawberry_/_Q*_) como el principio de una nueva serie de modelos capaces de "_razonar_" y resolver problemas difíciles:

> We've developed a new series of AI models designed to spend more time thinking before they respond. They can reason through complex tasks and solve harder problems than previous models in science, coding, and math.

Afirman que rinde similar a doctorandos en tareas complejas en ámbitos de física, química y biología; y ha aumentado significativamente en lo que ha sido el mayor defecto de estos modelos, el razonamiento lógico/matemático avanzado: 

> In a qualifying exam for the International Mathematics Olympiad (IMO), GPT-4o correctly solved only 13% of problems, while the reasoning model (o1) scored 83%. Their coding abilities were evaluated in contests and reached the 89th percentile in Codeforces competitions.

Asimismo en el campeonato de programación competitiva de _Codeforces_ el modelo _o1-ioi_ basado en o1 superó con creces tanto a GPT-4o como al modelo base, superando el 93% de los participantes. 

Y aunque el controvertido "buen resultado" de _Strawberry/o1_ en el benchmark de _AgentClinic-MedQA_[^2][^3] para diagnóstico médico no signifique la disposición de su utilidad para casos reales en una clínica, muestra el salto cualitativo respecto a los modelos anteriores en la habilidad para contemplar problemas complejos con varios matices.

_Muchos (como siempre) ya se han precipitado en expresar las ramificaciones y consecuencias de lo que supondrá el modelo para los empleos en diagnóstico médico y consejería legal[^4]; y no solo eso sino que para todo el ámbito de la ciencia e ingeniería._

Ante este nuevo modelo, vuelve a estar más que vigente el artículo [Artisanal Intelligence: What’s the Deal with “AI” Art? (2023)](https://redsails.org/artisanal-intelligence/) de Pol Clarisson. No presentaré nada nuevo sobre lo que ya se habla en el artículo, pero quiero añadir alguna profundización y un par de puntos tangenciales que ayudan a completar el análisis. Recomiendo encarecidamente su lectura.

### Infocentrism 

La inclusión de funciones de activación no lineales y el algoritmo de retropropagación (_Backpropagation_) a las redes neuronales supusieron un punto de inflexión en el desarrollo del ámbito de inteligencia artificial y dieron de nuevo un empujón a un campo de la ingeniería informática que prometía mucho pero que en ese momento estaba pasando un periodo yermo de avances. No obstante, lo que sorprendió a todo el mundo (los LLMs y las IAs generativas), fruto también de nuevas técnicas como transformers, redes convolucionales y el mecanismo de atención[^21], no hubieran podido alcanzar tal embergadura y resultados si no fuera por los miles de datos recopilados de internet producto de la dádiva humana. 

- _Tanto la arquitectura como los datos, ambos fruto del ingenio humano._

A mis ojos, la tecnología ha tomado el camino de menor resistencia al crecimiento, aprovechando la disponibilidad inmediata de las gargantuescas cantidades de datos en internet (tanto corpus de texto como imágenes y vídeos), en oposición a posibles soluciones ad-hoc que requieran arquitecturas especializadas en la industria y servicios.

Y es por eso que los LLMs y las IAs generativas han tomado el control en el discurso. En contraste, no se percibe un impacto mediático tan grande en la industria manufacturera; aunque es cierto que el _machine learning_ y otras técnicas de inteligencia artificial se han aplicado a los procesos de producción para optimizar técnicas de fabricación o extracción, esto no se presenta como un salto tan radical. 


<div id="style-sheet-modern">
<div class="expl-class">
No obstante, aunque menos visible, el impacto en la manufactura es profundo. A través de estas tecnologías, se da una <font color = "#1ce7ad">subsunción real del trabajo</font>, que implica una reestructuración completa del proceso productivo. El machine learning no solo mejora la eficiencia, sino que redefine el papel de los trabajadores, subordinándolos a sistemas que operan con un grado de autonomía cada vez mayor. Así, el capital logra un control más riguroso sobre la producción, y el trabajo humano es relegado a funciones de supervisión o mantenimiento, acelerando el desplazamiento del trabajo manual.
</div>
</div>

Este fenómeno está profundamente vinculado con el surgimiento de la economía del conocimiento, en la cual el valor ya no se genera principalmente a través del trabajo físico o manual, sino a partir de la producción y manejo de conocimiento e información. La convicción actual -infocéntrica- de que "donde la mayor riqueza se genera es en la producción de conocimiento" explica que el empleo formal y estable (principalmente en la industria) esté perdiendo su lugar preeminente en la organización social y económica, limitando la forma en que las personas se pueden relacionar con el sistema productivo. En esta nueva economía, las formas de producción intensivas en mano de obra han sido desplazadas por tecnologías que demandan menos trabajadores, pero más calificados. Como resultado, la creación de valor se centra en el capital intelectual y tecnológico, mientras el trabajo tradicional pierde relevancia sin encaminar su liberación.

### On the nature of AI models.

Esta reflexión personal sobre la naturaleza de los modelos de inteligencia artificial procede principalmente de la idea sobre la _centralidad de la información_ de Paul Mason y precursoramente _la centralidad del conocimiento_ de Peter Drucker, que expone la principalidad del conocimiento como recurso en la sociedad contemporánea. Mason en sus libros _"Why It’s Kicking of Everywhere"_ y _"Postcapitalism: A Guide to Our Future"_ manifiesta la absurdidad de la propiedad privada intelectual y cómo la audacia de esta creencia colectiva en la propiedad eterna desembocan en la ruptura de la pared entre especulación y realidad que provocó la crisis financiera mundial.

Mason delinea el concepto de "info-bienes" (_information goods_), -bienes basados en el conocimiento- y cómo estos operan sobre el principio de no-rivalidad. Este principio (_Nonrivalry_) fue expuesto amplia y claramente por primera vez por Romer[^11]:

> Here is the key insight: ideas – designs or blueprints for doing
something or making something – are different from nearly every other
good in that they are nonrival. Standard goods in classical economics
are rival: as more people drive on a highway - <font color="#1ce7ad"> there is less of a highway </font>- or require the skills of a
particular surgeon - <font color="#1ce7ad"> there are less surgeons available </font> - or use water for irrigation - <font color="#1ce7ad"> less water available </font> -, there are fewer of these goods to go around. This rivalry underlies the scarcity that is at the heart of
most of economics and gives rise to the fundamental theorems of welfare
economics. 

> Ideas, in contrast, are nonrival: as more and more people use the Pythagorean theorem or the Java programming language or even the design of the latest iPhone, there is not less and less of the idea to go around.
Ideas are not depleted by use, and it is technologically feasible for any
number of people to use an idea simultaneously once it has been invented

Esta naturaleza se refleja en la frase de Mark Fisher: "Si yo tengo este lápiz, ustedes no lo tienen, es una cuestión física. Si yo tengo un PDF del libro de Mason, eso no impide que ustedes lo tengan."[^10]. El _software_ opera sobre ese principio y tiene un rasgo distintivo respecto a los bienes materiales: 

> The third and most fundamental premise is that instructions for working with raw materials are inherently different from otheir economic goods. Once the cost of creating a new set of instructions has been incurred, the instructions can be used over and over again at no additional cost. Developing new and better instructions is equivalent to incurring a
fixed cost. This property is taken to be the defining characteristic of technology. - Paul M. Romer -[^5]

Se debe entender con lo anterior que el coste de diseñar y programar nuevo software es un coste **fijo**, que a diferencia de una fábrica que produce coches, a parte del coste de diseño original, cada nueva unidad incluye el coste de la fabricación y materias primas. Según Mason, esto introduce entonces este nuevo principio que es contradictorio con el capitalismo. Una ley fundamental de la economía -o de la economía capitalista- es que todo es <font color="#1ce7ad">escaso</font>, pero esto evidencia que no necesariamente debe ser así.

Romer concluyó que las industrias impulsadas por la propiedad intelectual y la información como el software y la tecnología, suelen requerir fuertes incentivos para estimular una inversión significativa en innovación; ya que la introducción de nuevas ideas/diseños pronto se extiende al resto y no permiten tener una ventaja competitiva a largo plazo, llevando a formas de control monopolístico:

> "The only practical way to get large-scale investment in new technologies — in things that are capital-intensive but information-rich — is to give some kind of monopoly power to the people who bring them to market."

A esto, el info-capitalismo responde declarando ilegal copiar ciertos tipos de datos. Y como ha sido habitual en gobiernos neoliberales, para mantener a flote estos mercados se diseñan -o se modifican- artefactos/procedimientos legales respaldados por la justicia estatal como formulas de patente, derechos de autor y marcas registradas para contrarrestar la naturaleza intrinseca de no-rivalidad de los info-bienes. El software, como bien inmaterial, jurídicamente se ha asimilado a una obra literaria y en consecuencia es protegida por derechos de autor y patente industriales. 

Pero parece que la última ola mesiánica, _el advenimiento de la inteligencia artificial_, ha encontrado una nueva **forma de vincularse con la escasez**. Al hilo con la definición de antes, el desarrollo de modelos de IA se puede entender vagamente como "conjuntos de instrucciones que son capaces de generar sus propias instrucciones" y con esa lógica serían reproducibles para todos _ad infinitum_. Sin embargo, lo que sucede con los Large Language Models como GPT, Claude, Llama... o las IAs generativas como Midjourney, Dall-E, Sora... no es para nada como un PDF o una App; aunque un individuo tenga la arquitectura a entrenar no tiene los medios (<font color = "#1ce7ad">Datos y potencia de cálculo</font> -**Data and Compute**-)  para hacerlo. Y así se vincula está tecnología informática de nuevo a lo material donde se aplica el principio de escasez. - es cierto que para ejecutar el _Software_ se requiere _Hardware_ y que eso ya erige una primera pared en accesibilidad y un vínculo material. Pero ese efecto es exagerado por órdenes de magnitud para esta tecnología (Si no es el sumo ejemplo del mercado software).- No solo es que ahora sea imposible para un individuo entrenar localmente un modelo así, sino que también resulta virtualmente imposible para pequeños grupos de investigación. (El proceso de inferencia también requeriría de un equipo con hardware dedicado de altas prestaciones.)

Se puede intuir la dirección que puede tomar integración de IA en vías de obtener mayor control sobre el mercado "_white collar_" y "_petite bourgeoisie_" (mediante la acumulación primitiva) - que no han temido a una fuerza como la automatización, tal y como lo fue para los empleos "_blue collar_"- desde el materialismo histórico y los <font color = "#1ce7ad">ciclos de lucha</font> de Mario Tronti en la línea del autonomismo italiano. 

<div id="style-sheet-modern">
<div class="expl-class">
Según este marco, la lucha de clases es el motor central del cambio social y la forma del capital responde adaptándose para mantener su dominación; las transformaciones sobre la forma del capitalismo son respuestas a los avances de la clase trabajadora. El capital no se limita a reprimir estas luchas, también aprende de ellas y se reconfigura para mantener su hegemonía.</div>
</div>
Algunos ejemplos de esto son:

Las huelgas obreras masivas de los años 70 que pusieron en jaque el sistema de fordista presenciaron el tránsito de la industria hacia el <font color="#1ce7ad">postfordismo</font>. Alejándose de la producción en masa rígida asociada al fordismo y adoptando una mayor flexibilidad. Las fábricas se trasladaron, aumentaron los trabajos precarios, la subcontratación se volvió común y surgieron nuevas tecnologías que permitieron el trabajo a distancia y la producción fragmentada. Este cambio representó no solo una reorganización de los métodos de producción, sino también una estrategia del capital para revitalizar sus operaciones socavando el poder colectivo de los trabajadores de las fábricas y mitigando su resistencia.

Los movimientos contracultura, que surgieron como rechazo radical al consumismo, al autoritarismo y al capitalismo, fueron cooptadas y su simbología y valores mercantilizadas. Un claro ejemplo son la moda bohemia y la música punk-rock, que funcionaban como vectores de expresión y exploración de futuros posibles, ambas fueron absorbidas y remodeladas por la industria musical y convertidas en mainstream.

### Will The Well Dry Up?

Se evidencia que la rentabilidad decreciente que muestran los negocios basados en IA frente las masivas cantidades de inversión no suponen un obstáculo para la fe ciega de algunos inversores y CEOs[^8],[^9]. Para otros sin embargo, el pozo de petróleo ha sido más somero de lo esperado y creen que el cambio radical prometido y el aumento de PIB hayan sido exageradas como es el caso de Daron Acemoglu, profesor del MIT. [Gen AI: Too Much Spend, Too Little Benefit](https://www.goldmansachs.com/images/migrated/insights/pages/gs-research/gen-ai--too-much-spend,-too-little-benefit-/TOM_AI%202.0_ForRedaction.pdf)[^12]:
> <font color = "#1ce7ad"> Why are you less optimistic on AI’s potential economic impacts? </font>
> (Based on the study of Eloundou et al and Thompson et al)  If only 23% of exposed tasks are cost effective to automate within the next ten years, this suggests that only 4.6% of all tasks will be impacted by AI. Combining this figure
with the 27% average labor cost savings estimates from Noyand Zhang’s and Brynjolfsson et al.’s studies implies that total
factor productivity effects within the next decade should be no more than 0.66%—and an even lower 0.53% when adjusting
for the complexity of hard-to-learn tasks. And that figure roughly translates into a 0.9% GDP impact over the decade.

No hay discusión en que muchos de los grandes avances tecnológicos han sido liderados por agencias de- o organizaciones respaldadas por el estado (Internet, nanotecnología, energía nuclear (Euratom, ITER), desarrollo de semiconductores y microchips...)-el algoritmo de búsqueda en el corazón de Google y el diseño de componentes que dieron lugar al iPhone también-[^13]. Como bien desarrolló Mariana Mazzucato, "el sector público asume los riesgos de la innovación y el sector privado disfruta de una parte desproporcionada de los beneficios". A pesar de ello, parece no ser el caso de los últimos desarrollos en inteligencia artificial, quizás por estar aún en la fase de "recoger la fruta madura al alcance de la mano". 

Con toda innovación tecnológica siempre se da una agilización y optimización de los procesos o una modernización de la técnica pero nunca se ha cumplido la promesa de la liberación del trabajo, y en el caso de la inteligencia artificial sigue reinando el discurso ingenuo de que "_Esta tecnología proporcionará poder ilimitado a todos_" (indiferentemente de tus ingresos/procedencia social) y la convicción de que facilitará el trabajo de columnistas, artistas, y otros trabajadores cualificados sin aumentar la tasa de explotación (lo que iría en contra de todo pronóstico).

Al igual que la incorporación de el resto de tecnologías en la producción, esto deviene en el <font color = "#1ce7ad">Problema de la transformación</font> de la economía marxista. 

<div id="style-sheet-modern">
<div class="expl-class">
Marx sostiene que el valor nuevo solo puede ser generado por el "capital variable", es decir, el trabajo humano vivo, ya que el valor de un producto se mide en función del <font color = "#1ce7ad">tiempo socialmente necesario </font> para producirlo. El "capital constante" (máquinas, infraestructura, materias primas), denominado también "trabajo muerto", únicamente transfiere parte de su valor a los productos finales, pero no crea valor nuevo.</div>
</div>

A medida que avanza la acumulación de capital, se produce una tendencia hacia la disminución de la tasa de ganancia. Esto sucede porque la tasa de ganancia se calcula sobre la totalidad del capital invertido (capital <font color = "#1ce7ad">constante</font> y <font color = "#1ce7ad">variable</font>), y no solo sobre el capital variable. Conforme aumenta la proporción del capital constante (máquinas, algoritmos, procesos mejorados...) en relación con el capital variable (trabajo), la tasa de ganancia disminuye, incluso si la explotación del trabajo se intensifica. Esta reducción refleja una característica intrínseca del modo de producción capitalista, donde el desarrollo de la productividad del trabajo lleva a una menor participación del capital variable en la creación de valor y, por tanto, a una caída de la tasa general de ganancia.

Aunque si en el mejor de los casos la arquitectura fundamental de LLM actual es capaz de seguir escalando con más datos y potencia de cálculo el suficiente tiempo antes de estancarse, de manera que permita encontrar alternativas y seguir a flote financieramente, de ninguna manera lo eximiría de sus inmensas demandas de energía[^22]; y para colmo perpetuando otro negocio, despojandonos del ingenio aplicado, vestigializando nuestro rol y sin encaminar la liberación.

### The Singularity?

Una de las discusiones más candentes sobre el crecimiento de los LLMs es el riesgo de la singularidad -Una inteligencia artificial General descontrolada- o más bien la posibilidad de que se de tal caso. -¿A quien no le resulta interesante o morboso los futuros distópicos que se presentan en películas como Ex-Machina, Her, Transcendence y otras novelas como __The Culture__[^14]? (este último, a lo mejor más optimista respecto a la posición del humano frente a estas IAs omniscientes llamandas __Minds__).

Es desde luego, de los tópicos con más representación mediática. Hay posiciones antipódicas sobre el riesgo que supone la inteligencia artificial; por un lado argumentando que la posibilidad de la singularidad y de la subyugación de la humanidad por inteligencias artificiales generales es inminente están autores como Roman Yampolskiy, y por el otro lado entre los autores que argumentan que esa posibilidad de sintiencia (al menos con la arquitectura y enfoque actual) es pura fantasía, se encuentra Matteo Pasquinelli.

No obstante, la singularidad de la que quiero hablar se encuentra en un punto y aparte de las relaciones laborales y más allá de los temas de seguridad. Es fundamental (_personalmente para mí_) reflexionar sobre la relación social y vital entre humanos con esta tecnología a cerca de la deriva en la producción de conocimiento.

La semilla para mi interpretación pesimista fue plantada por la figura del _Último Hombre_ de Nietzsche desvelada en un fragmento de _Realismo Capitalista_[^15] y la preocupación por nuestras capacidades expresivas prendida por Eric Sadin en _Inteligencia Artificial O El Desfio Del Siglo_[^18] y _La vida Espectral_[^17].

> “This malaise, the feeling that there is nothing new, is itself nothing new of course. We find ourselves at the notorious ‘end of history’ trumpeted by Francis Fukuyama after the fall of the Berlin Wall. Fukuyama’s thesis that history has climaxed with liberal capitalism may have been widely derided, but it is accepted, even assumed, at the level of the cultural unconscious. It should be remembered, though, that even when Fukuyama advanced it, the idea that history had reached a ‘terminal beach’ was not merely triumphalist. Fukuyama warned that his radiant city would be haunted, but he thought its specters would be Nietzschean rather than Marxian. Some of Nietzsche’s most prescient pages are those in which he describes the ‘oversaturation of an age with history’. <font color = "#1ce7ad">‘It leads an age into a dangerous mood of irony in regard to itself, he wrote in Untimely Meditations, ‘and subsequently into the even more dangerous mood of cynicism’, in which ‘cosmopolitan fingering’, a detached spectatorialism, replaces engagement and involvement.</font> This is the condition of Nietzsche’s Last Man, who has seen everything, but is decadently enfeebled precisely by this excess of (self) awareness. Fukuyama’s position is in some ways a mirror image of Fredric Jameson’s. Jameson famously claimed that postmodernism is the ‘cultural logic of late capitalism’.”[^15]

Francis Fukuyama, político neoconservador, en línea con la visión filosófica de Hegel, observa la historia como una progresión de ideas dominantes (_El fin de la historia y el último hombre_[^19]), lo que se contrapone a Marx, que invierte a Hegel (_del idealismo a materialismo_) argumentando que toda la historia es una historia de lucha de clases que ha culminado en el consumismo.

<div id="style-sheet-modern">
<div class="expl-class">
Hegel consideraba a los pobres y a la clase obrera incapaces de ser agentes del progreso social, mientras que Marx considera a los trabajadores como verdaderos agentes del cambio social. Hegel pretendía la reconciliación a través de la teoría de la dialéctica mientras que Marx pretendía generar el cambio. 
</div>
</div> 
[^20]
Fukuyama argumenta que tras el colapso de la Unión Soviética, la democracia capitalista liberal es el único sistema político viable y que la humanidad ha llegado "no sólo... al final de un periodo concreto de la historia de posguerra, sino al final de la historia como tal: Es decir, el punto final de la evolución ideológica de la humanidad y la universalización de la democracia liberal occidental como forma final de gobierno humano".

Fisher está en desacuerdo con la idea de que el capitalismo sea la última forma de organización social, pero concuerda con 
Fukuyama en el riesgo de la culminación del _Último Hombre_ y el diagnóstico de que la política se convertiría en una cosa espectatorial donde la gente se siente incapaz de influir en las decisiones. Aquí se vuelve a subrayar que Fukuyama atempera su triunfalismo diciendo que este "Fin de la Historia" encierra un peligro en el sentido de que al no quedar nada por lo que luchar, podría proliferar la figura del _Último Hombre_. 

El _Último Hombre_ es una figura cínica, distante e incapaz de acción heróica. Es aquí donde Eric Sadin ve la amenaza de los LLMs e IAs generativas como catalizadores, acelerando el progreso hacia esta figura -y dificultando el regreso-  y hace un llamamiento para concienciarnos sobre una posible crisis del lenguaje (a la altura de la crisis ecológica). 

> ... Un lenguaje industrializado y estandarizado, que sustituye al nuestro y nos guía continuamente, se convertirá en un _habitus_; en especial entre las generaciones más jóvenes, que pronto encontrarán estos usos muy cómodos y obvios. También está en marcha un proceso epigenético, que hace que nuestras mentes, diseñadas para ser plenamente activas, se dejen llevar por estos sistemas y se reduzca gradualmente el uso que hacemos de nuestras capacidades cognitivas. 
> ... <font color = "#1ce7ad">"¿Quién habla?"</font> se preguntaba Nietzsche. ... ¿Son estos programas cuyo lenguaje, privado de su dinámica vital, vehiculiza una visión del mundo basada en el <font color = "#1ce7ad">reduccionismo</font> y el <font color = "#1ce7ad">utilitarismo generalizados</font>? ¿O, por el contrario son nuestras voces las únicas capaces de establecer vínculos activos con los demás y con lo real?.[^17]

Sadin teme a una posible convergencia hacia una suerte de _Newspeak_ orwelliano sutil. En su novela, 1984, el _Newspeak_ está diseñado por "El Partido" del superestado totalitario de Oceania para limitar la habilidad de pensamiento crítico y la autoexpresión de las personas, la diferencia aquí es que el _Newspeak_ es un lenguaje controlado, modificado y simplificado por "El Partido", y en este caso, sin embargo, la deriva del lenguaje tendría un causante incorpóreo y disperso.


Asimismo, lo mencionado para la prosa, se aplica al cine y la música -y a todos los medios de expresión-; para Fisher en esta era saturada por la nostalgia y la repetición de estilos y motivos pasados, el arte se estanca en un ciclo de pastiche, donde las innovaciones pierden terreno frente a la recreación de fragmentos pasados[^16]. Y a esto le encaja como un guante los modelos de inteligencia artificial generativa que producen texto/audio/imágenes/vídeo partiendo de los datos de entrenamiento previamente alimentados. 

Aunque poseen el potencial para culminar creaciones rompedoras, en el fenómeno de la "cancelación del futuro" en el contexto del capitalismo tardío, donde se tiende a promover lo comercializable, familiar y rentable, en lugar de arriesgarse con ideas originales,  <font color = "#1ce7ad">el feedback loop del pastiche</font> acecha de forma inmediata y táctil.

---
{: data-content="Referencias"}

[^1]: https://openai.com/index/introducing-openai-o1-preview/
[^2]: https://machine-learning-made-simple.medium.com/openai-is-lying-about-o-1s-medical-diagnostic-capabilities-e5f4b4036eb8
[^3]: El benchmark MedQA es un marco de evaluación diseñado para medir el rendimiento de modelos de IA, en particular LLMs en respuesta a preguntas médicas. Normalmente con preguntas tipo test provenientes de exámenes de certificación médica como el United States Medical Licensing Examination (USMLE), donde se requiere un conocimiento profundo del dominio para responder correctamente.
[^4]: https://x.com/DeryaTR_/status/1834630356286558336
[^5]: https://www.nber.org/system/files/working\_papers/w3210/w3210.pdf
[^6]: https://www.sciencedirect.com/science/article/abs/pii/S0164070423000058
[^7]: https://mises.org/mises-wire/jobless-recovery-coming-europe
[^8]: https://www.theatlantic.com/technology/archive/2024/07/ai-companies-unprofitable/679278/
[^9]: https://www.theatlantic.com/technology/archive/2024/07/thrive-ai-health-huffington-altman-faith/678984/
[^10]: Mark Fisher en su clase de Deseo Postcapitalista.
[^11]: https://www-leland.stanford.edu/~chadj/RomerNobel.pdf
[^12]: https://www.goldmansachs.com/images/migrated/insights/pages/gs-research/gen-ai--too-much-spend,-too-little-benefit-/TOM\_AI%202.0\_ForRedaction.pdf
[^13]: Mariana Mazzucato, _The Entrepreneurial State: Debunking Public vs Private Sector Myths_ (London: Anthem, 2013); Michael Hanlon, "The Golden Quarter", _Aeon Magazine_, 3 December 2014. http://digamo.free.fr/mazzucato.pdf
[^14]: Banks, Iain M. (1987-2012) The Culture Novel Series.
[^15]: Fisher, Mark (2018). _Realismo capitalista. ¿No hay alternativa?._ Caja Negra.
[^16]: Fisher, Mark (2017). _Los Fantasmas de Mi Vida_ Caja Negra.
[^17]: Sadin, Éric (2024). _La vida espectral_. Caja Negra.
[^18]: Sadin, Éric (2012). _La Inteligencia Artificial o El Desafio del Siglo_. Caja Negra.
[^19]: Fukuyama, Francis (1992). _The End of History and the Last Man_
[^20]: https://www.iosrjournals.org/iosr-jhss/papers/Vol.%2024%20Issue10/Series-7/A2410070107.pdf
[^21]: https://arxiv.org/abs/1706.03762
[^22]: https://fortune.com/2024/09/27/openai-5gw-data-centers-altman-power-requirements-nuclear/
