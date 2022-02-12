<template>
  <section id="home">
    <Home />
    <Project />
    <div id="twitterBg">
      <Skill />
      <About />

    </div>
    <!-- <Youtube /> -->
    <Contact />
  </section>
</template>

<script>
export default {}
</script>

<style>
#twitterBg {
  background-image: url("~/static/img/twitterbg.png");
  overflow: hidden;
}
.is-active {
  color: #f3bc17 !important;
  /* color: #f0d13b !important; */
   /* background: rgb(158, 132, 140) */
   /* background: #dac6d3; */
   /* background: #ffd978 */
}
</style>
