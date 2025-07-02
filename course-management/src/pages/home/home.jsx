import React from "react";

function Home() {
  return (
    <>
      <div className="container">
        <div class="flex items-center justify-center gap-3 bg-white px-4 py-2 rounded-xl shadow-md w-fit mx-auto mt-10">
          <div class="bg-amber-100 p-2 rounded-md">
            <svg
              class="w-5 h-5 text-amber-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9 2a1 1 0 012 0v6a1 1 0 01-2 0V2zm.293 11.707a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 15.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3z" />
            </svg>
          </div>
          <p class="text-3xl font-semibold">
            <span class="text-orange-500">Unlock</span>
            <span class="text-gray-900"> Your Creative Potential</span>
          </p>
        </div>
        <div class="text-center mt-3">
          <h2 class="text-xl md:text-2xl font-semibold text-gray-900">
            with <span>Online Design and Development Courses.</span>
          </h2>
          <p class="mt-1 text-sm text-gray-600">
            Learn from Industry Experts and Enhance Your Skills.
          </p>
        </div>
        <div class="flex gap-4 text-center mx-auto w-fit mt-8">
          <button class="bg-[#FF9500] hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md">
            Explore Courses
          </button>
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded-lg shadow-md border border-gray-200">
            View Pricing
          </button>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm w-fit mx-auto mt-10 container">
          <div class="flex justify-between items-center flex-wrap gap-6">
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Zapier.png" alt="Zapier" className="mx-auto" />
            </div>
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Spotify.png" alt="Spotify" className="mx-auto" />
            </div>
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Zoom.png" alt="Zoom" class="mx-auto" />
            </div>
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Amazon.png" alt="Amazon" class="mx-auto" />
            </div>
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Adobe.png" alt="Adobe" class="mx-auto" />
            </div>
            <div class="flex-1 text-center border-r last:border-r-0">
              <img src="/Logos/Notion.png" alt="Notion" class="mx-auto" />
            </div>
            <div class="flex-1 text-center">
              <img src="/Logos/Netflix.png" alt="Netflix" class="mx-auto" />
            </div>
          </div>
        </div>
        <div className="mt-15 mx-auto max-w-4xl">
          <img
            src="/Home-Banner.png"
            alt="Home Banner"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

        <section class="max-100 mx-auto px-4 py-12">
          <div class="flex flex-wrap justify-between items-start mb-10">
            <div class="max-w-4xl">
              <h2 class="text-3xl font-semibold text-gray-900">Our Courses</h2>
              <p class="mt-2 text-gray-600 text-base leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
                eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et.
                Ac cum eget habitasse in velit fringilla feugiat senectus in.
              </p>
            </div>
            <div class="mt-4 md:mt-0">
              <button class="bg-white border border-gray-200 text-gray-800 font-medium px-5 py-2 rounded-xl shadow-sm hover:bg-gray-100">
                View All
              </button>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/web-design.jpg"
                alt="Web Design"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>4 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Beginner
                </span>
                <span class="ml-auto text-right">By John Smith</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                Web Design Fundamentals
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Learn the fundamentals of web design, including HTML, CSS, and
                responsive design principles. Develop the skills to create
                visually appealing and user-friendly websites.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>
            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/ui-ux.jpg"
                alt="UI/UX Design"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>6 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Intermediate
                </span>
                <span class="ml-auto text-right">By Emily Johnson</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                UI/UX Design
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Master the art of creating intuitive user interfaces (UI) and
                enhancing user experiences (UX). Learn design principles,
                wireframing, prototyping, and usability testing techniques.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>

            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/mobile-app.jpg"
                alt="Mobile App"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>8 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Intermediate
                </span>
                <span class="ml-auto text-right">By David Brown</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                Mobile App Development
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Dive into the world of mobile app development. Learn to build
                native iOS and Android applications using industry-leading
                frameworks like Swift and Kotlin.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>

            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/graphic-design.jpg"
                alt="Graphic Design"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>10 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Beginner
                </span>
                <span class="ml-auto text-right">By Sarah Thompson</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                Graphic Design for Beginners
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Discover the fundamentals of graphic design, including
                typography, color theory, layout design, and image manipulation
                techniques. Create visually stunning designs for print and
                digital media.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>

            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/frontend.jpg"
                alt="Front-End Dev"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>10 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Intermediate
                </span>
                <span class="ml-auto text-right">By Michael Adams</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                Front-End Web Development
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Become proficient in front-end web development. Learn HTML, CSS,
                JavaScript, and popular frameworks like Bootstrap and React.
                Build interactive and responsive websites.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>

            <div class="bg-white rounded-xl shadow p-4">
              <img
                src="/courses/advanced-js.jpg"
                alt="Advanced JS"
                class="rounded-lg w-full h-48 object-cover"
              />
              <div class="flex items-center justify-between mt-4 text-sm text-gray-500">
                <span>6 Weeks</span>
                <span class="px-2 py-1 bg-gray-100 rounded-md text-xs font-medium">
                  Advance
                </span>
                <span class="ml-auto text-right">By Jennifer Wilson</span>
              </div>
              <h3 class="mt-3 text-lg font-semibold text-gray-900">
                Advanced JavaScript
              </h3>
              <p class="text-gray-600 mt-1 text-sm">
                Take your JavaScript skills to the next level. Explore advanced
                concepts like closures, prototypes, asynchronous programming,
                and ES6 features. Build complex applications with confidence.
              </p>
              <button class="mt-4 w-full bg-gray-100 text-gray-900 font-medium py-2 rounded-lg">
                Get it Now
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
