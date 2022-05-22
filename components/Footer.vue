<template>
    <footer class="w-full  py-11 md:py-14 md:pt-20 md:pb-24 px-2 md:px-5 bg-semi-black">
        
        <div class="max-w-7xl mx-auto block md:flex relative px-0 md:px-4">

            <div class="justify-around md:justify-start px-8 md:px-0 items-start flex">
                <ul class="w-25 md:w-36 md:ml-0 md:m-0">
                    <li class="mb-3 font-semibold text-semi-gray">관련 사이트</li>
                    <li class="mb-1.5 font-normal text-semi-gray hover:underline"><a href="https://gdsc-cau.github.io/">Blog</a></li>
                    <li class="mb-1.5 font-normal text-semi-gray hover:underline"><a href="https://github.com/GDSC-CAU">GitHub</a></li>
                </ul>

            </div>

            <nuxt-link to="/" class="hidden md:block flex justify-center md:absolute md:top-0 md:right-0 md:items-center md:m-0">
                <div class=""><FooterLogo/></div>
            </nuxt-link>

            <ul class="flex justify-center md:absolute md:bottom-0 md:right-0 md:block mt-10 md:mt-0">
                <li class="text-xs md:text-sm font-normal text-semi-gray">Developed by 
                    <a class="underline" href="https://github.com/GDSC-CAU">GDSC-CAU</a>
                </li>
            </ul>

        </div>

    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
</style>