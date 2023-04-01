using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace RulesEditor;

public partial class User
{
    public int Id { get; set; }

    [Required(ErrorMessage = "The username field is required.")]
    [StringLength(50, ErrorMessage = "The username must be between {2} and {1} characters long.", MinimumLength = 4)]
    public string Username { get; set; }

    [Required(ErrorMessage = "The password field is required.")]
    [StringLength(50, ErrorMessage = "The password must be between {2} and {1} characters long.", MinimumLength = 6)]
    public string Password { get; set; }

    [Required(ErrorMessage = "The email field is required.")]
    [EmailAddress(ErrorMessage = "The email address is not valid.")]
    public string Email { get; set; }
}
