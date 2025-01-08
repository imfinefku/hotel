package com.hotely5d.service;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.hotely5d.dao.AdminMapper;
import com.hotely5d.entity.Admin;
import com.hotely5d.entity.model.Result;
import com.hotely5d.entity.model.StatusCode;
import com.hotely5d.entity.query.LoginQuery;
import com.hotely5d.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class AdminService {

    @Autowired
    private AdminMapper adminMapper;

    public List<Admin> findAll() {
        return adminMapper.selectList(null);
    }

    public Page<Admin> search(Page<Admin> page,Admin admin) {
        return page.setRecords( adminMapper.selectPage(page,getEntityWrapper(admin)));
    }

    public List<Admin> search(Admin admin) {
        return adminMapper.selectList(getEntityWrapper(admin));
    }

    //条件构造器
    private EntityWrapper getEntityWrapper(Admin admin){
        EntityWrapper entityWrapper = new EntityWrapper();
        if(null != admin){
            if(!StringUtils.isEmpty(admin.getUsername())){
                entityWrapper.like("username",String.valueOf(admin.getUsername()));
            }
            if(!StringUtils.isEmpty(admin.getName())){
                entityWrapper.like("name",String.valueOf(admin.getName()));
            }
        }
        return entityWrapper;
    }

    public void modify(Admin admin) {
        adminMapper.updateById(admin);
    }

    public void add(Admin admin) {
        adminMapper.insert(admin);
    }

    public Admin findById(Integer id) {
        return adminMapper.selectById(id);
    }

    public void removeById(Integer id) {
        adminMapper.deleteById(id);
    }

    public Result login(LoginQuery query) {
        List<Admin> list = adminMapper.selectList(new EntityWrapper().eq("username", query.getUsername()).eq("password", query.getPassword()));
        if(list.size() == 0) return new Result(false, StatusCode.ERROR,"账号或密码错误");
        //返回Token
        Map<String,String> payloadMap = new HashMap();
        payloadMap.put("id",list.get(0).getId().toString());
        payloadMap.put("role","1");
        String token = JWTUtils.getToken(payloadMap);
        return new Result(true, StatusCode.OK,"登录成功",token);
    }
}
