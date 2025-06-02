package org.container.platform.migration.ui.security;

import org.container.platform.migration.ui.common.ConstantsUrl;
import org.container.platform.migration.ui.common.PropertyService;
import org.container.platform.migration.ui.security.handler.PortalOauth2FailureHandler;
import org.container.platform.migration.ui.security.handler.PortalOauth2SecurityFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfigurationSource;

/**
 * Security Config 클래스
 *
 * @author jjy
 * @version 1.0
 * @since 2025.03.19
 **/
@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
    @Autowired
    private CorsConfigurationSource corsConfigurationSource;

    @Autowired
    private PortalOauth2FailureHandler portalOauth2FailureHandler;

    @Autowired
    private PortalOauth2SecurityFilter portalOauth2SecurityFilter;

    @Autowired
    private PropertyService propertyService;

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return web -> {
            web.ignoring()
                .requestMatchers(
                        "/dist/**",
                        "/plugins/**",
                        "/css/**",
                        "/js/**",
                        "/font/**",
                        "/img/**",
                        "/error/**",
                        "/common/error/**",
                        ConstantsUrl.URI_CP_SESSION_OUT,
                        ConstantsUrl.URl_CP_INACTIVE,
                        "/actuator/**"
                );
        };
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)//Spring 애플리케이션에서 HTTP 요청의 보안 구성을 담당하는 HttpSecurity 개체를 구성하는 데 사용됩니다.
                .cors(customizer -> customizer.configurationSource(corsConfigurationSource))//Cross-Origin Resource Sharing: HTTP 헤더를 이용하여 웹 애플리케이션에 대한 자원을 다른 출처에서 접근할 수 있도록 권한을 부여하는 정책.
                .formLogin(form -> form.disable())//security에서 제공하는 Login 폼
                .authorizeHttpRequests(auth -> auth
                        .anyRequest().authenticated())//HTTP 요청에 대한 인가 설정
                .addFilterBefore(portalOauth2SecurityFilter, UsernamePasswordAuthenticationFilter.class)//사용자 정의 필터 추가
                .oauth2Login(oauth2 -> oauth2 //oauth2Login 설정
                        .loginPage(propertyService.getKeycloakOauth2LoginPath()).permitAll()// 사용자를 로그인 페이지로 리다이렉트
                        .defaultSuccessUrl("/cpmigui", true).permitAll()//로그인이 성공하면 사용자가 처음에 접근했던 페이지로 리다이렉트 시켜준다.
//                        .defaultSuccessUrl("/", true).permitAll()
                        .failureHandler(portalOauth2FailureHandler));// 로그인 실패시 발생하는 핸들러
        return http.build();
    }
}