using AuthData.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace UserService.Interfaces;



public interface IAdminRequestService
{
    public Task<LoginResponseDTO> CheckRequestAsync(AccessInfoDTO accessInfo, HttpContext context);
}