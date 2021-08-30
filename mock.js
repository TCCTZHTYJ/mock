//import axios from 'axios';
//axios.defaults.timeout = 5000;
//axios.defaults.baseURL ='';
//// request 拦截器
//axios.interceptors.request.use(
//  config => {
//    config.data = JSON.stringify(config.data);
//    config.headers = {
//      'Content-Type':'application/x-www-form-urlencoded'
//    }
//    return config;
//  },
//  error => {
//    return Promise.reject(err);
//  }
//);
//
////http response 拦截器
//axios.interceptors.response.use(
//  response => {
//    if(response.data.errCode ==2){
//      router.push({
//        path:"/login",
//        querry:{redirect:router.currentRoute.fullPath}//从哪个页面
//      })
//    }
//    return response;
//  },
//  error => {
//    return Promise.reject(error)
//  }
//)
//
////  封装get方法,返回promise对象
//export function get(url,params={}){
//  return new Promise((resolve,reject) => {
//    axios.get(url,{
//      params:params
//    })
//    .then(response => {
//      resolve(response.data);
//    })
//    .catch(err => {
//      reject(err)
//    })
//  })
//}
//// 封装post请求
//export function post(url,data = {}){
//  return new Promise((resolve,reject) => {
//    axios.post(url,data)
//         .then(response => {
//           resolve(response.data);
//         },err => {
//           reject(err)
//         })
//  })
//}
//// 封装getAwait方法,返回async方法
//export async function getAwait(url,params={}){
//  let res=await axios.get(url,{params:params})
//  res=res.data
//  return res
//}
//import Vue from 'vue'
//import Router from 'vue-router'
//import Login from '@/pages/login'
//import Home from '@/pages/home'
//
//Vue.use(Router)
//
//export default new Router({
//  routes: [
//    { path: '/', component: Home ,meta:{needLogin:true}},
//    { path: '/home', component: Home ,meta:{needLogin:true}},
//    { path: '/login', component: Login },
//  ]
//})
//import Vue from 'vue'
//import Router from 'vue-router'
//import Login from '@/pages/login'
//import Home from '@/pages/home'
//
//import Vue from 'vue';
//import { getLogin } from "../request/api.js";
//import router from '../router/index'
//Vue.use(Vuex);
//
//const state = {
//    ruleForm: {
//        user:'',
//        pwd:''
//    },
//   result:null,
//   title:''
//}
//const mutations={
//    setLogin(state,param){
//        state.result=param.result
//    },
//    setUser(state,n){
//        state.ruleForm.user=n
//    },
//    setPwd(state,n){
//        state.ruleForm.pwd=n
//    },
//}
//const actions={
//    getLogin(context){
//        getLogin().then(res => {
//            console.log(res.data);
//            context.commit('setLogin',{result:res.data})
//            let len = res.data.length;
//            let userNameArr = [];
//            let passWordArr = [];
//            let ses = window.sessionStorage;
//            for (var i = 0; i < len; i++) {
//              userNameArr.push(res.data[i].username);
//              passWordArr.push(res.data[i].password);
//            }
//            if (userNameArr.indexOf(state.ruleForm.user) === -1) {
//              alert("账号不存在！");
//            } else {
//              var index = userNameArr.indexOf(state.ruleForm.user);
//              if (passWordArr[index] === state.ruleForm.pwd) {
//                // 把token放在sessionStorage中
//                ses.setItem("data", res.data[index].token);
//                console.log(ses,'ses')
//                state.title=res.data[index].usertitle
//                //跳转到首页
//              } else {
//                alert("密码错误！");
//              }
//            }
//          });
//    },
//    loginOut(){
//        // 注销后 清除session信息 ，并返回登录页
//        window.sessionStorage.removeItem('data');
//        router.push('/login'); 
//    }
//}
//