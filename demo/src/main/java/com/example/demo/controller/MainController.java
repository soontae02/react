package com.example.demo.controller; // 패키지명은 프로젝트에 맞게 수정

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class MainController {

    @GetMapping("/{pageName}.do")
    public String page(@PathVariable String pageName, Model model) {
        model.addAttribute("pageName", pageName);
        System.out.println("뷰이름:" + pageName);

        // src/main/resources/templates/view.html 파일을 찾아서 반환
        return "view";
    }
}