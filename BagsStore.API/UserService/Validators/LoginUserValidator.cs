using AuthData.DTO;
using FluentValidation;

namespace UserService.Validators;

public class LoginUserValidator : AbstractValidator<LoginDTO>
{
    public LoginUserValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Username is required")
            .Matches(RegexPatterns.emailPattern)
            .When(x => x.Email != null);

        RuleFor(x => x.Password)
            .NotEmpty()
            .WithMessage("Password is required")
            .Matches(RegexPatterns.passwordPattern)
            .When(x => x.Password != null);
    }
}