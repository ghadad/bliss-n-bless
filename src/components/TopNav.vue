<template>
  <nav class="bg-gray-800 p-2 mt-0 w-full" dir="rtl">
    <!-- Add this to make the nav fixed: "fixed z-10 top-0" -->
    <div class="container mx-auto flex flex-wrap items-center">
      <div
        class="
          flex
          w-full
          md:w-1/2
          justify-center
          md:justify-start
          text-white
          font-extrabold
        "
      >
        <router-link
          class="text-white no-underline hover:text-white hover:no-underline"
          to="/"
        >
          <span class="text-2xl pl-2"
            ><i class="em em-grinning"></i> Bliss & Bless</span
          >
        </router-link>
      </div>
      <div
        class="
          flex
          w-full
          pt-2
          content-center
          justify-between
          md:w-1/2
          md:justify-end
        "
      >
        <ul
          class="
            list-reset
            flex
            justify-between
            flex-1
            md:flex-none
            items-center
          "
        >
          <li class="mr-3">
            <router-link
              class="
                inline-block
                text-gray-300
                no-underline
                hover:text-gray-200 hover:text-underline
                py-2
                px-4
              "
              to="/wizard"
              >אשף</router-link
            >
          </li>
          <li class="mr-3">
            <router-link
              class="inline-block py-2 px-4 text-white no-underline"
              to="/account"
              >החשבון שלי</router-link
            >
          </li>

          <li class="mr-3">
            <router-link
              class="
                inline-block
                text-gray-300
                no-underline
                hover:text-gray-200 hover:text-underline
                py-2
                px-4
              "
              to="/history"
              >היסטוריה</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>