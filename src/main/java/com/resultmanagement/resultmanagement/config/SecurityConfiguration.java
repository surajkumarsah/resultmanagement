//package com.resultmanagement.resultmanagement.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
//
//import com.resultmanagement.resultmanagement.services.UserService;
//import com.resultmanagement.resultmanagement.services.UserServiceImpl;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfiguration  {
//
//
//    @Autowired
//    private UserService userService;
//
//    // configure SecurityFilterChain
//    @Bean
//    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//    	http
//    	.authorizeRequests().requestMatchers("/").permitAll()
////        .requestMatchers("/").hasAnyAuthority("USER", "CREATOR", "EDITOR", "ADMIN")
////        .requestMatchers("/new").hasAnyAuthority("ADMIN", "CREATOR")
////        .requestMatchers("/edit/**").hasAnyAuthority("ADMIN", "EDITOR")
////        .requestMatchers("/delete/**").hasAuthority("ADMIN")
////        .anyRequest().authenticated()
////        .and()
////        .formLogin().disable()
////        .logout().permitAll()
////        .and()
////        .exceptionHandling().accessDeniedPage("/403")
//        ;
//    	return http.build();
//    }
////    
////    @Bean
////    public UserDetailsService userDetailsService() {
////        return new UserServiceImpl();
////    }
////     
////    
////    @Bean
////    public AuthenticationSuccessHandler sewistAuthenticationSuccessHandler() {
////        return new SewistUrlAuthenticationSuccessHandler();
////    }
////
////
////    @Bean
////    public BCryptPasswordEncoder passwordEncoder() {
////        return new BCryptPasswordEncoder();
////    }
////
////    @Bean
////    public DaoAuthenticationProvider authenticationProvider() {
////        DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
////        auth.setUserDetailsService(userService);
////        auth.setPasswordEncoder(passwordEncoder());
////        return auth;
////    }
//
//}