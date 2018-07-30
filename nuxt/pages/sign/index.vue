<template>
<div class="container">
  <h1>登入</h1>
    <h1>{{$store.state.user}}</h1>

  <br>
    <v-form 
    v-if="!$store.state.user"
    ref="form"  lazy-validation>
    <v-text-field
      v-model="data.username"
      :counter="10"
      label="Name"
      required
    ></v-text-field>
    <v-text-field
      v-model="data.password"
      label="Password"
      type="password"
      required
    ></v-text-field>

    <v-btn
      @click="login"
    >
      submit
    </v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>

  <div v-else>
      Hello {{ $store.state.user }}!
      <pre>I am the secret content, I am shown only when the use is connected.</pre>
      <p><i>You can also refresh this page, you'll still be connected!</i></p>
      <!-- <button @click="logout">Logout</button> -->
    </div>
</div>
</template>
<script>
import axios from 'axios'
import Card from '~/components/Card.vue'
import { mapState,mapActions,mapGetters } from 'vuex'
import Cookie from 'js-cookie'

  export default{
    
    components:{
        Card
    },
    // middleware:'notAuthenticated',
    data () {
      return {
        data:{
            username: '',
            password: ''
        },message:''
      }
    },
    computed:{
    
    },
    methods:{
      login(){
        this.$store.commit('INPUT_LOGIN', this.data)
        this.$store.dispatch('login')
        setTimeout(() =>{
        if(this.$store.state.user){
          // this.$router.push(`member`);
          this.$router.push({ name: '/member' })

          console.log('登入成功')
        //  this.$router.push({ path: `/member` }) // -> /user/123
          //  return  redirect(`member/${this.$store.state.user.username}`)

        }else{
          this.message='帳號或密碼錯誤'        }
        },1000)
       
        //  

      },
       clear () {
      this.$refs.form.reset()
    }
    }
  }
</script>