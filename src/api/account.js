import service from "../utils/request";
/**
 * 登录接口
 */
export function LoginInterface(data){
    console.log("data:" + data.userCode);
    return service.request({
        url:"/platform/account/user/login/",
        method:"POST",
        responseType: 'json',
        headers: {
            //'token': localStorage.getItem("token"),
            'Content-Type':'application/json; charset=UTF-8'
        },
        //params: data,//get方法
        data:JSON.stringify(data),//post请求
    })
}