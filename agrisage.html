<!doctype html>
<html lang="en" class="h-full">
 <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Smart Farming Assistant</title>
  <script src="https://cdn.tailwindcss.com/3.4.17"></script>
  <script src="/_sdk/element_sdk.js"></script>
  <script src="/_sdk/data_sdk.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
  <script>
    tailwind.config = {
      theme: {
        extend: {
          fontFamily: {
            jakarta: ['Plus Jakarta Sans', 'sans-serif']
          },
          colors: {
            'farm-green': '#16a34a',
            'farm-green-dark': '#15803d',
            'farm-cream': '#fefce8',
            'farm-brown': '#78350f',
            'farm-sky': '#0ea5e9'
          }
        }
      }
    }
  </script>
  <style>
    .fade-in { animation: fadeIn 0.3s ease-out; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    .pulse-dot { animation: pulse 2s infinite; }
    @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
    .typing-indicator span { animation: typing 1.4s infinite both; }
    .typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
    .typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
    @keyframes typing { 0%, 60%, 100% { transform: translateY(0); } 30% { transform: translateY(-4px); } }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
  <style>body { box-sizing: border-box; }</style>
 </head>
 <body class="h-full bg-slate-50 font-jakarta overflow-hidden">
  <div id="app" class="h-full w-full flex"><!-- Mobile Menu Overlay -->
   <div id="mobile-overlay" class="fixed inset-0 bg-black/50 z-40 hidden lg:hidden" onclick="toggleMobileMenu()"></div><!-- Sidebar -->
   <aside id="sidebar" class="fixed lg:relative w-72 h-full bg-gradient-to-b from-farm-green to-farm-green-dark text-white flex flex-col z-50 transform -translate-x-full lg:translate-x-0 transition-transform duration-300"><!-- Logo -->
    <div class="p-6 border-b border-white/10">
     <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
       <svg class="w-7 h-7" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
       </svg>
      </div>
      <div>
       <h1 id="sidebar-title" class="font-bold text-lg">Smart Farm AI</h1>
       <p class="text-xs text-white/70">Intelligent Agriculture</p>
      </div>
     </div>
    </div><!-- Navigation -->
    <nav class="flex-1 p-4 space-y-2"><button onclick="showSection('dashboard')" id="nav-dashboard" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-white/20 text-white transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg><span class="font-medium">Dashboard</span> </button> <button onclick="showSection('chatbot')" id="nav-chatbot" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg><span class="font-medium">AI Chatbot</span> </button> <button onclick="showSection('disease')" id="nav-disease" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg><span class="font-medium">Disease Detection</span> </button> <button onclick="showSection('weather')" id="nav-weather" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg><span class="font-medium">Weather</span> </button> <button onclick="showSection('history')" id="nav-history" class="nav-btn w-full flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:bg-white/10 transition-all">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg><span class="font-medium">Query History</span> </button>
    </nav><!-- Sidebar Footer -->
    <div class="p-4 border-t border-white/10">
     <div class="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-xl">
      <div class="w-10 h-10 bg-farm-cream rounded-full flex items-center justify-center"><span class="text-farm-green font-bold">🌾</span>
      </div>
      <div>
       <p class="font-medium text-sm">Farmer Mode</p>
       <p class="text-xs text-white/60">AI Powered</p>
      </div>
     </div>
    </div>
   </aside><!-- Main Content -->
   <main class="flex-1 h-full overflow-auto"><!-- Mobile Header -->
    <header class="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between"><button onclick="toggleMobileMenu()" class="p-2 hover:bg-slate-100 rounded-lg">
      <svg class="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg></button>
     <h1 id="mobile-title" class="font-bold text-farm-green">Smart Farm AI</h1>
     <div class="w-10"></div>
    </header><!-- Dashboard Section -->
    <section id="section-dashboard" class="p-4 lg:p-8">
     <div class="max-w-7xl mx-auto"><!-- Welcome Header -->
      <div class="mb-8 fade-in">
       <h2 id="welcome-heading" class="text-2xl lg:text-3xl font-bold text-slate-800">Welcome back, Farmer! 👋</h2>
       <p class="text-slate-500 mt-1">Here's your farm overview for today</p>
      </div><!-- Stats Grid -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
       <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
        <div class="flex items-center justify-between mb-3">
         <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
         </div>
        </div>
        <p class="text-2xl font-bold text-slate-800" id="stat-queries">0</p>
        <p class="text-sm text-slate-500">AI Queries</p>
       </div>
       <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
        <div class="flex items-center justify-between mb-3">
         <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
         </div>
        </div>
        <p class="text-2xl font-bold text-slate-800" id="stat-scans">0</p>
        <p class="text-sm text-slate-500">Disease Scans</p>
       </div>
       <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
        <div class="flex items-center justify-between mb-3">
         <div class="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
         </div>
        </div>
        <p class="text-2xl font-bold text-slate-800" id="stat-temp">--°C</p>
        <p class="text-sm text-slate-500">Temperature</p>
       </div>
       <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
        <div class="flex items-center justify-between mb-3">
         <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
          <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
         </div>
        </div>
        <p class="text-2xl font-bold text-slate-800" id="stat-humidity">--%</p>
        <p class="text-sm text-slate-500">Humidity</p>
       </div>
      </div><!-- Quick Actions -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
       <div class="bg-gradient-to-br from-farm-green to-emerald-600 rounded-2xl p-6 text-white fade-in">
        <h3 class="text-xl font-bold mb-2">🤖 AI Farming Assistant</h3>
        <p class="text-white/80 mb-4">Get instant answers to your farming questions from our AI expert</p><button onclick="showSection('chatbot')" class="bg-white text-farm-green px-6 py-2 rounded-xl font-medium hover:bg-white/90 transition-colors"> Start Chat → </button>
       </div>
       <div class="bg-gradient-to-br from-farm-sky to-blue-600 rounded-2xl p-6 text-white fade-in">
        <h3 class="text-xl font-bold mb-2">🔬 Disease Detection</h3>
        <p class="text-white/80 mb-4">Upload a leaf photo to identify crop diseases instantly</p><button onclick="showSection('disease')" class="bg-white text-farm-sky px-6 py-2 rounded-xl font-medium hover:bg-white/90 transition-colors"> Scan Crop → </button>
       </div>
      </div><!-- Recent Activity -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 fade-in">
       <h3 class="text-lg font-bold text-slate-800 mb-4">📋 Recent Activity</h3>
       <div id="recent-activity" class="space-y-3">
        <p class="text-slate-500 text-center py-8">No recent activity yet. Start by asking a question!</p>
       </div>
      </div>
     </div>
    </section><!-- Chatbot Section -->
    <section id="section-chatbot" class="p-4 lg:p-8 hidden h-full">
     <div class="max-w-4xl mx-auto h-full flex flex-col" style="max-height: calc(100% - 2rem);">
      <div class="mb-4 fade-in">
       <h2 class="text-2xl font-bold text-slate-800">🤖 AI Farming Chatbot</h2>
       <p class="text-slate-500">Ask me anything about crops, soil, pests, and farming practices</p>
      </div><!-- Chat Container -->
      <div class="flex-1 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col overflow-hidden"><!-- Chat Messages -->
       <div id="chat-messages" class="flex-1 overflow-auto p-4 space-y-4">
        <div class="flex gap-3 fade-in">
         <div class="w-10 h-10 bg-farm-green rounded-full flex items-center justify-center flex-shrink-0"><span class="text-white text-lg">🌱</span>
         </div>
         <div class="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
          <p class="text-slate-700">Hello! I'm your AI farming assistant. Ask me about crop management, pest control, soil health, irrigation, or any agricultural topic. How can I help you today?</p>
         </div>
        </div>
       </div><!-- Chat Input -->
       <div class="p-4 border-t border-slate-100">
        <form id="chat-form" class="flex gap-3"><input type="text" id="chat-input" placeholder="Ask about crops, soil, pests..." class="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-green focus:border-transparent"> <button type="submit" id="chat-send-btn" class="px-6 py-3 bg-farm-green text-white rounded-xl font-medium hover:bg-farm-green-dark transition-colors flex items-center gap-2"> <span class="hidden sm:inline">Send</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg></button>
        </form>
       </div>
      </div>
     </div>
    </section><!-- Disease Detection Section -->
    <section id="section-disease" class="p-4 lg:p-8 hidden">
     <div class="max-w-4xl mx-auto">
      <div class="mb-6 fade-in">
       <h2 class="text-2xl font-bold text-slate-800">🔬 Crop Disease Detection</h2>
       <p class="text-slate-500">Upload a photo of a crop leaf to identify potential diseases</p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6"><!-- Upload Section -->
       <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 fade-in">
        <h3 class="font-bold text-slate-800 mb-4">📤 Upload Image</h3>
        <div id="drop-zone" class="border-2 border-dashed border-slate-300 rounded-xl p-8 text-center cursor-pointer hover:border-farm-green hover:bg-green-50/50 transition-all" onclick="document.getElementById('image-input').click()">
         <div id="upload-placeholder">
          <svg class="w-16 h-16 mx-auto text-slate-400 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p class="text-slate-600 font-medium mb-1">Drop image here or click to upload</p>
          <p class="text-slate-400 text-sm">Supports JPG, PNG up to 10MB</p>
         </div>
         <div id="image-preview-container" class="hidden"><img id="image-preview" class="max-h-48 mx-auto rounded-lg" alt="Preview">
          <p id="image-name" class="text-sm text-slate-500 mt-2"></p>
         </div>
        </div><input type="file" id="image-input" accept="image/*" class="hidden"> <button id="analyze-btn" onclick="analyzeImage()" disabled class="w-full mt-4 px-6 py-3 bg-farm-green text-white rounded-xl font-medium hover:bg-farm-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
         <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
         </svg><span>Analyze Image</span> </button>
       </div><!-- Results Section -->
       <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 fade-in">
        <h3 class="font-bold text-slate-800 mb-4">📊 Analysis Results</h3>
        <div id="disease-results" class="text-center py-8">
         <svg class="w-20 h-20 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
         </svg>
         <p class="text-slate-500">Upload an image to see disease analysis</p>
        </div>
        <div id="disease-loading" class="hidden text-center py-8">
         <div class="w-16 h-16 mx-auto border-4 border-farm-green border-t-transparent rounded-full animate-spin mb-4"></div>
         <p class="text-slate-600 font-medium">Analyzing image...</p>
         <p class="text-slate-400 text-sm">AI is examining your crop</p>
        </div>
        <div id="disease-result-content" class="hidden"><!-- Results will be inserted here -->
        </div>
       </div>
      </div><!-- Common Diseases Reference -->
      <div class="mt-8 bg-white rounded-2xl p-6 shadow-sm border border-slate-100 fade-in">
       <h3 class="font-bold text-slate-800 mb-4">📚 Common Crop Diseases Reference</h3>
       <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="p-4 bg-red-50 rounded-xl border border-red-100">
         <h4 class="font-semibold text-red-800 mb-1">🍂 Leaf Blight</h4>
         <p class="text-sm text-red-600">Brown spots with yellow halos on leaves</p>
        </div>
        <div class="p-4 bg-yellow-50 rounded-xl border border-yellow-100">
         <h4 class="font-semibold text-yellow-800 mb-1">🦠 Powdery Mildew</h4>
         <p class="text-sm text-yellow-600">White powdery coating on leaf surface</p>
        </div>
        <div class="p-4 bg-orange-50 rounded-xl border border-orange-100">
         <h4 class="font-semibold text-orange-800 mb-1">🔴 Rust Disease</h4>
         <p class="text-sm text-orange-600">Orange-brown pustules on leaves</p>
        </div>
        <div class="p-4 bg-purple-50 rounded-xl border border-purple-100">
         <h4 class="font-semibold text-purple-800 mb-1">⚫ Black Rot</h4>
         <p class="text-sm text-purple-600">V-shaped lesions from leaf edges</p>
        </div>
        <div class="p-4 bg-green-50 rounded-xl border border-green-100">
         <h4 class="font-semibold text-green-800 mb-1">🌿 Downy Mildew</h4>
         <p class="text-sm text-green-600">Gray fuzzy growth on leaf undersides</p>
        </div>
        <div class="p-4 bg-blue-50 rounded-xl border border-blue-100">
         <h4 class="font-semibold text-blue-800 mb-1">🔵 Bacterial Spot</h4>
         <p class="text-sm text-blue-600">Water-soaked spots that turn brown</p>
        </div>
       </div>
      </div>
     </div>
    </section><!-- Weather Section -->
    <section id="section-weather" class="p-4 lg:p-8 hidden">
     <div class="max-w-4xl mx-auto">
      <div class="mb-6 fade-in">
       <h2 class="text-2xl font-bold text-slate-800">🌤️ Weather Information</h2>
       <p class="text-slate-500">Real-time weather data for your farming area</p>
      </div><!-- Location Input -->
      <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 mb-6 fade-in">
       <div class="flex flex-col sm:flex-row gap-4">
        <div class="flex-1"><label class="block text-sm font-medium text-slate-700 mb-2">Location Coordinates</label>
         <div class="flex gap-3"><input type="number" id="lat-input" placeholder="Latitude" value="28.6139" step="0.0001" class="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-green"> <input type="number" id="lon-input" placeholder="Longitude" value="77.2090" step="0.0001" class="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-farm-green">
         </div>
        </div>
        <div class="flex items-end"><button onclick="fetchWeather()" class="px-6 py-3 bg-farm-sky text-white rounded-xl font-medium hover:bg-blue-600 transition-colors flex items-center gap-2">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg><span>Update</span> </button>
        </div>
       </div><button onclick="useCurrentLocation()" class="mt-3 text-sm text-farm-green hover:underline flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg> Use my current location </button>
      </div><!-- Weather Display -->
      <div id="weather-loading" class="hidden bg-white rounded-2xl p-12 shadow-sm border border-slate-100 text-center">
       <div class="w-16 h-16 mx-auto border-4 border-farm-sky border-t-transparent rounded-full animate-spin mb-4"></div>
       <p class="text-slate-600 font-medium">Fetching weather data...</p>
      </div>
      <div id="weather-error" class="hidden bg-red-50 rounded-2xl p-6 border border-red-100 text-center">
       <svg class="w-12 h-12 mx-auto text-red-400 mb-3" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
       </svg>
       <p class="text-red-600 font-medium">Unable to fetch weather data</p>
       <p class="text-red-500 text-sm mt-1">Please check your coordinates and try again</p>
      </div>
      <div id="weather-content" class="space-y-6"><!-- Current Weather Card -->
       <div class="bg-gradient-to-br from-farm-sky to-blue-600 rounded-2xl p-6 text-white fade-in">
        <div class="flex flex-col sm:flex-row items-center justify-between gap-6">
         <div class="text-center sm:text-left">
          <p class="text-white/80 text-sm mb-1">Current Weather</p>
          <p class="text-5xl font-bold" id="weather-temp">--°C</p>
          <p class="text-xl mt-2" id="weather-condition">Loading...</p>
         </div>
         <div id="weather-icon" class="text-8xl">
          ☀️
         </div>
        </div>
       </div><!-- Weather Details Grid -->
       <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
         <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
           <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
           </svg>
          </div><span class="text-slate-500 text-sm">Wind Speed</span>
         </div>
         <p class="text-2xl font-bold text-slate-800" id="weather-wind">-- km/h</p>
        </div>
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
         <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
           <svg class="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
           </svg>
          </div><span class="text-slate-500 text-sm">Humidity</span>
         </div>
         <p class="text-2xl font-bold text-slate-800" id="weather-humidity">--%</p>
        </div>
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
         <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
           <svg class="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
           </svg>
          </div><span class="text-slate-500 text-sm">Pressure</span>
         </div>
         <p class="text-2xl font-bold text-slate-800" id="weather-pressure">-- hPa</p>
        </div>
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in">
         <div class="flex items-center gap-3 mb-2">
          <div class="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
           <svg class="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
           </svg>
          </div><span class="text-slate-500 text-sm">UV Index</span>
         </div>
         <p class="text-2xl font-bold text-slate-800" id="weather-uv">--</p>
        </div>
       </div><!-- Farming Tips Based on Weather -->
       <div class="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 fade-in">
        <h3 class="font-bold text-slate-800 mb-4">🌾 Weather-Based Farming Tips</h3>
        <div id="weather-tips" class="space-y-3">
         <p class="text-slate-500 text-center py-4">Update weather to see farming recommendations</p>
        </div>
       </div>
      </div>
     </div>
    </section><!-- History Section -->
    <section id="section-history" class="p-4 lg:p-8 hidden">
     <div class="max-w-4xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 fade-in">
       <div>
        <h2 class="text-2xl font-bold text-slate-800">📋 Query History</h2>
        <p class="text-slate-500">Your previous AI conversations and disease scans</p>
       </div><button id="clear-history-btn" onclick="showClearConfirmation()" class="px-4 py-2 text-red-600 hover:bg-red-50 rounded-xl transition-colors flex items-center gap-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg><span>Clear All</span> </button>
      </div><!-- Clear Confirmation -->
      <div id="clear-confirmation" class="hidden mb-6 bg-red-50 rounded-xl p-4 border border-red-100 fade-in">
       <p class="text-red-700 font-medium mb-3">Are you sure you want to delete all history?</p>
       <div class="flex gap-3"><button onclick="clearAllHistory()" class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"> Yes, Delete All </button> <button onclick="hideClearConfirmation()" class="px-4 py-2 bg-white text-slate-600 rounded-lg hover:bg-slate-50 border border-slate-200 transition-colors"> Cancel </button>
       </div>
      </div><!-- Filter Tabs -->
      <div class="flex gap-2 mb-6 overflow-x-auto pb-2 fade-in"><button onclick="filterHistory('all')" id="filter-all" class="filter-btn px-4 py-2 bg-farm-green text-white rounded-xl font-medium whitespace-nowrap"> All </button> <button onclick="filterHistory('chat')" id="filter-chat" class="filter-btn px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-medium hover:bg-slate-200 whitespace-nowrap"> 💬 Chat </button> <button onclick="filterHistory('disease')" id="filter-disease" class="filter-btn px-4 py-2 bg-slate-100 text-slate-600 rounded-xl font-medium hover:bg-slate-200 whitespace-nowrap"> 🔬 Disease </button>
      </div><!-- History List -->
      <div id="history-list" class="space-y-4">
       <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
        <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p class="text-slate-500">No history yet. Start asking questions!</p>
       </div>
      </div>
     </div>
    </section>
   </main>
  </div>
  <script>
    // Application State
    let currentSection = 'dashboard';
    let historyData = [];
    let currentFilter = 'all';
    let uploadedImage = null;
    let weatherData = null;
    let isDeleting = false;

    // Default Configuration
    const defaultConfig = {
      app_title: 'Smart Farm AI',
      welcome_message: 'Welcome back, Farmer! 👋',
      chatbot_placeholder: 'Ask about crops, soil, pests...',
      primary_color: '#16a34a',
      secondary_color: '#0ea5e9',
      background_color: '#f8fafc',
      text_color: '#1e293b',
      accent_color: '#f59e0b'
    };

    // Initialize SDKs
    async function initApp() {
      // Initialize Element SDK
      if (window.elementSdk) {
        window.elementSdk.init({
          defaultConfig,
          onConfigChange: async (config) => {
            applyConfig(config);
          },
          mapToCapabilities: (config) => ({
            recolorables: [
              {
                get: () => config.background_color || defaultConfig.background_color,
                set: (v) => { config.background_color = v; window.elementSdk.setConfig({ background_color: v }); }
              },
              {
                get: () => config.secondary_color || defaultConfig.secondary_color,
                set: (v) => { config.secondary_color = v; window.elementSdk.setConfig({ secondary_color: v }); }
              },
              {
                get: () => config.text_color || defaultConfig.text_color,
                set: (v) => { config.text_color = v; window.elementSdk.setConfig({ text_color: v }); }
              },
              {
                get: () => config.primary_color || defaultConfig.primary_color,
                set: (v) => { config.primary_color = v; window.elementSdk.setConfig({ primary_color: v }); }
              },
              {
                get: () => config.accent_color || defaultConfig.accent_color,
                set: (v) => { config.accent_color = v; window.elementSdk.setConfig({ accent_color: v }); }
              }
            ],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
          }),
          mapToEditPanelValues: (config) => new Map([
            ['app_title', config.app_title || defaultConfig.app_title],
            ['welcome_message', config.welcome_message || defaultConfig.welcome_message],
            ['chatbot_placeholder', config.chatbot_placeholder || defaultConfig.chatbot_placeholder]
          ])
        });
      }

      // Initialize Data SDK
      if (window.dataSdk) {
        const dataHandler = {
          onDataChanged(data) {
            historyData = data;
            updateUI();
          }
        };

        const result = await window.dataSdk.init(dataHandler);
        if (!result.isOk) {
          console.error('Failed to initialize Data SDK');
        }
      }

      // Setup event listeners
      setupEventListeners();
      
      // Fetch initial weather
      fetchWeather();
    }

    function applyConfig(config) {
      const appTitle = config.app_title || defaultConfig.app_title;
      const welcomeMessage = config.welcome_message || defaultConfig.welcome_message;
      const chatPlaceholder = config.chatbot_placeholder || defaultConfig.chatbot_placeholder;
      const bgColor = config.background_color || defaultConfig.background_color;
      const textColor = config.text_color || defaultConfig.text_color;

      document.getElementById('sidebar-title').textContent = appTitle;
      document.getElementById('mobile-title').textContent = appTitle;
      document.getElementById('welcome-heading').textContent = welcomeMessage;
      document.getElementById('chat-input').placeholder = chatPlaceholder;
      
      document.body.style.backgroundColor = bgColor;
      document.querySelectorAll('.text-slate-800').forEach(el => {
        el.style.color = textColor;
      });
    }

    function updateUI() {
      updateStats();
      updateRecentActivity();
      renderHistory();
    }

    function updateStats() {
      const chatQueries = historyData.filter(h => h.type === 'chat').length;
      const diseaseScans = historyData.filter(h => h.type === 'disease').length;
      
      document.getElementById('stat-queries').textContent = chatQueries;
      document.getElementById('stat-scans').textContent = diseaseScans;
    }

    function updateRecentActivity() {
      const container = document.getElementById('recent-activity');
      const recent = [...historyData].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      ).slice(0, 5);

      if (recent.length === 0) {
        container.innerHTML = '<p class="text-slate-500 text-center py-8">No recent activity yet. Start by asking a question!</p>';
        return;
      }

      container.innerHTML = recent.map(item => `
        <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
          <div class="w-10 h-10 ${item.type === 'chat' ? 'bg-green-100' : 'bg-blue-100'} rounded-lg flex items-center justify-center flex-shrink-0">
            <span>${item.type === 'chat' ? '💬' : '🔬'}</span>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-slate-800 truncate">${escapeHtml(item.question)}</p>
            <p class="text-xs text-slate-500">${formatDate(item.timestamp)}</p>
          </div>
        </div>
      `).join('');
    }

    function setupEventListeners() {
      // Chat form
      document.getElementById('chat-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await sendChatMessage();
      });

      // Image input
      document.getElementById('image-input').addEventListener('change', handleImageSelect);

      // Drag and drop
      const dropZone = document.getElementById('drop-zone');
      dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropZone.classList.add('border-farm-green', 'bg-green-50');
      });
      dropZone.addEventListener('dragleave', () => {
        dropZone.classList.remove('border-farm-green', 'bg-green-50');
      });
      dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('border-farm-green', 'bg-green-50');
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
          handleFile(file);
        }
      });
    }

    // Navigation
    function showSection(section) {
      currentSection = section;
      
      // Hide all sections
      document.querySelectorAll('section[id^="section-"]').forEach(s => {
        s.classList.add('hidden');
      });
      
      // Show selected section
      document.getElementById(`section-${section}`).classList.remove('hidden');
      
      // Update nav buttons
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('bg-white/20');
        btn.classList.add('text-white/80', 'hover:bg-white/10');
      });
      
      const activeBtn = document.getElementById(`nav-${section}`);
      activeBtn.classList.add('bg-white/20');
      activeBtn.classList.remove('text-white/80', 'hover:bg-white/10');
      
      // Close mobile menu
      closeMobileMenu();
    }

    function toggleMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-overlay');
      sidebar.classList.toggle('-translate-x-full');
      overlay.classList.toggle('hidden');
    }

    function closeMobileMenu() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('mobile-overlay');
      sidebar.classList.add('-translate-x-full');
      overlay.classList.add('hidden');
    }

    // Chat Functions
    async function sendChatMessage() {
      const input = document.getElementById('chat-input');
      const question = input.value.trim();
      
      if (!question) return;
      
      // Check data limit
      if (historyData.length >= 999) {
        showToast('Maximum history limit reached. Please clear some history.', 'error');
        return;
      }

      const messagesContainer = document.getElementById('chat-messages');
      const sendBtn = document.getElementById('chat-send-btn');
      
      // Disable input
      input.disabled = true;
      sendBtn.disabled = true;
      
      // Add user message
      messagesContainer.innerHTML += `
        <div class="flex gap-3 justify-end fade-in">
          <div class="bg-farm-green text-white rounded-2xl rounded-tr-none px-4 py-3 max-w-[80%]">
            <p>${escapeHtml(question)}</p>
          </div>
          <div class="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-lg">👨‍🌾</span>
          </div>
        </div>
      `;
      
      // Add typing indicator
      const typingId = 'typing-' + Date.now();
      messagesContainer.innerHTML += `
        <div id="${typingId}" class="flex gap-3 fade-in">
          <div class="w-10 h-10 bg-farm-green rounded-full flex items-center justify-center flex-shrink-0">
            <span class="text-white text-lg">🌱</span>
          </div>
          <div class="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3">
            <div class="typing-indicator flex gap-1">
              <span class="w-2 h-2 bg-slate-400 rounded-full"></span>
              <span class="w-2 h-2 bg-slate-400 rounded-full"></span>
              <span class="w-2 h-2 bg-slate-400 rounded-full"></span>
            </div>
          </div>
        </div>
      `;
      
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
      input.value = '';
      
      // Simulate AI response
      setTimeout(async () => {
        const response = generateFarmingResponse(question);
        
        // Remove typing indicator
        document.getElementById(typingId)?.remove();
        
        // Add AI response
        messagesContainer.innerHTML += `
          <div class="flex gap-3 fade-in">
            <div class="w-10 h-10 bg-farm-green rounded-full flex items-center justify-center flex-shrink-0">
              <span class="text-white text-lg">🌱</span>
            </div>
            <div class="bg-slate-100 rounded-2xl rounded-tl-none px-4 py-3 max-w-[80%]">
              <p class="text-slate-700">${escapeHtml(response)}</p>
            </div>
          </div>
        `;
        
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        // Save to history
        if (window.dataSdk) {
          const result = await window.dataSdk.create({
            id: generateId(),
            type: 'chat',
            question: question,
            response: response,
            timestamp: new Date().toISOString(),
            image_name: ''
          });
          
          if (!result.isOk) {
            showToast('Failed to save to history', 'error');
          }
        }
        
        // Re-enable input
        input.disabled = false;
        sendBtn.disabled = false;
        input.focus();
      }, 1500);
    }

    function generateFarmingResponse(question) {
      const q = question.toLowerCase();
      
      const responses = {
        pest: "For pest management, I recommend integrated pest management (IPM). Start with biological controls like beneficial insects, use neem oil or insecticidal soaps for mild infestations, and only use chemical pesticides as a last resort. Regular monitoring and crop rotation help prevent pest buildup.",
        soil: "Healthy soil is the foundation of good farming. Test your soil pH regularly (ideal range 6.0-7.0 for most crops). Add organic matter through compost, practice crop rotation, and avoid over-tilling. Cover crops between seasons help prevent erosion and add nutrients.",
        water: "Efficient irrigation is crucial. Drip irrigation saves 30-50% water compared to flood irrigation. Water early morning to reduce evaporation. Monitor soil moisture levels and adjust based on crop growth stage. Mulching helps retain soil moisture.",
        fertilizer: "For organic fertilizers, compost and well-rotted manure are excellent. Apply nitrogen-rich fertilizers during vegetative growth, and phosphorus-potassium during flowering/fruiting. Always soil test before applying to avoid over-fertilization which can harm crops and environment.",
        crop: "Crop selection depends on your climate, soil type, and market demand. Consider crop rotation to prevent disease buildup. Companion planting can improve yields - for example, planting marigolds near tomatoes helps repel pests.",
        disease: "Disease prevention starts with healthy plants. Use disease-resistant varieties, practice crop rotation, ensure proper spacing for air circulation, and remove infected plant material promptly. Copper-based fungicides can help control fungal diseases organically.",
        harvest: "Harvest timing is crucial for quality. Most vegetables are best harvested in the morning when sugar content is highest. Watch for color changes, firmness, and size indicators specific to each crop. Handle produce gently to prevent bruising.",
        organic: "Organic farming avoids synthetic chemicals. Focus on building soil health with compost, use natural pest controls, practice crop rotation, and choose disease-resistant varieties. Certification requires following specific guidelines for 3+ years."
      };

      for (const [key, value] of Object.entries(responses)) {
        if (q.includes(key)) return value;
      }

      return "That's a great farming question! Based on general agricultural practices, I recommend consulting with your local agricultural extension office for region-specific advice. Key principles include: maintaining soil health through organic matter, proper water management, integrated pest management, and selecting appropriate crop varieties for your climate. Would you like me to elaborate on any of these topics?";
    }

    // Disease Detection Functions
    function handleImageSelect(e) {
      const file = e.target.files[0];
      if (file) handleFile(file);
    }

    function handleFile(file) {
      if (!file.type.startsWith('image/')) {
        showToast('Please upload an image file', 'error');
        return;
      }
      
      if (file.size > 10 * 1024 * 1024) {
        showToast('Image must be less than 10MB', 'error');
        return;
      }
      
      uploadedImage = file;
      
      const reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById('upload-placeholder').classList.add('hidden');
        document.getElementById('image-preview-container').classList.remove('hidden');
        document.getElementById('image-preview').src = e.target.result;
        document.getElementById('image-name').textContent = file.name;
        document.getElementById('analyze-btn').disabled = false;
      };
      reader.readAsDataURL(file);
    }

    async function analyzeImage() {
      if (!uploadedImage) return;
      
      // Check data limit
      if (historyData.length >= 999) {
        showToast('Maximum history limit reached. Please clear some history.', 'error');
        return;
      }

      const analyzeBtn = document.getElementById('analyze-btn');
      analyzeBtn.disabled = true;
      analyzeBtn.innerHTML = `
        <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        <span>Analyzing...</span>
      `;
      
      document.getElementById('disease-results').classList.add('hidden');
      document.getElementById('disease-loading').classList.remove('hidden');
      document.getElementById('disease-result-content').classList.add('hidden');
      
      // Simulate AI analysis
      setTimeout(async () => {
        const diseases = [
          { name: 'Leaf Blight', confidence: 87, severity: 'Moderate', treatment: 'Apply copper-based fungicide. Remove and destroy infected leaves. Ensure proper spacing for air circulation. Avoid overhead watering.' },
          { name: 'Powdery Mildew', confidence: 92, severity: 'Mild', treatment: 'Apply sulfur-based fungicide or neem oil. Improve air circulation. Water at base of plants. Remove severely affected leaves.' },
          { name: 'Rust Disease', confidence: 78, severity: 'Severe', treatment: 'Apply fungicide containing myclobutanil. Remove all infected plant material. Practice crop rotation. Plant resistant varieties next season.' },
          { name: 'Healthy Leaf', confidence: 95, severity: 'None', treatment: 'Your crop appears healthy! Continue regular monitoring and maintain good agricultural practices.' }
        ];
        
        const result = diseases[Math.floor(Math.random() * diseases.length)];
        
        document.getElementById('disease-loading').classList.add('hidden');
        document.getElementById('disease-result-content').classList.remove('hidden');
        
        const severityColors = {
          'None': 'bg-green-100 text-green-800',
          'Mild': 'bg-yellow-100 text-yellow-800',
          'Moderate': 'bg-orange-100 text-orange-800',
          'Severe': 'bg-red-100 text-red-800'
        };
        
        document.getElementById('disease-result-content').innerHTML = `
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h4 class="text-xl font-bold text-slate-800">${result.name}</h4>
              <span class="px-3 py-1 ${severityColors[result.severity]} rounded-full text-sm font-medium">
                ${result.severity}
              </span>
            </div>
            
            <div class="flex items-center gap-3">
              <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden">
                <div class="h-full bg-farm-green rounded-full transition-all" style="width: ${result.confidence}%"></div>
              </div>
              <span class="text-sm font-medium text-slate-600">${result.confidence}% confidence</span>
            </div>
            
            <div class="bg-slate-50 rounded-xl p-4">
              <h5 class="font-semibold text-slate-700 mb-2">💊 Treatment Recommendation</h5>
              <p class="text-slate-600 text-sm">${result.treatment}</p>
            </div>
            
            <div class="bg-amber-50 rounded-xl p-4 border border-amber-100">
              <h5 class="font-semibold text-amber-700 mb-2">⚠️ Important Note</h5>
              <p class="text-amber-600 text-sm">This is an AI-powered analysis for demonstration purposes. For accurate diagnosis, please consult with a local agricultural expert or extension service.</p>
            </div>
          </div>
        `;
        
        // Save to history
        if (window.dataSdk) {
          const saveResult = await window.dataSdk.create({
            id: generateId(),
            type: 'disease',
            question: `Disease scan: ${result.name}`,
            response: result.treatment,
            timestamp: new Date().toISOString(),
            image_name: uploadedImage.name
          });
          
          if (!saveResult.isOk) {
            showToast('Failed to save to history', 'error');
          }
        }
        
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = `
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
          <span>Analyze Image</span>
        `;
      }, 2500);
    }

    // Weather Functions
    async function fetchWeather() {
      const lat = document.getElementById('lat-input').value || 28.6139;
      const lon = document.getElementById('lon-input').value || 77.2090;
      
      document.getElementById('weather-loading').classList.remove('hidden');
      document.getElementById('weather-error').classList.add('hidden');
      document.getElementById('weather-content').classList.add('hidden');
      
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,surface_pressure,uv_index&timezone=auto`
        );
        
        if (!response.ok) throw new Error('Weather fetch failed');
        
        weatherData = await response.json();
        displayWeather(weatherData);
      } catch (error) {
        document.getElementById('weather-loading').classList.add('hidden');
        document.getElementById('weather-error').classList.remove('hidden');
      }
    }

    function displayWeather(data) {
      document.getElementById('weather-loading').classList.add('hidden');
      document.getElementById('weather-content').classList.remove('hidden');
      
      const current = data.current;
      
      document.getElementById('weather-temp').textContent = `${Math.round(current.temperature_2m)}°C`;
      document.getElementById('stat-temp').textContent = `${Math.round(current.temperature_2m)}°C`;
      document.getElementById('weather-humidity').textContent = `${current.relative_humidity_2m}%`;
      document.getElementById('stat-humidity').textContent = `${current.relative_humidity_2m}%`;
      document.getElementById('weather-wind').textContent = `${Math.round(current.wind_speed_10m)} km/h`;
      document.getElementById('weather-pressure').textContent = `${Math.round(current.surface_pressure)} hPa`;
      document.getElementById('weather-uv').textContent = current.uv_index?.toFixed(1) || '--';
      
      const weatherInfo = getWeatherInfo(current.weather_code);
      document.getElementById('weather-condition').textContent = weatherInfo.condition;
      document.getElementById('weather-icon').textContent = weatherInfo.icon;
      
      // Generate farming tips
      const tips = generateWeatherTips(current);
      document.getElementById('weather-tips').innerHTML = tips.map(tip => `
        <div class="flex items-start gap-3 p-3 bg-slate-50 rounded-xl">
          <span class="text-xl">${tip.icon}</span>
          <div>
            <p class="font-medium text-slate-700">${tip.title}</p>
            <p class="text-sm text-slate-500">${tip.message}</p>
          </div>
        </div>
      `).join('');
    }

    function getWeatherInfo(code) {
      const weatherCodes = {
        0: { condition: 'Clear Sky', icon: '☀️' },
        1: { condition: 'Mainly Clear', icon: '🌤️' },
        2: { condition: 'Partly Cloudy', icon: '⛅' },
        3: { condition: 'Overcast', icon: '☁️' },
        45: { condition: 'Foggy', icon: '🌫️' },
        48: { condition: 'Rime Fog', icon: '🌫️' },
        51: { condition: 'Light Drizzle', icon: '🌧️' },
        53: { condition: 'Moderate Drizzle', icon: '🌧️' },
        55: { condition: 'Dense Drizzle', icon: '🌧️' },
        61: { condition: 'Slight Rain', icon: '🌧️' },
        63: { condition: 'Moderate Rain', icon: '🌧️' },
        65: { condition: 'Heavy Rain', icon: '🌧️' },
        71: { condition: 'Slight Snow', icon: '🌨️' },
        73: { condition: 'Moderate Snow', icon: '🌨️' },
        75: { condition: 'Heavy Snow', icon: '🌨️' },
        77: { condition: 'Snow Grains', icon: '🌨️' },
        80: { condition: 'Rain Showers', icon: '🌦️' },
        81: { condition: 'Moderate Showers', icon: '🌦️' },
        82: { condition: 'Violent Showers', icon: '⛈️' },
        85: { condition: 'Snow Showers', icon: '🌨️' },
        86: { condition: 'Heavy Snow Showers', icon: '🌨️' },
        95: { condition: 'Thunderstorm', icon: '⛈️' },
        96: { condition: 'Thunderstorm with Hail', icon: '⛈️' },
        99: { condition: 'Heavy Thunderstorm', icon: '⛈️' }
      };
      
      return weatherCodes[code] || { condition: 'Unknown', icon: '🌡️' };
    }

    function generateWeatherTips(current) {
      const tips = [];
      
      if (current.temperature_2m > 35) {
        tips.push({ icon: '🌡️', title: 'Heat Alert', message: 'High temperatures detected. Increase irrigation frequency and consider shade cloth for sensitive crops.' });
      } else if (current.temperature_2m < 10) {
        tips.push({ icon: '❄️', title: 'Cold Alert', message: 'Low temperatures may stress crops. Consider row covers or mulching to protect sensitive plants.' });
      } else {
        tips.push({ icon: '✅', title: 'Good Temperature', message: 'Temperature is ideal for most crops. Great conditions for fieldwork and planting.' });
      }
      
      if (current.relative_humidity_2m > 80) {
        tips.push({ icon: '💧', title: 'High Humidity', message: 'Risk of fungal diseases. Ensure good air circulation and avoid overhead watering.' });
      } else if (current.relative_humidity_2m < 40) {
        tips.push({ icon: '🏜️', title: 'Low Humidity', message: 'Dry conditions may increase plant stress. Monitor soil moisture closely.' });
      }
      
      if (current.wind_speed_10m > 30) {
        tips.push({ icon: '💨', title: 'High Winds', message: 'Strong winds detected. Secure greenhouses and avoid spraying pesticides.' });
      }
      
      if (current.uv_index > 8) {
        tips.push({ icon: '☀️', title: 'High UV Index', message: 'Protect yourself during fieldwork. Consider shade for transplants.' });
      }
      
      return tips;
    }

    function useCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            document.getElementById('lat-input').value = position.coords.latitude.toFixed(4);
            document.getElementById('lon-input').value = position.coords.longitude.toFixed(4);
            fetchWeather();
          },
          () => {
            showToast('Unable to get location. Please enter coordinates manually.', 'error');
          }
        );
      } else {
        showToast('Geolocation not supported by your browser.', 'error');
      }
    }

    // History Functions
    function filterHistory(filter) {
      currentFilter = filter;
      
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-farm-green', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-600');
      });
      
      const activeBtn = document.getElementById(`filter-${filter}`);
      activeBtn.classList.remove('bg-slate-100', 'text-slate-600');
      activeBtn.classList.add('bg-farm-green', 'text-white');
      
      renderHistory();
    }

    function renderHistory() {
      const container = document.getElementById('history-list');
      
      let filtered = historyData;
      if (currentFilter !== 'all') {
        filtered = historyData.filter(h => h.type === currentFilter);
      }
      
      filtered = [...filtered].sort((a, b) => 
        new Date(b.timestamp) - new Date(a.timestamp)
      );
      
      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
            <svg class="w-16 h-16 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <p class="text-slate-500">${currentFilter === 'all' ? 'No history yet. Start asking questions!' : `No ${currentFilter} history found.`}</p>
          </div>
        `;
        return;
      }
      
      container.innerHTML = filtered.map(item => `
        <div class="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 fade-in" data-id="${item.__backendId || item.id}">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 ${item.type === 'chat' ? 'bg-green-100' : 'bg-blue-100'} rounded-xl flex items-center justify-center flex-shrink-0">
              <span class="text-2xl">${item.type === 'chat' ? '💬' : '🔬'}</span>
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-4">
                <div class="flex-1 min-w-0">
                  <p class="font-semibold text-slate-800">${escapeHtml(item.question)}</p>
                  <p class="text-sm text-slate-500 mt-1 line-clamp-2">${escapeHtml(item.response)}</p>
                </div>
                <button 
                  onclick="deleteHistoryItem('${item.__backendId || item.id}')"
                  class="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                  title="Delete"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                  </svg>
                </button>
              </div>
              <div class="flex items-center gap-3 mt-3">
                <span class="px-2 py-1 ${item.type === 'chat' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'} rounded-lg text-xs font-medium">
                  ${item.type === 'chat' ? 'Chat' : 'Disease Scan'}
                </span>
                <span class="text-xs text-slate-400">${formatDate(item.timestamp)}</span>
              </div>
            </div>
          </div>
        </div>
      `).join('');
    }

    async function deleteHistoryItem(id) {
      if (isDeleting) return;
      
      const item = historyData.find(h => (h.__backendId || h.id) === id);
      if (!item || !window.dataSdk) return;
      
      isDeleting = true;
      
      const result = await window.dataSdk.delete(item);
      
      if (!result.isOk) {
        showToast('Failed to delete item', 'error');
      }
      
      isDeleting = false;
    }

    function showClearConfirmation() {
      document.getElementById('clear-confirmation').classList.remove('hidden');
    }

    function hideClearConfirmation() {
      document.getElementById('clear-confirmation').classList.add('hidden');
    }

    async function clearAllHistory() {
      if (!window.dataSdk || historyData.length === 0) {
        hideClearConfirmation();
        return;
      }
      
      const clearBtn = document.getElementById('clear-history-btn');
      clearBtn.disabled = true;
      
      for (const item of historyData) {
        await window.dataSdk.delete(item);
      }
      
      clearBtn.disabled = false;
      hideClearConfirmation();
      showToast('History cleared successfully', 'success');
    }

    // Utility Functions
    function generateId() {
      return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    function formatDate(timestamp) {
      const date = new Date(timestamp);
      const now = new Date();
      const diff = now - date;
      
      if (diff < 60000) return 'Just now';
      if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
      if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;
      if (diff < 604800000) return `${Math.floor(diff / 86400000)}d ago`;
      
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    function escapeHtml(text) {
      const div = document.createElement('div');
      div.textContent = text;
      return div.innerHTML;
    }

    function showToast(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `fixed bottom-4 right-4 px-6 py-3 rounded-xl shadow-lg z-50 fade-in ${
        type === 'error' ? 'bg-red-500 text-white' : 
        type === 'success' ? 'bg-green-500 text-white' : 
        'bg-slate-800 text-white'
      }`;
      toast.textContent = message;
      document.body.appendChild(toast);
      
      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s';
        setTimeout(() => toast.remove(), 300);
      }, 3000);
    }

    // Initialize on load
    initApp();
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9d8a701815fd47c5',t:'MTc3Mjg5NTI5Mi4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
