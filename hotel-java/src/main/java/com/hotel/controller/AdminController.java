package com.hotely5d.controller;

import com.baomidou.mybatisplus.plugins.Page;
import com.hotely5d.dao.AdminMapper;
import com.hotely5d.entity.Admin;
import com.hotely5d.entity.model.Result;
import com.hotely5d.entity.model.StatusCode;
import com.hotely5d.entity.query.LoginQuery;
import com.hotely5d.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminMapper adminMapper;


    /**
     * 获取分析数据
     * @return
     */
    @GetMapping("getAnalysis")
    public Map getAnalysis(){
        Map rtnMap = new HashMap();
        rtnMap.put("xsnum",adminMapper.countXs());
        rtnMap.put("jsnum",adminMapper.countJs());
        rtnMap.put("kcnum",adminMapper.countKc());
        rtnMap.put("zynum",adminMapper.countZy());
        rtnMap.put("xkph",adminMapper.xkph());
        rtnMap.put("xkphname",adminMapper.xkphname());
        rtnMap.put("kcfl",adminMapper.kcfl());
        return rtnMap;
    }


    /**
    * 根据条件分页查询
    * @param admin
    * @return
    */
    @GetMapping("search/{current}/{size}")
    public Result search(@PathVariable Integer current,@PathVariable Integer size ,Admin admin){
        Page<Admin> page = adminService.search(new Page<Admin>(current, size), admin);
        return new Result(true, StatusCode.OK,"查询成功",page);
    }

    /**
    * 新增
    * @param admin
    * @return
    */
    @PostMapping
    public Result add(@RequestBody Admin admin){
        adminService.add(admin);
        return new Result(true, StatusCode.OK,"新增成功");
    }

    /**
    * 修改
    * @param admin
    * @return
    */
    @PutMapping
    public Result modify(@RequestBody Admin admin){
        adminService.modify(admin);
        return new Result(true, StatusCode.OK,"修改成功");
    }

    /**
    * 根据id删除
    * @param id
    * @return
    */
    @DeleteMapping("{id}")
    public Result removeById(@PathVariable("id") Integer id){
        adminService.removeById(id);
        return new Result(true, StatusCode.OK,"删除成功");
    }

}