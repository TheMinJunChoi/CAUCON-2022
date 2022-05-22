<template>
    <div class="w-full z-0 bg-img section h-content bg-semi-black" >
        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-semi-white">
                Tags
            </div>
            <div class="font-normal text-base md:text-xl text-semi-white">
                GDSC CAU TechStack
            </div>
        </div>
        
        <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-x-3 md:gap-x-5 gap-y-9 pb-20 md:pb-24 md:pt-10">
            <div v-for="tag of tags" :key="tag" class="rounded-xl border-solid border-2 border-semi-black hover:border-semi-white">
                <nuxt-link :to='`/tags/${tag.slug}`' class="group px-2 py-2">
                    <div class="flex justify-center mb-3 md:mb-5">
                        <div class="lead-box h-32 w-32 md:h-40 md:w-40">
                            <img class="profile" :src="require(`~/assets/tags/${tag.img}`)" alt="">
                        </div>
                    </div>
                    <div>
                        <div class="text-lg md:text-xl flex justify-center poppins text-semi-white uppercase">{{tag.name}}</div>
                    </div>
                </nuxt-link>
            </div>
        </div>


       

        

    </div>

</template>

<script>
export default {
    async asyncData({ $content }) {
        const tags = await $content('tags')
        .sortBy('name', 'asc')
        .fetch();
        return { tags }
    },
    
}
</script>

<style scoped>
.custom-text{
    word-break: keep-all;
}
.back-yellow{
    background-color: #FBBF25;
}
.lead-box {
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>