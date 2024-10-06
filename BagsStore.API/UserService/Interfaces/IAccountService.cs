namespace UserService.Interfaces;
using AuthData.DTO;


public interface IAccountService
{
    public Task ResetPaswordAsync(ResetPasswordDTO resetRequest, string token);
    public Task ConfirmEmailAsync(string token);
}