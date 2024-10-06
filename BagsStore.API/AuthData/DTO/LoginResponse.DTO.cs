namespace AuthData.DTO;

public record LoginResponseDTO(string email, string role, string accessToken, string refreshToken);