using AuthData.DTO;
using FluentValidation;

namespace UserService.Validators;

public class RegisterUserValidator : AbstractValidator<RegisterDTO>
{
    public RegisterUserValidator()
    {
        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Username is required")
            .Matches(RegexPatterns.emailPattern)
            .When(x => x.Email != null);

        RuleFor(x => x.Email)
            .NotEmpty()
            .WithMessage("Email is required")
            .EmailAddress()
            .WithMessage("Valid Email is required");

        RuleFor(x => x.Password)
            .NotEmpty()
            .WithMessage("Password is required")
            .Matches(RegexPatterns.passwordPattern)
            .NotEqual(x => x.Email)
            .When(x => x.Password != null);

        RuleFor(x => x.ConfirmPassword)
            .NotEmpty()
            .WithMessage("Confirm Password is required")
            .Equal(x => x.Password)
            .WithMessage("Password and Confirm Password must match");
    }
}