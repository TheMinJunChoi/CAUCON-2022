<template>
<div class="wfull bg-semi-black">
    <div class="related max-w-5xl mx-auto pt-28 pb-12 md:pb-24 md:pt-44">
        
        <div class="max-w-3xl mx-auto">
            <p class="custom-text leading-snug md:leading-normal px-5 md:px-0 mb-2 text-2xl md:text-5xl text-center text-semi-white title font-semibold">{{article.title}}</p>
            <p class="text-base md:text-xl text-semi-white text-center mb-16">
                by
                <span v-for="memberAuthor of member" :key="memberAuthor">
                    <nuxt-link :to="{path: `/members/${memberAuthor.slug}`}" class="hover:underline">
                        {{memberAuthor.name}}
                    </nuxt-link>
                </span>
                
            </p>
            
        </div>

        <nuxt-content :document="article" class=" prose max-w-5xl text-white custom-text px-6"/>

        <div class="max-w-6xl mx-auto px-5 flex justify-center pt-16 md:pt-20 pb-6 md:pb-20">
            <div v-for="memberAuthor of member" :key="memberAuthor">
                <div class="box mb-4 md:mb-6 mx-auto">
                    <img class="profile" :src="require(`~/assets/resources/profile/${memberAuthor.img}`)" alt="">
                </div>
                <div class="text-semi-white text-xl md:text-2xl pb-2 md:pb-3.5 font-medium flex justify-center poppins">{{memberAuthor.name}}</div>
                <div class="text-semi-white text-sm md:text-base pb-3 md:pb-4 flex justify-center px-3 text-center custom-text">{{memberAuthor.description}}</div>
                <div class="flex justify-center items-center">
                    <nuxt-link class="poppins text-semi-white text-base md:text-lg hover:underline" :to="{path: `/members/${memberAuthor.slug}`}">
                        See More
                    </nuxt-link>
                </div>
            </div>
        </div>

        <Prevnext :prev="prev" :next="next" />

    </div>
</div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('conferences', params.slug)
        .fetch();
        const [prev, next] = await $content('conferences')
        .only(['title', 'slug'])
        .sortBy('asc')
        .surround(params.slug)
        .fetch();
        const authorName = article.author
        const member = await $content('members')
        .where({name: authorName})
        .fetch();

        

        return { article, prev, next, member, authorName }
    },
    methods: {
       
    },
    
    
}
</script>

<style scoped>
img {
    margin-left: auto;
    margin-right: auto;
}
.custom-text{
    word-break: keep-all;
}
.box {
    width: 150px;
    height: 150px; 
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.wfull{
  width: 100vw;
}

</style>