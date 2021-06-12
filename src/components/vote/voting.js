
export const Voting = [
    {
        id : 16,
        hip: 'HIP-16',
        name : 'Hacer elegibles los roles de administrador de las plataformas de comunicación',
        desc: 'Este HIP instituye un mecanismo para determinar la posición del administrador en las herramientas de comunicación social que son reconocidas como oficiales por el DAO, ya sean medios sociales (twitter, reddit) o canales de comunicación (grupos de telegram).',
        motivation: 'Siguiendo el espíritu de HIP-5, que crea un marco para la gestión de la DAO sin alterar el contrato inteligente, propongo un mejor mecanismo para establecer los roles de administrador dentro de todos los canales de comunicación reconocidos.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmWbuQdq5qKFLG2H7gKbuB7T4uSAoBvUibhYVqKhrg2JAC',
        active: true,
        result_yes: 0,
        result_no: 0
    },
    {
        id : 14,
        hip: 'HIP-14',
        name : 'Bloquear la tasa de emisión de 1 $ UBI / hora / persona',
        desc: 'La propuesta es elevar la tasa de emisión de 1 $ UBI / hora / persona a una decisión formal y no permitir ninguna otra forma de emisión de $ UBI. Además para bloquear la decisión utilizando el mecanismo de bloqueo propuesto en HIP-10.',
        motivation: 'Una buena moneda necesita confiabilidad: si opera bajo reglas que es poco probable que cambien, es más probable que la gente confíe en ella. La cuestión de la tasa de quema quedará abierta, pero simplemente fijar la tasa de emisión ya hará que el suministro futuro sea mucho más fácil de predecir. Y los problemas futuros se pueden abordar cambiando la emisión: Si necesitamos aumentar los ingresos, entonces solo aumentamos el valor del token. Si necesitamos dinero, obtenemos financiación externa o aumentamos los ingresos.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmcQPfoY3cz2ACpWjZnVVkCRZS1pWf9sqWKu7RBT9yM2BX',
        active: false,
        result_yes: 50,
        result_no: 50
    },
    {
        id : 13,
        hip: 'HIP-13',
        name : 'Adoptar un procedimiento de incorporación de la gestión',
        desc: 'Esta propuesta establece reglas sobre cómo contratar la gerencia del DAO, exceptuando este como un caso especial de los procedimientos generales de contratación.',
        motivation: 'Esta propuesta está inspirada en las solicitudes que recibió el DAO para el puesto de gerente de producto. Dos de los solicitantes, @paulaberman y @ HBesso31, solicitaron el puesto con uno (@ paulaberman- Sofia Cossar) o varios (@ HBesso31 - Ryan Cwynar / Cami Arias / Anna Kaic) miembros del equipo requeridos.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmPrMGBonuh6aQA1kWfmp9CRJbgbtG8EGNR3WJWzFPCw2c',
        active: false,
        result_yes: 85,
        result_no: 15
    },
    {
        id : 7,
        hip: 'HIP-7',
        name : 'Instituir una "Junta de Misión"',
        desc: 'Esta propuesta es crear una junta de miembros con la responsabilidad de administrar los recursos de la DAO (empleados, sitios web, dinero) de acuerdo con las decisiones democráticas. Además, el grupo actual de personas que administran el sitio web, la instantánea y el foro se designan como una junta interina durante un año después de la aprobación.',
        motivation: 'Por el momento, los creadores del DAO tienen el control de todos los recursos como un grupo de confianza. Sin embargo, para tener una institución democrática, este poder debe estar bajo control democrático. Además, los empleados de la DAO deben ser tratados de manera constante por el mismo grupo de personas para garantizar buenas condiciones de trabajo.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmRho72kAs9rQYYyhN6ipkKAQnLQeHkoEfVbesFqsNXBUu',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 10,
        hip: 'HIP-10',
        name : 'Crear un mecanismo de bloqueo de decisiones',
        desc: 'Esta propuesta sugiere crear un mecanismo de bloqueo de decisiones que hará que las decisiones sean más difíciles de revertir en una fecha posterior. Este mecanismo de bloqueo se puede aplicar a decisiones nuevas o existentes.',
        motivation: 'En el caso de algunas decisiones, debemos señalar al mundo y a nosotros mismos que es muy poco probable que se vuelvan a anular en el futuro y que sería necesario un gran esfuerzo para hacerlo. Una de esas decisiones sería, por ejemplo, bloquear la tasa de emisión de $ UBI para garantizar que la gente pueda pronosticar el valor de la moneda, mejorando la estabilidad.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmaVbLED46CxK2KEZq5WRbWoM3sPFiGzkqbsfxzYtje5ns',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 8,
        hip: 'HIP-8',
        name : 'Aceptar 352 píxeles como dimensión mínima en los envíos de video',
        desc: 'Aclare que la definición de 360p no significa literalmente 360 ​​píxeles, y que ciertos códecs recortan columnas de 4 píxeles de cada lado de la imagen. Las presentaciones con 352 píxeles de ancho no deben considerarse en violación de las reglas de presentación.',
        motivation: 'La forma más común y fácil para que un usuario laico envíe y transfiera un video sin instalaciones o conocimientos adicionales es enviándolo a través de WhatsApp y descargándolo a través de la web de WhatsApp. Con el fin de evitar desafíos oportunistas que preceden en estas presentaciones, que de otro modo serían una presentación de buena fe, se debe implementar una enmienda urgente a esta política. También eliminaría algunos métodos artificiales y torpes que están utilizando los nuevos usuarios actuales que degradan la plataforma para cumplir con los requisitos (recodificación de video, relleno a los lados, etc.).',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmTZw1SnrQ7PTvvP6nf6tnNPFdKTKBJSnhEHZBzMBGqeeD',
        active: false,
        result_yes: 97.35,
        result_no: 2.65 
    },
    {
        id : 5,
        hip: 'HIP-5',
        name : 'Adoptar un proceso de gobernanza de PoH DAO adecuado para garantizar la calidad de HIP',
        desc: 'Esta propuesta detalla un proceso para crear propuestas de gobernanza de PoH DAO y someterlas a votación.',
        motivation: 'Las propuestas recientes en la página Instantánea de PoH confundieron a mucha gente en la comunidad de PoH. Carecen de una descripción detallada, enlace a un debate sobre el foro de PoH, una estructuración adecuada de la propuesta y no está claro si son solo para recopilar información de señalización o si serán vinculantes. Además, algunos de ellos invitan a la gente a votar sobre propuestas que pueden no ser técnicamente viables. Esta propuesta garantizará que solo las propuestas y encuestas con la mínima calidad lleguen a la página de instantáneas y evitarán la fatiga de los votantes en el proceso.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmUfLcQ97KoiVk6v1Vx6tTrA6KqgMkRYiEEcEX9emV7oRn',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 4,
        hip: 'HIP-4',
        name : 'Vender UBI para financiar el DAO',
        desc: 'La Cooperativa Kleros ha expresado su interés en comprar U$S 150 000 en UBI a la DAO.',
        motivation: 'La subasta está dirigida principalmente a vender UBI a la cooperativa Kleros, pero permitirá que cualquiera participe para mantener el proceso justo.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmRj4NWuKLHaw6QAR5iTJ2mEWjGsdRjvB7CCdr9CqLzf9W',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 3,
        hip: 'HIP-3',
        name : 'Contratación de trabajadores para la DAO',
        desc: 'Para su desarrollo, el DAO necesita personas que trabajen en él. Las dos prioridades principales serían un director de proyecto y un desarrollador.',
        motivation: 'Para expandirse, la DAO necesita trabajadores.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmY1uffeAjWv26GwrfGBpwNci7gA3X9zcPYjm8LLr5FiXT',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 2,
        hip: 'HIP-2',
        name : 'Procedimientos de contratación y relaciones laborales',
        desc: 'Encontrar y evaluar el talento no es fácil para una organización descentralizada. Esta propuesta da algún procedimiento para las contrataciones realizadas por la DAO.',
        motivation: '',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmVMNwWDD2egaJQXzjU9BerxKxzyourjAS9DukXy1n44xY',
        active: false,
        result_yes: 100,
        result_no: 0
    },
    {
        id : 1,
        hip: 'HIP-1',
        name : 'Tasa de acumulación de UBI basada en la actividad de vouching',
        desc: 'La tasa de acumulación de UBI se puede conectar a la actividad destinada a hacer crecer la red. Los usuarios que gastan gas para responder por otros humanos, serán recompensados ​​con más UBI que aquellos que no están contribuyendo al crecimiento de Proof of Humanity.',
        motivation: 'Esto mitigará la inflación del token UBI durante su fase inicial y recompensará a los participantes de la red que contribuyan efectivamente a su crecimiento.',
        link: 'https://snapshot.org/#/poh.eth/proposal/QmaMbFDq2UsAucS27mZkYYvbU2dHsshRLRrmcoxSD4Stqw',
        active: false,
        result_yes: 40.74,
        result_no: 59.26
    }
]
