using Microsoft.AspNetCore.Mvc;
using Npgsql;
using RulesEditor;
using System;
using System.ComponentModel.DataAnnotations;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using RulesEditor.DataContext;

namespace RulesEditor.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly RulesEditorContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(RulesEditorContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register(UserRegistrationDto model)
        {
            // Проверяем, не занят ли указанный логин
            if (await _context.Users.AnyAsync(u => u.Username == model.Username) || await _context.Users.AnyAsync(u => u.Email == model.Email) )
            {
                return BadRequest("This username or email is already taken");
            }

            // Создаем нового пользователя
            var user = new User
            {
                Username = model.Username,
                Password = model.Password,
                Email = model.Email,

            };

            await _context.Users.AddAsync(user);
            await _context.SaveChangesAsync();

            // Создаем JWT-токен
            var token = GenerateJwtToken(user);

            return Ok(new
            {
                token
            });
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLoginDto model)
        {
            // Ищем пользователя по логину
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == model.Email);

            // Проверяем, совпадает ли пароль
            if (user == null || !(model.Password == user.Password))
            {
                return Unauthorized();
            }

            // Создаем JWT-токен
            var token = GenerateJwtToken(user);

            return Ok(new
            {
                token
            });
        }

        [Authorize]
        [HttpGet("protected")]
        public ActionResult Protected()
        {
            return Ok(new
            {
                message = "This is a protected endpoint"
            });
        }

        private string GenerateJwtToken(User user)
        {
            var claims = new[]
            {
                new Claim("_id", user.Id.ToString()),
                new Claim("username", user.Username),
                new Claim("email", user.Email),
                new Claim("role", "user")
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expires = DateTime.UtcNow.AddDays(7);

            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Issuer"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


    }
}