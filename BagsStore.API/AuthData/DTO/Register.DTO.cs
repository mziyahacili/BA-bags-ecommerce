namespace AuthData.DTO;

public record RegisterDTO(
    string Email,
    string Password,
    string ConfirmPassword
);