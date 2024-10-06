using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using AuthData.Contexts;
using AuthData.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using UserService.Exceptions;
using UserService.Interfaces;



namespace UserService.Classes;

public class AdminRequestService : IAdminRequestService
{
    private readonly AuthContext _context;

    public AdminRequestService(AuthContext context)
    {
        _context = context;
    }

    public async Task<LoginResponseDTO> CheckRequestAsync(AccessInfoDTO accessInfo, HttpContext context)
    {
        var host = context.Request.Headers["Referer"].ToString();

        if (host.Contains("localhost:3001") && accessInfo.role != "AppAdmin")
        {
            await context.Response.WriteAsync("Access denied: Admins only.");
            throw new MyAuthException(AuthErrorTypes.InvalidCredentials, "Access denied: Admins only.");
        }

        return new LoginResponseDTO(accessInfo.email, accessInfo.role, accessInfo.accessToken,
            accessInfo.refreshToken);
    }
}