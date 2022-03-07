<template>
  <header>
    <!-- TOP BAR -->
    <div class="top-bar">
      <b-container>
        <p>
          We Accept PO's from Fortune 1000 companies, Government Agencies
          (Federal, State, Local), Universites, Schools and Colleges
        </p>
      </b-container>
    </div>
    <!-- END TOP BAR -->

    <!-- MID BAR -->
    <div class="nav-mid">
      <b-container class="d-flex">
        <!-- LOGO -->
        <div class="header-left">
          <div class="header-logo">
          
              <nuxt-link to="/" class="logo">
                <img src="~/assets/images/next-logo.png" alt="nextHDD-logo" />
              </nuxt-link>
          
          </div>
        </div>
        <!-- END LOGO -->

        <div class="headerright">
            
           <b-form @submit="onSubmit" v-if="show">
            <div class="form-inner">
            <b-form-group>
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter name"
                required
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></b-button>
            </div>

          </b-form>
          <div class="contact-info">
              <ul>
                  <li><font-awesome-icon icon="fa-solid fa-phone" /> <span>+1 (832) 344 - 0072</span></li>
                  <li><font-awesome-icon icon="fa-regular fa-comment-dots" /> <span>Chat Now</span></li>
              </ul>
          </div>
          <div class="rquote">
              <b-button><font-awesome-icon icon="fa-regular fa-file-lines" /> Request For Quote</b-button>
          </div>
        </div>
      </b-container>
    </div>
    
    <!-- LAST BAR  -->
    <div class="last-bar">
      <b-container>
       
       <b-row>
        
        <b-col md="2">
          <div class="menu-btn">
            <b-button v-b-toggle.collapse-1 variant="primary"><font-awesome-icon icon="fa-solid fa-list" /> <span>Categories</span> <font-awesome-icon icon="fa-solid fa-caret-down" /></b-button>
  <b-collapse id="collapse-1" class="">
    <b-card>
      
      <div class="menu-blk">
  <ul class="menu">
    <li><a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Storage</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>


    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> CPU</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>

    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Processors</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Hard disk</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>

    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> LED</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Graphics Card</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Memory</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Gaming PC</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Branded PC</a>

      <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>
    <li> <a href="#"><font-awesome-icon icon="fa-solid fa-arrow-right-long" /> Laptops</a>

     <div class="megadrop">
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        <b-row>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link></li>
            
            
          </ul></b-col>
          <b-col md="4"><h3>Title</h3>
          <ul>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 2</nuxt-link>
            </li>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 3</nuxt-link>
            <li><nuxt-link to="/products"><font-awesome-icon icon="fa-solid fa-angle-right" />Sub-menu 1</nuxt-link>
            </li>
            
          </ul></b-col>
        </b-row>
        
        

      </div>

    </li>

  </ul>
          </div>
    </b-card>
  </b-collapse>
        
          </div>
        </b-col>
        <b-col md="10">
          <ul class="mid-links">
        <li><nuxt-link to="/" >LED</nuxt-link></li>
        <li><nuxt-link to="/products" >Graphics Cards</nuxt-link></li>
        <li><nuxt-link to="/products" >Hard Drive</nuxt-link></li>
        <li><nuxt-link to="/products" >CPU</nuxt-link></li>
        <li><nuxt-link to="/products" >Motherboard</nuxt-link></li>
        <li><nuxt-link to="/products" >Keyboard</nuxt-link></li>
        <li><nuxt-link to="/products" >Mouse</nuxt-link></li>
        <li><nuxt-link to="/products" ><font-awesome-icon icon="fa-solid fa-truck-fast" /> Track Your Order</nuxt-link></li>
        
      </ul>
      <ul class="login-links">
         <li><nuxt-link to="/login" >Sign In/Sign Up</nuxt-link></li>
      </ul>
      <div class="cart">
      <div v-b-toggle.my-collapse2>
        <div class="cart-logo">
          <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          <span>{{cartItems.length}}</span>
        </div>
        <div class="cart-info">
          My Cart <span>${{cartTotal}}</span>
        </div>
      </div>
        <b-collapse id="my-collapse2">
          <b-card>
            <div v-if="cartItems.length==0" class="no-item">
              You have no items in your shopping cart.
            </div>

            <div v-else class="cart-items">
              <b-row v-for="(cartItem, cartItemIndex) in cartItems" :key="cartItemIndex">
                <b-col md="4">
                  <div class="img-holder">
                    <img :src="cartItem.product.home_image" alt="nextHDD-logo" />
                  </div>
                  <ul class="edit-pro">
                    <li>
                      <b-button variant="link" size="sm"
                       @click="removeItem(cartItemIndex)">
                        <font-awesome-icon icon="fa-solid fa-trash-can" />
                      </b-button>
                    </li>
                    <li>
                      <b-button variant="link" :to="'/product/'+cartItem.product.slug" size="sm">
                        <font-awesome-icon icon="fa-solid fa-pencil" />
                      </b-button>
                    </li>
                  </ul>
                </b-col>
                 <b-col md="8">
                  <div class="pro-info">
                    <div class="cp-name">
                      {{cartItem.product.part_number}}
                    </div>
                    <div class="cp-price">
                      ${{cartItem.product.actual_price}}
                    </div>
                    <div class="cp-quantity">
                      <span>Qty:</span>
                      <b-form>
                      <b-form-input
                        id="input-1"
                        :value="parseInt(cartItem.quantity)"
                        type="number"
                      ></b-form-input>
                      <b-button type="submit" class="blue-btn">Update</b-button>
                      </b-form>
                    </div>
                  </div>
                </b-col>
              </b-row>

              
            </div>
            <div class="cart-action">
              <div class="total-items">
                <strong>{{cartItems.length}}</strong> items
              </div>
              <ul class="cart-total-price">
                <li>Cart Subtotal:</li>
                <li>${{cartTotal}}</li>
              </ul>
              <div v-if="cartItems.length>0" class="link-btns">
                <nuxt-link to="/checkout" class="blue-btn">Go to Checkout</nuxt-link>
                <nuxt-link to="/cart" class="yellow-btn">View and Edit Cart</nuxt-link>
              </div>

            </div>

          </b-card>
    </b-collapse>
      </div>
        </b-col>

       </b-row>

      </b-container>
    </div>
    <!-- END LAST BAR  -->
  </header>
</template>

<script>
  
  export default {
    data() {
      return {
        form: {
          name: '',
        },
        
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      removeItem(index){
        this.$store.commit('cart/remove',{
          index: index,
        })
      }
    },
    computed:{
      cartTotal(){
        return this.$store.state.cart.total
      },
      cartItems(){
        return this.$store.state.cart.items
      }
    }
  }
</script>