<template>
  <router-view/>
</template>
<script>
export default {
}
</script>
<style>
body{
  padding: 0;
  margin: 0;
  background: url(../src/assets/background.webp);
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.register input, .login input, .addCar input {
    width: 300px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid red;
}
.addCar select  {
    width: 324px;
    height: 30px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid red;
}
.register button, .login button, .addCar button {
    width: 320px;
    height: 40px;
    border: 0.5px solid green;
    background-color: skyblue;
    cursor: pointer;
    color: #fff;
}
</style>
