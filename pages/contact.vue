<template>
  <div class="min-h-screen bg-background text-text">
    <Navbar activeTab="Contact Us" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center section-spacing">
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent">
            {{ $t("contact.title") }}
          </h1>
          <p class="text-xl max-w-3xl mx-auto opacity-80">
            {{ $t("contact.description") }}
          </p>
        </div>

        <!-- Contact Form Section -->
        <section class="section-spacing">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <!-- Contact Form or Success Message - 3 columns -->
            <div class="lg:col-span-3 bg-secondary rounded-xl p-8 md:p-10 shadow-md">
              <!-- Success Message (shows after form submission) -->
              <div v-if="formSubmitted" class="flex flex-col items-center justify-center py-8">
                <div class="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 class="text-2xl font-bold mb-4 text-center">Thank You!</h2>
                <p class="text-lg mb-6 text-center max-w-md">
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button
                  @click="resetForm"
                  class="py-3 px-6 bg-gradient-to-r from-accent to-secondary-accent text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Send Another Message
                </button>
              </div>

              <!-- Contact Form (hidden after submission) -->
              <div v-else>
                <h2 class="text-2xl font-bold mb-6">Send Us a Message</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name Fields -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="firstName" class="block text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        v-model="form.firstName"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.firstName}"
                        placeholder="Your first name"
                        @blur="validateField('firstName')"
                      />
                      <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                    </div>
                    <div class="space-y-2">
                      <label for="lastName" class="block text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        v-model="form.lastName"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.lastName}"
                        placeholder="Your last name"
                        @blur="validateField('lastName')"
                      />
                      <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                    </div>
                  </div>

                  <!-- Email & Phone -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.email}"
                        placeholder="you@example.com"
                        @blur="validateField('email')"
                      />
                      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>
                    <div class="space-y-2">
                      <label for="phone" class="block text-sm font-medium">Phone Number <span class="text-xs opacity-60">(Optional)</span></label>
                      <input
                        type="tel"
                        id="phone"
                        v-model="form.phone"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        placeholder="(000) 000-0000"
                      />
                    </div>
                  </div>

                  <!-- Company & Project Type -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="company" class="block text-sm font-medium">Company <span class="text-xs opacity-60">(Optional)</span></label>
                      <input
                        type="text"
                        id="company"
                        v-model="form.company"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="projectType" class="block text-sm font-medium">What can we help you with?</label>
                      <select
                        id="projectType"
                        v-model="form.projectType"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors appearance-none"
                        :class="{'border-red-500': errors.projectType}"
                        @blur="validateField('projectType')"
                      >
                        <option value="" disabled selected>Select a service</option>
                        <option value="data-migration">Data Migration & ETL</option>
                        <option value="web-scraping">Web Scraping & Market Intelligence</option>
                        <option value="automation">Business Process Automation</option>
                        <option value="app-development">Custom App Development</option>
                        <option value="security">Security Upgrades</option>
                        <option value="emergency">Emergency Solution</option>
                        <option value="other">Other</option>
                      </select>
                      <p v-if="errors.projectType" class="text-red-500 text-sm mt-1">{{ errors.projectType }}</p>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div class="space-y-2">
                    <label for="message" class="block text-sm font-medium">Project Details</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors resize-none"
                      :class="{'border-red-500': errors.message}"
                      placeholder="Tell us about your project, challenge, or what you're looking to accomplish..."
                      @blur="validateField('message')"
                    ></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                  </div>

                  <!-- Impacts Range -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">What's the estimated annual cost of this challenge to your business?</label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div
                        v-for="(range, index) in impactCosts"
                        :key="index"
                        @click="selectImpact(range)"
                        :class="[
                          'flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer transition-all',
                          form.impact === range
                            ? 'border-accent bg-accent/10 text-white'
                            : 'border-gray-300 hover:border-accent/50'
                        ]"
                      >
                        {{ range }}
                      </div>
                    </div>
                    <p v-if="errors.impact" class="text-red-500 text-sm mt-1">{{ errors.impact }}</p>
                  </div>

                  <!-- Urgency -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">How soon do you need a solution?</label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div
                        v-for="(timeframe, index) in timeframes"
                        :key="index"
                        @click="selectTimeframe(timeframe)"
                        :class="[
                          'flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer transition-all',
                          form.timeframe === timeframe
                            ? 'border-accent bg-accent/10 text-white'
                            : 'border-gray-300 hover:border-accent/50'
                        ]"
                      >
                        {{ timeframe }}
                      </div>
                    </div>
                    <p v-if="errors.timeframe" class="text-red-500 text-sm mt-1">{{ errors.timeframe }}</p>
                  </div>

                  <!-- Cloudflare Turnstile using Nuxt Module -->
                  <NuxtTurnstile v-model="token" />
                  <p v-if="turnstileError" class="text-red-500 text-sm mt-1">{{ turnstileError }}</p>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      class="w-full py-4 px-6 bg-gradient-to-r from-accent to-secondary-accent text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                      :disabled="isSubmitting || !token"
                    >
                      <span v-if="!isSubmitting">Send Message</span>
                      <span v-else class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <!-- Contact Information - 2 columns -->
            <div class="lg:col-span-2">
              <!-- Quick Contact Info -->
              <div class="bg-secondary rounded-xl p-8 shadow-md mb-8">
                <h2 class="text-2xl font-bold mb-6">Contact Information</h2>

                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-accent">Email</h3>
                      <p class="mt-1">contact@10bit.tech</p>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-accent">Phone</h3>
                      <p class="mt-1">(479) 345-4995</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Emergency Support -->
              <div class="bg-gradient-to-r from-accent to-secondary-accent rounded-xl p-8 text-white shadow-md">
                <h2 class="text-2xl font-bold mb-4">Need Urgent Support?</h2>
                <p class="mb-6">We specialize in emergency solutions with under-one-week turnarounds for critical business challenges.</p>
                <a
                  href="tel:4793454995"
                  class="inline-block w-full py-3 px-6 bg-white text-accent font-bold rounded-lg text-center hover:bg-opacity-90 transition-opacity"
                >
                  Call Our Emergency Line
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="section-spacing">
          <h2 class="text-3xl font-bold tracking-tight mb-10">Frequently Asked Questions</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-secondary rounded-xl p-8 shadow-md">
              <h3 class="text-xl font-semibold mb-4">{{ faq.question }}</h3>
              <p class="opacity-80">{{ faq.answer }}</p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

