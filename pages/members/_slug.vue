<template>
    <div class="w-full bg-semi-black">
        <div class="max-w-7xl mx-auto px-6 pt-28 md:pt-20">
            <div class="hidden md:block ">
                <div class="flex flex-row justify-between">
                    <div class=" py-8 ">
                        <nuxt-link :to="path" class="text-lg md:text-xl text-semi-gray hover:underline pb-1.5 md:pb-20 md:mb-10"> 
                            <div class="flex">
                                <Prev class="md: pt-1 pr-2"/> GDSC CAU Member
                            </div>
                        </nuxt-link>
                        <div class="text-semi-white text-4xl md:text-6xl font-bold pb-0 md:pb-1.5 md:pt-10">{{member.name}}</div>
                        <div class=" text-lg md:text-xl text-semi-gray pb-1.5 md:pb-6">{{member.role}}</div>
                        <div class=" text-lg md:text-xl text-semi-white pb-1.5 md:pb-3 md:pr-20 ">{{member.description}}</div>
                    </div>
                    <div class ="w-60 md:pt-16">
                        <div class="w-52 h-52 lead-box ">
                            <img :src="require(`~/assets/resources/profile/${member.img}`)" class="profile" />
                        </div>
                    </div>
                </div>
            </div>

            <div class="block md:hidden">
                <div class="lead-box w-40 h-40 md:w-52 md:h-52 mb-4 md:mb-6 mx-auto">
                    <img class="profile" :src="require(`~/assets/resources/profile/${member.img}`)" alt="">
                </div>
                <div class="text-semi-white text-2xl md:text-3xl font-medium flex justify-center  pb-0 md:pb-1.5">{{member.name}}</div>
                <div class="flex justify-center  text-lg md:text-xl text-semi-gray pb-1.5 md:pb-3">{{member.role}}</div>
                <div class="text-semi-white px-0 md:px-20 pb-4 flex justify-center text-center custom-text">{{member.description}}</div>
            </div>
        </div>

        

        <div class="pt-8 md:pt-20 flex justify-between items-center max-w-7xl mx-auto px-6">
            <div class="text-2xl md:text-3xl text-semi-white font-medium ">Conference</div>
        </div>

        <div class="max-w-7xl grid grid-cols-1 colspan mt-5 md:mt-8 pb-8 md:pb-12 mx-auto px-6">
            <div class="group px-5 rounded-xl border-solid border-2 border-semi-black hover:border-semi-white" v-for="marticle of proArticles" :key="marticle">
                <nuxt-link :to="{path: `/conferences/${marticle.slug}`}">
                    
                    <div class="article-inner flex items-center py-2 md:py-5 ">
                        <div class="hidden md:block">
                            <img class="thumbnail rounded-xl border-none" :src="require(`~/assets/conferences/${marticle.img}`)" alt="">
                        </div>
                    <div class="px-0 md:px-4 md:pl-9">
                        <p class="mb-1 md:mb-1.5 text-sm md:text-xl text-semi-gray">{{marticle.author}}</p>
                        <h2 class="mb-1 md:mb-1.5 text-lg md:text-2xl font-medium  text-semi-white ">{{ marticle.title }}</h2>
                        <p class=" text-sm md:text-base text-semi-white custom-text">{{marticle.description}}</p>
                    </div>
                </div>
                </nuxt-link>
            </div>
        </div>

        

    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const member = await $content('members', params.slug)
            .fetch();
        const authorName = member.name
        const proArticles = await $content('conferences')
            .where({author: authorName})
            .sortBy('desc')
            .fetch();
        return { member, authorName, proArticles }
    },
    data() {
        return {
        path: '/',
        };
    },
    created() {
        if (this.$nuxt?.context?.from?.path) this.path = this.$nuxt.context.from.path;
    },
}
</script>

<style scoped>
.custom-text{
    word-break: keep-all;
}
.lead-box {
    border-radius: 70%;
    overflow: hidden;
    
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
}
.thumbnail {
    width: 400px;
    height: 225px;
    object-fit: cover;
}

</style>