<template>
  <div class="min-h-screen bg-background">
    <Navbar activeTab="Solutions" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center section-spacing">
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
            Enterprise Solutions
          </h1>
          <p class="text-xl max-w-3xl mx-auto opacity-80">
            Transform your business with cutting-edge 10 Bit Technology solutions tailored to your industry needs.
          </p>
        </div>

        <!-- Solutions Overview -->
        <section class="pb-20">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(solution, index) in solutionCategories" :key="index"
              class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg p-8">
              <div class="text-4xl text-accent mb-6">{{ solution.icon }}</div>
              <h3 class="text-2xl font-bold mb-4">{{ solution.title }}</h3>
              <p class="mb-6 opacity-80">{{ solution.description }}</p>
            </div>
          </div>
        </section>

        <!-- Industry Solutions -->
        <section class="section-spacing">
          <h2 class="text-3xl font-bold tracking-tight mb-6">Industry-Specific Solutions</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(industry, index) in industrySolutions" :key="index"
              class="bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-20 bg-gradient-to-r from-accent/10 to-secondary-accent/10 p-6 flex items-start justify-start">
                <div class="text-3xl">{{ industry.icon }}</div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-4">{{ industry.name }}</h3>
                <p class="mb-5">{{ industry.description }}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                  <span v-for="feature in industry.features" :key="feature"
                    class="text-xs py-1 px-3 rounded-full bg-accent/10 text-accent whitespace-nowrap">
                    {{ feature }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Technology Benefits -->
        <section class="section-spacing">
          <h2 class="text-3xl font-bold tracking-tight mb-6">Why Choose 10 Bit Technology?</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(benefit, index) in technologyBenefits" :key="index"
              class="bg-secondary rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <div class="h-16 w-16 rounded-full bg-accent/10 flex items-start justify-start text-2xl text-accent mb-6">
                {{ benefit.icon }}
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ benefit.title }}</h3>
              <p class="opacity-80">{{ benefit.description }}</p>
            </div>
          </div>
        </section>

        <!-- Contact Section -->
        <section class="bg-gradient-to-r from-accent to-secondary-accent rounded-2xl p-10 text-white">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p class="mb-8">Schedule a consultation with our solutions experts to discover how 10 Bit Technology can address
              your specific business challenges.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#"
                class="px-8 py-3 bg-white text-accent font-semibold rounded-lg hover:bg-opacity-90 transition-all">
                Book a Call
              </a>
              <a href="#"
                class="px-8 py-3 bg-transparent border border-white font-semibold rounded-lg hover:bg-white/10 transition-all">
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>

    <footer class="py-12 px-[5%] text-center">
      <p class="text-sm opacity-60">© 2025 10 Bit Technology. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
// Updated solution categories with problem-solution framing
const solutionCategories = [
  {
    icon: '🔄',
    title: 'Data Migration & ETL Solutions',
    description: 'Struggling with siloed data or legacy systems? Our ETL solutions seamlessly extract, transform, and load your data, turning disconnected information into valuable business insights.',
    link: '#'
  },
  {
    icon: '🕸️',
    title: 'Web Scraping & Market Intelligence',
    description: 'Need competitive pricing data or customer leads? Our web scraping solutions automate competitor analysis, generate qualified lead lists, and deliver real-time market insights.',
    link: '#'
  },
  {
    icon: '⚙️',
    title: 'Business Process Automation',
    description: 'Drowning in manual workflows? We eliminate tedious tasks through automated document processing, email management, and custom workflows that save time and reduce human error.',
    link: '#'
  },
  {
    icon: '📱',
    title: 'Custom App Development',
    description: 'Can\'t find off-the-shelf software that fits your unique needs? Our team builds tailor-made applications that solve your specific business challenges at a fraction of enterprise costs.',
    link: '#'
  },
  {
    icon: '🔐',
    title: 'Security Upgrades & Compliance',
    description: 'Worried about vulnerabilities in your systems? We implement cost-effective security solutions that protect your data and help you meet industry compliance requirements.',
    link: '#'
  },
  {
    icon: '⚡',
    title: 'Rapid Emergency Solutions',
    description: 'Facing a system failure or vendor dropout? Our team specializes in under-one-week emergency deployments to keep your business running when unexpected issues arise.',
    link: '#'
  },
];

// Updated industry solutions with specific expertise
const industrySolutions = [
  {
    name: 'Small & Medium Businesses',
    icon: '🏢',
    description: 'Enterprise-level solutions at budget-friendly prices. We\'ve been small business owners ourselves and understand how to maximize ROI with limited resources.',
    features: ['Cost-Effective Automation', 'Streamlined Operations', 'Custom Software Solutions', 'Technology Roadmapping'],
    link: '#'
  },
  {
    name: 'E-commerce & Retail',
    icon: '🛒',
    description: 'Stay competitive with solutions that optimize your online presence and operations. From competitor price monitoring to inventory automation.',
    features: ['Competitor Price Tracking', 'Inventory Management', 'Customer Data Analysis', 'Process Automation'],
    link: '#'
  },
  {
    name: 'Professional Services',
    icon: '👔',
    description: 'Free up your valuable time with customized solutions that automate client management, document processing, and administrative tasks.',
    features: ['Document Automation', 'Client Management Tools', 'Workflow Optimization', 'Custom Reporting'],
    link: '#'
  },
  {
    name: 'Specialized Projects',
    icon: '🔧',
    description: 'Have a unique challenge that doesn\'t fit in a box? Our team excels at hardware and software prototyping, complex systems integration, and finding creative solutions.',
    features: ['Hardware Prototyping', 'Software Prototyping', 'Electronics Integration', 'Custom IT Planning'],
    link: '#'
  }
];

// Updated technology benefits with focus on your unique value
const technologyBenefits = [
  {
    icon: '💰',
    title: 'Budget-Conscious Solutions',
    description: 'Having bootstrapped our own ventures, we\'re experts at finding the most cost-effective approaches to technology challenges without sacrificing quality or performance.'
  },
  {
    icon: '🚀',
    title: 'Rapid Implementation',
    description: 'When time is critical, our team delivers. We specialize in emergency solutions with deployment times under one week for businesses facing unexpected challenges.'
  },
  {
    icon: '🧩',
    title: 'Custom-Fit Technology',
    description: 'We don\'t force generic solutions onto specific problems. Each system we build is tailored to your exact requirements, constraints, and business goals.'
  },
  {
    icon: '🔄',
    title: 'End-to-End Services',
    description: 'From initial planning and specification to implementation and installation, we handle the entire process, including coordinating third-party vendors and installers.'
  },
  {
    icon: '🧠',
    title: 'Complex Problem Solving',
    description: 'We thrive on challenges others avoid. Our team enjoys diving into complicated, multi-faceted problems and engineering elegant, efficient solutions.'
  },
  {
    icon: '🤝',
    title: 'Partner-Level Support',
    description: 'We work as an extension of your team, not just a vendor. Our collaborative approach ensures solutions that align perfectly with your business objectives.'
  }
];
</script>

<style scoped>
/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease forwards;
}

/* Gradient text effect for headings */
.gradient-text {
  background: linear-gradient(to right, var(--accent-color), var(--secondary-accent-color));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.section-spacing {
  margin-bottom: 4rem;
}
</style>
