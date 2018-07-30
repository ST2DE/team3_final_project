<template >
  <div >
      <v-data-table
      :headers="headers"
      :items="items"      
       
      class="elevation-1"  
        
      >
              <template slot="items" slot-scope="props" >
                  <td >{{props.item.title}}111</td>
                  <td class="text-xs-right">{{222}}</td>
                  <td class="text-xs-right">{{333}}</td>
                  <td class="text-xs-right">{{333}}</td>
                  <td class="text-xs-right">
                  <img :src="imageUrl" width="100%">
                  </td>
                  <td class="justify-center layout px-3">
          <v-icon
            small
            class="mr-2"
            @click="editItem(props.item)"
          >
            edit
          </v-icon>
          <v-icon
            small
            @click="deleteItem(props.item)"
          >
            delete
          </v-icon>
        </td>
          </template>
        </v-data-table>
        
        <!-- <div class="text-xs-center pt-2">
          <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
        </div> -->
    </div>

</template>
<script>
 export default{  
    components:{

    },    
    data () {
      return {
        headers: [
        {
          text: '產品名稱',
          align: 'center',
          sortable: false,
          value: 'name'
        },
        { 
          text: 'Calories',          
          align: 'center',
          value: 'calories' 
        },
        { 
          text: 'Fat (g)',          
          align: 'center',
          value: 'fat' 
        },
        { 
          text: 'Carbs (g)',          
          align: 'center',
          value: 'carbs' 
        },
        { 
          text: 'Carbs (g)',          
          align: 'center',
          value: 'carbs' },
        ],
        items: [
        { title: '我的商品', icon: 'dashboard',url:'my' },
        { title: '新增商品', icon: 'dashboard',url:'add' },
        { title: '帳號管理', icon: 'account_box',url:'account' },
        { title: 'Admin', icon: 'gavel',url:`/member/${this.$route.params.user}/manage` },
                { title: 'Admin', icon: 'gavel',url:`/member/${this.$route.params.user}/manage` },
                        { title: 'Admin', icon: 'gavel',url:`/member/${this.$route.params.user}/manage` }


        ],  
        pagination: {},
        imageUrl:'data:image/jpeg;base64,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',

 
      }
    },
    computed:{
      pages () {
        if (this.pagination.rowsPerPage == null ||
          this.pagination.totalItems == null
        ) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    },
    methods:{
  
    clear () {
      this.$refs.form.reset();
      this.imageUrl='';
      this.image=null;

    },
    submit () {
      console.log(this.data)
    },
    update(){
      this.$store.commit('UPLOAD_DATA', this.data)
      this.$store.dispatch('login')
        setTimeout(() =>{
          if(this.$store.state.user){
          this.$router.push(`member/${this.$store.state.user.username}`);
          console.log('登入成功')
        }else{
          this.message='帳號或密碼錯誤'        }
        },1000)
      
      }
    }
  }
</script>