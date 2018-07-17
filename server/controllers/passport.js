var bCrypt = require('bcrypt-nodejs');//加密套件
var LocalStrategy = require('passport-local').Strategy;//本地的passport
var mongoose = require('mongoose');
var Userdata = mongoose.model('Userdata')

module.exports = (passport)=> {//從auth那邊呼叫的，在載入get頁面時同時被叫出來
  passport.use(
    'signup',//對應到router裡面的post
    new LocalStrategy(
      {
        passReqToCallback: true//是否回傳認證的資訊
      },
      function(req, username, password, done) {
        var generateHash = (password)=>{//加密
          const saltRounds = 10;//加密的長度
          var hash = bCrypt.hashSync(password, bCrypt.genSaltSync(saltRounds));
          return hash;
        };
        Userdata.findOne({//在db裡面尋找有一個符合
          
            username: username//資料庫名稱與前面function定義的使用者名稱
          
        })
          .then(user => {
            if (user) {
              return done(null, false, {
                message: '用戶已存在'
              });
            } else {
              var userPassword = generateHash(password);
           
              const user= new Userdata({
                username: username ,
                password: userPassword,
                phone:'phone' ,
                email:'666666'
          
              })
              user.save(err => {  
                if (err) {
                  throw err;
                }
                return done(null, user);
              });
         
            }
          })
          .catch(error => console.log(error));
      }
    )
  );
  passport.use(
    'login',
    new LocalStrategy(
      {
        passReqToCallback: true
      },
      function(req, username, password, done) {
        var isValid = (password, check)=> {
          return bCrypt.compareSync(password, check);//解密
        };

        Userdata.findOne({
         
            username: username
          
        })
          .then(user=> {//find找到資料後回傳到user
            if (!user) {
              return done(null, false, {
                message: '沒有此使用者'
              });
            }
            if (!isValid(password, user.password)) {//前面是使用者輸入的密碼，同function設的password，後面是比對資料庫的密碼
              return done(null, false, {
                message: '密碼錯誤'
              });
            }
            return done(null, user);//都沒有錯誤最後要記得回傳一個東西(使用者)
          })
          .catch(err=>{
            console.log('Error:', err);
            return done(null, false, {
              message: 'Something went wrong with your Signin'
            });
          });
      }
    )
  );
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    Userdata.findById(id)
      .then(user => {
        done(null, user);
      })
      .catch(function(e) {
        done(e, false);
      });
  });
};
