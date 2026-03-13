// Light and dark mode
var btn = document.getElementById("theme-toggle-button");
var html = document.querySelector("html");
btn.addEventListener("click", function () {
  html.classList.toggle("dark");
});

// Nav Links with scroll
const pageSections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");
window.addEventListener("scroll", function () {
  let currentSection = "";
  for (let i = 0; i < pageSections.length; i++) {
    if (window.scrollY >= pageSections[i].offsetTop - 50) {
      currentSection = pageSections[i].id;
    }
    for (let j = 0; j < links.length; j++) {
      linksEdited = links[j];
      linksEdited.classList.remove("active");
      if (linksEdited.getAttribute("href") === "#" + currentSection) {
        linksEdited.classList.add("active");
      }
    }
  }
});

// Scroll To Top
const scrollBtn = document.getElementById("scroll-to-top");
const footerSection = document.getElementById("footer");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 300) {
    scrollBtn.classList.remove("opacity-0", "invisible");
  } else {
    scrollBtn.classList.add("opacity-0", "invisible");
  }
  scrollBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Navs and Tabs

const web = document.getElementById("web");
const apps = document.getElementById("apps");
const design = document.getElementById("design");
const eCommerce = document.getElementById("eCommerce");
const portfolioGrid = document.getElementById("portfolio-grid");
const btnActive = document.getElementById("btnActive");


// All 
btnActive.addEventListener("click", function () {

    btnActive.classList.add("activeLink");
    web.classList.remove("activeLink");
    apps.classList.remove("activeLink");
    design.classList.remove("activeLink");
    eCommerce.classList.remove("activeLink");

  portfolioGrid.innerHTML = `
                <div
              class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-1-BqicZ04C.webp"
                  alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex gap-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Node.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >MongoDB</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-2-D0_acfF_.webp"
                  alt="mobile task management app interface with colorful cards, todo list, modern UI design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Tailwind</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-3-uJsBXCgl.webp"
                  alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم موقع شخصي بأسلوب عصري وألوان جريئة
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >UI/UX</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prototype</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-4-Czusdp5K.webp"
                  alt="corporate business website with professional layout, blue and white color scheme, modern design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  موقع احترافي لشركة استشارات مع نظام حجز المواعيد
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prisma</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-5-ChqqtI-W.webp"
                  alt="social media dashboard with analytics charts, user engagement metrics, modern interface design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تحليل وإدارة حسابات التواصل الاجتماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Chart.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >API</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="ecommerce"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-6-C9bxzsei.webp"
                  alt="fashion e-commerce website with luxury product display, elegant design, shopping experience"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تجارة</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Stripe</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sanity</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-7-BXDNVwGk.webp"
                  alt="restaurant website with food menu, online ordering system, appetizing food photography"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة طلب طعام مع نظام توصيل وتتبع الطلبات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Express</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >PostgreSQL</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-8-BnHB_F_a.webp"
                  alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق متكامل لتتبع التمارين والتغذية والتقدم
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React Native</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Redux</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                </div>
              </div>
            </div>

            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-9-Q6q-wpwU.webp"
                  alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Adobe XD</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sketch</span
                  >
                </div>
              </div>
            </div>`;
});

// Web
web.addEventListener("click", function () {
    btnActive.classList.remove("activeLink");
    apps.classList.remove("activeLink");
    design.classList.remove("activeLink");
    eCommerce.classList.remove("activeLink");
    web.classList.add("activeLink");
  portfolioGrid.innerHTML = `<div
              class="portfolio-item group relative bg-slate-50 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-1-BqicZ04C.webp"
                  alt="modern e-commerce website design with purple gradient, shopping cart interface, product showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex gap-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر إلكتروني متكامل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تجارة إلكترونية حديثة مع نظام دفع آمن وإدارة المنتجات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Node.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >MongoDB</span
                  >
                </div>
              </div>
            </div>
            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-4-Czusdp5K.webp"
                  alt="corporate business website with professional layout, blue and white color scheme, modern design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شركة استشارية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  موقع احترافي لشركة استشارات مع نظام حجز المواعيد
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >TypeScript</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prisma</span
                  >
                </div>
              </div>
            </div>
             <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-primary transition-all duration-300"
              data-category="web"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-7-BXDNVwGk.webp"
                  alt="restaurant website with food menu, online ordering system, appetizing food photography"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >موقع ويب</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع مطعم وتوصيل</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة طلب طعام مع نظام توصيل وتتبع الطلبات
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Express</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >PostgreSQL</span
                  >
                </div>
              </div>
            </div>
            

            `;
});

