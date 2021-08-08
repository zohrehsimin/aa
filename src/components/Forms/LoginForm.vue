<template>
  <base-form>
  <form class="form" @submit.prevent="submitForm">
    <header class="form__header">
      <h2>ورود</h2>
    </header>
    <div class="fields-container">
    <div class="form__field">
      <label for="user-name">نام کاربری</label>
      <input type="text" id="user-name" v-model.trim="user.userName">
    </div>
    <div class="form__field">
      <label for="password">رمز عبور</label>
      <input type="password" id="password" v-model="user.password">
    </div>
    </div>
    <div v-if="!userAuthenticated" class="failed-authentication">رمز عبور یا نام کاربری اشتباه است</div>
    <div class="form__submit-btn">
      <base-button
          button-content="ورود"
          :button-type="['button--curved','button--custom-color=#720303']"
          @click="submitForm"
      ></base-button>
    </div>
  </form>
  </base-form>
</template>

<script>
import BaseForm from "../UI/BaseForm";
import BaseButton from "../UI/BaseButton";
export default {
  components: {BaseButton, BaseForm},
  data(){
    return{
      userAuthenticated : true,
      user: {
        userName: '',
        password: ''
      }
    }
  },
  mounted() {
  },
  methods : {
    submitForm(){
        if(JSON.parse(localStorage.getItem('users')).find(user => user.userName === this.user.userName && user.password === this.user.password)){
          this.$router.push('/dashboard')
        } else{
         this.userAuthenticated = false
        }
    }
  }
}
</script>

<style scoped>
form{
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  align-items: center;
}
.form__header{
  width: 100%;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 4rem;
  padding: 1rem 0;
  border-bottom: 2px solid black;
  color: black;
}
.fields-container{
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
}
.form__field{
  width: 65%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /*pedding : 3rem;*/
  height: 5rem;
  margin-bottom: 2rem;
  background-color: #403e3e;
  border-radius: 0.8rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.26);
}
label{
  width: 6.8rem;
  font-size: 1.4rem;
  color: white;
}
input{
  background-color: #ccc;
  height: 3rem;
  width: 65%;
  border-radius: 0.4rem;
  border : none;
  text-align: center;
  caret-color: black;
}
input:focus{
  color: white;

  outline: none;
  background-color: #6c6a6a;
  border: 2px solid white;
}
.failed-authentication{
  font-size: 1.4rem;
  color: red;
  margin-bottom: 1rem;
}
.form__submit-btn{
  margin-bottom: 4rem;
}

</style>
