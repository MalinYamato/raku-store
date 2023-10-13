<template>
  <section>
    <div class="container-fluid py-5">
      <div class="row d-flex">
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-sm-0 order-12" style="margin-right:-25%;">
          <img class="" width=400 src="@/assets/raku_logo_black.svg" alt="raku logo" title="raku logo">
        </div>
        <div class="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 order-first order-xl-0">
          <div class="text-3xl" >Hi</div>
          <div class="text-3xl" style="color:grey">...will be back to you in a day or two?</div>
          <form>
            <div class="form-group">
              <input type="text" class="form-control" required>
              <label class="label" for="name">Name</label>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" required>
              <label class="label" for="E-mail">E-mail</label>
            </div>
            <div class="form-group">
              <textarea class="form-control" style="overflow:hidden; height:130px" rows="3" required></textarea>
              <label class="label" for="Message">Message</label>
            </div>
            <button class="btn btn-light" href="#" role="button">submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped  lang="scss">

form {
  width: 100%;
  padding: 50px 0;
  display: block;
  margin: 0 auto;
}

.form-group {
  width: 100%;
  position: relative;
  margin: 0 0 50px; 
}

    
.form-group label {
  color: grey;
  position: absolute;
  transition: .5s ease-in-out;
  top: 0px;
  z-index: 0;
  @apply text-3xl;
}

.form-group input,
.form-group textarea {
  outline: none;
  box-shadow: none;
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #555;
  width: 100%;
  height: 40px;
  transition: all 0.5s;
  z-index: 1;
  position: relative;
  border-radius: 0;
  resize: none;
  scroll-behavior: none;
  @apply text-3xl;
  
}

.form-group input:valid~label,
.form-group input:focus~label,
.form-group textarea:valid~label,
.form-group textarea:focus~label {
  color: #71acd6;
  top: -15px;
  transition: all 0.5s;
  @apply text-lg;
}

.form-group input:valid,
.form-group input:focus,
.form-group textarea:valid,
.form-group textarea:focus {
  border-color: #71acd6;
}

form button {
  -webkit-transition-duration: 200ms;
  transition-duration: 200ms;
  width: 120px;
  height: 50px;
  padding: 0px 30px;
  cursor: pointer;
  box-shadow: 0 26px 38px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @apply text-2xl
}



</style>