// Apps
apps.addEventListener("click", function () {
    web.classList.remove("activeLink");
    btnActive.classList.remove("activeLink");
    design.classList.remove("activeLink");
    eCommerce.classList.remove("activeLink");
    apps.classList.add("activeLink");
    portfolioGrid.innerHTML=` <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-2-D0_acfF_.webp"
                  alt="mobile task management app interface with colorful cards, todo list, modern UI design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق إدارة المهام</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق ويب تفاعلي لإدارة المهام مع ميزات التعاون الجماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Vue.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Tailwind</span
                  >
                </div>
              </div>
            </div>
            <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-5-ChqqtI-W.webp"
                  alt="social media dashboard with analytics charts, user engagement metrics, modern interface design"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">لوحة تحليلات اجتماعية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تحليل وإدارة حسابات التواصل الاجتماعي
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Chart.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >API</span
                  >
                </div>
              </div>
            </div>
             <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-secondary transition-all duration-300"
              data-category="app"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-8-BnHB_F_a.webp"
                  alt="fitness tracking app interface with workout plans, progress charts, health metrics dashboard"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-secondary/20 text-secondary rounded-full text-sm font-medium"
                    >تطبيق</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تطبيق لياقة بدنية</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تطبيق متكامل لتتبع التمارين والتغذية والتقدم
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >React Native</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Redux</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Firebase</span
                  >
                </div>
              </div>
            </div>`
});


// Design
design.addEventListener("click", function () {
    apps.classList.remove("activeLink");
    web.classList.remove("activeLink");
    btnActive.classList.remove("activeLink");
    eCommerce.classList.remove("activeLink");
    design.classList.add("activeLink");
    portfolioGrid.innerHTML=`<div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-3-uJsBXCgl.webp"
                  alt="modern portfolio website design with minimalist layout, creative typography, pink and purple accents"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">موقع شخصي إبداعي</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم موقع شخصي بأسلوب عصري وألوان جريئة
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >UI/UX</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Prototype</span
                  >
                </div>
              </div>
            </div>
             <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="design"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-9-Q6q-wpwU.webp"
                  alt="mobile app ui design mockup with colorful screens, modern interface, user experience showcase"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تصميم</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="تصميم المشروع على Figma"
                    >
                      <i
                        class="fa-brands fa-figma text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">تصميم تطبيق جوال</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  تصميم UI/UX كامل لتطبيق جوال متعدد الوظائف
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Figma</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Adobe XD</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sketch</span
                  >
                </div>
              </div>
            </div>`
});


