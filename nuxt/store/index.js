import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    username: '',
    password: '' ,
    user:'',
    auth: null

  },
  mutations: {
    ['INPUT_LOGIN'](state, data) {
      state.username=data.username;
      state.password=data.password;

      console.log("密碼傳遞"+data);
      console.log("密碼傳遞"+state.username);
    },
    ['LOGIN'](state, data) {
      state.user=data;
      console.log(data);
      console.log("傳遞"+state.user.username);
    },
    update (state, data) {
      state.auth = data
    },
    ['UPLOAD_DATA'](state, data) {
      state.user=data;
      console.log(data);
      console.log("傳遞"+state.user.username);
    },
    ['ADD_PRODUCT'](state, data) {
      state.username=data.username;
      state.password=data.password;

      console.log("密碼傳遞"+data);
      console.log("密碼傳遞"+state.username);
    },
  },actions:{
    login(state) {
      
      console.log("登入時"+state.state.username);
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/signin',
        data:{
          username:state.state.username,
          password:state.state.password
        }
      })
        .then(function (response) {
        
          let data = response;
          console.log(data);
          console.log(data.data);

          state.commit('LOGIN',data.data[0]);
          // console.log("登入後"+state.state.user);
          const auth = {
            accessToken: 'someStringGotFromApiServiceWithAjax'
          }
          state.commit('update', auth) // mutating to store for client rendering
          Cookie.set('auth', auth) 

        })
        .catch(function (error) {
          // 失敗回應
          // console.log(error);
        });
    },
    addProduct(state,data) {
      
      console.log("輸入產品"+data.ownner);
      axios({
        method: 'post',
        url: 'http://127.0.0.1:5000/addNew',
        data:{
          productname:data.productname,
          quantity:data.quantity,
          picture:data.picture,
          owner:data.owner,
          mfd:data.mfd
        }
      })
        .then(function (response) {
        
          let data = response;
          console.log(data);
          // console.log(data.data);

          // state.commit('LOGIN',data.data[0]);
          // console.log("登入後"+state.state.user);
          
      

        })
        .catch(function (error) {
          // 失敗回應
          console.log(error);
        });
    }
  
  }
})

export default store