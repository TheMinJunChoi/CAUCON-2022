<template>
    <div class="rel">
        <!-- <Warning /> -->
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
</script>

<style>
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  * { font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;; }
.rel{
    position: relative;
  }
.text-semi-black{
    color:#202124 !important;
}
.bg-semi-black{
    background-color:#202124 !important;
}
.border-semi-black{
    border-color:#202124 !important;
    hover: border-semi-white !important;
}

.text-semi-white{
    color: #E8EAED !important;
}
.bg-semi-white{
    background-color:#E8EAED !important;
}
.border-semi-white{
    border-color:#E8EAED !important;
}

.text-semi-gray{
    color: #96A0A6 !important;
}
.bg-semi-gray{
    background-color:#96A0A6 !important;
}
.border-semi-gray{
    border-color:#96A0A6 !important;
}
</style>