<template>
  <div class="min-h-screen bg-background text-text">
    <Navbar activeTab="Contact" />

    <main class="pt-32 px-[5%] pb-20">
      <div class="max-w-7xl mx-auto">
        <!-- Page Header -->
        <div class="text-center section-spacing">
          <h1
            class="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-6 bg-gradient-to-r from-accent to-secondary-accent bg-clip-text text-transparent"
          >
            {{ $t('contact.title') }}
          </h1>
          <p class="text-xl max-w-3xl mx-auto opacity-80">
            {{ $t('contact.description') }}
          </p>
        </div>

        <!-- Contact Form Section -->
        <section class="section-spacing">
          <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">
            <!-- Contact Form or Success Message - 3 columns -->
            <div class="lg:col-span-3 bg-secondary rounded-xl p-8 md:p-10 shadow-md">
              <!-- Success Message -->
              <div v-if="formSubmitted" class="flex flex-col items-center justify-center py-8">
                <div class="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center text-green-500 mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 class="text-2xl font-bold mb-4 text-center">{{ $t('contact.success.title') }}</h2>
                <p class="text-lg mb-6 text-center max-w-md">
                  {{ $t('contact.success.message') }}
                </p>
                <button
                  @click="resetForm"
                  class="py-3 px-6 bg-gradient-to-r from-accent to-secondary-accent text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                >
                  {{ $t('contact.success.again') }}
                </button>
              </div>

              <!-- Contact Form -->
              <div v-else>
                <h2 class="text-2xl font-bold mb-6">{{ $t('contact.form.title') }}</h2>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                  <!-- Name Fields -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="firstName" class="block text-sm font-medium">{{ $t('contact.form.first_name') }}</label>
                      <input
                        type="text"
                        id="firstName"
                        v-model="form.firstName"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.firstName}"
                        :placeholder="$t('contact.form.first_name_placeholder')"
                        @blur="validateField('firstName')"
                      />
                      <p v-if="errors.firstName" class="text-red-500 text-sm mt-1">{{ errors.firstName }}</p>
                    </div>
                    <div class="space-y-2">
                      <label for="lastName" class="block text-sm font-medium">{{ $t('contact.form.last_name') }}</label>
                      <input
                        type="text"
                        id="lastName"
                        v-model="form.lastName"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.lastName}"
                        :placeholder="$t('contact.form.last_name_placeholder')"
                        @blur="validateField('lastName')"
                      />
                      <p v-if="errors.lastName" class="text-red-500 text-sm mt-1">{{ errors.lastName }}</p>
                    </div>
                  </div>

                  <!-- Email & Phone -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="email" class="block text-sm font-medium">{{ $t('contact.form.email') }}</label>
                      <input
                        type="email"
                        id="email"
                        v-model="form.email"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :class="{'border-red-500': errors.email}"
                        :placeholder="$t('contact.form.email_placeholder')"
                        @blur="validateField('email')"
                      />
                      <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
                    </div>
                    <div class="space-y-2">
                      <label for="phone" class="block text-sm font-medium">
                        {{ $t('contact.form.phone') }}
                        <span class="text-xs opacity-60">{{ $t('contact.form.phone_optional') }}</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        v-model="form.phone"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :placeholder="$t('contact.form.phone_placeholder')"
                      />
                    </div>
                  </div>

                  <!-- Company & Project Type -->
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-2">
                      <label for="company" class="block text-sm font-medium">
                        {{ $t('contact.form.company') }}
                        <span class="text-xs opacity-60">{{ $t('contact.form.company_optional') }}</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        v-model="form.company"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors"
                        :placeholder="$t('contact.form.company_placeholder')"
                      />
                    </div>
                    <div class="space-y-2">
                      <label for="projectType" class="block text-sm font-medium">{{ $t('contact.form.project_type') }}</label>
                      <select
                        id="projectType"
                        v-model="form.projectType"
                        class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors appearance-none"
                        :class="{'border-red-500': errors.projectType}"
                        @blur="validateField('projectType')"
                      >
                        <option value="" disabled selected>{{ $t('contact.form.project_placeholder') }}</option>
                        <option value="audit">{{ $t('contact.form.project_options.audit') }}</option>
                        <option value="automation">{{ $t('contact.form.project_options.automation') }}</option>
                        <option value="data">{{ $t('contact.form.project_options.data') }}</option>
                        <option value="custom_app">{{ $t('contact.form.project_options.custom_app') }}</option>
                        <option value="emergency">{{ $t('contact.form.project_options.emergency') }}</option>
                        <option value="other">{{ $t('contact.form.project_options.other') }}</option>
                      </select>
                      <p v-if="errors.projectType" class="text-red-500 text-sm mt-1">{{ errors.projectType }}</p>
                    </div>
                  </div>

                  <!-- Project Details -->
                  <div class="space-y-2">
                    <label for="message" class="block text-sm font-medium">{{ $t('contact.form.message') }}</label>
                    <textarea
                      id="message"
                      v-model="form.message"
                      rows="5"
                      class="w-full px-4 py-3 rounded-lg bg-background border border-gray-300 focus:border-accent focus:outline-none transition-colors resize-none"
                      :class="{'border-red-500': errors.message}"
                      :placeholder="$t('contact.form.message_placeholder')"
                      @blur="validateField('message')"
                    ></textarea>
                    <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
                  </div>

                  <!-- Impact Range -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('contact.form.impact_label') }}</label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div
                        v-for="option in impactOptions"
                        :key="option.value"
                        @click="selectImpact(option.value)"
                        :class="[
                          'flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer transition-all text-center',
                          form.impact === option.value
                            ? 'border-accent bg-accent/10 text-white'
                            : 'border-gray-300 hover:border-accent/50'
                        ]"
                      >
                        {{ option.label }}
                      </div>
                    </div>
                    <p v-if="errors.impact" class="text-red-500 text-sm mt-1">{{ errors.impact }}</p>
                  </div>

                  <!-- Urgency -->
                  <div class="space-y-2">
                    <label class="block text-sm font-medium">{{ $t('contact.form.urgency_label') }}</label>
                    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div
                        v-for="option in urgencyOptions"
                        :key="option.value"
                        @click="selectTimeframe(option.value)"
                        :class="[
                          'flex items-center justify-center px-4 py-2 rounded-lg border cursor-pointer transition-all text-center',
                          form.timeframe === option.value
                            ? 'border-accent bg-accent/10 text-white'
                            : 'border-gray-300 hover:border-accent/50'
                        ]"
                      >
                        {{ option.label }}
                      </div>
                    </div>
                    <p v-if="errors.timeframe" class="text-red-500 text-sm mt-1">{{ errors.timeframe }}</p>
                  </div>

                  <!-- Cloudflare Turnstile -->
                  <NuxtTurnstile v-model="token" />
                  <p v-if="turnstileError" class="text-red-500 text-sm mt-1">{{ turnstileError }}</p>

                  <!-- Submit Button -->
                  <div class="pt-4">
                    <button
                      type="submit"
                      class="w-full py-4 px-6 bg-gradient-to-r from-accent to-secondary-accent text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                      :disabled="isSubmitting || !token"
                    >
                      <span v-if="!isSubmitting">{{ $t('contact.form.submit') }}</span>
                      <span v-else class="flex items-center justify-center">
                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        {{ $t('contact.form.processing') }}
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
                <h2 class="text-2xl font-bold mb-6">{{ $t('contact.info.title') }}</h2>

                <div class="space-y-6">
                  <div class="flex items-start">
                    <div class="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-accent">{{ $t('contact.info.email_label') }}</h3>
                      <a :href="`mailto:${$t('common.email')}`" class="mt-1 inline-block hover:text-accent transition-colors">{{ $t('common.email') }}</a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-accent">{{ $t('contact.info.phone_label') }}</h3>
                      <a :href="$t('common.phone_href')" class="mt-1 inline-block hover:text-accent transition-colors">{{ $t('common.phone') }}</a>
                    </div>
                  </div>

                  <div class="flex items-start">
                    <div class="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4 shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 class="text-sm font-medium text-accent">{{ $t('contact.info.area_label') }}</h3>
                      <p class="mt-1 opacity-90">{{ $t('contact.info.area_value') }}</p>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Emergency Support -->
              <div class="bg-gradient-to-r from-accent to-secondary-accent rounded-xl p-8 text-white shadow-md">
                <h2 class="text-2xl font-bold mb-4">{{ $t('contact.emergency.title') }}</h2>
                <p class="mb-6 opacity-95">{{ $t('contact.emergency.description') }}</p>
                <a
                  :href="$t('common.phone_href')"
                  class="inline-block w-full py-3 px-6 bg-white text-accent font-bold rounded-lg text-center hover:bg-opacity-90 transition-opacity"
                >
                  {{ $t('contact.emergency.cta') }}
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- FAQ Section -->
        <section class="section-spacing">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-10">{{ $t('contact.faq.title') }}</h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(faq, index) in faqs" :key="index" class="bg-secondary rounded-xl p-8 shadow-md">
              <h3 class="text-xl font-semibold mb-4">{{ faq.question }}</h3>
              <p class="opacity-85">{{ faq.answer }}</p>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { reactive, ref, computed } from 'vue';

