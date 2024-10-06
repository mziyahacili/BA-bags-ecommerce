namespace UserService.Validators;

public class RegexPatterns
{
    public const string emailPattern = @"^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$";
    public const string passwordPattern = @"(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[_*&%$#@]).{8,}";
}
