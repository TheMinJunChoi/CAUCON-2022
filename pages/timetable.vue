<template>
    <div class="wfull z-0 bg-img section h-content bg-semi-black" >
        <div class="pt-20 md:pt-15 pb-3 md:pb-10 max-w-7xl mx-auto px-6">
            <div class="pb-6 text-3xl md:text-5xl font-semibold text-semi-white">
                Timetable
            </div>
            <div class="font-normal text-base md:text-xl text-semi-white">
                GDSC CAU Timetable
            </div>
            <div class="text-semi-white text-3xl font-semibold">
              <div class="time-table">
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">커리어를 시작하는 학생들에게 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">김태진/메타</div>
                  </div>
                  <div class="time">14:00~14:20</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">GDSC CAU 1기 활동보고 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">정우현 Lead</div>
                  </div>
                  <div class="time">14:20~14:35</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">인터넷 뱅킹 배우기 서비스 개발기 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">정하경 meta</div>
                  </div>
                  <div class="time">14:35~14:50</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">기숙사 배달 펀딩 서비스 개발기 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">김영빈 meta</div>
                  </div>
                  <div class="time">14:50~15:05</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    쉬는 시간
                  </div>
                  <div class="time">15:05~15:20</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">교환학생 커뮤니티 서비스 개발기 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">김문선 meta</div>
                  </div>
                  <div class="time">15:20~15:35</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">쓰레기통 위치 공유 서비스 개발기 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">김경훈 meta</div>
                  </div>
                  <div class="time">15:35~15:50</div>
                </div>
                <div class="divider"></div>
                <div class="session">
                  <div class="flex flex-row">
                    <div class="title">물물 교환 플랫폼 개발기 |</div>
                    <div class="spacer-10"></div>
                    <div class="presenter">송지우 meta</div>
                  </div>
                  <div class="time">15:50~16:05</div>
                </div>
              </div>
            </div>
        </div>
    </div>

</template>

<script>
</script>

<style scoped>
.wfull{
  width: 100vw;
}

.divider {
  height: 1px;
  background: #e8eaed;
}

.time-table {
  border: #e8eaed;
  border-radius: 44px;
}

.time-table .session {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 3.5rem;
}

.time-table .session .spacer-10 {
  width: 10px;
}
.time-table .session .presenter {
  font-size: 1rem;
}
</style>
