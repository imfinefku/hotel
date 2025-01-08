package com.hotely5d.entity;
import java.math.BigDecimal;
import java.util.Date;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.annotations.TableName;
import com.baomidou.mybatisplus.annotations.TableId;

/**
* Admin实体类
*/
@TableName("admin")
public class Admin {
    @TableId("id")
    private Integer id;// ID
	@TableField("username")
    private String username;// 账号
	@TableField("password")
    private String password;// 密码
	@TableField("name")
    private String name;// 姓名
	@TableField("gender")
    private Integer gender;// 性别

    public Admin() {
        super();
    }

    public  Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }
    public  String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
    public  String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
    public  String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
    public  Integer getGender() {
        return gender;
    }

    public void setGender(Integer gender) {
        this.gender = gender;
    }
}