export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      common: {
        company: '10 Bit Technology',
        phone: '(479) 345-4995',
        phone_href: 'tel:+14793454995',
        email: 'contact{\'@\'}10bit.tech',
        region: 'Northwest Arkansas',
        copyright: '© 2025 10 Bit Technology. All rights reserved.',
        language_en: 'English',
        language_es: 'Español',
        cta_audit: 'Get a $1,500 Automation Audit',
        cta_audit_short: 'Book the Audit',
        cta_contact: 'Talk to us',
        cta_solutions: 'See what we build',
        cta_call: 'Call (479) 345-4995',
        based_in: 'Based in Northwest Arkansas'
      },
      nav: {
        home: 'Home',
        solutions: 'Solutions',
        team: 'Team',
        contact: 'Contact'
      },
      home: {
        meta_title: '10 Bit Technology | Custom automation for NWA small business',
        hero: {
          eyebrow: 'Northwest Arkansas · Bilingual · Fixed-price',
          title_line_1: 'Bespoke automation',
          title_line_2: 'for NWA small business.',
          subhead: 'We build the custom software off-the-shelf can\'t. In English or Spanish. Fixed-price. Deployed in weeks, not quarters.'
        },
        proof: {
          bilingual_title: 'Bilingual end-to-end',
          bilingual_desc: 'Discovery, scoping, training, and support — all available in English or Spanish.',
          local_title: 'NWA-local',
          local_desc: 'Bentonville, Rogers, Fayetteville, Springdale. We can meet at your shop.',
          price_title: 'Fixed pricing',
          price_desc: 'Scope-locked quotes before we start. No surprise invoices.',
          speed_title: 'Built in weeks',
          speed_desc: 'Standard projects in 2–6 weeks. Emergency rebuilds in under one.'
        },
        services: {
          title: 'What we build',
          subhead: 'Three things, done well. Everything else lives in the conversation.',
          automation_title: 'Business Process Automation',
          automation_desc: 'Stop paying people to copy spreadsheets. We automate document handling, email routing, inventory updates, and the workflows your team runs every day.',
          data_title: 'Data & Integrations',
          data_desc: 'ETL pipelines, web scraping, dashboards, and system-to-system integrations. We move your data where it needs to be — including Retail Link and supplier feeds.',
          apps_title: 'Custom Apps & Emergency Builds',
          apps_desc: 'Software off-the-shelf can\'t deliver. Plus our under-one-week rebuilds for system failures, vendor dropouts, and compliance deadlines.'
        },
        process: {
          title: 'How we work',
          subhead: 'No mystery hours. No surprise invoices.',
          step1_title: '1. Discover',
          step1_desc: '30-minute call in your language. We listen to what hurts and ask the questions other shops skip.',
          step2_title: '2. Scope',
          step2_desc: 'Fixed-price quote with clear deliverables. You see the number before we touch a keyboard.',
          step3_title: '3. Build',
          step3_desc: 'One-week sprints with weekly demos. You watch progress, not invoices.',
          step4_title: '4. Hand off',
          step4_desc: 'Documentation, training, and 30 days of bug-fix support — in English or Spanish.'
        },
        starter: {
          badge: 'Starter offer',
          title: 'Automation Audit — $1,500 flat',
          description: 'A two-week diagnostic that pays for itself. We sit with your team, map your top three time-killing workflows, and deliver a written roadmap with priced options.',
          bullet_1: 'Two-week turnaround, fixed price',
          bullet_2: 'On-site visit anywhere in NWA',
          bullet_3: 'Written roadmap you can act on with or without us',
          bullet_4: 'Money-back if we don\'t find $1,500 of opportunity',
          cta: 'Book the Audit'
        },
        work: {
          title: 'Recent work',
          subhead: 'Detailed case studies coming soon. Until then, here\'s the shape of what we ship.',
          placeholder_1_title: 'Walmart supplier data feed',
          placeholder_1_desc: 'Automated reconciliation between Retail Link reports and a regional supplier\'s internal ERP. Replaced 12 hrs/week of manual spreadsheet work.',
          placeholder_2_title: 'Bilingual scheduling tool',
          placeholder_2_desc: 'Custom job-scheduling app for a Hispanic-owned trades business. Spanish-first UI for field crews, English-first reporting for the office.',
          placeholder_3_title: 'Emergency vendor rebuild',
          placeholder_3_desc: 'Six-day rebuild of a mission-critical inventory tool after a previous vendor dropped out mid-contract.'
        },
        cta_section: {
          title: 'Ready when you are.',
          description: 'Start with a free 30-minute discovery call, or jump straight to the Audit.',
          primary: 'Talk to us',
          secondary: 'Call (479) 345-4995'
        }
      },
      solutions: {
        meta_title: 'What we build | 10 Bit Technology',
        page_header: {
          eyebrow: 'Our work',
          title: 'What we build',
          description: 'Three service lines, each built for the way small businesses in Northwest Arkansas actually run.'
        },
        services_section: {
          title: 'The trinity'
        },
        services: [
          {
            icon: '⚙️',
            title: 'Business Process Automation',
            description: 'Drowning in manual work? We eliminate the repetitive tasks that swallow your team\'s week — document processing, email handling, internal workflows, inventory updates, payroll prep.',
            capabilities: ['Document automation', 'Email & notification workflows', 'Inventory & ops automation', 'Internal tool builds']
          },
          {
            icon: '🔄',
            title: 'Data & Integrations',
            description: 'Your data lives in five places that don\'t talk to each other. We connect them. ETL pipelines, scraping competitor and market data, dashboards, supplier-portal integrations, and the boring plumbing that makes the rest work.',
            capabilities: ['ETL pipelines', 'Walmart Retail Link & EDI feeds', 'Web scraping & market intel', 'Dashboards & reporting']
          },
          {
            icon: '📱',
            title: 'Custom Apps & Emergency Builds',
            description: 'You\'ve tried the SaaS. It doesn\'t fit. We build the application your business actually needs — web, mobile, internal. Plus our specialty: under-one-week emergency rebuilds when a vendor drops out or a system fails.',
            capabilities: ['Custom web & mobile apps', 'Emergency rebuilds (<1 week)', 'Bilingual UIs', 'Legacy system replacements']
          }
        ],
        industries_section: {
          title: 'Industries we know',
          subhead: 'Pattern recognition matters. These are the verticals we\'ve seen enough times to move quickly.'
        },
        industries: [
          {
            name: 'Walmart-ecosystem suppliers',
            icon: '📦',
            description: 'If your week is shaped by Retail Link, EDI feeds, and supplier compliance demands, we\'ve seen your pain.',
            features: ['Retail Link automation', 'EDI integrations', 'Supplier dashboards', 'Compliance reporting']
          },
          {
            name: 'Bilingual operations',
            icon: '💬',
            description: 'Hispanic-owned shops and businesses with Spanish-speaking field teams. Software that works the way you actually run.',
            features: ['Bilingual interfaces', 'Spanish-first field tools', 'WhatsApp / SMS workflows', 'Cross-language reporting']
          },
          {
            name: 'Restaurants & retail',
            icon: '🛒',
            description: 'POS bridges, inventory automation, online presence, and customer data — without a six-figure enterprise contract.',
            features: ['POS integrations', 'Inventory automation', 'Customer data tools', 'Competitor pricing']
          },
          {
            name: 'Trades & professional services',
            icon: '🔧',
            description: 'HVAC, landscaping, construction, accounting, law. Scheduling, invoicing, document automation, and lead intake.',
            features: ['Job scheduling apps', 'Document automation', 'Lead intake & CRM', 'Client portals']
          }
        ],
        why_section: {
          title: 'Why teams pick 10 Bit'
        },
        why: [
          {
            icon: '🌎',
            title: 'Bilingual end-to-end',
            description: 'Not a translated brochure. Calls, scoping docs, training, and support all in your choice of English or Spanish.'
          },
          {
            icon: '📍',
            title: 'NWA-local',
            description: 'We\'re here. We\'ll meet at your warehouse, your office, or your restaurant. No 2,000-mile delegation chain.'
          },
          {
            icon: '💵',
            title: 'Fixed-price scoping',
            description: 'You see the number before we start. No "discovery hours" billed into oblivion.'
          },
          {
            icon: '🚀',
            title: 'Weeks, not quarters',
            description: 'Standard projects ship in 2–6 weeks. Emergency rebuilds in under one. We sprint weekly with live demos.'
          },
          {
            icon: '🧩',
            title: 'Custom-fit, not off-the-shelf',
            description: 'We build what your business actually does. No forcing a template-shaped solution onto a non-template-shaped problem.'
          },
          {
            icon: '🤝',
            title: 'Partner, not vendor',
            description: 'We work as an extension of your team. Documentation and 30 days of bug-fix support are included in every project.'
          }
        ],
        cta_section: {
          title: 'Start with an Audit',
          description: 'Two weeks. $1,500 flat. You get a written roadmap with priced options — money back if we don\'t find $1,500 of opportunity.',
          primary: 'Book the Audit',
          secondary: 'Talk to us first'
        }
      },
      team: {
        meta_title: 'Team | 10 Bit Technology',
        title: 'Meet the team',
        subhead: 'Real local engineers. Bilingual. Northwest Arkansas-based. The people who will actually build your project.',
        community: {
          title: 'Want to work with us?',
          description: 'Drop us a line. Whether you\'re an NWA business with a project, an engineer who wants to join the team, or just curious — we read every message.',
          cta: 'Get in touch'
        }
      },
      contact: {
        meta_title: 'Contact | 10 Bit Technology',
        title: 'Get in touch',
        description: 'Tell us what hurts. We\'ll tell you whether we can fix it, what it costs, and how fast. In English or Spanish.',
        form: {
          title: 'Send us a message',
          first_name: 'First Name',
          first_name_placeholder: 'Your first name',
          last_name: 'Last Name',
          last_name_placeholder: 'Your last name',
          email: 'Email Address',
          email_placeholder: 'you{\'@\'}example.com',
          phone: 'Phone Number',
          phone_optional: '(Optional)',
          phone_placeholder: '(000) 000-0000',
          company: 'Company',
          company_optional: '(Optional)',
          company_placeholder: 'Your company name',
          project_type: 'What can we help you with?',
          project_placeholder: 'Select a service',
          project_options: {
            audit: 'Automation Audit ($1,500 starter)',
            automation: 'Business Process Automation',
            data: 'Data & Integrations',
            custom_app: 'Custom App Development',
            emergency: 'Emergency / Under-one-week rebuild',
            other: 'Something else'
          },
          message: 'Project Details',
          message_placeholder: 'Tell us about your project, your team, what you\'ve tried, and what you\'re hoping to fix.',
          impact_label: 'Estimated annual cost of this challenge to your business',
          impact_options: {
            under_1k: 'Under $1K',
            r1_5k: '$1K–$5K',
            r5_10k: '$5K–$10K',
            over_10k: '$10K+'
          },
          urgency_label: 'How soon do you need a solution?',
          urgency_options: {
            asap: 'ASAP',
            weeks: '1–2 Weeks',
            months: '1–2 Months',
            later: '3+ Months'
          },
          submit: 'Send Message',
          processing: 'Processing...',
          turnstile_error: 'Please complete the verification.',
          submit_error: 'There was an error submitting your form. Please try again or call us directly.'
        },
        errors: {
          required_first_name: 'Please enter your first name.',
          required_last_name: 'Please enter your last name.',
          required_email: 'Please enter your email address.',
          invalid_email: 'Please enter a valid email address.',
          required_project_type: 'Please tell us what we can help with.',
          required_message: 'Please tell us a bit about your project.',
          required_impact: 'Please select an estimated cost range.',
          required_timeframe: 'Please select a timeframe.'
        },
        success: {
          title: 'Thank you.',
          message: 'Your message is in. We respond to every inquiry within one business day — usually sooner.',
          again: 'Send another message'
        },
        info: {
          title: 'Contact information',
          email_label: 'Email',
          phone_label: 'Phone',
          area_label: 'Service area',
          area_value: 'Northwest Arkansas — Bentonville, Rogers, Fayetteville, Springdale, and surrounding'
        },
        emergency: {
          title: 'Need urgent support?',
          description: 'We specialize in under-one-week emergency builds when a system fails or a vendor drops out. Call us — we triage the same day.',
          cta: 'Call our emergency line'
        },
        faq: {
          title: 'Frequently asked questions',
          items: [
            {
              question: 'How quickly can you deliver an emergency solution?',
              answer: 'For critical situations we deploy in under a week. We\'ve done six-day rebuilds for system failures and vendor dropouts. Call us and we\'ll triage the same day.'
            },
            {
              question: 'Do you work with small businesses?',
              answer: 'That\'s our whole focus. We size scope and price for SMB budgets. We\'ve been small-business owners ourselves — we understand cash flow and ROI pressure.'
            },
            {
              question: 'Are you really bilingual, or is that just a translated webpage?',
              answer: 'Really bilingual. Discovery calls, scoping documents, project communications, code documentation, training, and ongoing support — all available in English or Spanish. Pick one or mix.'
            },
            {
              question: 'Where are you located?',
              answer: 'Northwest Arkansas — Bentonville, Rogers, Fayetteville, Springdale, and surrounding. We meet clients on-site whenever it helps.'
            },
            {
              question: 'Can you work with our existing systems?',
              answer: 'Yes. Most of what we do is connect, extend, or replace pieces of an existing stack. We integrate with Retail Link, EDI portals, common SaaS, and most legacy databases.'
            },
            {
              question: 'What does pricing look like?',
              answer: 'We work fixed-price. The Automation Audit is $1,500 flat. Project quotes are scope-locked before work begins — no T&M, no "discovery hours."'
            }
          ]
        }
      }
    },
    es: {
      common: {
        company: '10 Bit Technology',
        phone: '(479) 345-4995',
        phone_href: 'tel:+14793454995',
        email: 'contact{\'@\'}10bit.tech',
        region: 'Noroeste de Arkansas',
        copyright: '© 2025 10 Bit Technology. Todos los derechos reservados.',
        language_en: 'English',
        language_es: 'Español',
        cta_audit: 'Solicita una Auditoría de Automatización por $1,500',
        cta_audit_short: 'Reservar la auditoría',
        cta_contact: 'Hablemos',
        cta_solutions: 'Ver lo que construimos',
        cta_call: 'Llama al (479) 345-4995',
        based_in: 'Con sede en el Noroeste de Arkansas'
      },
      nav: {
        home: 'Inicio',
        solutions: 'Soluciones',
        team: 'Equipo',
        contact: 'Contacto'
      },
      home: {
        meta_title: '10 Bit Technology | Automatización a medida para PyMEs del NWA',
        hero: {
          eyebrow: 'Noroeste de Arkansas · Bilingüe · Precio fijo',
          title_line_1: 'Automatización a medida',
          title_line_2: 'para pequeñas empresas del NWA.',
          subhead: 'Construimos el software personalizado que las soluciones genéricas no pueden ofrecer. En inglés o español. Precio fijo. Implementado en semanas, no en trimestres.'
        },
        proof: {
          bilingual_title: 'Bilingüe de principio a fin',
          bilingual_desc: 'Diagnóstico, alcance, capacitación y soporte — todo disponible en inglés o español.',
          local_title: 'Locales del NWA',
          local_desc: 'Bentonville, Rogers, Fayetteville, Springdale. Nos reunimos en tu negocio.',
          price_title: 'Precio fijo',
          price_desc: 'Presupuestos cerrados antes de empezar. Sin facturas sorpresa.',
          speed_title: 'Construido en semanas',
          speed_desc: 'Proyectos estándar en 2–6 semanas. Reconstrucciones de emergencia en menos de una.'
        },
        services: {
          title: 'Lo que construimos',
          subhead: 'Tres cosas, hechas bien. Lo demás lo hablamos contigo.',
          automation_title: 'Automatización de procesos',
          automation_desc: 'Deja de pagar por trabajo manual repetitivo. Automatizamos el manejo de documentos, correos, inventarios y los flujos de trabajo que tu equipo repite cada día.',
          data_title: 'Datos e integraciones',
          data_desc: 'Pipelines ETL, web scraping, dashboards e integraciones entre sistemas. Movemos tus datos a donde necesitan estar — incluyendo Retail Link y portales de proveedores.',
          apps_title: 'Apps a medida y reconstrucciones de emergencia',
          apps_desc: 'Software que las soluciones prefabricadas no logran. Más nuestra especialidad: reconstrucciones en menos de una semana cuando un proveedor desaparece o un sistema falla.'
        },
        process: {
          title: 'Cómo trabajamos',
          subhead: 'Sin horas misteriosas. Sin facturas sorpresa.',
          step1_title: '1. Diagnóstico',
          step1_desc: 'Llamada de 30 minutos en tu idioma. Escuchamos qué duele y preguntamos lo que otros se saltan.',
          step2_title: '2. Alcance',
          step2_desc: 'Presupuesto a precio fijo con entregables claros. Ves el número antes de que toquemos un teclado.',
          step3_title: '3. Construcción',
          step3_desc: 'Sprints de una semana con demos semanales. Ves el progreso, no las facturas.',
          step4_title: '4. Entrega',
          step4_desc: 'Documentación, capacitación y 30 días de soporte para correcciones — en inglés o español.'
        },
        starter: {
          badge: 'Oferta inicial',
          title: 'Auditoría de Automatización — $1,500 fijos',
          description: 'Un diagnóstico de dos semanas que se paga solo. Nos sentamos con tu equipo, mapeamos los tres flujos que más tiempo te quitan y entregamos una hoja de ruta escrita con opciones y precios.',
          bullet_1: 'Dos semanas de entrega, precio fijo',
          bullet_2: 'Visita en sitio en cualquier parte del NWA',
          bullet_3: 'Hoja de ruta que puedes ejecutar con nosotros o sin nosotros',
          bullet_4: 'Garantía de devolución si no encontramos $1,500 de oportunidad',
          cta: 'Reservar la auditoría'
        },
        work: {
          title: 'Trabajo reciente',
          subhead: 'Casos de estudio detallados próximamente. Mientras tanto, así es la forma de lo que entregamos.',
          placeholder_1_title: 'Flujo de datos para proveedor de Walmart',
          placeholder_1_desc: 'Conciliación automatizada entre reportes de Retail Link y el ERP interno de un proveedor regional. Reemplazó 12 horas semanales de trabajo manual en hojas de cálculo.',
          placeholder_2_title: 'Herramienta de agendamiento bilingüe',
          placeholder_2_desc: 'App de agendamiento a medida para un negocio de oficios de dueño hispano. Interfaz en español para personal de campo, reportes en inglés para la oficina.',
          placeholder_3_title: 'Reconstrucción de emergencia',
          placeholder_3_desc: 'Reconstrucción en seis días de una herramienta crítica de inventario después de que un proveedor anterior abandonó el contrato.'
        },
        cta_section: {
          title: 'Listos cuando tú lo estés.',
          description: 'Empieza con una llamada gratuita de 30 minutos, o ve directo a la auditoría.',
          primary: 'Hablemos',
          secondary: 'Llama al (479) 345-4995'
        }
      },
      solutions: {
        meta_title: 'Lo que construimos | 10 Bit Technology',
        page_header: {
          eyebrow: 'Nuestro trabajo',
          title: 'Lo que construimos',
          description: 'Tres líneas de servicio, cada una pensada para la forma en que realmente operan las pequeñas empresas del Noroeste de Arkansas.'
        },
        services_section: {
          title: 'La trinidad'
        },
        services: [
          {
            icon: '⚙️',
            title: 'Automatización de procesos',
            description: '¿Ahogado en trabajo manual? Eliminamos las tareas repetitivas que se comen la semana de tu equipo — procesamiento de documentos, manejo de correos, flujos internos, actualizaciones de inventario, preparación de nómina.',
            capabilities: ['Automatización de documentos', 'Flujos de correo y notificaciones', 'Automatización de inventario y operaciones', 'Herramientas internas a medida']
          },
          {
            icon: '🔄',
            title: 'Datos e integraciones',
            description: 'Tus datos viven en cinco lugares que no se hablan. Los conectamos. Pipelines ETL, scraping de competidores y mercado, dashboards, integraciones con portales de proveedores y toda la plomería que hace funcionar el resto.',
            capabilities: ['Pipelines ETL', 'Walmart Retail Link y EDI', 'Web scraping e inteligencia de mercado', 'Dashboards y reportes']
          },
          {
            icon: '📱',
            title: 'Apps a medida y reconstrucciones de emergencia',
            description: 'Probaste el SaaS. No encaja. Construimos la aplicación que tu negocio realmente necesita — web, móvil, interna. Más nuestra especialidad: reconstrucciones en menos de una semana cuando un proveedor cae o un sistema falla.',
            capabilities: ['Apps web y móviles a medida', 'Reconstrucciones de emergencia (<1 semana)', 'Interfaces bilingües', 'Reemplazo de sistemas heredados']
          }
        ],
        industries_section: {
          title: 'Industrias que conocemos',
          subhead: 'El reconocimiento de patrones importa. Estas son las verticales que hemos visto suficientes veces para movernos rápido.'
        },
        industries: [
          {
            name: 'Proveedores del ecosistema Walmart',
            icon: '📦',
            description: 'Si tu semana está moldeada por Retail Link, feeds EDI y exigencias de cumplimiento, ya hemos visto tu dolor.',
            features: ['Automatización de Retail Link', 'Integraciones EDI', 'Dashboards para proveedores', 'Reportes de cumplimiento']
          },
          {
            name: 'Operaciones bilingües',
            icon: '💬',
            description: 'Negocios de dueño hispano y empresas con personal de campo hispanohablante. Software que funciona como tú realmente operas.',
            features: ['Interfaces bilingües', 'Herramientas de campo en español', 'Flujos por WhatsApp / SMS', 'Reportes cruzados de idioma']
          },
          {
            name: 'Restaurantes y retail',
            icon: '🛒',
            description: 'Puentes con POS, automatización de inventario, presencia en línea y datos de clientes — sin un contrato empresarial de seis cifras.',
            features: ['Integraciones POS', 'Automatización de inventario', 'Datos de clientes', 'Precios de competidores']
          },
          {
            name: 'Oficios y servicios profesionales',
            icon: '🔧',
            description: 'HVAC, jardinería, construcción, contabilidad, abogacía. Agendamiento, facturación, automatización de documentos y captación de prospectos.',
            features: ['Apps de agendamiento', 'Automatización de documentos', 'Captación y CRM', 'Portales de clientes']
          }
        ],
        why_section: {
          title: 'Por qué los equipos eligen 10 Bit'
        },
        why: [
          {
            icon: '🌎',
            title: 'Bilingüe de principio a fin',
            description: 'No un folleto traducido. Llamadas, documentos de alcance, capacitación y soporte — en inglés o español, tú eliges.'
          },
          {
            icon: '📍',
            title: 'Locales del NWA',
            description: 'Estamos aquí. Vamos a tu bodega, tu oficina o tu restaurante. Sin cadenas de delegación de 2,000 millas.'
          },
          {
            icon: '💵',
            title: 'Alcance a precio fijo',
            description: 'Ves el número antes de empezar. Nada de "horas de descubrimiento" facturadas al infinito.'
          },
          {
            icon: '🚀',
            title: 'Semanas, no trimestres',
            description: 'Proyectos estándar en 2–6 semanas. Reconstrucciones de emergencia en menos de una. Sprints semanales con demos en vivo.'
          },
          {
            icon: '🧩',
            title: 'A medida, no genérico',
            description: 'Construimos lo que tu negocio realmente hace. Sin forzar plantillas a problemas que no son de plantilla.'
          },
          {
            icon: '🤝',
            title: 'Socios, no proveedores',
            description: 'Trabajamos como una extensión de tu equipo. Documentación y 30 días de soporte para correcciones incluidos en cada proyecto.'
          }
        ],
        cta_section: {
          title: 'Empieza con una auditoría',
          description: 'Dos semanas. $1,500 fijos. Te entregamos una hoja de ruta escrita con opciones — devolución del dinero si no encontramos $1,500 de oportunidad.',
          primary: 'Reservar la auditoría',
          secondary: 'Hablemos primero'
        }
      },
      team: {
        meta_title: 'Equipo | 10 Bit Technology',
        title: 'Conoce al equipo',
        subhead: 'Ingenieros locales reales. Bilingües. Con sede en el Noroeste de Arkansas. Las personas que de verdad construirán tu proyecto.',
        community: {
          title: '¿Quieres trabajar con nosotros?',
          description: 'Escríbenos. Ya seas un negocio del NWA con un proyecto, un ingeniero que quiere unirse al equipo, o simplemente tengas curiosidad — leemos cada mensaje.',
          cta: 'Contáctanos'
        }
      },
      contact: {
        meta_title: 'Contacto | 10 Bit Technology',
        title: 'Hablemos',
        description: 'Cuéntanos qué duele. Te decimos si podemos arreglarlo, cuánto cuesta y qué tan rápido. En inglés o español.',
        form: {
          title: 'Envíanos un mensaje',
          first_name: 'Nombre',
          first_name_placeholder: 'Tu nombre',
          last_name: 'Apellido',
          last_name_placeholder: 'Tu apellido',
          email: 'Correo electrónico',
          email_placeholder: 'tu{\'@\'}ejemplo.com',
          phone: 'Número de teléfono',
          phone_optional: '(Opcional)',
          phone_placeholder: '(000) 000-0000',
          company: 'Empresa',
          company_optional: '(Opcional)',
          company_placeholder: 'Nombre de tu empresa',
          project_type: '¿En qué podemos ayudarte?',
          project_placeholder: 'Selecciona un servicio',
          project_options: {
            audit: 'Auditoría de Automatización ($1,500 inicial)',
            automation: 'Automatización de procesos',
            data: 'Datos e integraciones',
            custom_app: 'Desarrollo de app a medida',
            emergency: 'Emergencia / Reconstrucción en menos de una semana',
            other: 'Otra cosa'
          },
          message: 'Detalles del proyecto',
          message_placeholder: 'Cuéntanos sobre tu proyecto, tu equipo, lo que ya intentaste y lo que esperas resolver.',
          impact_label: 'Costo anual estimado de este problema para tu negocio',
          impact_options: {
            under_1k: 'Menos de $1K',
            r1_5k: '$1K–$5K',
            r5_10k: '$5K–$10K',
            over_10k: '$10K+'
          },
          urgency_label: '¿En cuánto tiempo necesitas una solución?',
          urgency_options: {
            asap: 'Lo antes posible',
            weeks: '1–2 semanas',
            months: '1–2 meses',
            later: '3+ meses'
          },
          submit: 'Enviar mensaje',
          processing: 'Procesando...',
          turnstile_error: 'Por favor completa la verificación.',
          submit_error: 'Hubo un error al enviar tu formulario. Inténtalo de nuevo o llámanos directamente.'
        },
        errors: {
          required_first_name: 'Por favor ingresa tu nombre.',
          required_last_name: 'Por favor ingresa tu apellido.',
          required_email: 'Por favor ingresa tu correo electrónico.',
          invalid_email: 'Por favor ingresa un correo válido.',
          required_project_type: 'Cuéntanos en qué podemos ayudar.',
          required_message: 'Cuéntanos un poco sobre tu proyecto.',
          required_impact: 'Selecciona un rango de costo estimado.',
          required_timeframe: 'Selecciona un plazo.'
        },
        success: {
          title: 'Gracias.',
          message: 'Recibimos tu mensaje. Respondemos cada consulta en menos de un día hábil — generalmente antes.',
          again: 'Enviar otro mensaje'
        },
        info: {
          title: 'Información de contacto',
          email_label: 'Correo',
          phone_label: 'Teléfono',
          area_label: 'Área de servicio',
          area_value: 'Noroeste de Arkansas — Bentonville, Rogers, Fayetteville, Springdale y alrededores'
        },
        emergency: {
          title: '¿Necesitas soporte urgente?',
          description: 'Nos especializamos en reconstrucciones en menos de una semana cuando un sistema falla o un proveedor desaparece. Llámanos — atendemos el mismo día.',
          cta: 'Llama a nuestra línea de emergencia'
        },
        faq: {
          title: 'Preguntas frecuentes',
          items: [
            {
              question: '¿Qué tan rápido pueden entregar una solución de emergencia?',
              answer: 'Para situaciones críticas implementamos en menos de una semana. Hemos hecho reconstrucciones de seis días por fallos de sistema y proveedores que abandonaron. Llámanos y te atendemos el mismo día.'
            },
            {
              question: '¿Trabajan con pequeñas empresas?',
              answer: 'Es nuestro enfoque principal. Dimensionamos alcance y precio para presupuestos PyME. Hemos sido dueños de pequeñas empresas — entendemos el flujo de caja y la presión por ROI.'
            },
            {
              question: '¿De verdad son bilingües, o es solo una página traducida?',
              answer: 'De verdad bilingües. Llamadas de diagnóstico, documentos de alcance, comunicación del proyecto, documentación de código, capacitación y soporte continuo — todo disponible en inglés o español. Elige uno o combínalos.'
            },
            {
              question: '¿Dónde están ubicados?',
              answer: 'Noroeste de Arkansas — Bentonville, Rogers, Fayetteville, Springdale y alrededores. Visitamos a los clientes en sitio cuando aporta.'
            },
            {
              question: '¿Pueden trabajar con nuestros sistemas actuales?',
              answer: 'Sí. La mayor parte de lo que hacemos es conectar, extender o reemplazar piezas de un stack existente. Integramos con Retail Link, portales EDI, SaaS comunes y la mayoría de las bases de datos heredadas.'
            },
            {
              question: '¿Cómo es el precio?',
              answer: 'Trabajamos a precio fijo. La Auditoría de Automatización es $1,500. Los presupuestos de proyecto se cierran antes de comenzar el trabajo — sin T&M, sin "horas de descubrimiento".'
            }
          ]
        }
      }
    }
  }
}))
