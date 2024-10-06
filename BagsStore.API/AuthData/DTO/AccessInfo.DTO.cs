namespace AuthData.DTO;

public record AccessInfo_DTO(
    string email,
    string accessToken,
    string refreshToken,
    string role,
    DateTime refreshTokenExpireTime
);