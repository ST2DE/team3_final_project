<template>
<div  >

  <v-card height="100vh">
      <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs3>

    <v-navigation-drawer
      permanent
      class="pa-0"
    >
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
           

            <v-list-tile-content>
              <v-list-tile-title>  <h1>{{$route.params.user}} 歡迎～</h1>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile
          v-for="item in items"
          :key="item.title"
          @click="linkTo (item.url) "
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
      </v-flex>
      <v-flex xs9>
        <v-card  color="primary" height="100%">
          <v-card-text class="px-0">4</v-card-text>
              <Manage/>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>

  </v-card>



</div>
</template>
<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
import { mapState,mapActions,mapGetters } from 'vuex'

  import Manage from '~/components/Manage.vue'

  export default{
    
    components:{
Manage
    },
    middleware:'notAuthenticated',
    data () {
      return {      
        items: [
        { title: '商品管理', icon: 'dashboard',url:'/member/'+this.$route.params.user+'/manage' },
        { title: '帳號管理', icon: 'account_box',url:`/member/${this.$route.params.user}/manage` },
        { title: 'Admin', icon: 'gavel',url:`/member/${this.$route.params.user}/manage` }
      ],
      }
    },
    computed:{
    
    },
    methods:{
   linkTo (value) {
          // this.$router.push(value);
    }
    }
  }
</script>