const { t, tm } = useI18n();

// Form submission state
const formSubmitted = ref(false);
const token = ref('');

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

const errors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  projectType: '',
  message: '',
  impact: '',
  timeframe: ''
});

const turnstileError = ref('');
const isSubmitting = ref(false);

const impactOptions = computed(() => [
  { value: 'Under $1K', label: t('contact.form.impact_options.under_1k') },
  { value: '$1K-$5K', label: t('contact.form.impact_options.r1_5k') },
  { value: '$5K-$10K', label: t('contact.form.impact_options.r5_10k') },
  { value: '$10K+', label: t('contact.form.impact_options.over_10k') }
]);

const urgencyOptions = computed(() => [
  { value: 'ASAP', label: t('contact.form.urgency_options.asap') },
  { value: '1-2 Weeks', label: t('contact.form.urgency_options.weeks') },
  { value: '1-2 Months', label: t('contact.form.urgency_options.months') },
  { value: '3+ Months', label: t('contact.form.urgency_options.later') }
]);

const faqs = computed(() => tm('contact.faq.items'));

const errorMessages = {
  firstName: 'contact.errors.required_first_name',
  lastName: 'contact.errors.required_last_name',
  email: 'contact.errors.required_email',
  projectType: 'contact.errors.required_project_type',
  message: 'contact.errors.required_message'
};

const clearErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = '';
  });
  turnstileError.value = '';
};

const validateField = (fieldName) => {
  if (!form[fieldName]) {
    errors[fieldName] = t(errorMessages[fieldName]);
    return false;
  }

  if (fieldName === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = t('contact.errors.invalid_email');
    return false;
  }

  errors[fieldName] = '';
  return true;
};

const selectImpact = (impact) => {
  form.impact = impact;
  errors.impact = '';
};

const selectTimeframe = (timeframe) => {
  form.timeframe = timeframe;
  errors.timeframe = '';
};

const validateForm = () => {
  let isValid = true;
  clearErrors();

  ['firstName', 'lastName', 'email', 'projectType', 'message'].forEach((field) => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  if (!form.impact) {
    errors.impact = t('contact.errors.required_impact');
    isValid = false;
  }

  if (!form.timeframe) {
    errors.timeframe = t('contact.errors.required_timeframe');
    isValid = false;
  }

  if (!token.value) {
    turnstileError.value = t('contact.form.turnstile_error');
    isValid = false;
  }

  return isValid;
};

const resetForm = () => {
  Object.keys(form).forEach((key) => {
    form[key] = '';
  });
  clearErrors();
  token.value = '';
  formSubmitted.value = false;
};

const handleSubmit = async () => {
  if (!validateForm()) {
    const firstErrorField = document.querySelector('.border-red-500');
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    return;
  }

  try {
    isSubmitting.value = true;

    await $fetch('/api/contactFormSubmit', {
      method: 'POST',
      body: {
        ...form,
        token: token.value
      }
    });

    formSubmitted.value = true;

    const formContainer = document.querySelector('.lg\\:col-span-3');
    if (formContainer) {
      formContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert(t('contact.form.submit_error'));
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
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

.section-spacing {
  margin-bottom: 5rem;
}

select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;
}

button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style>