// Ecommerce
eCommerce.addEventListener("click", function () {
    apps.classList.remove("activeLink");
    web.classList.remove("activeLink");
    btnActive.classList.remove("activeLink");
    design.classList.remove("activeLink");
    eCommerce.classList.add("activeLink");
    portfolioGrid.innerHTML=`  <div
              class="portfolio-item group relative bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-300 dark:border-slate-700 hover:border-accent transition-all duration-300"
              data-category="ecommerce"
            >
              <div class="relative h-72 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  src="images/portfolio-6-C9bxzsei.webp"
                  alt="fashion e-commerce website with luxury product display, elegant design, shopping experience"
                />
                <div
                  class="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                ></div>
              </div>
              <div class="p-6">
                <div class="flex items-center justify-between mb-3">
                  <span
                    class="px-4 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium"
                    >تجارة</span
                  >
                  <div class="flex space-x-2">
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="معاينة المشروع"
                    >
                      <i
                        class="fa-solid fa-eye text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                    <a
                      href="#"
                      class="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300 group"
                      aria-label="كود المشروع على GitHub"
                    >
                      <i
                        class="fa-brands fa-github text-slate-600 dark:text-white group-hover:dark:text-white hover:text-white"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </div>
                </div>
                <h3 class="text-2xl font-bold mb-2">متجر أزياء فاخر</h3>
                <p class="text-slate-500 dark:text-slate-400 mb-4">
                  منصة تسوق راقية للأزياء مع تجربة مستخدم استثنائية
                </p>
                <div class="flex flex-wrap gap-2">
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Next.js</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Stripe</span
                  >
                  <span
                    class="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-lg text-xs"
                    >Sanity</span
                  >
                </div>
              </div>
            </div>`
});



// Carousel
const testimonialCarousel=document.getElementById("testimonials-carousel")
const cards=document.querySelectorAll(".testimonial-card")
const carouselIndicator=document.querySelectorAll(".carousel-indicator")
const cardWidth = cards[0].offsetWidth
let index=0
function moveCarousel(){
  testimonialCarousel.style.transform=`translateX(${index*cardWidth}px)`
  for(let i=0 ; i<carouselIndicator.length ; i++){
    if(i===index){
      carouselIndicator[i].classList.remove("bg-slate-400")
      carouselIndicator[i].classList.add("bg-primary")
    }
    else{
       carouselIndicator[i].classList.add("bg-slate-400")
      carouselIndicator[i].classList.remove("bg-primary")
    }
  }
}

for(let i = 0 ; i<carouselIndicator.length;i++ ){
  carouselIndicator[i].addEventListener("click",function(){
    index=i
    moveCarousel()
    
  })
}


// Previous and next
const prevButton = document.getElementById("prev-testimonial")
const nextButton = document.getElementById("next-testimonial")
nextButton.addEventListener("click",function(){
  if(index < cards.length - 1){
    index++
    moveCarousel()
  }
})


prevButton.addEventListener("click",function(){
  if(index >0){
    index--
    moveCarousel()
  }
})








// Toggle setting(gear)

const settingsSidebar =document.getElementById("settings-sidebar")   
const settingsToggle=document.getElementById("settings-toggle");
const xIcon = document.getElementById("x-icon");
const resetSettings =document.getElementById("reset-settings")

settingsToggle.addEventListener("click",function(){
  settingsSidebar.classList.remove("opacity-0","translate-x-full","invisible")
})

xIcon.addEventListener("click",function(){
    settingsSidebar.classList.add("opacity-0","translate-x-full","invisible")

})
resetSettings.addEventListener("click",function(){
   settingsSidebar.classList.add("opacity-0","translate-x-full","invisible")
})





// Fonts and colors

// ~ fonts
const alexandriaFont = document.getElementById("alexandriaFont")
const tajawalFont =document.getElementById("tajawalFont")
const cairoFont =document.getElementById("cairoFont")
const bodyFamilyFont = document.querySelector("body")

// alex
alexandriaFont.addEventListener("click" ,function(){
//  bodyFamilyFont.classList.add("alexandria-font")
bodyFamilyFont.classList.replace("tajawalFont","alexandria-font")
bodyFamilyFont.classList.toggle("alexandria-font")
})

// Tajawal
tajawalFont.addEventListener("click",function(){
  bodyFamilyFont.classList.toggle("tajawalFont")
})

// Cairo 
cairoFont.addEventListener("click",function(){
  bodyFamilyFont.classList.replace("tajawalFont","cairoFont")
  bodyFamilyFont.classList.toggle("cairoFont")
})






