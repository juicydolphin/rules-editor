using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RulesEditor.DataContext;

namespace RulesEditor.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MathRulesController : ControllerBase
{
    [HttpPost("addition")]
    public async Task<IActionResult> Addition([FromBody] AdditionRule rule)
    {
        var result = rule.Number1 + rule.Number2;

        return Ok(result);
    }


    [HttpPost("subtraction")]
    public async Task<IActionResult> Subtraction([FromBody] SubtractionRule rule)
    {
        var result = rule.Number1 - rule.Number2;

        return Ok(result);
    }


    [HttpPost("multiplication")]
    public async Task<IActionResult> Multiplication([FromBody] MultiplicationRule rule)
    {
        var result = rule.Number1 * rule.Number2;

        return Ok(result);
    }


    [HttpPost("division")]
    public async Task<IActionResult> Division([FromBody] DivisionRule rule)
    {
        var result = rule.Number1 / rule.Number2;

        return Ok(result);
    }


    [HttpPost("max")]
    public async Task<IActionResult> Max([FromBody] MaxRule rule)
    {
        var result = rule.Numbers.Max();

        return Ok(result);
    }
    

    [HttpPost("min")]
    public async Task<IActionResult> Min([FromBody] MinRule rule)
    {
        var result = rule.Numbers.Min();

        return Ok(result);
    }
}