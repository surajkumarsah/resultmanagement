//package com.resultmanagement.resultmanagement.config;
//
//import java.io.IOException;
//
//import org.apache.commons.logging.Log;
//import org.apache.commons.logging.LogFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.Authentication;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
//import java.util.Collection;
//
//
//import com.resultmanagement.resultmanagement.entity.Users;
//import com.resultmanagement.resultmanagement.services.UserService;
//
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import jakarta.servlet.http.HttpSession;
//
//import org.springframework.security.web.DefaultRedirectStrategy;
//import org.springframework.security.web.RedirectStrategy;
//import org.springframework.security.web.WebAttributes;
//
//
//public class SewistUrlAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
//
//	
//	protected Log logger = LogFactory.getLog(this.getClass());
//    @Autowired
//    UserService userService;
//    private RedirectStrategy redirectStrategy = new DefaultRedirectStrategy();
//
//
//    private void clearAuthenticationAttributes(HttpServletRequest request) {
//        HttpSession session = request.getSession(false);
//        if (session == null) {
//            return;
//        }
//        session.removeAttribute(WebAttributes.AUTHENTICATION_EXCEPTION);
//    }
//
//    protected RedirectStrategy getRedirectStrategy() {
//        return redirectStrategy;
//    }
//
//    public void setRedirectStrategy(RedirectStrategy redirectStrategy) {
//        this.redirectStrategy = redirectStrategy;
//    }
//
//    private void handle(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
//        String targetUrl = determineTargetUrl(authentication);
//        if (response.isCommitted()) {
//            logger.debug("Response has already been commited. Unable to redirect to" + targetUrl);
//        }
//        redirectStrategy.sendRedirect(request, response, targetUrl);
//    }
//
//    private String determineTargetUrl(Authentication authentication) {
//        boolean isSuper_Admin = false;
//        boolean isAdmin = false;
//        boolean isTeacher = false;
//        boolean isPrincipal = false;
//        boolean isClass_Teacher = false;
//        boolean isStudent = false;
//
//        Users users = userService.findByEmail(authentication.getName());
//        String firstName = users.getUserName();
//        Collection<? extends GrantedAuthority> authorities = authentication.getAuthorities();
//        for (GrantedAuthority grantedAuthority : authorities) {
//            if (grantedAuthority.getAuthority().equalsIgnoreCase("Super_Admin")) {
//                isSuper_Admin = true;
//                break;
//
//            } else if (grantedAuthority.getAuthority().equalsIgnoreCase("Admin")) {
//                isAdmin = true;
//                break;
//            } else if (grantedAuthority.getAuthority().equalsIgnoreCase("teacher")) {
//            	isTeacher = true;
//            } else if (grantedAuthority.getAuthority().equalsIgnoreCase("principal")) {
//            	isPrincipal = true;
//            } else if (grantedAuthority.getAuthority().equalsIgnoreCase("classTeacher")) {
//                isClass_Teacher = true;
//            }
//        }
//        if (isSuper_Admin) {
//            return "/home";
//        } else if (isAdmin) {
//            return "/home";
//        } else if (isPrincipal) {
//            return "/home";
//        } else if (isClass_Teacher) {
//            return "/home";
//        } else {
//            return "/login";
//        }
//    }
//	
//	@Override
//	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
//			Authentication authentication) throws IOException, ServletException {
//		response.sendRedirect("/index.html");
//		
//	}
//	
//	
//
//}
