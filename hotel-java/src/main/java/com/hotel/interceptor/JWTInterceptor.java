package com.hotely5d.interceptor;

import com.hotely5d.entity.model.Result;
import com.hotely5d.entity.model.StatusCode;
import com.hotely5d.utils.JWTUtils;
import com.auth0.jwt.exceptions.AlgorithmMismatchException;
import com.auth0.jwt.exceptions.SignatureVerificationException;
import com.auth0.jwt.exceptions.TokenExpiredException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.web.servlet.HandlerInterceptor;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

public class JWTInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        Result result = null;

        //获取请求头中的令牌
        String token = request.getHeader("Authorization");
       /* try {
            //验证令牌
            JWTUtils.verifyToken(token);

            //验证通过，放行请求
            return true;
        } catch (SignatureVerificationException e) {
            e.printStackTrace();
            result = new Result(StatusCode.TOKENERROR,false,"无效签名");
        }catch (TokenExpiredException e){
            e.printStackTrace();
            result = new Result(StatusCode.TOKENERROR,false,"token已过期");
        }catch (AlgorithmMismatchException e){
            e.printStackTrace();
            result = new Result(StatusCode.TOKENERROR,false,"token算法不一致");
        }catch (Exception e){
            e.printStackTrace();
            result = new Result(StatusCode.TOKENERROR,false,"token无效");
        }*/
        try {
            //验证令牌
            JWTUtils.verifyToken(token);
            //验证通过，放行请求
            return true;
        } catch (Exception e){
            e.printStackTrace();
            result = new Result(StatusCode.TOKENERROR,false,"未登录或登录已过期,请重新登录！");
        }
        //采用jackson方式将map转化为json 字符串
        String json = new ObjectMapper().writeValueAsString(result);
        response.setContentType("application/json;charset=UTF-8");
        response.getWriter().println(json);
        return false;
    }
}
