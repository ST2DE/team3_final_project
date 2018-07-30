<template>
  <div class="container">
    <!-- <div>{{image}}</div> -->
        <form ref="form">
    <v-text-field
      v-model="data.productName"
      :counter="10"
      label="*產品名稱"
      required
    ></v-text-field>
      <v-text-field
      v-model="data.quantity"
      label="*數量"
      required
    ></v-text-field>
      <v-text-field
      v-model="data.mfd"
      label="製造日期"
      required
    ></v-text-field>
    <v-input
      required
      label="*上傳圖片"
    > </v-input>
     <v-btn @click="onPickFile">Upload</v-btn>
  <input type="file" style="display: none" ref="fileInput" accept="image/*"
  @change="onFileChange">
  <img :src="imageUrl" width="100%">
  <!-- <img :src="image" width="100%"> -->
          <v-divider></v-divider>

    <v-btn @click="submit">送出</v-btn>
    <v-btn @click="clear">清除</v-btn>
  </form>
      
    </div>

</template>
<script>
 export default{
    
    components:{
    },    
    // props:['productName','quantity','picture','owner','mfd'],
    data () {
      return {
        data:{
          productName:'',
          quantity:'',
          picture:null,
          ownner:'test1',
          // owner:this.$store.state.user.username,
          mfd:''
        },     
     imageUrl:'',
     image:null
      }
    },
    computed:{
    
    },
    methods:{
   onPickFile (value) {
      this.$refs.fileInput.click();
    },
    clear () {
            this.$refs.form.reset();
            this.imageUrl='';
            this.image=null;

    },
    submit () {
        console.log(this.data)
        // this.$store.commit('INPUT_LOGIN', this.data)
        this.$store.dispatch('addProduct',this.data)
        // setTimeout(() =>{
        //   if(this.$store.state.user){
        //   this.$router.push(`member/${this.$store.state.user.username}`);
        //   console.log('登入成功')
        // }else{
        //   this.message='帳號或密碼錯誤'        }
        // },1000)




    },
    onFileChange(e){
      
    const file=e.target.files[0];
    let filename=file.name;
    let img = new Image();
    if(filename.lastIndexOf('.') <= 0){
      return alert('請上傳正確的格式')
    }

    const fileReader=new FileReader();
    fileReader.addEventListener('load',()=>{
    this.imageUrl=fileReader.result;
    img.src=fileReader.result;
    // 
    })
    img.addEventListener('load',()=>{
    this.data.picture= this.getBase64Image(img)
    })
    
    fileReader.readAsDataURL(file);
    },
    getBase64Image(img){
    const canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const dataURL = canvas.toDataURL('image/png');
    // this.image=dataURL
    return dataURL;
    },
     upload(){
        this.$store.commit('UPLOAD_DATA', this.data)
        this.$store.dispatch('login')
        setTimeout(() =>{
          if(this.$store.state.user){
          this.$router.push(`member/${this.$store.state.user.username}`);
          console.log('登入成功')
        }else{
          this.message='帳號或密碼錯誤'        }
        },1000)
       
        //  

      }
    }
  }
</script>