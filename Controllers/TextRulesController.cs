using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RulesEditor.DataContext;

namespace RulesEditor.Controllers;

[ApiController]
[Route("api/[controller]")]
public class TextRulesController : ControllerBase
{
    [HttpPost("substring")]
    public async Task<IActionResult> Substring([FromBody] SubstringRule rule)
    {
        var result = rule.OriginalString.Substring(rule.StartIndex, rule.Length);

        return Ok(result);
    }

    [HttpPost("format")]
    public async Task<IActionResult> Format([FromBody] FormatRule rule)
    {
        var result = string.Format(rule.FormatString, rule.Arguments);

        return Ok(result);
    }

    [HttpPost("tolower")]
    public async Task<IActionResult> ToLower([FromBody] ToLowerRule rule)
    {
        var result = rule.OriginalString.ToLower();

        return Ok(result);
    }

    [HttpPost("toupper")]
    public async Task<IActionResult> ToUpper([FromBody] ToUpperRule rule)
    {
        var result = rule.OriginalString.ToUpper();

        return Ok(result);
    }

    [HttpPost("replace")]
    public async Task<IActionResult> Replace([FromBody] ReplaceRule rule)
    {
        var result = rule.OriginalString.Replace(rule.OldValue, rule.NewValue);

        return Ok(result);
    }
}