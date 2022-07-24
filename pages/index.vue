<script>
export default {
  // 1.在模板渲染成 html 前調用
  // asyncData(context){
  //   context.$demofn.log("ansyncData");
  //   console.log(context.$axios);
  // },
  // 1.用{}解構方式，這樣就不用打 context，直接使用 $axios 和 $demofn
  // 2.打 api 時，如有使用 asyncData 要改成 async await 寫法，等資料傳進來再去做後面動作
   async asyncData({$axios,$demofn}){
    const res = await $axios.get("https://vue-lessons-api.herokuapp.com/photo/list");
    console.log(res.data);
  },
  // 1.在模板渲染成 html 後調用
  mounted() {
    this.$demofn.log("today is 20220719");
    console.log(this);
  },
};
</script>

<template>
  <Tutorial />
</template>
