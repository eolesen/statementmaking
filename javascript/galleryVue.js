Vue.component('gallery', {
    props: {
        title:{
            type: String,
            required: false
        }
    },
    template: `
<p>hello</p>
   <div class="gallery">
      <h1>{{ title }}</h1>
      
      <div class="product-image">
        <img :src="../resources/sampleImage.png" />
      </div>

      <div class="product-info">
          <p>{{ title }}</p>
          
       </div>  
    
    </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        title: "Gallery 1"
    }
})