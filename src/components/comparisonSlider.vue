<template>
  <div class="hello">
    <h1>vue-twentytwenty</h1>
    <h2>A nifty image comparison utility.</h2>

    <div style="width: 600px; display: block; margin: 0 auto;">
      <div class="slider-wrapper" id="slider-wrapper">
        <img src="https://dummyimage.com/600x400/2799a8/fff" alt="after" class="slider-wrapper__img slider-wrapper__after">
      	<img src="https://dummyimage.com/600x400/c9760a/fff" alt="before" id="slider-wrapper__before" class="slider-wrapper__img slider-wrapper__before">
        <div class="slider-wrapper__handler handler-slider" id="handler-slider">
        	<div class="handler-slider__left"></div>
          <div class="handler-slider__right"></div>
        </div>
      	<div class="slider-wrapper__overlay overlay-slider">
      		<div class="overlay-slider__before">before</div>
      		<div class="overlay-slider__after">after</div>
      	</div>
      </div>
    </div>
    <button @click="grabHandler($event.target)">+</button>
    <button @click="grabHandler($event.target)">-</button>

  </div>
</template>

<script>
export default {
  name: 'comparisonSlider',
  data(){
    return{
      handler: 50,
      clip: 10
    }
  },
  mounted(){
    document.getElementById('handler-slider').style.left = 'calc('+this.handler+'% - 20px)';
    console.log(document.getElementById('slider-wrapper').clientWidth);
    // document.getElementById('slider-wrapper__before').style.clip = 'rect(0px, '+this.clip+'px, auto, 0px)';
  },
  methods:{
    converter(){
      return ( document.getElementById('slider-wrapper').clientWidth * this.handler ) / 100;
    },
    grabHandler(e){
      switch(e.innerText){
        case '-':
          if(this.handler !== 0){
            this.handler -= 10
          }else{
            console.log('0%');
          }
          break;
        case '+':
          if(this.handler !== 100){
            this.handler += 10
          }else{
            console.log('100%');
          }
          break;
      }

      document.getElementById('handler-slider').style.left = 'calc('+this.handler+'% - 20px)';
      document.getElementById('slider-wrapper__before').style.clip = 'rect(0px, '+this.converter()+'px, auto, 0px)';
    }
  }
}
</script>

<style lang="stylus" scoped>
h1, h2
  font-weight: normal

.slider-wrapper
  position: relative
  width: 100%
  height: 380px
  padding: 0.1875em
  overflow: hidden
  box-sizing: content-box
  &__img
    display: block
    position: absolute
    max-width: 100%
    top: 0
    left: 0
    -webkit-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
    z-index: 20
  &__before
    clip: rect(0px, 245px, auto, 0px)
  &__handler
    cursor: pointer
    width: 40px
    height: 40px
    top: calc(50% - 20px)
    z-index: 50

.handler-slider
  position: relative
  border: 5px solid white
  border-radius: 50%
  left: calc(33.85% - 20px)
  &:before
    content: ''
    position: absolute
    left: calc(50% - 2px)
    border: 2px solid #fff
    height: 9999px
    bottom: 40px
  &:after
    content: ''
    position: absolute
    left: calc(50% - 2px)
    border: 2px solid #fff
    height: 9999px
    top: 40px

</style>
