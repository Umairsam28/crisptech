<template>
  <b-container>
    <div class="bold-head">
      <h2>Brands</h2>
      <div class="search-area">
        <input type="text" name="" placeholder="search a brand name">
        <button><i class="fa fa-search" aria-hidden="true"></i></button>
      </div>
    </div>
    <hr/>
    <ul class="b-sort">
      <li><nuxt-link to="" class="active">All</nuxt-link></li>
      <li><nuxt-link to="">A</nuxt-link></li>
      <li><nuxt-link to="">B</nuxt-link></li>
      <li><nuxt-link to="">C</nuxt-link></li>
      <li><nuxt-link to="">D</nuxt-link></li>
      <li><nuxt-link to="">E</nuxt-link></li>
      <li><nuxt-link to="">F</nuxt-link></li>
      <li><nuxt-link to="">G</nuxt-link></li>
      <li><nuxt-link to="">H</nuxt-link></li>
      <li><nuxt-link to="">I</nuxt-link></li>
      <li><nuxt-link to="">J</nuxt-link></li>
      <li><nuxt-link to="">K</nuxt-link></li>
      <li><nuxt-link to="">L</nuxt-link></li>
      <li><nuxt-link to="">M</nuxt-link></li>
      <li><nuxt-link to="">N</nuxt-link></li>
      <li><nuxt-link to="">O</nuxt-link></li>
      <li><nuxt-link to="">P</nuxt-link></li>
      <li><nuxt-link to="">Q</nuxt-link></li>
      <li><nuxt-link to="">R</nuxt-link></li>
      <li><nuxt-link to="">S</nuxt-link></li>
      <li><nuxt-link to="">t</nuxt-link></li>
      <li><nuxt-link to="">U</nuxt-link></li>
      <li><nuxt-link to="">V</nuxt-link></li>
      <li><nuxt-link to="">W</nuxt-link></li>
      <li><nuxt-link to="">X</nuxt-link></li>
      <li><nuxt-link to="">Y</nuxt-link></li>
      <li><nuxt-link to="">Z</nuxt-link></li>

    </ul>
    <div class="brand-list">
  <b-row>
    <b-col v-for="qq in 24" :key="qq" md="2">
      <div class="inner">
        <nuxt-link to="/">
        <div class="img-holder">
          <img src="~/assets/images/hp.png" alt="" />
        </div>
        <h3>Hp</h3>
        </nuxt-link>
      </div>
    </b-col>
    
  
  </b-row>
  </div>
    
  </b-container>
</template>