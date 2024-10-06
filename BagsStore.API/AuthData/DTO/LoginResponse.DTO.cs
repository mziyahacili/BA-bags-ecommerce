namespace AuthData.DTO;

public record LoginResponse_DTO(string email, string role, string accessToken, string refreshToken);