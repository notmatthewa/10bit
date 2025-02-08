<template>
    <div class="min-h-screen bg-[#f3f3f3] text-black font-sans">
      <!-- Navbar -->
      <nav class="bg-white border-b border-gray-300 p-4 shadow-md flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <img src="https://via.placeholder.com/100x40" alt="ChainGPT Labs" class="h-8" />
          <h1 class="text-xl font-bold">ChainGPT Labs</h1>
        </div>
        <ul class="hidden md:flex space-x-6 text-sm">
          <li><a href="#" class="hover:text-orange-500">Our Programs</a></li>
          <li><a href="#" class="hover:text-orange-500">Portfolio</a></li>
          <li><a href="#" class="hover:text-orange-500">Media</a></li>
          <li><a href="#" class="hover:text-orange-500">Reviews</a></li>
          <li><a href="#" class="hover:text-orange-500">Team</a></li>
          <li><a href="#" class="hover:text-orange-500">FAQ</a></li>
          <li><a href="#" class="hover:text-orange-500">Blog</a></li>
          <li><a href="#" class="hover:text-orange-500">Our Ecosystem</a></li>
        </ul>
        <button class="bg-[#ff6600] hover:bg-[#e65c00] text-white px-4 py-2 rounded-lg shadow-md text-sm">APPLY NOW</button>
      </nav>
      
      <!-- Hero Section -->
      <section class="py-20 text-center bg-[#f3f3f3] text-black">
        <div class="container mx-auto">
          <h2 class="text-7xl font-bold uppercase tracking-tight text-[#111]"><span class="text-[#ff6600]">Tomorrow</span></h2>
          <p class="mt-4 text-lg text-[#333] uppercase font-semibold">Backing Tomorrow</p>
          <p class="mt-6 max-w-lg mx-auto text-[#444] text-lg">Backing the very best Web3 builders - transforming visionary ideas into real-world growth.</p>
          <button class="mt-6 bg-[#ff6600] hover:bg-[#e65c00] text-white py-3 px-6 rounded-lg shadow-md uppercase font-semibold">
            Apply for Incubation
          </button>
        </div>
      </section>
  
      <!-- Partners Section -->
      <section class="py-16 bg-white border-t border-gray-300">
        <div class="container mx-auto text-center">
          <h3 class="text-3xl font-bold text-[#111] mb-8">Our Partners</h3>
          <div class="grid grid-cols-3 gap-8 items-center">
            <img src="https://via.placeholder.com/150x50" alt="Partner 1" class="h-12 mx-auto" />
            <img src="https://via.placeholder.com/150x50" alt="Partner 2" class="h-12 mx-auto" />
            <img src="https://via.placeholder.com/150x50" alt="Partner 3" class="h-12 mx-auto" />
          </div>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-white border-t border-gray-300 p-6 text-center text-gray-600 text-sm relative">
        <p>&copy; 2025 ChainGPT Labs. All rights reserved.</p>
        <div class="absolute bottom-4 right-4 bg-gray-900 p-4 rounded-lg shadow-md flex items-center space-x-2 text-white">
          <p>We use third-party cookies to personalize content, ads, and analyze website traffic.</p>
          <button class="bg-gray-700 px-4 py-2 rounded">Accept</button>
          <button class="bg-gray-700 px-4 py-2 rounded">Reject</button>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "ChainGPTLabsPage",
  };
  </script>
  
  <style>
  body {
    font-family: 'Inter', sans-serif;
    background-color: #f3f3f3;
  }
  </style>
  