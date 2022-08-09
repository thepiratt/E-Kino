using System.ComponentModel.DataAnnotations;

namespace KinoAPI.ViewModels
{
    public class UserCredentials
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
