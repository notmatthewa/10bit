<template>
  <div class="min-h-screen bg-[#f3f3f3] text-black font-sans relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-r from-[#ff6600] to-gray-500 opacity-30 blur-3xl animate-gradient-move"></div>
    <nav class="bg-white border-b border-gray-300 p-4 shadow-md flex justify-between items-center animate-fade-down relative z-10">
      <div class="flex items-center space-x-2">
        <img src="https://via.placeholder.com/100x40" alt="10Bit" class="h-8" />
        <h1 class="text-2xl font-extrabold tracking-wide text-[#ff6600] drop-shadow-lg">10Bit</h1>
      </div>
      <ul class="hidden md:flex space-x-6 text-lg font-medium">
        <li><a href="#" class="hover:text-[#ff6600] transition-all duration-300">Our Services</a></li>
        <li><a href="#" class="hover:text-[#ff6600] transition-all duration-300">Who We Are</a></li>
        <li><a href="#" class="hover:text-[#ff6600] transition-all duration-300">Why Choose Us?</a></li>
        <li><a href="#" class="hover:text-[#ff6600] transition-all duration-300">Contact</a></li>
      </ul>
    </nav>
    
    <section class="py-20 text-center text-black animate-fade-in relative z-10">
      <div class="container mx-auto">
        <h2 class="text-7xl font-extrabold uppercase tracking-wide text-[#111] drop-shadow-md">Welcome to <span class="text-[#ff6600] font-[Audiowide]">10Bit</span></h2>
        <p class="mt-4 text-2xl text-[#333] uppercase font-semibold">Your Trusted Partner in Software Solutions</p>
        <p class="mt-6 max-w-3xl mx-auto text-[#444] text-lg leading-relaxed">At 10Bit, we specialize in custom software development, system integration, and consulting services designed to help your business grow and scale seamlessly.</p>
      </div>
    </section>

    <section class="py-16 bg-white border-t border-gray-300 animate-fade-in relative z-10">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-extrabold text-[#111]">Who We Are</h3>
        <p class="mt-6 max-w-3xl mx-auto text-lg text-gray-700">We are two experienced software developers with a passion for solving business challenges through technology. Having worked in the industry for years, we understand the importance of scalable solutions that grow with your business. Our goal is simple – help businesses like yours scale efficiently with the right tools and strategies.</p>
      </div>
    </section>
    
    <section class="py-16 bg-white border-t border-gray-300 animate-fade-in relative z-10">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-extrabold text-[#111]">Our Services</h3>
        <p class="mt-6 text-lg text-gray-700">We offer a range of services designed to optimize your business processes and technology stack.</p>
        <div class="grid md:grid-cols-3 gap-12 mt-12">
          <div class="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 class="text-2xl font-bold text-[#ff6600]">Custom Software Solutions</h4>
            <p class="mt-4 text-gray-700 leading-relaxed">We create software that fits your unique needs. From web applications to mobile solutions, we design and develop custom systems that empower your business to work smarter, not harder.</p>
          </div>
          <div class="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 class="text-2xl font-bold text-[#ff6600]">System Integration</h4>
            <p class="mt-4 text-gray-700 leading-relaxed">We help you integrate your existing tools, databases, and platforms, ensuring they function cohesively. By connecting the dots between software systems, we improve your operational efficiency and reduce friction in your workflows.</p>
          </div>
          <div class="p-8 bg-gray-100 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h4 class="text-2xl font-bold text-[#ff6600]">Consulting Services</h4>
            <p class="mt-4 text-gray-700 leading-relaxed">Our consulting services are designed to help you make informed, data-driven decisions. From analyzing your current processes to recommending and implementing the best tools for your needs, we ensure that you’re always moving forward with the right strategy.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white border-t border-gray-300 animate-fade-in relative z-10">
      <div class="container mx-auto text-center">
        <h3 class="text-4xl font-extrabold text-[#111]">Ready to Grow Your Business?</h3>
        <p class="mt-4 text-lg text-gray-700">We’re here to help you succeed. Let’s work together to create the right technology solutions that will help your business scale. Whether you need custom software development, system integration, or expert consulting, we’ve got you covered.</p>
        <button class="mt-8 bg-[#ff6600] hover:bg-[#e65c00] text-white py-4 px-8 rounded-lg shadow-lg text-lg font-semibold uppercase hover:scale-110 transition-transform duration-300">
          Contact Us
        </button>
      </div>
    </section>

    <footer class="bg-white border-t border-gray-300 p-8 text-center text-gray-600 text-lg font-medium relative animate-slide-up">
      <p>&copy; 2025 10Bit. All rights reserved.</p>
    </footer>
  </div>
</template>


<script>
export default {
  name: "10BitPage",
};
</script>

<style>
body {
  font-family: 'Poppins', sans-serif;
  background-color: #f3f3f3;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes gradientMove {
  0% { transform: translateX(-20%) translateY(-10%); }
  50% { transform: translateX(20%) translateY(10%); }
  100% { transform: translateX(-20%) translateY(-10%); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

.animate-slide-up {
  animation: slideUp 1s ease-in-out;
}

.animate-gradient-move {
  animation: gradientMove 8s infinite alternate ease-in-out;
}
</style>