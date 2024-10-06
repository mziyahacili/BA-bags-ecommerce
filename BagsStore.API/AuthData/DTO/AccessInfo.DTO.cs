namespace AuthData.DTO;

public record AccessInfoDTO(
    string email,
    string accessToken,
    string refreshToken,
    string role,
    DateTime refreshTokenExpireTime
);