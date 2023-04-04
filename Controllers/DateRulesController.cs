using Microsoft.AspNetCore.Mvc;

namespace RulesEditor.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DateRulesController: ControllerBase
{
    [HttpPost("addDays")]
    public async Task<IActionResult> AddDays([FromBody] DateRule rule)
    {
        var newDate = rule.Date.AddDays(rule.Days);

        return Ok(newDate);
    }
    [HttpPost("compareDates")]
    public async Task<IActionResult> CompareDates([FromBody] DateComparisonRule rule)
    {
        var result = rule.Date1.CompareTo(rule.Date2);

        if (result == 0) 
        {
            return Ok("Dates are equal");
        }
        else if (result < 0)
        {
            return Ok("Date1 is earlier than Date2");
        }
        else 
        {
            return Ok("Date1 is later than Date2");
        }
    }
    [HttpPost("daysBetweenDates")]
    public async Task<IActionResult> DaysBetweenDates([FromBody] DateComparisonRule rule)
    {
        var days = (rule.Date2 - rule.Date1).TotalDays;

        return Ok(days);
    }
    [HttpPost("isLeapYear")]
    public async Task<IActionResult> IsLeapYear([FromBody] IntRule rule)
    {
        var isLeapYear = DateTime.IsLeapYear(rule.Value);

        return Ok(isLeapYear);
    }
    [HttpPost("getWeekday")]
    public async Task<IActionResult> GetWeekday([FromBody] DateRule rule)
    {
        var weekday = rule.Date.DayOfWeek.ToString();

        return Ok(weekday);
    }
}