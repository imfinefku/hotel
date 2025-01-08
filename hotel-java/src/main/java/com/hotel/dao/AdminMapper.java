package com.hotely5d.dao;

import com.baomidou.mybatisplus.mapper.BaseMapper;
import org.springframework.stereotype.Repository;
import com.hotely5d.entity.Admin;

import java.util.List;
import java.util.Map;


@Repository
public interface AdminMapper extends BaseMapper<Admin>{

    int countXs();

    int countJs();

    int countKc();

    int countZy();

    List<Map> xkph();
    List<String> xkphname();
    List<Map> kcfl();
}