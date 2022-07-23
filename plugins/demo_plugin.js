export default ({app}, inject)=>{
  inject("demofn", {
    log(val){
      console.log("demoTest=>",val);
    }
  });
};