// Colors
const firstColoredBtn =document.getElementById("firstColoredBtn")
const secondColoredBtn =document.getElementById("secondColoredBtn")
const thirdColoredBtn =document.getElementById("thirdColoredBtn")
const fourthColoredBtn =document.getElementById("fourthColoredBtn")
const fifthColoredBtn =document.getElementById("fifthColoredBtn")
const sixColoredBtn =document.getElementById("sixColoredBtn")




// VARS
const divColored =document.querySelector(".divColored")
const leftTop =document.querySelector(".leftTop")
const imgContainer =document.querySelector(".imgContainer")
const fitAfterImg =document.querySelector(".fitAfterImg")
const borderedAnimation =document.querySelector(".borderedAnimation")
const heading = document.querySelector(".heading")
const btnColored =document.querySelector(".btnColored")
const btnColored1 =document.querySelector(".btnColored-1")
const headA =document.querySelector(".headA")




firstColoredBtn.addEventListener("click",function(){
  divColored.classList.add("lineardiv-purple")
  leftTop.classList.add("leftTop-purple")
  imgContainer.classList.add("leftTop-purple")
  fitAfterImg.classList.add("leftTop-purple")
  borderedAnimation.classList.add("border-purple")
  heading.classList.add("leftTop-purple")
  btnColored.classList.add("leftTop-purple ")
  btnColored1.classList.add("leftTop-purple ")
  headA.classList.add("leftTop-purple")
})


secondColoredBtn.addEventListener("click",function(){
  divColored.classList.add("lineardiv-pink")
  leftTop.classList.add("leftTop-pink")
  imgContainer.classList.add("leftTop-pink")
  fitAfterImg.classList.add("leftTop-pink")
  borderedAnimation.classList.add("border-pink")
  heading.classList.add("leftTop-pink")
  btnColored.classList.add("leftTop-pink")
  btnColored1.classList.add("leftTop-pink")
  headA.classList.add("leftTop-pink")
  
})

thirdColoredBtn.addEventListener("click",function(){
  divColored.classList.add("lineardiv-mint")
  leftTop.classList.add("leftTop-mint")
  imgContainer.classList.add("leftTop-mint")
  borderedAnimation.classList.add("border-mint")
  fitAfterImg.classList.add("leftTop-mint") 
  heading.classList.add("leftTop-mint")
  btnColored.classList.add("leftTop-mint")
  btnColored1.classList.add("leftTop-mint")
  headA.classList.add("leftTop-mint")
})



fourthColoredBtn.addEventListener("click",function(){
  divColored.classList.add("lineardiv-blue")
  leftTop.classList.add("leftTop-blue")
  imgContainer.classList.add("leftTop-blue")
  borderedAnimation.classList.add("border-blue")
  fitAfterImg.classList.add("leftTop-blue") 
  heading.classList.add("leftTop-blue")
  btnColored.classList.add("leftTop-blue")
  btnColored1.classList.add("leftTop-blue")
  headA.classList.add("leftTop-blue")
  
})


fifthColoredBtn.addEventListener("click",function(){
  divColored.classList.add("lineardiv-darkPink")
  leftTop.classList.add("leftTop-darkPink")
  imgContainer.classList.add("leftTop-darkPink")
  borderedAnimation.classList.add("border-darkPink")
  fitAfterImg.classList.add("leftTop-darkPink") 
  headA.classList.add("leftTop-darkPink")
  
  heading.classList.add("leftTop-darkPink")
  btnColored.classList.add("leftTop-darkPink")
  btnColored1.classList.add("leftTop-darkPink")
  
})


sixColoredBtn.addEventListener("click",function(){
  
  divColored.classList.add("lineardiv-yellow")
  leftTop.classList.add("leftTop-yellow")
  imgContainer.classList.add("leftTop-yellow")
  borderedAnimation.classList.add("border-yellow")
  fitAfterImg.classList.add("leftTop-yellow") 
  heading.classList.add("leftTop-yellow")
  btnColored.classList.add("leftTop-yellow")
  btnColored1.classList.add("leftTop-yellow")
  headA.classList.add("leftTop-yellow")
})

