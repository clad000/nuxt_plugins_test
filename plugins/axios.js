export default function ({ $axios, redirect }) {
  $axios.onError(error => {
    if (error.response.status === 500) {
      // 重新導向指定頁面
      redirect('/sorry')
    }
  })
}