<template>
<div >

  <v-container  text-xs-center>
    <v-layout row wrap>
      <v-flex xs2>
<v-navigation-drawer 
  height="100vh" 
  permanent
  class="black "
  dark
>
    <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
     {{$route.params.user}} 歡迎
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile
        v-for="item in items"
        :key="item.title"
        @click="linkTo(item.url)"
      >
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

    <!-- 下面開始是board -->
      </v-flex>
      <v-flex xs10>
        <v-card  color="primary" height="100%">
        <MyProduct v-if="nowPage==='my'"/>
        <AddProduct v-if="nowPage==='add'"/>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>


</div>
</template>
<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
import { mapState,mapActions,mapGetters } from 'vuex'
  import MyProduct from '~/components/MyProduct.vue'
  import AddProduct from '~/components/AddProduct.vue'

  export default{
    
    components:{
AddProduct,
MyProduct
    },
    middleware:'notAuthenticated',
    data () {
      return {      
        items: [
        { title: '我的商品', icon: 'dashboard',url:'my' },
        { title: '新增商品', icon: 'dashboard',url:'add' },
        { title: '帳號管理', icon: 'account_box',url:'account' },
        { title: 'Admin', icon: 'gavel',url:`/member/${this.$route.params.user}/manage` }
      ],
      nowPage:'my',
      

      }
    },
    computed:{
   
    },
    methods:{
   linkTo (value) {
          // this.$router.push(value);
          this.nowPage=value
    }
    }
  }
</script>