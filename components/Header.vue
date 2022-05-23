<template>
    <div class="wfull z-40 bg-semi-black border-b md:border-b border-semi-white">
        <div class="max-w-screen-2xl px-3 md:px-7 py-3 md:py-9 h-16 mx-auto flex items-center justify-between">

            <div class="max-w-fit md:ml-0">
                <nuxt-link to="/">
                    <HeaderLogo />
                </nuxt-link>
            </div>

            <div>
            <ul class="flex space-x-1 items-center h-10">

                <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-semi-white font-medium">
                    <nuxt-link :to="{path: '/timetable'}" replace>TimeTable</nuxt-link>
                </li>
                <li class= "hidden py-1.5 px-2.5 rounded-lg md:block text-semi-white font-medium">
                    <nuxt-link :to="{path: '/members'}" replace>Member</nuxt-link>
                </li>
                <li class= "hidden py-1.5 px-2.5 rounded-lg md:block text-semi-white font-medium">
                    <nuxt-link :to="{path: '/conferences'}" replace>Conference</nuxt-link>
                </li>
                <li class= "hidden py-1.5 px-2.5 rounded-lg md:block text-semi-white font-medium">
                    <nuxt-link :to="{path: '/tags'}" replace>Tags</nuxt-link>
                </li>
                <li class="hidden py-1.5 px-2.5 rounded-lg md:block text-semi-white font-medium">
                    <a href="https://gdsc-cau.github.io/" target="blank">Blog</a>
                </li>
            </ul>
            </div>
            <div class="md:hidden flex content-center">
            <button @click="drawer">
            <Menu class="mr-0.5"/>
            </button>
        </div>

        <transition
                enter-class="opacity-0"
                enter-active-class="ease-out transition-medium"
                enter-to-class="opacity-100"
                leave-class="opacity-100"
                leave-active-class="ease-out transition-medium"
                leave-to-class="opacity-0"
            >
                <div @keydown.esc="isOpen = false" v-show="isOpen" class="z-10 fixed inset-0 transition-opacity">
                    <div @click="isOpen = false" class="absolute inset-0 bg-black opacity-50" tabindex="0"></div>
                </div>
            </transition>

            <aside class="p-5 transform top-0 left-0 w-64 bg-semi-black fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30" :class="isOpen ? 'translate-x-0' : '-translate-x-full'">

                <div class="close">
                <button class="absolute top-0 right-0 mt-4 mr-4" @click=" isOpen = false">
                    <Close />
                </button>
                </div>

                <div @click="isOpen = false" class="flex w-full pt-12 pb-8 items-center justify-center">
                    <HeaderLogo class="h-6" />
                </div>

                <ul class="mt-4">
                    <li><nuxt-link :to="{path: '/timetable'}" replace @click="isOpen = false" class="text-semi-white my-3 inline-block w-full text-center">Timetable</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/members'}" replace @click="isOpen = false" class="text-semi-white my-3 inline-block w-full text-center">Member</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/conferences'}" replace @click="isOpen = false" class="text-semi-white my-3 inline-block w-full text-center">Conferences</nuxt-link></li>
                    <li><nuxt-link :to="{path: '/tags'}" replace @click="isOpen = false" class="text-semi-white my-3 inline-block w-full text-center">Tags</nuxt-link></li>
                    <li><a href="https://gdsc-cau.github.io/" @click="isOpen = false" class="text-semi-white my-3 inline-block w-full text-center">Blog</a></li>
                </ul>

            </aside>
        </div>


    </div>
</template>

<script>
export default {
    data() {
        return {
        isOpen: false
        };
    },
    methods: {
        drawer() {
        this.isOpen = !this.isOpen;
        }
    },
    watch: {
        isOpen: {
        immediate: true,
        handler(isOpen) {
            if (process.client) {
            if (isOpen) document.body.style.setProperty("overflow", "hidden");
            else document.body.style.removeProperty("overflow");
            }
        }
        }
    },
    mounted() {
        document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false;
        });
    }
    };
</script>

<style scoped>
.lgtoxl{
    font-size: 1.145rem;
}
.wfull{
  width: 100vw;
}
</style>
