

export default function Footer() {
  return (
    <footer class="bg-gray-900 text-gray-300 py-10">
      <div class="container mx-auto flex flex-col md:flex-row justify-between">
        <div class="mb-6 md:mb-0">
          <h2 class="text-2xl font-bold">Your Company</h2>
          <p class="mt-2">Creating innovative solutions for a better future.</p>
        </div>
        <div class="flex space-x-10">
          <div>
            <h3 class="text-lg font-semibold">Quick Links</h3>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold">Follow Us</h3>
            <ul class="mt-2 space-y-2">
              <li>
                <a href="#" class="hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-white">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-10 text-center">
        <p class="text-sm">© 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}