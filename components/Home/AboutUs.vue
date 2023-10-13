<template>
  <section class="about-us">
    <div class="row p-4">
      <!-- TODO there should an h1 title here -->
      
      <div class="col-12  col-sm-10">
        <h1 class="text-3xl font-bold">Raku Audio -- headphones </h1>
        <p class="text-2xl"> Raku Audio designs headphones by tunings drivers, calibrate pads as well as crafting sutible caps and 
          headbands for optinal sound experiece as well as look. 
        </p>
        <br>
      </div>
        <div class="col-12 col-sm-6">
        <img class="float-lg-right corner"  src="@/assets/raku_light.svg" width="100px"  alt="home-img" title="home-img">
      </div>
        <div class="col-12 col-sm-6">
        <img class="float-lg-right corner" src="@/assets/raku_prem.svg" width="50px" alt="home-img" title="home-img">
      </div>
   
    </div>
    <div class="row p-4">
      <div
        class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -8%; z-index:1;">
        <h1 class="text-4xl font-bold">Raku Desing<br>  -- Japnaese wood carpentry </h1>
        <br>
        <p class="text-3x1"> Wood crafts such as boards, signs, boxes, wodden tools mostly in Japanese style. 
        </p>
      </div>
      <div class="col-6">
        <img class="corner" src="/assets/skylt.png" alt="home-img-2" title="home-img-2" loading="lazy">
      </div>
    </div>
    <div class="row p-4">
      <div
        class="col-12 col-sm-6 text-sm-right text-md-right ml-sm-0 ml-md-5 ml-lg-5 ml-xl-5 text-lg-right order-sm-first order-12"
        style="margin-right: -8%; z-index:1;">
        
      </div>
      <div class="col-6">
        <img class="corner" src="/assets/dorrskylt.png" alt="home-img-2" title="home-img-2" loading="lazy">
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">

.corner {
  border-radius: 25px;
}

.about-us img {
  width: 90%;
  min-width: 38px;
}

</style>
