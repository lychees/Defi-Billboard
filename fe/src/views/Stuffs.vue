<template>
  <section class="stuffs">
    <div class="container ">
      <template v-for="(people, type) in Stuffs">
        <h2>{{ type }}</h2>
        <template v-for="(g, j) in people">
          <avatar                    
            :person="People[g]"
            class="mr-2"
          />
        </template>        
      </template>
      <!--
      <h2>Community Member</h2>
      <div class="row stuffs-card">
        <div class=" col-xl-1 col-md-2  col-sm-4 col-4 stuffs-item ">
          <a
            target="_blank"
            href="https://github.com/CarboClanC"
          ><img src="img/stuffs/tina.jpeg"></a>
          <p class="stuffs-name">
            Tina Zhen
          </P>
        </div>

        <div class=" col-xl-1 col-md-2  col-sm-4 col-4 stuffs-item ">
          <a
            target="_blank"
            href="https://github.com/CarboClanC"
          ><img src="img//tina.jpeg"></a>
          <p class="stuffs-name">
            Pan Chao
          </P>
        </div>        

      </div>-->
    </div>
  </section>
</template>



<script>
import Avatar from "../components/Avatar.vue";
import Stuffs from "../util/stuffs.js";
import People from "../util/people.js";

export default {
  name: "Stuff",
  components: { Avatar },  
  data() {
    return {
      Stuffs,
      People
    };
  },

};
</script>
