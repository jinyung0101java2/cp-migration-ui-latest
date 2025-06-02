package org.container.platform.migration.ui.intro;

import org.container.platform.migration.ui.common.RestTemplateService;
import org.container.platform.migration.ui.security.model.OAuthTokens;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

/**
 * Intro Controller 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 */
@Controller
public class IntroController {

    private final RestTemplateService restTemplateService;

    public IntroController(RestTemplateService restTemplateService) {
        this.restTemplateService = restTemplateService;
    }

    /**
     * index 페이지 이동(Move Intro page)
     *
     * @return the view
     */
    @GetMapping(value = {"/"})
    public Object baseView(Model model) {
        OAuthTokens oAuthTokens = restTemplateService.getKeyCloakToken();
        model.addAttribute("accessToken", oAuthTokens.getAccessToken());
        model.addAttribute("userGuid", oAuthTokens.getUserId());

        return "index";
    }
}