// Form submission state
const formSubmitted = ref(false);

// Turnstile token - used with v-model in NuxtTurnstile
const token = ref('');

// Form data
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  company: '',
  projectType: '',
  message: '',
  impact: '',
  timeframe: ''
});

// Error messages
const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  projectType: '',
  message: '',
  impact: '',
  timeframe: ''
});

// UI state
const turnstileError = ref('');
const isSubmitting = ref(false);

// Impact ranges
const impactCosts = [
  'Under $1K',
  '$1K-$5K',
  '$5K-$10K',
  '$10K+'
];

// Timeframe options
const timeframes = [
  'ASAP',
  '1-2 Weeks',
  '1-2 Months',
  '3+ Months'
];

// FAQs
const faqs = [
  {
    question: 'How quickly can you deliver an emergency solution?',
    answer: 'For critical situations, we can deploy emergency solutions in less than one week. Our team is experienced in rapid response development to keep your business running when unexpected issues arise.'
  },
  {
    question: 'Do you work with small businesses?',
    answer: 'Absolutely! We specialize in providing enterprise-level solutions at prices small and medium businesses can afford. Having been small business owners ourselves, we understand budget constraints.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We have experience across a wide range of industries including e-commerce, retail, financial services, healthcare, and professional services. Our solutions are adaptable to most business needs.'
  },
  {
    question: 'Can you work with our existing systems?',
    answer: 'Yes, we pride ourselves on creating solutions that integrate with your current technology stack. Our expertise in system integration allows us to connect legacy systems with modern infrastructure.'
  }
];

// Clear all error messages
const clearErrors = () => {
  Object.keys(errors).forEach(key => {
    errors[key] = '';
  });
};

// Validate a single field
const validateField = (fieldName) => {
  if (!form[fieldName]) {
    errors[fieldName] = `Please enter your ${fieldName.replace(/([A-Z])/g, ' $1').toLowerCase()}`;
    return false;
  }

  // Email validation
  if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address';
    return false;
  }

  errors[fieldName] = '';
  return true;
};

// Helper functions for selection-based fields
const selectImpact = (impact) => {
  form.impact = impact;
  errors.impact = '';
};

const selectTimeframe = (timeframe) => {
  form.timeframe = timeframe;
  errors.timeframe = '';
};

// Validate all fields
const validateForm = () => {
  let isValid = true;

  // Clear all errors first
  clearErrors();

  // Validate required fields
  ['firstName', 'lastName', 'email', 'projectType', 'message'].forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  // Validate selection fields
  if (!form.impact) {
    errors.impact = 'Please select an estimated cost range';
    isValid = false;
  }

  if (!form.timeframe) {
    errors.timeframe = 'Please select a timeframe';
    isValid = false;
  }

  // Validate turnstile (uncomment if needed)
  if (!token.value) {
    turnstileError.value = 'Please complete the verification';
    isValid = false;
  }

  return isValid;
};

// Reset form and show the form again
const resetForm = () => {
  // Reset form data
  Object.keys(form).forEach(key => {
    form[key] = '';
  });

  // Clear errors
  clearErrors();

  // Reset token
  token.value = '';

  // Show form again
  formSubmitted.value = false;
};

// Form submission handler
const handleSubmit = async () => {
  // Validate all fields before submitting
  if (!validateForm()) {
    // Scroll to the first error
    const firstErrorField = document.querySelector('.border-red-500');
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  try {
    isSubmitting.value = true;

    // Send form data to the API
    const response = await $fetch('/api/contactFormSubmit', {
      method: 'POST',
      body: {
        ...form,
        token: token.value
      }
    });

    // Show success message
    formSubmitted.value = true;

    // Scroll to the top of the form area
    const formContainer = document.querySelector('.lg\\:col-span-3');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error submitting your form. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};
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

/* Custom select styles */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

/* Disabled button styles */
button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>