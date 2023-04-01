using Microsoft.AspNetCore.Mvc;
using Npgsql;
using RulesEditor;
using System;
using System.ComponentModel.DataAnnotations;

namespace RulesEditor.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly string _connectionString;

        public UserController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        [HttpPost]
        public IActionResult Register(User user)
        {
            // Проверка валидации данных пользователя
            var validationContext = new ValidationContext(user, serviceProvider: null, items: null);
            var validationResults = new List<ValidationResult>();
            var isValid = Validator.TryValidateObject(user, validationContext, validationResults, true);

            if (!isValid)
            {
                return BadRequest(validationResults);
            }

            using (var connection = new NpgsqlConnection(_connectionString))
            {
                try
                {
                    connection.Open();

                    var command = new NpgsqlCommand("INSERT INTO users(username, password, email) VALUES (@username, @password, @email)");

                    command.Parameters.AddWithValue("@username", user.Username);
                    command.Parameters.AddWithValue("@password", user.Password);
                    command.Parameters.AddWithValue("@email", user.Email);

                    command.ExecuteNonQuery();

                    return Ok("User registered successfully.");
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}