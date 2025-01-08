package com.hotely5d.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTCreator;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import javax.servlet.http.HttpServletRequest;
import java.util.Calendar;
import java.util.Map;

public class JWTUtils {
    //参考：https://www.cnblogs.com/spring8889/p/15775134.html
    //签名密钥
    private static final String SIGNKEY = "!@#$%QWER123456121234521";//这个随便写都可以

    /**
     * 生成token
     * header.payload.signature
     */
    public static String getToken(Map<String,String> map){
        Calendar instance = Calendar.getInstance();
        instance.add(Calendar.DATE,15);//token 默认15天有效

        //创建JWTBuilder
        JWTCreator.Builder builder = JWT.create();

        //Payload配置
        map.forEach((k,v)->{
            builder.withClaim(k, v);
        });

        String token = builder.withExpiresAt(instance.getTime())   //过期时间设置
                .sign(Algorithm.HMAC256(SIGNKEY));//签名
        return token;
    }

    /**
     * 验证 token 合法性
     */
    public static DecodedJWT verifyToken(String token){
        //验证合法性
        DecodedJWT verify = JWT.require(Algorithm.HMAC256(SIGNKEY)).build().verify(token);
        return verify;
    }

    /**
     * 从token中获取用户id
     * @param request
     * @return
     */
    public static Long getUserId(HttpServletRequest request){
        String token = request.getHeader("Authorization");
        DecodedJWT verify = JWTUtils.verifyToken(token);
        Long id = verify.getClaim("id").as(Long.class);//从token中获取用户id
        return id;
    }
    /**
     * 从token中获取用户角色
     * @param request
     * @return
     */
    public static Long getRole(HttpServletRequest request) {
        String token = request.getHeader("Authorization");
        DecodedJWT verify = JWTUtils.verifyToken(token);
        Long role = verify.getClaim("role").as(Long.class);
        return role;
    }
}
