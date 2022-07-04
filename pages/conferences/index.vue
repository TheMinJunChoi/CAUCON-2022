<template>
    <div class="wfull z-0 section h-content bg-semi-black" >
        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-semi-white">
                Conference
            </div>
            <div class="font-normal text-base md:text-xl text-semi-white">
                GDSC CAU Conference
            </div>
        </div>
        <div class="max-w-7xl flex grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto px-6 sm:gap-7 pb-18 md:pb-8">
            <div class="rounded-xl group border-2 border-[#202124] hover:border-[#E8EAED]" v-for="article of articles" :key="article">
            <div class="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-semi-black px-4 py-4" >
                <nuxt-link :to='`/CAUCON/conferences/${article.slug}`'>
                    <div>
                        <img :src="require(`assets/conferences/${article.img}`)" class="thumbnail rounded-xl border-none"/>
                    </div>
                    <div class="px-4 py-4">
                        <p class="mb-1 md:mb-1.5 text-sm md:text-sm text-semi-white">{{article.author}}</p>
                        <h2 class="mb-1 md:mb-1.5 text-lg md:text-xl font-medium poppins text-semi-white">{{ article.title }}</h2>
                        <p class=" text-sm md:text-base text-semi-white custom-text">{{article.description}}</p>
                    </div>
                </nuxt-link>
            </div>
            </div>
        </div>






    </div>

</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('conferences')
      .sortBy('desc')
      .fetch();
    return {
      articles
    }
  },
}
</script>

<style scoped>
.thumbnail {
    width: 400px;
    height: 200px;
    object-fit: cover;
}
.wfull{
  width: 100vw;
}
</style>
